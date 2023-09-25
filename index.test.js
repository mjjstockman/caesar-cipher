const { test, expect } = require('@jest/globals');
// import encode from 'index.js'; // Adjust the path as needed
// const encode = require('index.js');
const encode = require('./index.js'); // Adjust the path as needed


// const userText = document.getElementById("userText");
// userText.value = 'Hello, World';

// Mock the DOM environment
document.body.innerHTML = `
<h1 class="text-4xl font-bold text-center mb-8">Caesar Cipher</h1>

<div class="flex justify-center items-center">
  <textarea
    id="userText"
    class="border-solid border-4 rounded-2xl border-sky-500 p-3 mb-3"
    name="userText"
    rows="4"
    cols="50"
    placeholder="Enter text here..."
  ></textarea>
</div>

<div class="flex justify-center items-center">
  <button
    id="encodeBtn"
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-6"
  >
    Encode
  </button>
  <!-- <label for="quantity" class="mr-2">Key:</label> -->
  <input
    type="number"
    id="keyInput"
    class="w-2/12 p-2 border-solid border-2 rounded-xl border-sky-500"
    name="keyInput"
    placeholder="Key"
  />
  <button
    id="decodeBtn"
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ml-6"
  >
    Decode
  </button>
</div>
`;

// require('./index.js');

// const userText = document.getElementById('userText');
// userText.value = "Hello, World";

test('if user types "Hello World" in the text area, sets the key to 2 and clicks encrypt, \
     the text area changes to "Jgnnq Yqtnf"', () => {
  //   document.getElementById("userText").value = "Hello World";
//   const userText = document.getElementById('userText');
//   userText.value = 'Hello World';
  //   encodeBtn.click();
//   encode(userText.value);
  expect(encode('Hello World')).toBe('Jgnnq Yqtnf');
});

// if key === 2, user input === "Jgnnq Yqtnf",  click decrypt, expect output to be "Hello World"

// if key === 4, user input === "Hello World",  click encrypt, expect output to be "Lipps Asvph"

// if key === 4, user input === "Lipps Asvph",  click decrypt, expect output to be "Hello World"

// if key === 26, user input === "Hello World",  click encrypt, expect output to be "Hello World"

// if key === 26, user input === "Hello World",  click decrypt, expect output to be "Hello World"

// if key === 28, user input === "Hello World",  click encrypt, expect output to be "Jgnnq Yqtnf"

// if key === 28, user input === "Jgnnq Yqtnf",  click decrypt, expect output to be "Hello World"

// if key === 30, user input === "Hello World",  click encrypt, expect output to be "Lipps Asvph"

// if key === 30, user input === "Lipps Asvph",  click decrypt, expect output to be "Hello World"

// const { default: test } = require("node:test"); // NEEDED???
// const Export = require("./index.js");

// const userText = document.querySelector("userText");
// const encodeBtn = document.querySelector("encodeBtn");
// const decodeBtn = document.querySelector("decodeBtn");
// const keyInput = document.querySelector("keyInput");

// if key === 0, user input === "Hello World",  click encrypt, expect output to be "Hello World"

// if key === 0, user input === "Hello World",  click decrypt, expect output to be "Hello World"

// if key === 2, user input === "Hello World",  click encrypt, expect output to be "Jgnnq Yqtnf"
// test('if user types "Hello World" in the text area, sets the key to 2 and clicks encrypt, \
//      the text area changes to "Jgnnq Yqtnf"', () => {
//   userText.value = "Hello World";
//   keyInput.value = 2;
//   encodeBtn.click();
//   expect(userText.value).toBe("Jgnnq Yqtnf");
// });
// if key === 2, user input === "Jgnnq Yqtnf",  click decrypt, expect output to be "Hello World"

// if key === 4, user input === "Hello World",  click encrypt, expect output to be "Lipps Asvph"

// if key === 4, user input === "Lipps Asvph",  click decrypt, expect output to be "Hello World"

// if key === 26, user input === "Hello World",  click encrypt, expect output to be "Hello World"

// if key === 26, user input === "Hello World",  click decrypt, expect output to be "Hello World"

// if key === 28, user input === "Hello World",  click encrypt, expect output to be "Jgnnq Yqtnf"

// if key === 28, user input === "Jgnnq Yqtnf",  click decrypt, expect output to be "Hello World"

// if key === 30, user input === "Hello World",  click encrypt, expect output to be "Lipps Asvph"

// if key === 30, user input === "Lipps Asvph",  click decrypt, expect output to be "Hello World"
