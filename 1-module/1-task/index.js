/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  let result = i = 1;
  while (i < n) {
    i++;
    result *= i;
  }
  return result;
}
