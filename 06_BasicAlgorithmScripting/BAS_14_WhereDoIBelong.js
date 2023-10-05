function getIndexToIns(arr, num) {
    let sortedArr = arr.sort(compareNumbers);
    //let sortedArr = arr.sort((a,b)=>a-b)
    console.log(`Sorted Array: ${sortedArr}`);
    for(let i=0;i<arr.length;i++){
        console.log(`vuelta ${i}: ${arr[i]}`);
        
        if(arr[i]>=num){
            return i;
        }

    }

    return arr.length;
  }

  function compareNumbers(a, b) {
    return a - b;
  }
  
  console.log(getIndexToIns([40, 60], 50));
  console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
  console.log(getIndexToIns([10, 20, 30, 40, 50], 30));
  console.log(getIndexToIns([3, 10, 5], 3));
  console.log(getIndexToIns([5, 3, 20, 3], 5));
  console.log(getIndexToIns([2, 5, 10], 15))