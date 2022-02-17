const emailInput = document.querySelector("[id='username']");
const passInput = document.querySelector("[id='password']");
const signInButton = document.querySelector(
  ".login__form_action_container button"
);

emailInput.value = myemail; // deixar via cli
passInput.value = mypass; // deixar via cli
signInButton.click();
