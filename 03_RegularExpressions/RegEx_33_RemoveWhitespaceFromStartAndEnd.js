let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result = hello.replace(wsRegex, ""); // Change this line
let match = hello.match(wsRegex)
console.log(`Match: ${match}. Result: ${result}`)