// modify footer text
const footerPara = document.getElementById("footer-text");
const now = new Date();
footerPara.innerText = `${footerPara.innerText} ${now.getFullYear()}`;

// form handling
function validateForm() {
  event.preventDefault();
  const email = document.querySelector("#email");
  if (!email.value) {
    const emailBlock = document.querySelector("#emailBlock");
    const emailHelp = document.createElement("div");
    emailHelp.innerHTML = "Email is required";
    ['form-text', 'text-danger', 'email-control'].forEach((c) => emailHelp.classList.add(c));
    emailBlock.appendChild(emailHelp);
    return;
  }
  const emailHelp = document.querySelector(".email-control");
  emailHelp?.remove();

  const password = document.querySelector("#password");
  if (!password.value) {
    const passwordHelp = document.querySelector("#passwordHelp");
    passwordHelp.innerHTML = "Password is required";
    passwordHelp.style.color = "red";
    return;
  }
  passwordHelp.innerHTML = "";

  const credential = { email: email.value, password: password.value };
  console.log(JSON.stringify(credential));
}
