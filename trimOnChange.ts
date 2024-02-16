export default (): void => {
  const prismInputs = document.querySelectorAll<HTMLInputElement>(
    "prism-input-text[data-trim-on-blur]"
  );

  prismInputs.forEach((input: HTMLInputElement) => {
    input.addEventListener("prismChange", (e) => {
      const prismInput = e.target as HTMLPrismInputTextElement;
      prismInput.value = (prismInput.value as string).trim();
    });
  });
};
