"use strict";

/*  ************************
 *   VALUES AND VARIABLES
 *  ************************/
let country = "indonesian";
let continent = "asian";
let population = 40;
console.log(country);
console.log(continent);
console.log(population);

/*  ***************
 *   DATA TYPES
 *  ***************/
let isIsland = true;
let language;
console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);
console.log(typeof isIsland);
console.log(typeof language);

/*  ***********************
 *   LET, CONST, AND VAR
 *  ***********************/
// change let to const
// language = "indonesia";
// const country = 'indonesian';
// const continent = 'asian';

/*  *******************
 *   BASIC OPERATORS
 *  *******************/
console.log((population /= 2));
console.log(++population);
console.log(population > 6);
console.log(population < 33);
let description =
  country +
  " is in " +
  continent +
  " , and is in " +
  population +
  " million people speak " +
  language;
console.log(description);

/*  **********************
 *   CODING CHALLENGE 01
 *  **********************
Your tasks:
    1. Store Mark's and John's mass and height in variables
    2. Calculate both their BMIs using the formula (you can even implement both
    versions)
    3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
        */

/* Data 1 */
let marksWEight = 78;
let marksHeight = 1.69;
let johnWeight = 92;
let johnHeight = 1.95;

let markBMI = marksWEight / (marksHeight * marksHeight);
let johnBMI = johnWeight / (johnHeight * johnHeight);
let markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI, markHigherBMI);

/* Data 2 */
marksWEight = 95;
marksHeight = 1.88;
johnWeight = 85;
johnHeight = 1.76;

markBMI = marksWEight / (marksHeight * marksHeight);
johnBMI = johnWeight / (johnHeight * johnHeight);
markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI, markHigherBMI);

/*  *********************************
 *   STRINGS AND TEMPLATE LITERALS
 *  *********************************/
// better this way than the above
description = `${country} is in ${continent}, and is in ${population} million people speak ${language}`;
console.log(description);

/*  ******************************************
 *   TAKING DECISIONS : IF / ELSE STATEMENT
 *  ******************************************/
if (population > 33) {
  console.log(`${country} population is above average`);
} else {
  console.log(`${country} is ${33 - population} million below average`);
}

/*  ************************
 *   CODING CHALLENGE 02
 *  ************************
Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
   Your tasks:
    1. Print a nice output to the console, saying who has the higher BMI. The message
    is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
    2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
    BMI (28.3) is higher than John's (23.9)!"
        */
if (marksHeight > johnHeight) {
  console.log(
    `Mark's BMI (${marksHeight}) is higher than John's (${johnHeight})!!`
  );
} else {
  console.log(
    `John's BMI (${johnHeight}) is higher than Mark's (${marksHeight})!!`
  );
}

/*  ********************************
 *   TYPE CONVERSION AND COERCION
 *  ********************************/
let x = 4 - "5"; // if added will result string 45
console.log(x); // result -1

x = "19" + "13" - "17";
console.log(x); // result '1.913' - '17' = 1896

x = "19" - "13" + "17";
console.log(x); // result is string '6' + '17' = '617'

x = "19" - "13" + 17;
console.log(x); // result '6' + 17 = 23

x = "123" < 57;
console.log(x); // result false

x = 5 + 6 + "4" + 9 - 4 - 2;
console.log(x); // result '114' + 9 - 4 - 2 = 1143

/*  *********************************
 *   quality Operators: == vs. ===
 *  *********************************/
// const sumNeighbours = Number(
//     prompt("How many neighbour countries does your country have?")
// );
// if (sumNeighbours === 1) {
//     console.log("only 1 border!");
// } else if (sumNeighbours > 1) {
//     console.log("more than 1 border");
// } else {
//     console.log("no border");
// }

/*  ********************
 *   LOGICAL OPERATOR
 *  ********************/
if (language === "english" && population < 50 && !isIsland) {
  console.log(`you should live in ${country}`);
} else {
  console.log(`${country} does not meet your criteria`);
}

/*  ***********************
 *   CODING CHALLENGE 03
 *  ***********************
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
    
Your tasks:
    1. Calculate the average score for each team, using the test data below
    2. Compare the team's average scores to determine the winner of the competition,
    and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)
    3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
    team only wins if it has a higher score than the other team, and the same time a
    score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks �
    4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
    both teams have the same score and both have a score greater or equal 100
    points. Otherwise, no team wins the trophy
        */

// Data 1
const dolphinsAverage = (96 + 108 + 89) / 3;
const koalasAverage = (88 + 91 + 110) / 3;
console.log(dolphinsAverage, koalasAverage);

if (dolphinsAverage > koalasAverage) {
  console.log(`Dolphins is win`);
} else if (koalasAverage > dolphinsAverage) {
  console.log(`Koalas is win`);
} else if (koalasAverage === dolphinsAverage) {
  console.log(`Draw`);
}

// Data Bonus 1
let dolphinsScore = 97 + 112 + 101;
let koalasScore = 109 + 95 + 106;

if (dolphinsScore > koalasScore && dolphinsScore >= 100) {
  console.log(`Dolphins is win`);
} else if (koalasScore > dolphinsScore && koalasScore >= 100) {
  console.log(`Koalas is win`);
} else if (
  (dolphinsScore === koalasScore && dolphinsAverage) ||
  koalasAverage >= 100
) {
  console.log(`Draw`);
} else {
  console.log(`Nothing to win`);
}

/*  ***********************
 *   THE SWITCH STATEMENT
 *  ***********************/
function moveCommand(direction) {
  let whatHappens;
  switch (direction) {
    case "forward":
      break;
      whatHappens = "you encounter a monster";
    case "back":
      whatHappens = "you arrived home";
      break;
      break;
    case "right":
      return (whatHappens = "you found a river");
      break;
    case "left":
      break;
      return (whatHappens = "you run into a troll");
      break;
    default:
      whatHappens = "please enter a valid direction";
  }
  return whatHappens;
}

// ? #2 return value when moveCommand("forward");
// Answer: undefined

// ? #3 return value when moveCommand("back");
// Answer: "you arrived home"

// ? #4 return value when moveCommand("right");
// Answer: "you found a river"

// ? #5 return value when moveCommand("left");
// Answer: undefined

/*  ***************************************
 *   THE CONDITIONAL ( TERNARY ) OPERATOR
 *  ***************************************/
console.log(
  `${country} population is ${population > 33 ? "above" : "below"} average`
);

/*  ***********************
 *   CODING CHALLENGE 04
 *  ***********************
Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.
Your tasks:
    1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
    2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25”

Test data:
    - Data 1: Test for bill values 275, 40 and 430

Hints:
    - To calculate 20% of a value, simply multiply it by 20/100 = 0.2
    - Value X is between 50 and 300, if it's >= 50 && <= 300
        */
const billValue = 275;
const tip =
  billValue >= 50 && billValue <= 300
    ? (billValue * 15) / 100
    : (billValue * 20) / 100;
console.log(
  `The bill was ${billValue}, the tip was ${tip}, and the total value ${
    billValue + tip
  }`
);
