
function rot13(str) {
  var newStr = "";

  for (var i = 0; i < str.length; i++) {
    var char = str[i];


    if (/[A-Z]/.test(char)) {

      // Apply ROT13 decoding to alphabetic characters
      var decodedCharCode = (char.charCodeAt(0) - 'A'.charCodeAt(0) + 13) % 26 + 'A'.charCodeAt(0);

      var decodedChar = String.fromCharCode(decodedCharCode);
      newStr += decodedChar;
    } else {
      // Non-alphabetic characters are passed on unchanged
      newStr += char;
    }
  }

  return newStr;
}


console.log(rot13("SERR PBQR PNZC"));
