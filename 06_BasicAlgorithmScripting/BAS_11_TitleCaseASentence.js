function titleCase(str) {
    let splittedStr = str.split(' ');
    console.log(`Splitted: ${splittedStr}`)
    for(let i=0;i<splittedStr.length;i++){
        console.log(`Vuelta ${i}: ${splittedStr[i]}`)
        splittedStr[i]=splittedStr[i].charAt(0).toUpperCase()+splittedStr[i].slice(1).toLowerCase()

    }
    return splittedStr.join(" ");
  }

  /* Solución con map
  function titleCase(str) {
    return str
      .toLowerCase()
      .split(" ")
      .map(val => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
      .join(" ");
  }
  
  titleCase("I'm a little tea pot");*/

  console.log(titleCase("I'm a little tea pot"));