function greatestCommonDivisor(num1, num2) {
  var result = 1;

  for (let i = 1; i <= Math.min(num1, num2); i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      result = i;
    }
  }

  return result;
}

console.log('[10, 5] : ', greatestCommonDivisor(10, 5));
console.log('[20, 10]: ', greatestCommonDivisor(20, 10));
