function diffArray(arr1, arr2) {
    /*const arrayConcat = arr1.concat(arr2);
    console.log(arrayConcat)

    const arrayFilter = arrayConcat.filter(item=>!arr1.includes(item)||!arr2.includes(item));
    console.log(arrayFilter)

    return arrayFilter;*/


    return arr1
        .concat(arr2)
        .filter(item => !arr1.includes(item) || !arr2.includes(item));
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));