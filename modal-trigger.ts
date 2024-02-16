function openModalOnClick(e: Event) {
  const targetId = (<HTMLElement>e.target).dataset.idRef as string;
  const modal = document.getElementById(targetId);
  modal?.setAttribute("open", "true");
}

export default (): void => {
  const triggers = document.querySelectorAll(
    "button[data-id-ref],prism-button[data-id-ref]"
  );
  triggers.forEach((trigger) => {
    trigger.localName == "prism-button"
      ? trigger.addEventListener("prismPress", openModalOnClick)
      : trigger.addEventListener("click", openModalOnClick);
  });
};
