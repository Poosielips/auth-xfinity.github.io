/*!
 * (@prism-ui/core) design-system - v7.11.3 - made with ❤️ in Philadelphia
 */
var i = function(i, t, o) {
    var r, n;
    void 0 === t && (t = 50), void 0 === o && (o = {});
    var e = null != (r = o.isImmediate) && r,
        v = o.maxWait,
        a = Date.now();

    function u() {
        if (void 0 !== v) {
            var i = Date.now() - a;
            if (i + t >= v) return v - i
        }
        return t
    }
    var d = function() {
        var t = [].slice.call(arguments),
            o = this,
            r = function() {
                n = void 0, a = Date.now(), e || i.apply(o, t)
            },
            v = e && void 0 === n;
        void 0 !== n && clearTimeout(n), n = setTimeout(r, u()), v && i.apply(o, t)
    };
    return d.cancel = function() {
        void 0 !== n && clearTimeout(n)
    }, d
};
export {
    i as d
}