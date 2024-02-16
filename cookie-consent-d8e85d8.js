var e = {};
Object.defineProperty(e, "__esModule", {
    value: !0
});
var t = e.default = function(e, t, n) {
    const o = document.querySelector(["body>footer", "body>prism-layout [slot=footer]", "body>prism-layout>section>footer"].join(","));
    o && (function(e, t) {
        const n = document.createElement("div");
        n.className = "cmp-revoke";
        const o = document.createElement("button");
        o.className = "cmp-revoke-consent", o.id = "cmp-revoke", o.innerHTML = t, n.appendChild(o), e.appendChild(n)
    }(o, t), function(e, t) {
        const n = document.createElement("script");
        n.src = "https://cdn-prod.securiti.ai/consent/cookie-consent-sdk.js", n.setAttribute("data-tenant-uuid", "4b9bbe2a-9c5d-4512-bb76-768a8ea32bc0"), n.setAttribute("data-domain-uuid", e), n.setAttribute("data-backend-url", "https://app.securiti.ai"), n.setAttribute("defer", "defer"), n.onload = function() {
            var e;
            null === (e = window.initCmp) || void 0 === e || e.call(window);
            const n = {
                overrideBannerLanguage: {}
            };
            n.overrideBannerLanguage[window.location.href] = t, window.setConsentBannerParams(n)
        }, document.body.appendChild(n)
    }(e, n))
};
export {
    t as
    default
};
//# sourceMappingURL=cookie-consent.js.map