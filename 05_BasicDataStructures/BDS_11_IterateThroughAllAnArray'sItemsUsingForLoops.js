function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
    console.log(`new array: ${newArr}`)

    for (let i = 0; i < arr.length; i++) {
       

        if (arr[i].indexOf(elem) == -1) {
            newArr.push(arr[i])
        }


    }
    // Only change code above this line
    console.log(`new array: ${newArr}`)
    return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9],[0,1,2]], 3));