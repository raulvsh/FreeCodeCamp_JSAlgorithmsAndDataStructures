function add(x) {
    // Only change code below this line
    return function(y){
        return function(z){
            return x + y + z;
        }
    }
    /*Option 2
      return y => z => x + y + z;

    */
    // Only change code above this line
  }

  
  console.log(add(10)(20)(30));