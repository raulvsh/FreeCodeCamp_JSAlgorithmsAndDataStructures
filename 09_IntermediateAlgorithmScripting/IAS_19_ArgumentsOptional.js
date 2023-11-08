function addTogether() {
    const [first, second] = arguments;

    function addSecond(second) {
        //Check of type
        if (typeof (second) === "number") return first + second;
    }
    //Check of type

    if (typeof (first) === "number") {
        //Only one argument, return function
        if (arguments.length === 1) return addSecond;
        if (arguments.length === 2) return addSecond(second);
    }
}