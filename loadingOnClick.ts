function startLoadingAnimationOnButtonElement(e: Event) {
  const prismButton = e.target as HTMLPrismButtonElement;
  prismButton.setAttribute("loading", "true");
}

export default (): void => {
  const prismButtons = document.querySelectorAll<HTMLElement>(
    "prism-button[data-loader]"
  );
  prismButtons.forEach((button: HTMLElement) => {
    button.addEventListener("prismPress", startLoadingAnimationOnButtonElement);
  });
};
