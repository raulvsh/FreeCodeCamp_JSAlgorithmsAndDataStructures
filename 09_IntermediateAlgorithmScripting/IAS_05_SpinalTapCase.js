function spinalCase(str) {
    let newStr = ""
    newStr = str.slice().split(/\W|_|(?=[A-Z])/);
    newStr = newStr.join("-").toLowerCase()



    return newStr;
}

console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("Teletubbies say Eh-oh"));
console.log(spinalCase("AllThe-small Things"));

