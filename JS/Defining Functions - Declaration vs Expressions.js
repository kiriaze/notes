/**
 * Function declarations vs expressions
 *
 * variable hoisting (with var keyword only) results in var 'expression'
 * getting 'hoisted' to the top of the outer function (declared, but not
 * initialized to it's value). This results in an error when called before
 * defined. This is as opposed to the function declaration, which get's
 * hoisted to the top of the outer function fully.
 */
(function declarationVsExpression() {
  declaration(); // this is a function declaration.
  expression(); // error: expression is not a function.

  var expression = function() {
    console.log('this is a function expression.');
  };

  function declaration() {
    console.log('this is a function declaration.');
  }
})();
