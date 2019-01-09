/** 
WORKING WITH THE DOM USING VANILLA JS 

There are some basic things to know when trying to work with the DOM
directly with vanilla JS instead of within a framework or with a library.
*/

const idFoo = document.querySelector('#foo'); // returns a DOM Element
const inputs = document.querySelectorAll('inputs'); // returns an array-like NodeList

// It isn't safe to use array methods directly on NodeList types
// So instead, use call on the Array prototype methods: 
function filterOdd(n) => {
    return n.value % 2 === 0;
}
const evensOnly = Array.prototype.filter.call(inputs, filterOdd);

// Add an element to the DOM
const myElement = document.createElement('div');
document.body.appendChild(myElement);

// Useful things to work with an Element
myElement.children
myElement.firstElementChild
myElement.lastElementChild
myElement.previousElementSibling
myElement.nextElementSibling

// Manipulating CSS classes
myElement.classList.add('foo')
myElement.classList.remove('bar')
myElement.classList.toggle('baz')

// Event Listeners
myElement.addEventListener('click', function (event) {
  console.log(event.type + ' got fired')
})

// Event Bubbling is when an event occurs on a given DOM node, that event
// bubbles upwards to its parent elements. This means any event handlers
// on any parents might execute when they should not.
// we use event.stopPropogation() to remove this unwanted behavior.

// event.preventDefault() is useful for stopping any default browser behavior
// so we can manually handle the given event.

// event delegation is when we listen to all events that bubble up onto a parent, then 
// choose which ones to react to.