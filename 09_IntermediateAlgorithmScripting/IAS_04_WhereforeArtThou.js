function whatIsInAName(collection, source) {

    const collectionMatches = [];

    //Iterate over every object in the collection
    for (let i = 0; i < collection.length; i++) {
        let foundMismatch = false;
        //console.log("Collection " + collection[i]["first"])

        //Check for mismatches
        for (const sourceProp in source) {
            if (collection[i][sourceProp] !== source[sourceProp]) {
                foundMismatch = true;
            }
        }

        //No mismatches found, add to collectionMatches
        if (!foundMismatch) {
            collectionMatches.push(collection[i])
        }
    }
    return collectionMatches;



}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));