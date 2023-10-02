const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
    // Only change code below this line
    const lilist = [`${result.failure[0]}`, `${result.failure[1]}`, `${result.failure[2]}`]
    const failureItems = [];

    for (let i = 0; i < lilist.length; i++) {
        failureItems[i] = `<li class="text-warning">${lilist[i]}</li>`;
        //console.log(failureItems)
    }

    // Only change code above this line

    return failureItems;
}

const failuresList = makeList(result.failure);
console.log(failuresList)
