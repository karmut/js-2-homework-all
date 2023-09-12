//0
let number = 1;

while (number <= 10) {
  console.log(number);
  number++;
}

console.log("-------------------------");

//2

for (let number = 2; number <= 20; number++) {
  if (number % 2 !== 0) {
    continue;
  }

  console.log(number);
}

console.log("-------------------------");
//3

const num = 7;

console.log("Таблиця множення для числа " + num + ":");

for (let i = 1; i <= 10; i++) {
  const result = num * i;
  console.log(num + " x " + i + " = " + result);
}

console.log("-------------------------");
//4

const numbers = [1, 2, 3, 4, 5];

let i = 0;
while (i < numbers.length) {
  console.log(numbers[i]);
  i++;
}
