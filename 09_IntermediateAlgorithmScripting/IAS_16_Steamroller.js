function steamrollArray(arr) {
    const flattenedArray = [];

    for(let i=0;i<arr.length;i++){
        Array.isArray(arr[i])?
            flattenedArray.push(...steamrollArray(arr[i])):
            flattenedArray.push(arr[i])
    }

    return flattenedArray;
  }
  
  console.log(steamrollArray([1, [2], [3, [[4]]]]));