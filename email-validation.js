const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordCheck = document.getElementById("passwordCheck");
const btn = document.getElementById("bttn");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  //get values from the input
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const passwordCheckTrim = passwordCheck.value.trim();

  if (usernameValue === "") {
    //show error
    //add error class
    setErrorFor(username, "Username can not be blank");
  } else {
    //add success class
    setSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email can not be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Your email is not valid");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "Password can not be blank");
  }
  // else if (passwordValue.length <= 6) {
  //   setErrorFor(password, "Your password should be min 6 character");
  // }
  else {
    //add success class
    setSuccessFor(password);
  }

  if (passwordCheckTrim === "") {
    setErrorFor(passwordCheck, "Password can not be blank");
  } else if (passwordCheckTrim !== passwordValue) {
    setErrorFor(passwordCheck, "Passwords do not match");
  } else {
    //add success class
    setSuccessFor(passwordCheck);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement; //form control
  const small = formControl.querySelector("small");

  //add error message inside small
  small.innerText = message;
  //add error class
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
