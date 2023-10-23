function destroyer(arr, ...args) {
    console.log("Original Array: " + arr)
    console.log("Arguments: " + args)

    const valsToRemove = args.slice();
    console.log("Values to remove: " + valsToRemove)

    return arr.filter(function (val) {
        console.log(!valsToRemove.includes(val))
        return !valsToRemove.includes(val);
    });

    

    

}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3,));

/*Short solution    
    function destroyer(arr, ...valsToRemove) {
    return arr.filter(elem => !valsToRemove.includes(elem));}*/

/* Another solution

function destroyer(arr) {
  const valsToRemove = Object.values(arguments).slice(1);
  const filteredArray = [];

  for (let i = 0; i < arr.length; i++) {
    let removeElement = false;
    for (let j = 0; j < valsToRemove.length; j++) {
      if (arr[i] === valsToRemove[j]) {
        removeElement = true;
      }
    }
    if (!removeElement) {
      filteredArray.push(arr[i]);
    }
  }
  return filteredArray;
}


*/