function repeatStringNumTimes(str, num) {
    let string = "";
    if (num < 0) {
        string = ""
    } else {
        for (let i = 0; i < num; i++) {
            string += str;
        }

    }

    return string

}


console.log(repeatStringNumTimes("abc", 3));