function myReplace(str, before, after) {
    var regExUpperCase = /[A-Z]/

    //First letter of before is UpperCase
    if(before[0].match(regExUpperCase)){
        after = after[0].toUpperCase() + after.substring(1)
    //First letter of before is LowerCase
    } else{
        after = after[0].toLowerCase() + after.substring(1)
    }

    return str.replace(before,after);
  }
  
  console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));