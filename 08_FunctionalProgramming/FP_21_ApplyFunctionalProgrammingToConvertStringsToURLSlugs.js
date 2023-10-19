// Only change code below this line
function urlSlug(title) {
    /*let array=title.split(" ");
    console.log(array)
    //let titleWithHypen=title
    let arrayLowerCase = array.map(element=>element.toLowerCase())
    console.log(arrayLowerCase)
    let arrayHyphenated = arrayLowerCase.join("-")
    console.log(arrayHyphenated)
    return arrayHyphenated*/


    return title.trim().split(/\s+/).map(element=>element.toLowerCase()).join("-")


}
// Only change code above this line
console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"));
console.log(urlSlug(" Winter Is  Coming"))