function confirmEnding(str, target) {
    //console.log(str.substring(str.length-1,str.length))
    return str.substring(str.length-target.length,str.length)==target?true:false;
  }
  
  console.log(confirmEnding("Bastian", "n"));