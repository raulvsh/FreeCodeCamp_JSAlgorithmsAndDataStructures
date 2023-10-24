function sumFibs(num) {
    let arr = []
    let sum = 0;
    let first = 0;
    let second = 1;
    arr.push(first)
    arr.push(second)

    for (let i = 1; arr[i] <= num; i++) {
        arr.push(arr[i] + arr[i - 1])

        if (arr[i] % 2 == 1) {
            sum += arr[i]
        }

    }
    console.log(arr)


    return sum;
}

console.log(sumFibs(10));