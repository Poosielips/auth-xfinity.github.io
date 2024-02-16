var orcLoaded = false;
var orcReloaded = false;
var header;
var orcFrame;
var handlers;
var polarisOrigin;

function isReferredByAuthEndpoint() {
    return /(oauth|login)\.(comcast|xfinity)\.(com|net)\/(oauth|login)(\/authorize)?/.test(document.referrer);
}

function getConfig() {
    let config = [
        'autoAuth',
        'clientId',
        'disableClickTracking',
        'enableAccountSelector',
        'enableNotifications',
        'isAuthed',
        'passiveReload'
    ].reduce((obj, p) => {
        obj[p] = header[p];

        return obj;
    }, {});

    config.passiveReload = orcReloaded;

    return config;
}

function processMessage(data) {
    if (typeof handlers[data.name] === 'function') {
        handlers[data.name](data.data);
    }
}

export function receiveMessage(event) {
    fromPolaris(event) && processMessage(event.data);
}

function fromPolaris(event) {
    var origin = event.origin || event.originalEvent.origin;

    return /polaris(\.staging)?(\.qa)?\.xfinity\.com|local\.xfinity\.com|localhost(:\d{4})/.test(origin);
}

function isCustomEvent(item) {
    return item && typeof item === 'object' &&
        item.constructor.toString().indexOf('CustomEvent') >= 0;
}

export function init(options) {
    ({
        header,
        orcFrame,
        polarisOrigin
    } = options);
}

export function sendMessage(name, data) {
    if (!orcLoaded) {
        return;
    }

    if (isCustomEvent(data)) {
        data = data.detail;
    }

    orcFrame.contentWindow.postMessage({
        name: name,
        data: data
    }, polarisOrigin);
}

handlers = {
    'orc-authed': function() {
        header.orcAuthed = true;
    },
    'orc-loaded': function() {
        orcReloaded = orcLoaded;
        orcLoaded = true;
        if (isReferredByAuthEndpoint()) {
            sendMessage('polaris-refresh-token');
        }
        sendMessage('polaris-config', getConfig());
    },

    'orc-passive': function(data) {
        header.orcPassive = data;
    },

    'orc-ping': function() {
        sendMessage('polaris-ping-receipt', {
            reciept: true
        });
    },

    'orc-communication-established': function() {
        header.orcEnabled = true;
    },

    'orc-set': function(data) {
        var pluckId;
        var oldIds;
        var newIds;

        const overridableKeys = [
            'customerType',
            'state',
            'toasts',
        ];

        if (header[data.key] && !overridableKeys.includes(data.key)) {
            // dont override values, let client have final say
            return;
        }

        // If the new toasts are the same as the old ones then don't set the value
        if (data.key === 'toasts' && header.toasts && header.toasts.length === data.value.length) {
            pluckId = function(x) {
                return x.id;
            };
            oldIds = header.toasts.map(pluckId);
            newIds = data.value.map(pluckId);

            if (newIds.every(function(id) {
                    return oldIds.indexOf(id) > -1;
                })) {
                return;
            }
        }

        if (data.key === 'auth-hide') {
            header.setAttribute('auth-hide', '');
        }

        header[data.key] = data.value;
    },

    'orc-set-attribute': function(data) {
        header.setAttribute(data.key, data.value);
    },

    'orc-set-data': function(data) {
        var customEventInit;

        header.data = header.data || {};
        header.data.polaris = header.data.polaris || {};
        header.data.polaris[data.key] = data.value;

        customEventInit = {
            name: data.key,
            detail: {
                type: data.key,
                response: data.value
            }
        };

        if (!header.orcPassive || orcReloaded || header.orcAuthed) {
            // eslint-disable-next-line max-len
            window.dispatchEvent(new CustomEvent('polaris-data-changed', customEventInit), {
                bubbles: true
            });
        }
    },
    'orc-auth-cleared': function() {
        header.fire('auth-cleared');
    }
};