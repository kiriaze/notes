/** 
APPLY, CALL, AND BIND IN JS 

These built-in methods on functions in JS are responsible for 
setting the 'this' context during function execution.
*/

/** 
Apply allows you to specifiy the 'this' context at execution time, 
and pass in an array of params to the executing function.
*/
function greet(name) {
    return `Hello, ${this.owner}! My name is ${name}`;
}

const context = {
    owner: 'zach'
};

const result = greet.apply(context, ['sarah']); // 'Hello, zach! My name is sarah'

/** 
Call does the same thing as apply, 
but you pass in any parameters individually instead of as an array. 
*/
function greet(name) {
    return `Hello, ${this.owner}! My name is ${name}`;
}

const context = {
    owner: 'zach'
};

const result = greet.call(context, 'sarah'); // 'Hello, zach! My name is sarah'

/** 
Bind returns a new function, with the 'this' property set, 
and allows it to be executed at a later time.
*/
function greet(name) {
    return `Hello, ${this.owner}! My name is ${name}`;
}

const context = {
    owner: 'zach'
};

const greetContextAware = greet.bind(context); 
const result = greetContextAware('sarah');
