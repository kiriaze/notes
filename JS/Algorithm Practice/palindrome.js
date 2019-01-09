// ANSWER
// ---------------------
var isPalindrome1 = (str) => {
  var letters = str.split('');
  for (var i = 0; i <= Math.floor(letters.length / 2); i++) {
    if (letters[i] !== letters[letters.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

// FUNCTIONAL ANSWER
// ---------------------
var isPalindrome2 = (str) => str
  .split('')
  .reduce((total, n, i, arr) => total && n === arr[arr.length - 1 - i], true);



// TEST CASES
// ---------------------
console.log("test case: 'a'       -- ", isPalindrome1('a') === true);
console.log("test case: 'abc'     -- ", isPalindrome1('abc') === false);
console.log("test case: ''        -- ", isPalindrome1('') === true);
console.log("test case: 'abcba'   -- ", isPalindrome1('abcba') === true);
console.log("test case: 'abccba'  -- ", isPalindrome1('abccba') === true);
console.log("test case: 'abccbaa' -- ", isPalindrome1('abccbaa') === false);

console.log('');

console.log("test case: 'a'       -- ", isPalindrome2('a') === true);
console.log("test case: 'abc'     -- ", isPalindrome2('abc') === false);
console.log("test case: ''        -- ", isPalindrome2('') === true);
console.log("test case: 'abcba'   -- ", isPalindrome2('abcba') === true);
console.log("test case: 'abccba'  -- ", isPalindrome2('abccba') === true);
console.log("test case: 'abccbaa' -- ", isPalindrome2('abccbaa') === false);