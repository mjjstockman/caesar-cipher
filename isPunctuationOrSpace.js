export function isPunctuationOrSpace(char) {
  // This regular expression matches punctuation characters and spaces
  const allPunctuationAndSpaceRegEx = /[\p{P}\s^_`{|}~<=>+$]/u;

  return allPunctuationAndSpaceRegEx.test(char);
}