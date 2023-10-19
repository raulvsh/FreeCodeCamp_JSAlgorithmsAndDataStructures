function sumAll(arr) {
    //Copy the array into a new variable
    let newArr = arr.slice()
    //Sort the array
    newArr.sort(function (a, b) {
        return a === b ? 0 : a < b ? -1 : 1
    });
    //console.log(`Array Sorted: ${newArr}`);
    let sum = 0;

    for (let i = newArr[0]; i <= newArr[newArr.length - 1]; i++) {
        console.log(`i: ${i}`)
        sum += i
    }
    //console.log(sum)
    return sum;
}

sumAll([1, 4]);
console.log(sumAll([5, 10]));
console.log(sumAll([10, 5]));