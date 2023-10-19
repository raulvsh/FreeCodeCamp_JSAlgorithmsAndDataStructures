const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
    // Only change code below this line
    let newArray = arr.slice();
    /*Option 2
    let newArray = [];
    newArray=newArray.concat(arr)*/
    /*console.log(newArray.sort(function(a,b){
        return a === b ? 0 : a < b ? -1 : 1;

    }))*/

    return newArray.sort(function (a, b) {
        return a === b ? 0 : a < b ? -1 : 1;

    });


    // Only change code above this line
}

console.log(nonMutatingSort(globalArray));
