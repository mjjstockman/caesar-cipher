const { encode } = require("./encode.js");

test('user types "Hello World" with a key of 0 and clicks encode"', () => {
  expect(encode("Hello World", 0)).toBe("Hello World");
});

test('user types "Hello World" with a key of 2 and clicks encode"', () => {
  expect(encode("Hello World", 2)).toBe("Jgnnq Yqtnf");
});

// test('handles commas correctly', () => {
//   expect(encode({
//     value: "Hello World"
//   })).toBe("Hello World");
// });

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
