   function convertToRoman(number) {
    // Roman Symbols and values (catch por "excepcions" as CM, CD, XC...)
    const romanSymbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    const romanValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  
    let result = "";
  
    // Iterate through the Roman symbols and build the numeral
    for (let i = 0; i < romanSymbols.length; i++) {
      // Repeat the Roman symbol as many times as it fits into the number
      while (number >= romanValues[i]) {
        result += romanSymbols[i];
        number -= romanValues[i];
      }
    }
  
    return result;
  }
  
  // Example usage
  let arabicNumber = 4549;
  let romanNumeral = convertToRoman(arabicNumber);

  console.log(convertToRoman(4));
