import { isPunctuationOrSpace } from "./isPunctuationOrSpace.js";

export function encode(userInput, keyInput) {
  let result = "";

  for (let char of userInput) {
    if (isPunctuationOrSpace(char)) {
      // If it's a punctuation character, leave it unchanged
      result += char;
    } else {
      let asciiInt = char.charCodeAt(0);
      let newAsciiInt = asciiInt + keyInput;

      // Check if the new ASCII code is beyond 'z' (122)
      if (asciiInt >= 97 && asciiInt <= 122) {
        if (newAsciiInt > 122) {
          // Wrap back to 'a'
          newAsciiInt = 96 + (newAsciiInt - 122);
        } else if (newAsciiInt < 97) {
          // Wrap back to 'z' if negative key
          newAsciiInt = 123 - (97 - newAsciiInt);
        }
      } else if (asciiInt >= 65 && asciiInt <= 90) {
        // Check for uppercase letters
        if (newAsciiInt > 90) {
          // Wrap back to 'A'
          newAsciiInt = 64 + (newAsciiInt - 90);
        }
      }

      let newChar = String.fromCharCode(newAsciiInt);
      result += newChar;
    }
  }
  return result;
}

// module.exports = { encode };
export default encode;
