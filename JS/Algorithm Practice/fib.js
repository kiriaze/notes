// ---------------------------
// Write a function that returns the nth number in the fibonnaci sequence
// ---------------------------

// ANSWER WITH RECURSION
// -----------------------------------------------
var fib1 = (n) => (n < 2) ? n : fib1(n - 2) + fib1(n - 1); 


// ANSWER WITH RECURSION AND MEMOIZATION
// -----------------------------------------------
var fib3 = (n, memo) => {
  if (memo[n] || memo[n] === 0) {
    return memo[n];
  }
  else {
    return memo[n] = fib3(n - 2, memo) + fib3(n - 1, memo);
  }
};


// ANSWER WITHOUT RECURSION
// -----------------------------------------------
var fib2 = (n) => {
  var res = [0, 1];

  for (var i = 2; i <= n; i++) {
    res.push(res[i - 2] + res[i - 1]);
  }

  return res[n];
};


// REFERENCE: FIB SEQUENCE
// -----------------------------------------------
var sequence = [0, 1, 1, 2, 3, 5, 8, 13];


// TEST CASES
// -----------------------------------------------
console.log('fib1 test case: 0 -- ', (fib1(0) === sequence[0]));
console.log('fib1 test case: 1 -- ', (fib1(1) === sequence[1]));
console.log('fib1 test case: 4 -- ', (fib1(4) === sequence[4]));
console.log('fib1 test case: 8 -- ', (fib1(7) === sequence[7]));

console.log('');

console.log('fib2 test case: 0 -- ', (fib2(0) === sequence[0]));
console.log('fib2 test case: 1 -- ', (fib2(1) === sequence[1]));
console.log('fib2 test case: 4 -- ', (fib2(4) === sequence[4]));
console.log('fib2 test case: 8 -- ', (fib2(7) === sequence[7]));

console.log('');

console.log('fib3 test case: 0 -- ', (fib3(0, {0: 0, 1: 1}) === sequence[0]));
console.log('fib3 test case: 1 -- ', (fib3(1, {0: 0, 1: 1}) === sequence[1]));
console.log('fib3 test case: 4 -- ', (fib3(4, {0: 0, 1: 1}) === sequence[4]));
console.log('fib3 test case: 8 -- ', (fib3(7, {0: 0, 1: 1}) === sequence[7]));
