// Fetch API

const SERVER_URL = 'http://localhost:8080';

fetch(`${SERVER_URL}/v1/inventory`)
  .then((v) => v.json())
  .then((v) => console.log(v));

