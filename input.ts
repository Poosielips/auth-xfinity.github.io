import "./input.pcss";
import { handleValueChange } from "@cima/prism-utils/dist/validation";

const prismComponentNamesToHandle = [
  "prism-input-text",
  "prism-select",
  "prism-checkbox",
];

export default (): void => {
  document.addEventListener("prismInvalid", handleEvent);
  document.addEventListener("prismChange", handleEvent);
};

function handleEvent(event: Event) {
  const eventTarget = event.target as HTMLElement | null;
  if (
    eventTarget &&
    prismComponentNamesToHandle.includes(
      (eventTarget as HTMLElement).nodeName.toLowerCase()
    )
  ) {
    handleValueChange(event as CustomEvent);
  }
}
