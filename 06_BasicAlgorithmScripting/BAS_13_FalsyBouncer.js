function bouncer(arr) {
    //let newArray = arr.slice();
    let newArray = [];

    for (let i = 0; i < arr.length; i++) {

        if (arr[i]) {
            newArray.push(arr[i])
        } else {
            console.log("falsy")

        }
    }
    return newArray;
}

console.log(bouncer([7, "ate", "", false, 9]));
