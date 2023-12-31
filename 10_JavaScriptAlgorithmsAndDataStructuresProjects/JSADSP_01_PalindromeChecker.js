function palindrome(str) {
    //New string, withoud non-alphanumeric characters, and lowercase
    let newStr=str.replace(/[\W_]/g,"").toLowerCase()
    

    //let length = newStr.length

    for(let i=0;i<newStr.length;i++){
        console.log(newStr[i])
        console.log(newStr[newStr.length-1-i])
        if(newStr[i]!=newStr[newStr.length-1-i]){
            return false;
        }
    }



    return true;
  }
  


  //console.log(palindrome("eye123*eYe"));
  //console.log(palindrome("eyeeYe"));
  console.log(palindrome("_eye"));
console.log(  palindrome("1 eye for of 1 eye."));
