/** 
PROTOTYPAL INHERITANCE IN JS 
*
* In JS (prior to ES6) there is no class inheritance. Instead we have
* prototype-based inheritance. Each object in JS has a property called
* prototype (creating a chain of objects --> prototypes --> objects --> etc).
* You can create an object and then specify another object as it's prototype.
* In this way, you can inherit properties and methods from a parent on the
* prototype chain.
*
* Note that classes were introduced in ES6, but these are syntactic sugar
* on top of prototype inheritance.

* Constructor functions begin with a capital letter. These functions along
* with props and methods defined on their prototypes is the pattern for
* inheritance in JS. These constructor functions + their prototype props
* and methods serve as class definitions. calling new on them creates
* instances of the class.

Note: with ES6, constructors have been replaced with the class syntax.
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
