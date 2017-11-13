// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

function largestPalindrome() {
  var palindrome = 0;

  for (var i = 100; i < 1000; i++) {
    for (var n = 100; n < 1000; n++) {
      var total = i * n;
      var reverse = total.toString().split('').reverse().join('');
      if (total == reverse && total > palindrome) {
        palindrome = total;
      }
    }
  }
  return palindrome;
}

largestPalindrome();
