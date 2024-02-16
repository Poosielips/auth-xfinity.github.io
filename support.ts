function createUserVerifyingPlatformAuthenticatorAvailableField(
  isAvailable: boolean
) {
  const field = document.createElement("input");
  field.type = "hidden";
  field.name = "userVerifyingPlatformAuthenticatorAvailable";
  field.value = isAvailable.toString();
  return field;
}

async function isUserVerifyingPlatformAuthenticatorAvailable() {
  return (
    !!window.PublicKeyCredential &&
    (await window.PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable())
  );
}

async function addUserVerifyingPlatformAuthenticatorAvailableToSigninForm(): Promise<void> {
  const form = document.querySelector("form[name=signin]");
  if (form) {
    const isAvailable = await isUserVerifyingPlatformAuthenticatorAvailable();
    const input =
      createUserVerifyingPlatformAuthenticatorAvailableField(isAvailable);
    form.appendChild(input);
  }
}

export default addUserVerifyingPlatformAuthenticatorAvailableToSigninForm;
