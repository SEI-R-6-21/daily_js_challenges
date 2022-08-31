function isPrime(n) {
    if(Number.isInteger(n / 2) || Number.isInteger( n / 3) ) {
      return false
    }
    else {
      return true
    }
  }
console.log(isPrime(97))