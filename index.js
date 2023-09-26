let userText = document.getElementById("userText");
let encodeBtn = document.getElementById("encodeBtn");
let decodeBtn = document.getElementById("decodeBtn");
let keyInput = document.getElementById("keyInput");

let result = "";

const encode = () => {
  result = ""; // Clear the result

  for (let char of userText.value) {
    if (char === " ") {
      // If the character is a space, add it to the result as is
      result += " ";
    } else {
      let asciiInt = char.charCodeAt(0);
      let keyInt = parseInt(keyInput.value);
      let newChar = String.fromCharCode(asciiInt + keyInt);
      result += newChar;
    }
  }

  updateText(result); // Update the text area with the result
};

encodeBtn.addEventListener("click", function () {
    console.log("encodeBtn clicked");
  encode(); // Call the encoding function
});

const updateText = (text) => {
  userText.value = text;
};





// import { encode } from "./encode.js";

// const testJest = () => {
//   return "Jgnnq Yqtnf";
// };

// // modeule.exports = testJest
// module.exports = testJest;
// import encode from "./encode.js";

// let userText = document.getElementById("userText");
// let encodeBtn = document.getElementById("encodeBtn");
// let decodeBtn = document.getElementById("decodeBtn");
// let keyInput = document.getElementById("keyInput");

// let result = "";

// const encode = () => {
//   console.log("encode function called");
  //   for (let char of userText.value) {
  //     if (char === " ") {
  //       // If the character is a space, add it to the result as is
  //       result += " ";
  //     } else {
  //       let asciiInt = char.charCodeAt(0);
  //       let keyInt = parseInt(keyInput.value);
  //       let newChar = String.fromCharCode(asciiInt + keyInt);
  //       result += newChar;
  //     }
  //     console.log(result);
  //   updateText(result)
  // return "Jgnnq Yqtnf";
  // }
// };

// encodeBtn.addEventListener("click", function () {
//   console.log("encodeBtn clicked");
//   //   encode();
// });

//

// module.exports = { encode };

// const encode = () => {
//     for (let char of userText.value) {
//         if (char === ' ') {
//             // If the character is a space, add it to the result as is
//             result += ' ';
//         } else {
//             let asciiInt = char.charCodeAt(0);
//             let keyInt = parseInt(keyInput.value);
//             let newChar = String.fromCharCode(asciiInt + keyInt);
//             result += newChar;
//         }
//         console.log(result);
//     //   updateText(result)
//         return "Jgnnq Yqtnf"
//     }
// };

// const updateText = (result) => {
//     userText.value = result;
// };

// Add a click event listener to the button
// encodeBtn.addEventListener("click", function () {
//     console.log("encodeBtn clicked");
// //   encode();

// });

// export default encode;
// exports = {
//     encode
// }
