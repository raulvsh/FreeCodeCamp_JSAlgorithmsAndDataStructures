function mutation(arr) {
    let array1 = arr[0].toLowerCase();
    let array2 = arr[1].toLowerCase();

    for (let i=0; i<array2.length;i++){
        if(array1.indexOf(array2[i])<0)
            return false;
    }
    return true;
  }
  
  console.log(mutation(["hello", "hey"]));
  console.log(mutation(["hello", "hello"]));



