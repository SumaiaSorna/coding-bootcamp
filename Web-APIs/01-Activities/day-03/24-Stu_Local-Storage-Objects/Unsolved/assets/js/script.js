var firstNameInput = document.querySelector("#first-name");
var lastNameInput = document.querySelector("#last-name");
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");

signUpButton.addEventListener("click", function (event) {
  event.preventDefault();

  // TODO: Create user object from submission
  const user = {
    firstName: "firstNameInput",
    lastName: "lastNameInput",
    email: "emailInput",
    password: "passwordInput",
  };

  firstNameInput.value;
  console.log(firstNameInput.value);
  console.log(JSON.stringify(user));
  //
  // TODO: Set new submission to local storage
});
