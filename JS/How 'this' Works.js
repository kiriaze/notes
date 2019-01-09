/**
HOW 'this' WORKS IN JS

'this' is a built-in property of objects that specifies the context of the given scope.

Regular functions 'this' property is defined by the context of the object that called the function.

ES6 arrow functions work differently, they use lexical scoping for 'this', meaning where the function
is defined determines the 'this' context. 
*/

/** 
Calling greet on myObj means that the 'this' context for greet will be myObj. 
When calling not from on myObj, even though the function didn't change, 'this' context is changed.
*/
const myObj = {
    name: 'zach',
    greet: function(name) {
        return `Hello, ${this.name}! My name is ${name}`;
    }
};
const result1 = myObj.greet('sarah'); // 'Hello, zach! My name is sarah'
const greet = myObj.greet;
const result2 = greet('sarah') // 'Hello, undefined! My name is sarah'

/** 
In this case, growUp is executed outside the Person context, and will be undefined as a result. 
ES6 arrow functions don't create their own 'this', and so fixing this bug would be as simple as
switching the below to an arrow function instead.
*/
function Person() {
  // The Person() constructor defines `this` as an instance of itself.
  this.age = 0;

  setInterval(function growUp() {
    // In non-strict mode, the growUp() function defines `this` 
    // as the global object (because it's where growUp() is executed.), 
    // which is different from the `this`
    // defined by the Person() constructor. 
    this.age++;
  }, 1000);
}
var p = new Person();