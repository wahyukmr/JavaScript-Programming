"use strict";

/*  ******************************
 *   Scope and The Scope Chain
 *  ******************************/
{
  /* global scope */
  const myName = "wahyu";

  /* local scope */
  function first() {
    const age = 21;

    /* block scope */
    if (age >= 21) {
      const decade = 3;
      var millenial = true; // var is not included in the scope block
    }

    // has access to variables from all outer scopes
    function second() {
      const job = "programming";

      console.log(`${myName} is a ${age}-old ${job} ${millenial}`);
    }
    second();
  }
  first();

  function calcAge(birthYear) {
    const age = 2037 - birthYear;

    function printAge() {
      let output = `${firstName}, you are ${age}, born in ${birthYear}`;
      console.log(output);

      if (birthYear >= 1981 && birthYear <= 1996) {
        var millenial = true;

        // Creating NEW variable with same name as outer scope's variable
        const firstName = "Steven";

        // Reasssigning outer scope's variable
        output = "NEW OUTPUT!";

        const str = `Oh, and you're a millenial, ${firstName}`;
        console.log(str);

        function add(a, b) {
          return a + b;
        }
        console.log(add(2, 3));
      }
      console.log(firstName);
      console.log(millenial); // can access var, because var is not block scope
      console.log(output);

      /* unable to access variables outside of block scope */
      // console.log(str);
      // console.log(add(2, 3));
    }
    printAge();

    return age;
  }
  const firstName = "Jonas";
  calcAge(1991);
  // console.log(age);
  // printAge();
}

/*  *******************************
 *   Hoisting and TDZ in Practice
 *  *******************************/
{
  /* accessing variables before initialization their variables */
  console.log(me); // result: undefined
  // console.log(job); // error
  // console.log(year); // error

  var me = "wahyu";
  const job = "programing";
  let year = 2001;

  /* accessing a function before initialization its function can only be used on function declaration */
  console.log(addDec(2, 3)); // result: 5
  // console.log(addExpr(2, 3)); // error
  // console.log(addArr(2, 3)); // error

  /* function declaration */
  function addDec(a, b) {
    return a + b;
  }

  /* function expression */
  let addExpr = function (a, b) {
    return a + b;
  };

  /* arrow function */
  var addArr = (a, b) => a + b;
}

/*  *******************************
 *   The this Keyword in Practice
 *  *******************************/
{
  // THIS
  console.log(this);

  // Using the This keyword in a function expression
  const calcAge2 = function (birthYear) {
    console.log(2037 - birthYear);
    console.log(this); // result: undefined
  };
  calcAge2(1991);

  // Using the This keyword in a Arrow Function
  const calcAgeArrow = (birthYear) => {
    console.log(2037 - birthYear);
    console.log(this); // result: window (refers to parent scope)
  };
  calcAgeArrow(1980);

  // Using the This keyword in a method
  const budi = {
    year: 1991,
    age: function () {
      console.log(this); // refers to the object being called
      console.log(2037 - this.year); // 2037 - object.year
    },
  };
  budi.age(); // This refers to object budi

  const dewi = {
    year: 2017,
  };
  dewi.age = budi.age;
  dewi.age(); // This refers to object dewi
}

/*  ****************************************
 *   Regular Functions vs. Arrow Functions
 *  ****************************************/
{
  /* This Keyword */
  const sarah = {
    firstName: "sarah",
    year: 1992,
    calAge: function () {
      console.log(this);
      console.log(2037 - this.year);

      // * solution 1 (the old way)
      // const self = this;
      // const isMillenial = function () {
      //     console.log(self);
      //     console.log(self.year >= 1981 && self.year <= 1996);
      // };
      // isMillenial();

      // * solution 2 (modern)
      const isMillenial = () => {
        console.log(this); // merujuk ke induknya (objek sarah)
        console.log(this.year >= 1981 && this.year <= 1996);
      };
      isMillenial();
    },

    // Don't use arrow function to access this keyword
    greet: () => {
      console.log(this); // merujuk ke window object
      console.log(`hey ${this.firstName}`); //hey undefined
    },
  };
  sarah.calAge();
  sarah.greet();

  /* Arguments Keyword */
  // always use regular function
  const addExpr2 = function (a, b) {
    console.log(arguments);
    return a + b;
  };
  addExpr2(2, 5);
  addExpr2(2, 5, 8, 12);
}

/*  ********************************************
 *   primitives vs. Objects (reference types)
 *  ********************************************/
{
  /* in primitives */
  let age1 = 30;
  let oldAge1 = age1;
  age1 = 31;
  age1 = 20;
  age1 = 70;

  console.log(age1); // 70 = take the last change
  console.log(oldAge1); // 30 = value on it

  /* in object (reference types) */
  const me1 = {
    name: "wahyu",
    age: 21,
  };

  // menyalin objek tidak akan membuat objek baru pada HEAP, melainkan tetap merujuk ke objek yang sama dengan mengubah nilai age, Jadi kedua objek (me1 dan friend) akan memiliki nilai age yang sama yakni 30, begitu juga untuk friend2.
  const friend = me1;
  friend.age = 30;

  const friend2 = me1;
  friend2.age = 40;

  console.log("me:", me1); // age = last value
  console.log("frend:", friend); // age = last value
  console.log("friend2:", friend2); // age = last value

  /* copying an object and changing it without affecting other objects */
  const jessicaBefore = {
    firstName: "jessica",
    lastName: "komarudin",
    age: 27,
    family: ["alice", "bob"],
  };

  // Object.assign() = concatenate two objects and return a new object
  const jessicaAfter = Object.assign({}, jessicaBefore);
  jessicaAfter.lastName = "wahyu";
  jessicaAfter.family.push("dedi"); // not applicable
  jessicaAfter.family.push("carl"); // not applicable

  console.log("jessica before:", jessicaBefore);
  console.log("jessica after:", jessicaAfter);
}
