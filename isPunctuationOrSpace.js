function isPunctuationOrSpace(char) {
    // This regular expression matches punctuation characters and spaces
    return /[!@#$%^&*()_+{}\[\]:;"'<>,.?/~`|-\s]/.test(char);
  }
  
  export { isPunctuationOrSpace };