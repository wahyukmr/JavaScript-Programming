"strict mode";

/* IMMUTABILITY (means that an object may not be changed after it has been created) */
const budget = Object.freeze([
  { value: 250, description: "Sold old TV 📺", user: "jonas" },
  { value: -45, description: "Groceries 🥑", user: "jonas" },
  { value: 3500, description: "Monthly salary 👩‍💻", user: "jonas" },
  { value: 300, description: "Freelancing 👩‍💻", user: "jonas" },
  { value: -1100, description: "New iPhone 📱", user: "jonas" },
  { value: -20, description: "Candy 🍭", user: "matilda" },
  { value: -125, description: "Toys 🚂", user: "matilda" },
  { value: -1800, description: "New Laptop 💻", user: "jonas" },
]);

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

const getLimit = (limits, user) => limits?.[user] ?? 0;

/* PURE FUNCTION (makes the function independent of values ​​outside the function or its parameters) */
function addExpense(state, limits, value, description, user = "jonas") {
  const clearUser = user.toLowerCase();

  // AVOID NESTED CODE (bad code)
  //   let lim;
  //   if (spendingLimits[user]) {
  //     lim = spendingLimits[user];
  //   } else {
  //     lim = 0;
  //   }

  // SOLUTION 1: Operator Ternary
  //   const limit = spendingLimits[user] ? spendingLimits[user] : 0;

  // SOLUTION 2: Optional Chaining
  //   const limit = getLimit(user);

  // BAD CODE:
  //   if (value <= limit) {
  //     budget.push({ value: -value, description: description, user: user });
  //   }

  // SOLUTION: WITH ENHANCED ONJECT LITERAL SYNTAX (Expensesno need to repeat it) ✅
  return value <= getLimit(limits, clearUser)
    ? [...state, { value: -value, description, user: clearUser }]
    : state;
}
const newBudget1 = addExpense(budget, spendingLimits, 10, "Pizza 🍕");
const newBudget2 = addExpense(
  newBudget1,
  spendingLimits,
  100,
  "Going to movies 🍿",
  "Matilda"
);
const newBudget3 = addExpense(newBudget2, spendingLimits, 200, "Stuff", "Jay");
console.log(newBudget1);
console.log(newBudget2);
console.log(newBudget3);

/* change this function to Pure Function (do not change the original data because the Map method returns a new array) */
function checkExpenses(state, limits) {
  // BAD CODE:
  //   for (const entry of budget) {
  //     let lim;
  //     if (spendingLimits[entry.user]) {
  //       lim = spendingLimits[entry.user];
  //     } else {
  //       lim = 0;
  //     }
  //     if (entry.value < -lim) {
  //       entry.flag = "limit";
  //     }
  //   }
  //
  // APPLYING THE DRY PRINCIPLE: no repeating the same code
  //   for (const entry of budget) {
  //     if (entry.value < -getLimit(limits, entry.user)) entry.flag = "limit";
  //   }

  return state.map((entry) =>
    entry.value < -getLimit(limits, entry.user)
      ? { ...entry, flag: "limit" }
      : entry
  );
}
const finalBudget = checkExpenses(newBudget3, spendingLimits);
console.log(finalBudget);

/* as opposed to IMMUTABILITY for manipulating or altering output variables */
// function logBigExpenses(bigLimit) {
//   let output = "";
//   // BAD CODE:
//   // if (entry.value <= -bigLimit) {
//   //   output += `${entry.description.slice(-2)} / `;
//   // }

//   // SOLUTION: with Ternary Operator
//   for (const entry of budget)
//     output +=
//       entry.value <= -bigLimit ? `${entry.description.slice(-2)} / ` : ""; // takes the last 2 characters (because emojis count as 2 characters)

//   output = output.slice(0, -2); // Remove last '/ '
//   console.log(output);
// }

// SOLUTION: with Functional way
function logBigExpenses(state, bigLimit) {
  const bigExpenses = state
    .filter((entry) => entry.value <= -bigLimit)
    .map((entry) => entry.description.slice(-2))
    .join(" / ");

  console.log(bigExpenses);
}

// The original data remains unchanged.
console.log(budget);

logBigExpenses(finalBudget, 500);
