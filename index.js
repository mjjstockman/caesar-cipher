// const { userText } = require('./constants.js');
// / const testJest = () => {
//   return "Jgnnq Yqtnf";
// };

// // modeule.exports = testJest
// module.exports = testJest;

// const userText = document.getElementById("userText");
// const encodeBtn = document.getElementById("encodeBtn");
// const decodeBtn = document.getElementById("decodeBtn");
// const keyInput = document.getElementById("keyInput");

let result = "";

const encode = (userText) => {
    
  for (let char of userText.value) {
    console.log(char);
  }
  //     if (char === ' ') {
  //         // If the character is a space, add it to the result as is
  //         result += ' ';
  //     } else {
  //         let asciiInt = char.charCodeAt(0);
  //         let keyInt = parseInt(keyInput.value);
  //         let newChar = String.fromCharCode(asciiInt + keyInt);
  //         result += newChar;
  //     }
  //     console.log(result);
  // //   updateText(result)
  return "Jgnnq Yqtnf";
  // }
};

module.exports = { encode };

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
//   encode();
//     // console.log("encodeBtn clicked");
// });

// export default encode;
// exports = {
//     encode
// }
