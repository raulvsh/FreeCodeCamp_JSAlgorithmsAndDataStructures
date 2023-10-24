function sumPrimes(num) {
    let result = 0;
    for (let i = 2; i <= num; i++) {
        if (isPrime(i))
            result += i;

    }
    return result;
}

function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        //If I found a divisor, it's not prime
        if (num % i === 0)
            return false;
    }
    return true;

}



console.log(sumPrimes(10));
console.log(sumPrimes(977));
