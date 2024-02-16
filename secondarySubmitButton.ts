const secondarySubmitButtonSelector =
  "prism-button[name=_submit]:not([type=submit],[type=reset])";

function initiateSecondarySubmit(event: Event): void {
  const target: HTMLButtonElement = (<CustomEvent>event).detail.target;
  const submitter = insertHiddenSecondarySubmitter(target);
  submitter.click();
}

function insertHiddenSecondarySubmitter(
  button: HTMLButtonElement
): HTMLButtonElement {
  const { name, value } = extractSecondarySubmitNameValue(button);
  const submitter = document.createElement("button");
  submitter.type = "submit";
  submitter.hidden = true;
  submitter.formNoValidate = button.formNoValidate;
  submitter.name = name;
  submitter.value = value;
  button.parentElement?.insertBefore(submitter, button);
  return submitter;
}

function extractSecondarySubmitNameValue(button: HTMLButtonElement): {
  name: string;
  value: string;
} {
  const extracted = {
    name: "",
    value: "",
  };
  const separatorIndex = button.value.indexOf("=");
  if (separatorIndex === -1) {
    extracted.name = button.value;
  } else {
    extracted.name = button.value.substring(0, separatorIndex);
    extracted.value = button.value.substring(separatorIndex + 1);
  }
  return extracted;
}

export default function init(): void {
  const secondarySubmitButtons = document.querySelectorAll(
    secondarySubmitButtonSelector
  );
  secondarySubmitButtons.forEach((button) => {
    button.addEventListener("prismPress", initiateSecondarySubmit);
  });
}
