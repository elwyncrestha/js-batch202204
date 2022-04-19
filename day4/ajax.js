// AJAX = Asynchronous JavaScript and XML
// XHR = XMLHttpRequest

const GET = 'GET';
const POST = 'POST';
const SERVER_URL = 'http://localhost:8080';

function getData(url, responseCallback) {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    const { response } = this;
    responseCallback(JSON.parse(response));
  };
  xhttp.open(GET, `${SERVER_URL}${url}`);
  xhttp.send();
}

function postData(url, data, responseCallback) {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    const { response } = this;
    responseCallback(JSON.parse(response));
  };
  xhttp.open(POST, `${SERVER_URL}${url}`);
  xhttp.setRequestHeader('Content-Type', 'application/json');
  xhttp.send(JSON.stringify(data));
}

function callGetReq() {
    getData('/v1/inventory', (response) => console.table(response));
}
callGetReq();


// form handling
function addInventory() {
  event.preventDefault();
  const nameHelp = document.querySelector(".name-control");
  nameHelp?.remove();
  const name = document.querySelector("#name");
  if (!name.value) {
    const nameHelp = document.createElement("div");
    nameHelp.innerHTML = "Name is required";
    ["form-text", "text-danger", "name-control"].forEach((c) =>
      nameHelp.classList.add(c)
    );
    const emailBlock = document.querySelector("#nameBlock");
    emailBlock.appendChild(nameHelp);
    return;
  }

  const quantityHelp = document.querySelector(".quantity-control");
  quantityHelp?.remove();
  const quantity = document.querySelector("#quantity");
  if (!quantity.value) {
    const quantityHelp = document.createElement("div");
    quantityHelp.innerHTML = "Quantity is required";
    ["form-text", "text-danger", "quantity-control"].forEach((c) =>
      quantityHelp.classList.add(c)
    );
    const emailBlock = document.querySelector("#quantityBlock");
    emailBlock.appendChild(quantityHelp);
    return;
  }

  const inventory = { quantity: quantity.value, name: name.value };
  postData('/v1/inventory', inventory, callGetReq)
}
