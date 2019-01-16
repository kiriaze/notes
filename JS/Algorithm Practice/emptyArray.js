/** Write a function that empties an array of all it's values */

function emptyArray(arr) {
  const arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    arr.pop();
  }
}

const arr1 = [];
const arr2 = [1, 2, 3, 4];

emptyArray(arr1);
emptyArray(arr2);

console.log(arr1.length === 0 ? 'passed' : 'failed');
console.log(arr2.length === 0 ? 'passed' : 'failed');
