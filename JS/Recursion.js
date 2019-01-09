/** 
RECURSION IN JS 

Recursion is simply a function calling itself.

Every recursive function uses 3 main sections:

Termination Condition:
This is a catch-all for bad input data. Usually in the form of:
if (something bad...) {
    return;
}

Base Case:
This is the goal of our function. It's the final value before stopping.
Usually in the form of:
if (some final condition...) {
    return some value we know;
}

The Recursion:
This is when the base case has not been met, and includes the part where the 
function is calling itself, iterating downward in some way towards the base case
*/

function factorial(x) {
    // TERMINATION
    if (x < 0) return;

    // BASE
    if (x === 0) return 1;
  
    // RECURSION
    return x * factorial(x - 1);
}

factorial(3); // 6
// 3 * factorial(2)
// 3 * 2 * factorial(1)
// 3 * 2 * 1 * factorial(0)
// 3 * 2 * 1 * 1
// STOP

function reverseString(str) {
    // TERMINATION
    if (typeof str !== 'string') return;

    // BASE
    if (str === '') return '';

    // RECURSION
    return revStr(str.substr(1)) + str[0];
}

revStr('cat'); // tac
// revStr(at) + c
// revStr(t) + a + c
// revStr('') + t + a + c
// '' + t + a + c



// write a function called sumRange that takes in a number and outputs
// the sum of all numbers from 1 up to that number
function sumRange(num) {
    // TERMINATION
    if (typeof num !== 'number' || num < 1) {
        return;
    }

    // BASE
    if (num === 1) {
        return 1;
    }

    // RECURSION
    return num + sumRange(num - 1);
}

function power(base, pow) {
    // TERMINATION
    if (typeof base !== 'number' || typeof pow !== 'number' || pow < 0) {
        return;
    }

    // BASE
    if (pow === 0) {
        return 1;
    }

    // RECURSION
    return base * power(base, pow - 1);
}

// power(3, 3) - 18
// 3 * power(3, 2)
// 3 * 3 * power(3, 1)
// 3 * 3 * 3 * power(3, 0)
// 3 * 3 * 3 * 1
// 18


// write a function 'fib' that takes in a number n and 
// returns the nth number in the fibbonacci sequence
function fib(n) {
    // TERMINATION
    if (typeof n !== 'number' || n < 0) {
        return;
    }

    // BASE
    if (n <= 1) {
        return n;
    }

    // RECURSION
    return fib(n - 1) + fib(n - 2);
}

// write a function that reverses an array using recursion
function rev(arr) {
    // TERMINATION
    if (!Array.isArray(arr)) return;

    // BASE
    if (arr.length <= 1) return arr;

    // RECURSION
    return [
        ...rev(arr.slice(1)), 
        ...arr.slice(0, 1)
    ];
}

// [1, 2, 3]
// [...rev([2, 3]), 1]
// [...rev([3]), 2, 1]
// [3, 2, 1]

