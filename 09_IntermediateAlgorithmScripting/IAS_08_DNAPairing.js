function pairElement(str) {
    let array = [];
    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case "G":
                array.push(["G","C"])
                break;
            case "C":
                array.push(["C","G"])
                break;
            case "A":
                array.push(["A","T"])
                break;
            case "T":
                array.push(["T","A"])
                break;
        }
    }
    return array;
}

console.log(pairElement("GCG"));