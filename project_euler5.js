// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

function smallestDivisible(n) {
  var divisible = 1;
  while (divisible >= 0) {
    var number = 0;
    for (var i = 1; i <= n; i++) {
      if (divisible % i == 0) {
        number++;
      }
    }
    if (number == n) {
      return divisible;
    }
    divisible++;
  }
}

smallestDivisible(20);
