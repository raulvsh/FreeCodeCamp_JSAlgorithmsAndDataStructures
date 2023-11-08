function dropElements(arr, func) {
    //Copy of the original array
    const arrCopy = arr.slice();
    //Iterate through the array
    for(let i=0;i<arr[arr.length-1];i++){
        //Remove every element until true
        if(func(arr[i])===false){
            arrCopy.shift()
        }

    }
    return arrCopy;
  }
  
  console.log("1 " + dropElements([1, 2, 3], function(n) {return n < 3; }));
  console.log("2 " + dropElements([1, 2, 3, 4], function(n) {return n >= 3;}))