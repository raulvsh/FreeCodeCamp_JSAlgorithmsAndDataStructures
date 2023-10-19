function checkPositive(arr) {
    // Only change code below this line
    return arr.every(function (currentValue) {
        return currentValue > 0;
    }

    /*Option 2
    return arr.every(value => value > 0);*/



    );

    // Only change code above this line
}

console.log(checkPositive([1, 2, 3, -4, 5]));