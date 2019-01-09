/** 
USE STRICT IN JS 

including the string 'use strict' in a block of JS code tells 
the browser to evaluate the code during runtime with a stricter set
of rules than the default. By enabling this, the developer guards against
some typical sources of JS bugs due to less-than-ideal language features.
*/

'use strict';

// Assignment to a non-writable global
var undefined = 5; // throws a TypeError
var Infinity = 5; // throws a TypeError

// Protects against attempts to delete non-deletable properties
delete Object.prototype; // throws a TypeError

// Forbids setting properties on primitive values
false.true = '';         // TypeError
(14).sailing = 'home';   // TypeError
'with'.you = 'far away'; // TypeError

