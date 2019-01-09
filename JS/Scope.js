/**
VARIABLE SCOPE IN JS

There are different types of scope in JS:
  - function scope
  - global scope
  - block-level scope

Scope itself is the idea of where a variable's definition exists 
in relation to where it is defined.

The 'var' keyword creates function-scoped variables. This means that a variable
defined using the 'var' keyword is visible in the function where it's defined 
(or global scope if defined there), and in any functions defined within that function.

The 'const' and 'let' keywords for variable declaration introduced in ES6 use block scoping.
This means variables declared using 'const' or 'let' are defined only within the given block
(usually defined by curly braces).
*/

var x = 'hi';
function foo() {
    var y = ' zach.';
    return x + y;
}
console.log(foo()); // 'hi zach.
console.log(x + y); // ReferenceError: y is undefined