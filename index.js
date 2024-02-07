let emailInput = document.getElementById("email"),
  passInput = document.getElementById("Password"),
  formSubmit = document.getElementById("form");
  submitFrom = document.getElementById('login')
passInput.addEventListener("change", (e) => {
  let emailValue = emailInput.value;
  let passValue = passInput.value;
 if ( passInput.value != "") {
   submitFrom.disabled = false;
   submitFrom.style.backgroundColor = "#fffc00"
  }
  else{
   submitFrom.disabled = true;
 }
});
