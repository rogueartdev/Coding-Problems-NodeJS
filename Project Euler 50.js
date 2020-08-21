function sieve(num) {
    let primes = {}
    for (let x = 0; x < num+1; x++) {
        primes[x] = x
    }
    primes[0] = primes[1] = 0

    for (let divisor = 2; divisor <= Math.sqrt(num); divisor++) {
        if (primes[divisor] !== 0) {
            for (let multiplier = divisor**2; multiplier <= num; multiplier += divisor) {
                primes[multiplier] = 0
            }
        }
    }
    primes = Object.fromEntries(Object.entries(primes).filter(([key, value]) => value !== 0))
    return primes
}

let max = 1000
let primes = sieve(max)

function primeSum(primes) {
    let sum = 0, highestPrime = 2, val
    // Forwards loop, starting from 2 to max
    for (const prime in primes) {
        val = primes[prime]
        sum += val
        if (primes[sum] !== undefined) {
            highestPrime = sum
        }
    }
    // Backwards loop, starting from max to 2
    sum = max

    return highestPrime
}

console.log(primeSum(primes))
