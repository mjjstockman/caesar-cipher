// // jest.setup.js
// const { JSDOM } = require('jsdom');
// const fs = require('fs');
// const path = require('path');

// // Read your HTML file
// const html = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf8');

// // Create a virtual DOM environment
// const dom = new JSDOM(html, { runScripts: 'dangerously' });

// // Set global variables to make the DOM accessible in tests
// global.document = dom.window.document;
// global.window = dom.window;
// global.navigator = dom.window.navigator;