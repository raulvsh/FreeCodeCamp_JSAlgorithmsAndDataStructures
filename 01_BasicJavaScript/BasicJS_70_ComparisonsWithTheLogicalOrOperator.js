function testLogicalOr(val) {
    // Only change code below this line

    /*if (val) {
      return "Outside";
    }
  
    if (val) {
      return "Outside";
    }*/

    if (val < 10 || val > 20) {
        return "Outside";
    }

    // Only change code above this line
    return "Inside";
}

testLogicalOr(15);