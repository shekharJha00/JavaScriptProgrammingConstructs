var totalPrimeNumber = 0;
const n=prompt("enter a no greater than 1:")
for (let i = 1; i <= n; i++) {
  let prime = i > 1;
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j == 0) {
      prime = false;
      break;
    }
  }
  if (prime) {
    console.log(i, "is a prime number");
    totalPrimeNumber += 1;
  } else {
    console.log(i, "is not a prime number");
  }
}