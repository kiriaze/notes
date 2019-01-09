/** 
PROTOTYPAL INHERITANCE IN JS 

In JS, objects inherit properties and methods from their prototype parents. 
This is a parent-child relationship between objects. This is how the built-in
methods in JS for arrays, objects, strings, etc. work - they inherit from the top-level
parent Object for each data type. We can use this chain of parents to create inheritance models.
*/

/** 
Creating our own prototype inheritance with a constructor function 

With ES6, constructors have been replaced with the class syntax.
However, under the hood, classes still use prototypal inheritance
to build class methods and properties.
*/
function Car(make, model, owner) {
    this.model = model;
    this.make = make;
    this.owner = owner;
}

Car.prototype.greetOwner = function() {
    return `Hello, ${this.owner}`;
}

const myCar = new Car('honda', 'accord', 'zach');
myCar.greetOwner(); // 'Hello, zach'

/** 
JS built-in methods and properties use this same mechanism under the hood.

For example, the Array property 'length' exists on the parent object: 'Array',
which all arrays automatically inherit from
*/
const arr = [];
const length = arr.length; // 0
