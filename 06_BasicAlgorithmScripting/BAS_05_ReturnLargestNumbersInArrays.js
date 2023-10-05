function largestOfFour(arr) {
    console.log(arr.length);
    let arrayFinal=[];
    for (let i = 0; i<arr.length; i++) {
        console.log(`vuelta ${i}: ${arr[i]}`)
        let maxValue=-Infinity;
        for(let j=0; j<arr[i].length; j++){
            console.log(`dentro ${arr[i][j]}`)
            if(arr[i][j]>maxValue){
                maxValue=arr[i][j];
            }
        }
        arrayFinal.push(maxValue);
    }
    console.log(`Array final: ${arrayFinal}`)
    return arrayFinal;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);