/** 
CLOSURES IN JS 

Closures are the idea that function declarations have access
to the variables in the execution context's scope, even if that
scope has been removed. This is useful for maintaining private access
to values. 
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
