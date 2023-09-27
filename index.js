import { encode } from "./encode.js";
import { decode } from "./decode.js";

let userText = document.getElementById("userText");
let encodeBtn = document.getElementById("encodeBtn");
let decodeBtn = document.getElementById("decodeBtn");

encodeBtn.addEventListener("click", function () {
  let userInput = userText.value;
  let key = parseInt(keyInput.value);

  let result = encode(userInput, key);
  updateText(result);
});

decodeBtn.addEventListener("click", function () {
  let userInput = userText.value;
  let key = parseInt(keyInput.value);

  let result = decode(userInput, key);
  updateText(result);
});

const updateText = (result) => {
  userText.value = result;
};
