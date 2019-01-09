/** 
VARIABLE AND FUNCTION HOISTING IN JS 

Variables defined using the 'var' keyword and function declarations 
are hoisted to the top of their scope (usually to the top of the 
function where they are defined).

Function expressions are not.

'const' and 'let' introduced in ES6 are not hoisted.
*/

function foo() {
    return x + y;
    var x = 5;
    var y = 3;
}
console.log(foo()); // NaN

function bar() {
    return x + y;
}
console.log(bar()); // ReferenceError: x is not defined