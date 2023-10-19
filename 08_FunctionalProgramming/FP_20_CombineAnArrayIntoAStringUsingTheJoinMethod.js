function sentensify(str) {
    // Only change code below this line
    let array = str.split(/\W/);
    console.log(array)
    return array.join(" ")
    // Only change code above this line
  }
  
  console.log(sentensify("May-the-force-be-with-you"));