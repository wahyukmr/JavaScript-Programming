"use strict";

/*  *************************
 *   Example Operator math
 *  *************************/
{
  const now = 2022;
  const ageStepan = now - 2001; // 21
  const ageBoy = now - 1991; // 31

  console.log(ageStepan, ageBoy);
  console.log(ageStepan * 2, ageBoy / 10, 2 ** 3); // 2 ** 3 = 2 * 2 * 2
}

/*  ******************************
 *   Example Operator assignment
 *  ******************************/
{
  let X = 3 + 15; // 18
  X += 10; // X + 10 = 28
  X *= 2; // X * 2 = 56
  X++; // X + 1 = 57
  ++X; // X + 1 = 58
  X--; // X - 1 = 57
  --X; // X - 1 = 56
  console.log(X);
}

/*  *********************************
 *   TYPE CONVERSION AND COERCION
 *  *********************************/
{
  // Type conversion
  const inputYear = "1928";
  console.log(Number(inputYear), inputYear); // 1928, "1928"
  console.log(Number(inputYear) + 10); // 1938

  console.log(Number("wahyu")); // NaN
  console.log(typeof NaN); // number

  console.log(String(23), 23); // "23", 23

  // type coercion
  console.log("I am" + 23 + "years old"); // operator plus disini akan memicu konversi number menjadi string, Jadi setiap kali ada operasi plus antara string dan number, number akan dikonversi menjadi string
  console.log("23" - "10" - 3); // operator minus memicu konversi yang berlawanan, mengubah string menjadi number
  console.log("23" * "2"); // 46 (number)
  console.log("20" / "2"); // 10 (number)
}

/*  *******************************
 *   Truthy and falsy operators
 *  *******************************/
{
  console.log(Boolean(0)); // false
  console.log(Boolean(undefined)); // false
  console.log(Boolean("")); // false
  console.log(Boolean("34")); // false
  console.log(Boolean("wahyu")); // true

  const money = 0;
  if (money) {
    console.log("Don't spend anything");
  } else {
    console.log("You should get a job"); // akan dieksekusi
  }

  let value;
  if (value) {
    console.log("Value is defined");
  } else {
    console.log("Value is undefined"); // akan dieksekusi
  }

  // Example :
  3 > 2 && 2 > 1; // return true

  3 > 2 > 1; // Return false ( because 3 > 2 is true, then true is converted to 1 in inequality operators, therefore true > 1 becomes 1 > 1, which is false. Adding parentheses makes things clear: (3 > 2) > 1 )
}

/*  *****************************
 *   Example logical operators
 *  *****************************/
{
  let a = 10;
  let b = 12;
  console.log(!(a < 15 && b > 10)); // !(true && true) = !(true) = false

  let language = "english";
  let greeting = "selamat pagi";

  if (language === "english") {
    greeting = "hallo";
  }
  console.log(greeting);

  for (let i = 0; i < 6; i++) {
    console.log(i);
  }
}

/*  *******************************
 *   Statements and expressions
 *  *******************************/
{
  // Expressions
  3 + 4; // merupakan expressions karena akan menghasilkan nilai
  232; // angka sederhana yang menghasilkan nilai di javascript
  true && false && !false; // akan menghasilkan nilai berupa boolean

  // Statements
  if (23 > 10) {
    const str = "23 is bigger than 10";
  }

  // Pada template literals hanya bisa menggunakan expression (sesuatu yang memiliki nilai)
  const name = "komar";
  console.log(`I'm ${2023 - 2001} years old and my name is ${name}`);
}
