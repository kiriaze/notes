/**
 * Write a function isInteger(x) that returns a boolean indicating whether or
 * not x is an integer.
 */
 
function isInteger1(x) {
  if (typeof x !== 'number') {
    return false;
  }

  if (x.toString().includes('.')) {
    return false;
  }

  if (x.toString().includes('-')) {
    return false;
  }

  return true;
}

function isInteger2(x) {
  return Number.isInteger(x);
}

function isInteger3(x) {
  return Math.round(x) === x;
}

console.log(isInteger1('foo') === false ? 'passed' : 'failed');
console.log(isInteger1(0) === true ? 'passed' : 'failed');
console.log(isInteger1(5) === true ? 'passed' : 'failed');
console.log(isInteger1(-4) === false ? 'passed' : 'failed');
console.log(isInteger1(1.6) === false ? 'passed' : 'failed');
