import encode from './encode.js';
import decode from './decode.js';
 
const userText = document.getElementById("userText");
const encodeBtn = document.getElementById("encodeBtn");
const decodeBtn = document.getElementById("decodeBtn");
const keyInput = document.getElementById("keyInput");

encodeBtn.addEventListener("click", function () {
  const userInput = userText.value;
  const key = parseInt(keyInput.value);

  const result = encode(userInput, key);
  updateText(result);
});

decodeBtn.addEventListener("click", function () {
  const userInput = userText.value;
  const key = parseInt(keyInput.value);

  const result = decode(userInput, key);
  updateText(result);
});

const updateText = (result) => {
  userText.value = result;
};
