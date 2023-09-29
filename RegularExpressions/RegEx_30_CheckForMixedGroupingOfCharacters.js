let myString = "Eleanor Roosevelt";
//Franklin o Eleanor
//Espacio-Cualquier caracter-Espacio o Espacio
//Roosevelt
let myRegex = /(Franklin|Eleanor)(\s.*\s|\s)Roosevelt/;
let result = myRegex.test(myString); // Change this line
// After passing the challenge experiment with myString and see how the grouping works