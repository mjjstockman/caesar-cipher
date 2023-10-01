import { isPunctuationOrSpace } from "./isPunctuationOrSpace.js";

export function decode(userInput, keyInput) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const result = userInput.split("").map((char) => {
    if (isPunctuationOrSpace(char)) {
      // If it's a punctuation character or space, leave it unchanged
      return char;
    }

    const isUpperCase = char === char.toUpperCase();
    const charLowerCase = char.toLowerCase();
    const alphabetIndex = alphabet.indexOf(charLowerCase);

    if (alphabetIndex !== -1) {
      const newIndex = (alphabetIndex - keyInput) % 26;

      // Ensure newIndex is positive
      const wrappedIndex = (newIndex + 26) % 26;

      const newChar = isUpperCase
        ? alphabet[wrappedIndex].toUpperCase()
        : alphabet[wrappedIndex];

      return newChar;
    }

    // If the character is not a letter, leave it unchanged
    return char;
  });

  return result.join("");
}

export default decode;
