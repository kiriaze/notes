var firstUnique = (arr) => {
  var elementCounts = {};

  for (var i = 0; i < arr.length; i++) {
    elementCounts[arr[i]] = elementCounts[arr[i]] ? elementCounts[arr[i]] + 1 : 1;
  }

  for (var i = 0; i < arr.length; i++) {
    if (elementCounts[arr[i]] === 1) {
      return arr[i];
    }
  }

  return 'none';
};

console.log('1: ', firstUnique(['a', 'b', 'c']) === 'a');
console.log('2: ', firstUnique(['a', 'b', 'a']) === 'b');
console.log('3: ', firstUnique(['a', 'b', 'b']) === 'a');
console.log('4: ', firstUnique(['a', 'a', 'a']) === 'none');
