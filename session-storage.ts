export function persistInitialRequestWithParams(): void {
  if (typeof sessionStorage["initialRequestWithParams"] === "undefined") {
    const href = window.location.href;
    sessionStorage.setItem("initialRequestWithParams", href);
  }
}

export function updateButtonHrefWithParameters(buttonId: string): void {
  const button = document.getElementById(buttonId);
  if (button) {
    button.setAttribute("href", sessionStorage["initialRequestWithParams"]);
  } else {
    throw new Error(`No button found with id=${buttonId}`);
  }
}
