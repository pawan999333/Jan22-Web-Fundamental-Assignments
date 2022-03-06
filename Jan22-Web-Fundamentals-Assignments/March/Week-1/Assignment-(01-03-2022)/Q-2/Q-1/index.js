function checkPassword() {
  let password_field = document.getElementById("pass_key");
  let pass_field = document.getElementById("check_pass");

  let password = password_field.value;
  let confirm_password = pass_field.value;

  let message = document.getElementById("message");
  if (password == confirm_password) {
    message.innerText = "Password is Matching";
  } else {
    message.innerText = "Password is not matching";
  }
}