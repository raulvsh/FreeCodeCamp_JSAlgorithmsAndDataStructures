function frankenSplice(arr1, arr2, n) {
    //copio el array2 a una variable local
    let localArray = arr2.slice()

    //Sobre la variable local, introduzco elementos a partir de n, borro 0, introduzco el array1 separado en elementos
    localArray.splice(n, 0, ...arr1)


    return localArray;
}

console.log(frankenSplice([1, 2,], ["a", "b"], 1));
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));