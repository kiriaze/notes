function removeDuplicates(arr) {
  var itemsToRemove = [];
  var result = [];

  for (let i = 0; i < arr.length; i++) {
    let firstInstanceIndex = arr.indexOf(arr[i]);
    if (firstInstanceIndex !== i) {
      itemsToRemove.push(arr[i]);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (!itemsToRemove.includes(arr[i])) {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log('[1, 2, 3, 4, 5]', removeDuplicates([1, 2, 3, 4, 5]));
console.log('[1, 2, 3, 3, 5]', removeDuplicates([1, 2, 3, 3, 5]));
