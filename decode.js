import { isPunctuationOrSpace } from "./isPunctuationOrSpace.js";

const decode = (userInput, keyInput) => {
  let result = "";

  for (let char of userInput) {
    if (isPunctuationOrSpace(char)) {
      // If it's a punctuation character, leave it unchanged
      result += char;
    } else {
      let asciiInt = char.charCodeAt(0);
      let newAsciiInt = asciiInt - keyInput;

      if (asciiInt >= 97 && asciiInt <= 122) {
        if (newAsciiInt < 97) {
          // Wrap back to 'z'
          newAsciiInt = 123 - (97 - newAsciiInt);
        }
      } else if (asciiInt >= 65 && asciiInt <= 90) {
        // Check for uppercase letters
        if (newAsciiInt < 65) {
          // Wrap back to 'Z'
          newAsciiInt = 91 - (65 - newAsciiInt);
        }
      }

      let newChar = String.fromCharCode(newAsciiInt);
      result += newChar;
    }
  }
  return result;
};

export { decode };
