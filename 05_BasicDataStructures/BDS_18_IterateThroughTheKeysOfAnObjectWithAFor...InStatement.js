const users = {
    Alan: {
        online: false
    },
    Jeff: {
        online: true
    },
    Sarah: {
        online: false
    }
}

function countOnline(allUsers) {
    // Only change code below this line
    let cont = 0;
    //console.log(allUsers);
    for (let user in allUsers) {
        //console.log(allUsers[user].online);

        if (allUsers[user].online == true) {
            cont++;
        }
    }
    return cont;
    // Only change code above this line
}

console.log(countOnline(users));