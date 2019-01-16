/**
 * Write a sum method that works with both syntaxes:
 * sum(2, 3) // 5
 * sum(2)(3) // 5
 */

function sum(x, y) {
  if (y !== undefined) {
    return x + y;
  }

  return function(y) {
    return x + y;
  };
}

console.log(sum(2, 3) === 5 ? 'passed' : 'failed');
console.log(sum(2)(3) === 5 ? 'passed' : 'failed');
