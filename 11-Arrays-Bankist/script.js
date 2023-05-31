"use strict";

/////////////////////////////////////////////////
// BANKIST APP
/* the use of object data type why not with Map because as if we are accessing data from the API, the output data is in the form of an object */

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450000, -400, 300000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

// instead of using variable it's better to use function to pass data (global scope)
function rupiahFormat(format) {
  const formatString = format.toString().split("").reverse().join("");
  const formatDigit = formatString.match(/\d{1,3}/g);
  const result = formatDigit.join(".").split("").reverse().join("");
  return result;
}

function absoluteValue(value) {
  const absolute = Math.abs(value);
  const rupiah = rupiahFormat(absolute);
  return rupiah;
}

function displayMovement(movement, sort = false) {
  // set textContent = 0
  containerMovements.innerHTML = "";

  const sortMovement = sort ? movement.slice().sort((a, b) => a - b) : movement;

  sortMovement.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const inRupiah = absoluteValue(mov);

    const HTML = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    }. ${type}</div>
          <div class="movements__value">${
            mov < 0 ? "-" : ""
          }Rp ${inRupiah}</div>
        </div>
        `;

    containerMovements.insertAdjacentHTML("afterbegin", HTML);
  });
}

function calcDisplayBalance(account) {
  const balance = account.movements.reduce((acc, mov) => acc + mov, 0);
  account.totalBalance = balance;
  const inRupiah = absoluteValue(account.totalBalance);
  labelBalance.textContent = `Rp ${inRupiah}`;
}

function calcDisplaySummary(account) {
  const incomes = account.movements
    .filter((mov) => mov > 0)
    .reduce((acc, move) => acc + move, 0);
  const inRupiah1 = absoluteValue(incomes);
  labelSumIn.textContent = `Rp ${inRupiah1}`;

  const out = account.movements
    .filter((mov) => mov < 0)
    .reduce((acc, move) => acc + move, 0);
  const inRupiah2 = absoluteValue(out);
  labelSumOut.textContent = `Rp ${inRupiah2}`;

  // 1.2%
  const interest = account.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * account.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 100;
    })
    .reduce((acc, int) => acc + int, 0);
  const inRupiah3 = absoluteValue(interest);
  labelSumInterest.textContent = `Rp ${inRupiah3}`;
}

function createUserName(account) {
  account.forEach(function (acct) {
    // create a new object
    acct.userName = acct.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
}
createUserName(accounts);

function updateUI(value) {
  displayMovement(value.movements);

  calcDisplayBalance(value);

  calcDisplaySummary(value);
}

// Event handlers
let currentAccount;
btnLogin.addEventListener("click", function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.userName === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //display UI andd messages
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;

    containerApp.style.opacity = "100";

    inputLoginUsername.value = inputLoginPin.value = "";

    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    (acc) => acc.userName === inputTransferTo.value
  );

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.totalBalance >= amount &&
    receiverAcc?.userName !== currentAccount.userName
  ) {
    // doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // clearing input after the transfer completes
    inputTransferAmount.value = inputTransferTo.value = "";

    // updateUI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);
  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    // add movements
    currentAccount.movements.push(amount);

    // update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = "";
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.userName &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const findIndex = accounts.findIndex(
      (account) => account.userName === currentAccount.userName
    );
    console.log(findIndex);

    // delete the account
    accounts.splice(findIndex, 1);

    // Hide UI
    containerApp.style.opacity = "0";
  }

  inputCloseUsername.value = inputClosePin.value = "";
});

let sorted = true;
btnSort.addEventListener("click", function (e) {
  e.preventDefault;
  displayMovement(currentAccount.movements, sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
// LECTURES
/*  ****************************************************************************************
 *   Simple Array Methods
 *  *****************************************************************************************/
let arr = ["a", "b", "c", "d", "e", "f"];
{
  //////////////////////////////////////////////////////////////////////////////////////
  // Slice Methods = extract part of any array, without changing the original array ( essentially, taking the array snippet )
  // take it according to the index number
  console.log(arr.slice(2));
  console.log(arr.slice(2, 4));

  // take the element from the end
  console.log(arr.slice(-2));
  console.log(arr.slice(1, -2));

  // get a copy of the array
  console.log(arr.slice());
  console.log(arr.slice([...arr])); // can also with spread operator

  //////////////////////////////////////////////////////////////////////////////////////
  //  - Splice Methods = Same as array, the difference is that splice will change the original array
  //  - used to get the index position and can delete and add to the index that has been selected
  //  - syntax is: splice(start, remove. add)
  arr.splice(5);
  console.log(arr);
  arr.splice(1, 2);
  console.log(arr);
  arr.splice(-1);
  console.log(arr);

  //////////////////////////////////////////////////////////////////////////////////////
  // Reverse Methods = Returns the array in reverse, and will change the original array
  arr = ["a", "b", "c", "d", "e"];
  const arr2 = ["j", "k", "l", "m", "n", "o"];
  console.log(arr2.reverse()); // reverse array
  console.log(arr2);

  ///////////////////////////////////////////////////////////////////////////////
  // concat Methods = Concatenate two arrays (does not change the original array)
  const letters = arr.concat(arr2);
  console.log(letters);
  console.log(...arr, ...arr2); // can also with spread operator

  ///////////////////////////////////////////////////////////////////////
  // join Methods = Create a separator between arrays and return a string
  arr = ["a", "b", "c", "d", "e"];
  console.log(arr.join(","));
}

/*  ****************************************************************************************
 *   The new at Methods
 *  *****************************************************************************************/
/* At method = another way to get the array according to the index number */
{
  const arr4 = [23, 45, 67];
  console.log(arr4[0]);
  console.log(arr4.at(0));

  // getting last array element
  console.log(arr4.slice(-1)[0]);
  console.log(arr4.length - 1);

  console.log(arr4.at(-1)); // with at simpler

  // at Method in string
  console.log("wahyu".at(0));
  console.log("wahyu".at(-1));
}

/*  ****************************************************************************************
 *   Looping Arrays: forEach
 *  *****************************************************************************************/
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////////////////////////
// Comparison of "for of loop" with "forEach" in accessing the index
{
  for (const movement of movements) {
    if (movement > 0) {
      console.log(`with for of loop: You deposit ${movement}`);
    } else {
      console.log(`with for of loop: You withdraw ${Math.abs(movement)}`);
    }
  }

  movements.forEach(function (movement) {
    if (movement > 0) {
      console.log(`with forEach: You deposit ${movement}`);
    } else {
      console.log(`with forEach: You withdraw ${Math.abs(movement)}`);
    }
  });
  // occurrence of each iteration
  // 0: function(200)
  // 1: function(450
  // 2: function(400)
  // etc...
}

////////////////////////////////////////////////////////
// what if you want to access variables and their index
{
  // in for of loop first variable is index dan second variable is current element
  for (const [i, movement] of movements.entries()) {
    if (movement > 0) {
      console.log(
        `with for of loop = Movement ${i + 1}: You deposit ${movement}`
      );
    } else {
      console.log(
        `with for of loop = Movement ${i + 1}: You withdraw ${Math.abs(
          movement
        )}`
      );
    }
  }

  // in forEach the first parameter is the current element, the second is the index, and the third is the value of the entire element
  movements.forEach(function (currentValue, i, arr) {
    if (currentValue > 0) {
      console.log(
        `with forEach = Movement ${i + 1}: You deposit ${currentValue}`
      );
    } else {
      console.log(
        `with forEach = Movement ${i + 1}: You withdraw ${Math.abs(
          currentValue
        )}`
      );
    }
  });
}

/*  ****************************************************************************************
 *   forEach with Maps and Sets
 *  *****************************************************************************************/
{
  ///////////////////
  // forEach in Map
  // - value in the parameter same as above
  const currencies = new Map([
    ["USD", "United States dollar"],
    ["EUR", "Euro"],
    ["GBP", "Pound sterling"],
  ]);

  currencies.forEach(function (value, key, Map) {
    console.log(`${key}: ${value}`);
  });

  ///////////////////
  // forEach in Set
  // - because Set does not have a key, so the value and the key will be the same value
  const currenciesUnique = new Set([
    "USD",
    "EUR",
    "EUR",
    "GBP",
    "Pound",
    "USD",
    "EUR",
  ]);
  console.log(currenciesUnique);

  currenciesUnique.forEach(function (value, key, set) {
    console.log(`${key}: ${value}`);
  });
}

/*  ****************************************************************************************
 *   CODING CHALLENGE #01
 *  ****************************************************************************************
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Your tasks:
Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:
    1. Julia found out that the owners of the first and the last two dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
    2. Create an array with both Julia's (corrected) and Kate's data
    3. For each remaining dog, log to the console whether it's an adult ("Dog number 1
    is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy � ")
    4. Run the function for both test datasets
    
Test data:
    - Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
    - Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
    
Hints: Use tools from all lectures in this section so far �
    */
{
  function checkDog(dogsJulia, dogsKate) {
    const correctedDog = dogsJulia.slice();
    correctedDog.splice(0, 1);
    correctedDog.splice(-2);

    const leftoverDog = correctedDog.concat(dogsKate);
    console.log(leftoverDog);

    leftoverDog.forEach(function (dog, index) {
      if (dog > 3) {
        console.log(`Dog number ${index + 1} is an adult`);
      } else {
        console.log(`Dog number ${index + 1} is still a puppy`);
      }
    });
  }
  // checkDog([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
  checkDog([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
}

/*  ****************************************************************************************
 *   Data Transformation: Map
 *  *****************************************************************************************/
const rupiah = [1000, 100000, 5000, 200000];
const rphToUSD = 15000;

{
  // Example with regular function
  const movementsUSD = rupiah.map(function (mov) {
    return mov / rphToUSD;
  });
  console.log(rupiah); // does not change the original data
  console.log(movementsUSD);

  // Example with arrows function
  const movementsUSD2 = rupiah.map((mov) => mov / rphToUSD);
  console.log(movementsUSD2);

  // Example Looping: for of with map
  const movementsUSDfor = [];
  for (const mov of rupiah) movementsUSDfor.push(mov / rphToUSD);
  console.log(movementsUSDfor);

  // Map method like a forEach
  const movementsDescriptions = rupiah.map(
    (mov, i, arr) =>
      `Movement ${i + 1}: You ${mov > 0 ? "deposit" : "withdraw"} ${Math.abs(
        mov
      )}`
  );
  console.log(movementsDescriptions);
}

/*  ****************************************************************************************
 *   Data Transformation: Filter
 *  *****************************************************************************************/
{
  const deposit = movements.filter(function (mov) {
    return mov > 0;
  });
  console.log(movements);
  console.log(deposit);

  const withdrawals = movements.filter((mov) => mov < 0);
  console.log(withdrawals);
}

/*  ****************************************************************************************
 *   Data Transformation: Reduce
 *  *****************************************************************************************/
{
  // summing Values
  const balance = movements.reduce(
    (accumulator, current) => accumulator + current,
    0
  );
  console.log(balance);

  // Get maximum value
  const max = movements.reduce((accumulator, current) => {
    if (accumulator > current) return accumulator;
    else return current;
  }, 0);
  console.log(max);

  // filter even numbers and then multiply 2
  const numbers = [1, 2, 3, 4, 5, 6];

  const result = numbers.reduce((acc, currentNumbers) => {
    if (currentNumbers % 2 === 0) {
      acc.push(currentNumbers * 2);
    }
    return acc;
  }, []);
  console.log(result);

  // loopig
  let balance2 = 0;
  for (const mov of movements) balance2 += mov;
  console.log(balance2);
}

/*  ****************************************************************************************
 *   CODING CHALLENGE #02
 *  ****************************************************************************************
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Your tasks:
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:
    1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4
    2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
    3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages �)
    4. Run the function for both test datasets

Test data:
    - Data 1: [5, 2, 4, 1, 15, 8, 3]
    - Data 2: [16, 6, 10, 5, 6, 1, 4]
    */
{
  function calcAverageHumanAge(ages) {
    const DogAgeInHumanYears = ages.map((ageDog) =>
      ageDog <= 2 ? 2 * ageDog : 16 + ageDog * 4
    );

    const filterDogAge = DogAgeInHumanYears.filter(
      (humanAge) => humanAge >= 18
    );

    // const averages =
    //     filterDogAge.reduce((acc, current) => acc + current, 0) / filterDogAge.length;
    const averages = filterDogAge.reduce(
      (acc, current, i, arr) => acc + current / arr.length,
      0
    );
    return averages;
  }
  const data1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
  const data2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
}

/*  ****************************************************************************************
 *   The Magic of Chaining Methods
 *  *****************************************************************************************/
{
  const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
  const rphToUSD = 15000;

  // pipeline
  const totalDepositsUSD = movements
    .filter((mov) => mov > 0)
    .map((move) => move * rphToUSD)
    .reduce((acc, move) => acc + move, 0);
  console.log(totalDepositsUSD);
}

/*  ****************************************************************************************
 *   CODING CHALLENGE #03 
 *  ****************************************************************************************
Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
as an arrow function, and using chaining!

Test data:
    - Data 1: [5, 2, 4, 1, 15, 8, 3]
    - Data 2: [16, 6, 10, 5, 6, 1, 4]
    */
{
  function calcAverageHumanAge(ages) {
    const averages = ages
      .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
      .filter((humanAge) => humanAge >= 18)
      .reduce((acc, current, i, arr) => acc + current / arr.length, 0);
    return averages;
  }
  const data1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
  const data2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
  console.log(data1, data2);
}

/*  ****************************************************************************************
 *   The Find Method
 *  *****************************************************************************************/
{
  const firstWithdrawal = movements.find((mov) => mov < 0);
  console.log(movements);
  console.log(firstWithdrawal);

  const account = accounts.find((acc) => acc.owner === "Jessica Davis");
  console.log(accounts);
  console.log(account);
}

/*  ****************************************************************************************
 *   Method some and avery
 *  *****************************************************************************************/
// some Method
{
  // includes: just equality
  console.log(movements.includes(-130));

  // Some: Conditional equality
  console.log(movements.some((mov) => mov === -130));

  const anyDeposits = movements.some((mov) => mov > 0);
  console.log(anyDeposits);
}

// every Method
{
  console.log(movements.every((mov) => mov > 0)); // false
  console.log(account4.movements.every((mov) => mov > 0)); // true
}

// separate callback
{
  const deposit1 = (mov) => mov > 0;
  console.log(movements.every(deposit1));
  console.log(movements.some(deposit1));
  console.log(movements.filter(deposit1));
}

/*  ****************************************************************************************
 *   Method flat and flatMap
 *  *****************************************************************************************/
// flat method
{
  // Depth 1
  const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
  console.log(arr.flat());

  // Depth 2
  const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
  console.log(arrDeep.flat(2)); // depth 2

  // Flat method
  const overalBalance = accounts
    .map((acc) => acc.movements)
    .flat()
    .reduce((acc, current) => acc + current, 0);
  console.log(overalBalance);
}

// FlatMap method
{
  const overalBalance2 = accounts
    .flatMap((acc) => acc.movements)
    .reduce((acc, current) => acc + current, 0);
  console.log(overalBalance2);
}

/*  ****************************************************************************************
 *   Sorting arrays
 *  *****************************************************************************************/
// array string
{
  const owners = ["jonas", "wahyu", "joko", "zabil"];
  console.log(owners.sort());
  console.log(owners);
}

// array number
{
  /* Rules sort callback function */
  // return < 0 , A B (small to big value)
  // return > 0 , B A (big to small value)

  const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

  movements.sort((current, nextValue) => {
    // small to big value
    if (current > nextValue) return 1;
    if (current < nextValue) return -1;

    // doesn't work on mixed array ↓
    // movements.sort((a, b) => a - b)
  });
  console.log(movements);

  movements.sort((current, nextValue) => {
    // big to small value
    if (current > nextValue) return -1;
    if (current < nextValue) return 1;

    // doesn't work on mixed array ↓
    // movements.sort((a, b) => b - a)
  });
  console.log(movements);
}

/*  ****************************************************************************************
 *   More Ways of Creating And Filling Arrays
 *  *****************************************************************************************/
// create an array if you already know the array data
{
  const arr3 = [1, 2, 3, 4, 5, 6]; // wrote it literally
  console.log(new Array(1, 2, 3, 4, 5, 6)); // Arrays Construction function
}

// create arrays programmatically (without defining data)
{
  const arr3 = [1, 2, 3, 4, 5, 6];

  // Empety arrays + fill method
  const x = new Array(6); // show only array length
  x.fill(1, 3, 5); // the fill method is similar to the slice method
  console.log(x);

  arr3.fill(23, 2, 4);
  console.log(arr3);
}

// Array.from Creating a new array from beginning to end
{
  const y = Array.from({ length: 6 }, () => 1);
  console.log(y);

  const z = Array.from({ length: 6 }, (_, i) => i + 1); // unused parameters can be replaced with _
  console.log(z);
}

// create an array from the result of querySelectorAll which is a NodeList(which is not actually an array), converted into an array with Array.from
{
  labelBalance.addEventListener("click", function () {
    const movementUI = Array.from(
      document.querySelectorAll(".movements__value"),
      (el) =>
        Number(
          el.textContent
            .replace("Rp", "")
            .replace(" ", "")
            .replace(".", "")
            .trim()
        )
    );

    console.log(movementUI);

    // get nodeList
    const movementsUI2 = [...document.querySelectorAll(".movements__value")];
    console.log(movementsUI2);
  });
}

/*  ****************************************************************************************
 *   More Ways of Creating And Filling Arrays
 *  *****************************************************************************************/
// 1. get deposit balance
{
  const bankDepositSum = accounts
    .flatMap((account) => account.movements)
    .filter((mov) => mov > 0)
    .reduce((sum, current) => sum + current, 0);
  console.log(bankDepositSum);
}

// 2. add a deposit of more than 1000
{
  // first way
  const numDeposits1 = accounts
    .flatMap((account) => account.movements)
    .filter((mov) => mov >= 1000).length;
  console.log(numDeposits1);
  // second way
  const numDeposits2 = accounts
    .flatMap((account) => account.movements)
    .reduce((acc, current) => (current >= 1000 ? ++acc : acc), 0);
  console.log(numDeposits2);
}

// prefixed ++ operator
{
  // before raising the value, it will return the original value first
  let a = 10;
  console.log(a++);
  // directly incrementing the value, without returning the original value first
  a = 10;
  console.log(++a);
}

// 3. Creating an object containing the amount of the deposit and withdrawal
{
  const sums = accounts
    .flatMap((account) => account.movements)
    .reduce(
      (acc, current) => {
        current > 0 ? (acc.deposit += current) : (acc.withdrawals += current);
        return acc;
      },
      { deposit: 0, withdrawals: 0 }
    );
  console.log(sums);
}

// konversi array to string page title
{
  function convertTitleCase(title) {
    const capitzalize = (str) => str[0].toUpperCase() + str.slice(1);

    const exceptions = [
      "a",
      "an",
      "and",
      "the",
      "but",
      "or",
      "on",
      "in",
      "with",
    ];

    const titleCase = title
      .toLowerCase()
      .split(" ")
      .map((word) => (exceptions.includes(word) ? word : capitzalize(word)))
      .join(" ");

    return capitzalize(titleCase);
  }
  console.log(convertTitleCase("this is a nice title"));
  console.log(convertTitleCase("this is a LONG title but not too long"));
  console.log(convertTitleCase("and here is another title with an EXAMPLE"));
}

/*  ****************************************************************************************
 *   CODING CHALLENGE #04     
 *  ****************************************************************************************
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite. Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

Your tasks:
    1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do not create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
    2. Find Sarah's dog and log to the console whether it's eating too much or too little. Hint: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) �
    3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
    4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
    5. Log to the console whether there is any dog eating exactly the amount of food that is recommended (just true or false)
    6. Log to the console whether there is any dog eating an okay amount of food (just true or false)
    7. Create an array containing the dogs that are eating an okay amount of food (try to reuse the condition used in 6.)
    8. Create a shallow copy of the 'dogs' array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects �)

Hints:
    - Use many different tools to solve these challenges, you can use the summary lecture to choose between them �
    - Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion
*/
{
  // Test data:
  const dogs = [
    { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
    { weight: 8, curFood: 200, owners: ["Matilda"] },
    { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
    { weight: 32, curFood: 340, owners: ["Michael"] },
  ];

  ////////////////////////////////////////////////////////////////////////////////////////
  // 1. calculate the recommended food portion and add it to the object as a new property
  dogs.forEach(
    (dog) => (dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28))
  );
  console.log(dogs);

  /////////////////////////////////////
  // 2. find Sarah in the owners array
  const dogSarah = dogs.find((dog) => dog.owners.includes("Sarah"));
  console.log(dogSarah);
  console.log(
    `Sarah's dog is eating too ${
      dogSarah.curFood > dogSarah.recommendedFood ? "much" : "little"
    }`
  );

  ////////////////////////////////////////////////////
  // 3. Create an array containing all owners of dogs
  const ownerEatTooMuch = dogs
    .filter((dog) => dog.curFood > dog.recommendedFood)
    .flatMap((dog) => dog.owners);
  console.log(ownerEatTooMuch);

  const ownerEatToolittle = dogs
    .filter((dog) => dog.curFood < dog.recommendedFood)
    .flatMap((dog) => dog.owners);
  console.log(ownerEatToolittle);

  ////////////////////////////////////////
  // 4. konvert to string in the number 3
  console.log(`${ownerEatTooMuch.join(" and ")}'s dogs eat too much!'`);

  console.log(`${ownerEatToolittle.join(" and ")}'s dogs eat too little!'`);

  ///////////////////////////////////////////////////////////////
  // 5. any dog ​​that eats exactly the recommended amount of food
  console.log(dogs.some((dog) => dog.curFood === dogs.recommendedFood));

  //////////////////////////////////////////////////////////////////////////////////
  // 6.  Create an array containing the dogs that are eating an okay amount of food
  function eatingOkayAmount(dog) {
    if (
      dog.curFood > dog.recommendedFood * 0.9 &&
      dog.curFood < dog.recommendedFood * 1.1
    )
      return dog;
  }
  console.log(dogs.some(eatingOkayAmount));

  /////////////////////////////////////////////////////////////////////////////////
  // 7. Create an array containing the dogs that are eating an okay amount of food
  console.log(dogs.filter(eatingOkayAmount));

  ///////////////////////////////////////////////////////////////////////////////////////
  // 8. Create a copy array dogs and sort it by recommended food portion in an ascending
  console.log(
    dogs.slice().sort((a, b) => a.recommendedFood - b.recommendedFood)
  );
}
