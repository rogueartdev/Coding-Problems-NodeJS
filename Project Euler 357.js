function getDivisors(n) {
  let res = []
  const nSquare = Math.sqrt(n)
  for (let i = 1; i <= nSquare; i++) {
    if (n%i === 0) { // Checks if divisible
      if (n/i === i) // Checks if is same value
        res.push(n/i)
      else 
        res.push(i, n/i)
    }
  }
  return res
}

function isPrime(num) {
  let n = num
  if (n <= 3)
    return n > 1
  if ((n%2 == 0) || (n%3 == 0))
    return false
  
  let x
  const nSquare = Math.sqrt(n)
  for (x = 5; x <= nSquare; x += 6) {
    if ((n%x == 0) || (n%(x+2) == 0))
      return false
  }
  return true
}

function primeGen(num) {
  let divisors = getDivisors(num)
  divisors = divisors.map(elem => elem+num/elem)
  console.log(divisors)
  for (let x = divisors.length-1; x >= 0; x--) {
    if (!isPrime(divisors[x])) {
      return BigInt(0)
    }
  }
  return BigInt(num)
}

function main(max) {
  let sum = BigInt(1)
  for (let x = 2; x < max; x += 4) {
    sum += primeGen(x)
  }
  return sum.filter(item => Number(item))
}

console.time("test")
console.log(primeGen(1000 * 1000 * 100))
console.timeEnd("test")