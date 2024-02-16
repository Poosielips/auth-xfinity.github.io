import type { PrismCustomEventDetail } from "@prism-ui/core";
import { addHydrationListener } from "@cima/prism-utils/dist/hydration";

function isValidationEnabled(submitEvent: SubmitEvent) {
  return !submitEvent.submitter?.hasAttribute("formnovalidate"
  );
}

function showLoaderOnSubmitterIfNeeded(submitEvent: SubmitEvent) {
  const submitterComponent = submitEvent.submitter?.closest("prism-button");
  if (
    submitterComponent &&
    submitterComponent.getAttribute("display") !== "link"
  ) {
    submitterComponent.setAttribute("loading", "true");
  }
}

function isSecondarySubmitButton(elem: HTMLButtonElement) {
  return elem && elem.name === "_eventId" && elem.type === "button";
}

function formButtonEventHandler(event: CustomEvent<PrismCustomEventDetail>) {
  const form = (event.target as HTMLElement).closest("form") as HTMLFormElement;
  const target = event.detail.target as HTMLButtonElement;
  handleSecondaryButtonPress(form, target);
}

function handleSecondaryButtonPress(
  form: HTMLFormElement,
  elem: HTMLButtonElement
) {
  if (isSecondarySubmitButton(elem) && !form.isSubmitting) {
    const eventIdField = document.createElement("input");
    eventIdField.type = "hidden";
    eventIdField.name = "_eventId";
    eventIdField.value = elem.value;
    form.isSubmitting = true;
    form.appendChild(eventIdField);
    form.submit();
  }
}

function handleFormSubmit(event: SubmitEvent) {
  const form = event.target as HTMLFormElement;
  if (
    form.isSubmitting ||
    (isValidationEnabled(event) && !form.checkValidity())
  ) {
    event.preventDefault();
  } else {
    showLoaderOnSubmitterIfNeeded(event);
    form.isSubmitting = true;
  }
}

function addEventListeners() {
  const form = document.querySelector("main form") as
    | (HTMLFormElement & {
        isSubmitting: boolean;
      })
    | null;
  if (form) {
    form.addEventListener("submit", handleFormSubmit);
    form.addEventListener("prismPress", formButtonEventHandler);
    form.addEventListener("prismClick", formButtonEventHandler);
  }
}

export default (): void => {
  const prismLayout =
    document.querySelector<HTMLPrismLayoutElement>("prism-layout");
  if (prismLayout) {
    addHydrationListener(prismLayout, addEventListeners);
  } else {
    addEventListeners();
  }
};
