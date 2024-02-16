import * as orc from './orc-handlers.js';

var polarisOrigin = 'POLARIS_ORIGIN';
var polarisVersion = 'POLARIS_VERSION';
var win = window;

function loadIframe() {
    var iframe = win.document.createElement('iframe');

    iframe.id = 'polarisIframe';

    /*
    Add the polarisVersion as a query parameter here for cache busting to keep the orchestration iframe 
    in sync with polaris.js. We want to make sure we always get the latest orc.html when there's a new
    Polaris version in case there are any breaking changes.
  
    During the build process, the Polaris version will be injected into this file by replacing 'POLARIS_VERSION' with
    the actual version. When that version is incremented, the URL with the updated query parameter will be seen
    as a new request by the browser and the latest orc.html will be fetched. 
    */
    iframe.src = polarisOrigin + '/globalnav/orc.html?domain=' + win.document.location.host + '&v=' + polarisVersion;
    iframe.style.display = 'none';
    win.document.body.appendChild(iframe);

    return iframe;
}

function trackAttributes(header) {
    let polarisTracker = new Image();
    let polarisAttributes = Array.prototype.slice.call(header.attributes);
    let xcAttributes = polarisAttributes.map((val) => {
        if (/first-name|user-name|has-email|state/.test(val.name)) {
            val.value = 'SET BY CLIENT'; // override some user-specific attributes, but still track that they are set
        }

        return {
            key: val.name,
            value: val.value || undefined
        };
    });
    let xcHeaderTrackingString;
    let xcVal;

    xcAttributes.push({
        key: 'host',
        value: win.document.location.host
    });
    xcAttributes.push({
        key: 'pathname',
        value: win.document.location.pathname
    });
    xcHeaderTrackingString = encodeURIComponent(Object.keys(xcAttributes).map(function(xcAttribute) {
        xcVal = xcAttributes[xcAttribute].value ? '=' + encodeURIComponent(xcAttributes[xcAttribute].value) : '=boolean';

        return xcAttributes[xcAttribute].key + xcVal;
    }).join('&'));
    polarisTracker.src = polarisOrigin + '/images/polaris.gif?' + xcHeaderTrackingString;
}

function onload() {
    var mapping = {
        'add-notification': 'polaris-notify',
        'authed-changed': 'polaris-authed',
        'clear-auth': 'polaris-clear-auth',
        'get-linked-accounts': 'polaris-get-linked-accounts',
        'get-loyalty': 'polaris-get-loyalty',
        'get-person': 'polaris-get-person',
        'header-action-clicked': 'polaris-action-dismissed',
        'header-close-clicked': 'polaris-close-dismissed',
        'polaris-trackable-clicked': 'polaris-click',
        'signout-clicked': 'polaris-signout',
        'toast-action-clicked': 'polaris-action-dismissed',
        'toast-close-clicked': 'polaris-close-dismissed'
    };
    var header = win.document.querySelector('xc-header');
    var td = new Date();

    if ((td.getMinutes() === 0) && (td.getSeconds() === 0)) {
        /* log polaris attribute usage only the first second of each hour to limit logs */
        trackAttributes(header);
    }

    if (/polaris=off/.test(win.location.hash)) {
        header.style.display = 'none';

        return;
    }

    Object.keys(mapping).forEach(key => {
        header.addEventListener(key, orc.sendMessage.bind(this, mapping[key]));
    });

    if (!header.disableController) {
        orc.init({
            header,
            orcFrame: loadIframe(),
            polarisOrigin
        });
    }
}

export default function init(w) {
    win = w || window;

    win.document.addEventListener('XCHeaderLoaded', onload);
    win.addEventListener('load', function() {
        // Fix race condition with polyfill by adding new element to force other elements to render
        customElements.define('xc-blank-element', class extends HTMLElement {});
    });

    win.addEventListener('message', orc.receiveMessage, false);
}
init(window);