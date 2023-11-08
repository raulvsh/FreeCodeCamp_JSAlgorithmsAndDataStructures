function truthCheck(collection, pre) {
    for(let i=0;i<collection.length;i++){
        if(!collection[i][pre]){
            return false;
        }
    }
    return true;
  }
  
  console.log(truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot"));

  /* Short and elegant function
  function truthCheck(collection, pre) {
  // Is everyone being true?
  return collection.every(obj => obj[pre]);
    }
*/