// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

function largestPrime(n) {
  for (var i = 2; i <= n; i++) {
    if (n % i == 0){
      n /= i;
      i--;
    }
  }
  return i;
}

largestPrime(600851475143);
