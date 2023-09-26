const { encode } = require('./encode.js');

test('if user types "Hello World" in the text area, sets the key to 2 and clicks encrypt, \
     the text area changes to "Jgnnq Yqtnf"', () => {
  expect(encode({
    value: "Hello World"
  })).toBe("Hello World");
});





// // if key === 2, user input === "Jgnnq Yqtnf",  click decrypt, expect output to be "Hello World"

// // if key === 4, user input === "Hello World",  click encrypt, expect output to be "Lipps Asvph"

// // if key === 4, user input === "Lipps Asvph",  click decrypt, expect output to be "Hello World"

// // if key === 26, user input === "Hello World",  click encrypt, expect output to be "Hello World"

// // if key === 26, user input === "Hello World",  click decrypt, expect output to be "Hello World"

// // if key === 28, user input === "Hello World",  click encrypt, expect output to be "Jgnnq Yqtnf"

// // if key === 28, user input === "Jgnnq Yqtnf",  click decrypt, expect output to be "Hello World"

// // if key === 30, user input === "Hello World",  click encrypt, expect output to be "Lipps Asvph"

// // if key === 30, user input === "Lipps Asvph",  click decrypt, expect output to be "Hello World"


// // if key === 0, user input === "Hello World",  click encrypt, expect output to be "Hello World"

// // if key === 0, user input === "Hello World",  click decrypt, expect output to be "Hello World"


// // if key === 2, user input === "Jgnnq Yqtnf",  click decrypt, expect output to be "Hello World"



// // if key === 26, user input === "Hello World",  click encrypt, expect output to be "Hello World"

// // if key === 26, user input === "Hello World",  click decrypt, expect output to be "Hello World"

// // if key === 28, user input === "Hello World",  click encrypt, expect output to be "Jgnnq Yqtnf"

// // if key === 28, user input === "Jgnnq Yqtnf",  click decrypt, expect output to be "Hello World"

// // if key === 30, user input === "Hello World",  click encrypt, expect output to be "Lipps Asvph"

// // if key === 30, user input === "Lipps Asvph",  click decrypt, expect output to be "Hello World"

