function factorialize(num) {
    if (num <=0) {
        return 1;
    }
     return num*factorialize(num - 1)


    
}
console.log(factorialize(0));
console.log(factorialize(1));
console.log(factorialize(2));
console.log(factorialize(3));
console.log(factorialize(4));
console.log(factorialize(5));
