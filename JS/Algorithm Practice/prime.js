function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}



// some prime numbers
var prime2 = 2;
var prime3 = 3;
var prime5 = 5;
var prime7 = 7;
var prime11 = 11;
var prime13 = 13;

for (var i = 2; i < 20; i++) {
  console.log(i, isPrime(i));
}
