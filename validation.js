"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.updateErrorMessage = exports.handleValueChange = void 0;

function getFieldWithValidityFromComponent(component) {
    return component.querySelector("input,select");
}

function handleValueChange(event) {
    var _a;
    let field = (_a = event === null || event === void 0 ? void 0 : event.detail) === null || _a === void 0 ? void 0 : _a.target;
    if (!field) {
        field = getFieldWithValidityFromComponent(event.target);
    }
    updateErrorMessage(event.target, field);
}
exports.handleValueChange = handleValueChange;

function updateErrorMessage(component, field) {
    const failedConstraintName = getFailedConstraintName(field);
    if (failedConstraintName) {
        const errorMessage = getErrorMessage(failedConstraintName, component, field);
        component.setAttribute("invalid-message", errorMessage);
    }
}
exports.updateErrorMessage = updateErrorMessage;

function getFailedConstraintName(field) {
    let constraintName;
    for (constraintName in field.validity) {
        if (field.validity[constraintName]) {
            return constraintName === "valid" ? undefined : constraintName;
        }
    }
}

function getErrorMessage(constraintName, component, field) {
    preserveOriginalInvalidMessage(component);
    let customMessageProp;
    if (constraintName === "customError") {
        customMessageProp =
            constraintName +
            field.validationMessage.charAt(0).toUpperCase() +
            field.validationMessage.substring(1);
    }
    const errorMessage = (customMessageProp && component.dataset[customMessageProp]) ||
        component.dataset[constraintName] ||
        component._originalInvalidMessage;
    if (typeof errorMessage !== "string") {
        console.warn(`No error message found for "${constraintName}" constraint for "${component.getAttribute("name")}" field.`);
    }
    return errorMessage || "";
}

function preserveOriginalInvalidMessage(component) {
    const originalInvalidMessage = component._originalInvalidMessage;
    if (originalInvalidMessage === undefined) {
        component._originalInvalidMessage =
            component.getAttribute("invalid-message");
    }
}