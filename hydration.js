"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.addHydrationListener = void 0;
const classObserveOptions = {
    attributes: true,
    attributeFilter: ["class"],
    childList: false,
    characterData: false,
};

function handleClassChange(listener, mutationsList, observer) {
    if (this.classList.contains("hydrated")) {
        observer.disconnect();
        listener(this);
    }
}

function addHydrationListener(component, listener) {
    const observer = new MutationObserver(handleClassChange.bind(component, listener));
    observer.observe(component, classObserveOptions);
}
exports.addHydrationListener = addHydrationListener;