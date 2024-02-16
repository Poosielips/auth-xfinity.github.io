"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});

function addCookiePreferencesButtonToFooter(footer, buttonText) {
    const container = document.createElement("div");
    container.className = "cmp-revoke";
    const button = document.createElement("button");
    button.className = "cmp-revoke-consent";
    button.id = "cmp-revoke";
    button.innerHTML = buttonText;
    container.appendChild(button);
    footer.appendChild(container);
    return container;
}

function insertCookieConsentSdkScript(domainUuid, lang) {
    const script = document.createElement("script");
    script.src = "https://cdn-prod.securiti.ai/consent/cookie-consent-sdk.js";
    script.setAttribute("data-tenant-uuid", "4b9bbe2a-9c5d-4512-bb76-768a8ea32bc0");
    script.setAttribute("data-domain-uuid", domainUuid);
    script.setAttribute("data-backend-url", "https://app.securiti.ai");
    script.setAttribute("defer", "defer");
    script.onload = function() {
        var _a;
        (_a = window.initCmp) === null || _a === void 0 ? void 0 : _a.call(window);
        const consentBannerParams = {
            overrideBannerLanguage: {},
        };
        consentBannerParams.overrideBannerLanguage[window.location.href] = lang;
        window.setConsentBannerParams(consentBannerParams);
    };
    document.body.appendChild(script);
}

function default_1(domainUuid, buttonText, lang) {
    const footer = document.querySelector([
        "body>footer",
        "body>prism-layout [slot=footer]",
        "body>prism-layout>section>footer",
    ].join(","));
    if (footer) {
        addCookiePreferencesButtonToFooter(footer, buttonText);
        insertCookieConsentSdkScript(domainUuid, lang);
    }
}
exports.default = default_1;