/**
* Closures
*
* Every function in JS creates a closure. A closure is an inner function
* (within an outer/parent function or global scope) that captures it's
* parent's scope and retains it, even after the parent has been executed.
* The result is a function that has access to variables defined in a parent
* that can no longer be accessed directly.
*/

function createCounter() {
    var count = 1;
    return function() {
        return count++;
    }
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
