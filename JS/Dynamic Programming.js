/** 
DYNAMIC PROGRAMMING IN JS

Dynamic programming is when you store the results of
previously computed values so that you don't have to 
do the same computation many times to arrive at a solution.
A typical time this is useful is with recursion.
Typically, in recursion, you end up running the function on the same
value several times. If you've stored the solution for previously
computed values, you can just look it up, instead of calculating it again
and again during runtime.
*/

// fibonnacci with dynamic programming
class Fib {
    constructor() {
        this.storage = [0, 1];
    }

    fibOfN(n) {
        // TERMINATION
        if (typeof n !== 'number' || n < 0) return;

        // BASE
        if (this.storage.length - 1 >= n) return this.storage[n];

        // RECURSION
        this.storage[n] = this.fibOfN(n - 1) + this.fibOfN(n - 2);
        return this.storage[n];
    }
}

const fib = new Fib();
const of6 = fib.fibOfN(6);
console.log('of6: ', of6);
