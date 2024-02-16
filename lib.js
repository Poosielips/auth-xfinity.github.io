export function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

export function extend(obj, src) {
    Object.keys(src).forEach(function(key) {
        obj[key] = src[key];
    });

    return obj;
}

export let storage = {
    get: function(key) {
        var item;

        try {
            item = localStorage.getItem(key);

            return JSON.parse(item);
        } catch (error) {
            return item;
        }
    },
    set: function(key, value) {
        try {
            if (typeof value === 'object') {
                value = JSON.stringify(value);
            }

            return localStorage.setItem(key, value);
        } catch (error) {
            return false;
        }
    }
};

export function getLocationOrigin() {
    let loc = window.location;

    return `${loc.protocol}//${loc.hostname}` + (loc.port ? `:${loc.port}` : '');
}