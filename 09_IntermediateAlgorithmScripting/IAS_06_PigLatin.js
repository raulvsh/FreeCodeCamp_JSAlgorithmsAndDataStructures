function translatePigLatin(str) {
    var regExVocal = /[aeiou]/gi

    //First char is a vowel
    if(str[0].match(regExVocal)){
        return str + "way";
        //All consonants
    } else if(str.match(regExVocal)==null){
        return str + "ay";
    } else{
        var vowelIndex = str.indexOf(str.match(regExVocal)[0])
        return str.substr(vowelIndex) + str.substr(0,vowelIndex) + "ay"
    }
    
  }
  
  console.log(translatePigLatin("consonant"));