//1
const user = {
  name: "John",
  age: 30,
  hobby: "reading",
  premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

for (const key of Object.keys(user)) {
  console.log(key + ": " + user[key]);
}

//2
function countProps(obj) {
  const count = 0;
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      count++;
    }
  }
  return count;
}

const userinfo = {
  name: "John",
  age: 30,
  hobby: "reading",
  premium: true,
};

const propCount = countProps(userinfo);
console.log(propCount);

//3

function findBestEmployee(employees) {
  let bestEmployee = "";
  let maxTasks = 0;

  for (let employee in employees) {
    if (employees.hasOwnProperty(employee)) {
      if (employees[employee] > maxTasks) {
        maxTasks = employees[employee];
        bestEmployee = employee;
      }
    }
  }

  return bestEmployee;
}

const employees = {
  John: 10,
  Jane: 15,
  Alex: 8,
  Emily: 12,
};

const bestEmployeeName = findBestEmployee(employees);
console.log(bestEmployeeName);

//4

function findBestEmployee(employees) {
  const bestEmployee = "";
  const maxTasks = 0;

  for (const employee in employees) {
    if (employees.hasOwnProperty(employee)) {
      if (employees[employee] > maxTasks) {
        maxTasks = employees[employee];
        bestEmployee = employee;
      }
    }
  }

  return bestEmployee;
}

const employees2 = {
  John: 10,
  Jane: 15,
  Alex: 8,
  Emily: 12,
};

const bestEmployeeName2 = findBestEmployee(employees2);
console.log(bestEmployeeName2);

//5

function getAllPropValues(arr, prop) {
  let propValues = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].hasOwnProperty(prop)) {
      propValues.push(arr[i][prop]);
    }
  }

  return propValues;
}
const products = [
  { name: "apple", price: 1 },
  { name: "banana", price: 0.5 },
  { name: "orange", price: 0.8 },
];

const prices = getAllPropValues(products, "price");
console.log(prices);

//6
function calculateTotalPrice(allProducts, productName) {
  for (let i = 0; i < allProducts.length; i++) {
    if (allProducts[i].name === productName) {
      return allProducts[i].price * allProducts[i].quantity;
    }
  }
  return 0;
}

let products2 = [
  { name: "apple", price: 1, quantity: 5 },
  { name: "banana", price: 0.5, quantity: 10 },
  { name: "orange", price: 0.8, quantity: 8 },
];

let totalPrice = calculateTotalPrice(products2, "banana");
console.log(totalPrice);

//7

const account = {
  balance: 1000,
  transactions: [],

  addTransaction: function (type, amount) {
    this.transactions.push({ type: type, amount: amount });
  },

  withdraw: function (amount) {
    if (amount <= 0 || amount > this.balance) {
      console.log("Invalid withdrawal amount");
      return;
    }

    this.balance -= amount;
    this.addTransaction("withdrawal", amount);
    console.log("Withdrawal successful. New balance: " + this.balance);
  },

  deposit: function (amount) {
    if (amount <= 0) {
      console.log("Invalid deposit amount");
      return;
    }

    this.balance += amount;
    this.addTransaction("deposit", amount);
    console.log("Deposit successful. New balance: " + this.balance);
  },

  getTransactionHistory: function () {
    return this.transactions;
  },
};

console.log("Initial balance: " + account.balance);
account.withdraw(200);
account.deposit(500);
console.log("Transaction history:", account.getTransactionHistory());
