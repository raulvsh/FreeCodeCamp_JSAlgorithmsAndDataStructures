function findElement(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        console.log(`Elemento ${i}: ${arr[i]}`)
        console.log("Resultado funcion:" + func(arr[i]))

        if (func(arr[i])) {
            return arr[i];
        }
    }
    return undefined;
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));