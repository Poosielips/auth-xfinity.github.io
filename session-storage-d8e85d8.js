function t() {
    if (void 0 === sessionStorage.initialRequestWithParams) {
        const t = window.location.href;
        sessionStorage.setItem("initialRequestWithParams", t)
    }
}

function i(t) {
    const i = document.getElementById(t);
    if (!i) throw new Error("No button found with id=".concat(t));
    i.setAttribute("href", sessionStorage.initialRequestWithParams)
}
export {
    t as persistInitialRequestWithParams, i as updateButtonHrefWithParameters
};
//# sourceMappingURL=session-storage.js.map