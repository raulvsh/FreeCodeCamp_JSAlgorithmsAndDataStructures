const squareList = arr => {
    // Only change code below this line
    //Filter integer numbers
    //let integerNumbers = arr.filter(item => Number.isInteger(item))
    return arr.filter(item => Number.isInteger(item) && item > 0)
        //console.log(integerNumbers);
        //Map to add to square array
        //let squareNumbers = integerNumbers.map(item=>item*item)
        .map(item => item * item)
    //console.log(squareNumbers)
    //  return arr;
    // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);

console.log(squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]));
