function popShift(arr) {
    let popped = arr.pop(); // Change this line
    
    let shifted = arr.shift(); // Change this line
    console.log([shifted, popped])
    return [shifted, popped];
  }
  
  console.log(popShift(['challenge', 'is', 'not', 'complete']));
