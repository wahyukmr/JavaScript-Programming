"use strict";

/*  **********************
 *   Default Parameters
 *  **********************/
{
  /* Default value can contain any expression */
  const bookings = [];
  console.log(bookings);

  // In ES6, aad the default Parameters
  function createBooking(
    flightNum,
    numPassangers = 1,
    price = 100 * numPassangers
  ) {
    // In ES5, aad the default Parameters
    // numPassangers = numPassangers || 1;
    // price = price || 199 * numPassangers;

    const booking = {
      flightNum,
      numPassangers,
      price,
    };
    console.log(booking);
    bookings.push(booking);
  }

  createBooking("LH123");
  createBooking("LH123", 7, 800);
  createBooking("LH123", 2);
  createBooking("LH123", 5);

  createBooking("LH123", undefined, 1000);
}

/*  **************************************************
 *   How Passing Argument Works: Value Vs Reference
 *  **************************************************/
{
  // type data primitive
  const flight = "LH999";
  // type data reference
  const wahyu = {
    name: "wahyu komarudin hidayah",
    passport: 123455677,
  };

  /* make a change */
  function checkIn(flightNum, passangers) {
    flightNum = "CD233";
    passangers.name = "Mr. " + passangers.name;

    if (passangers.passport === 123455677) {
      console.log("Check in");
    } else {
      console.log("Wrong Passwords");
    }
  }
  // checkIn(flight, wahyu);
  // it the same as doing...
  // flightNum = flight
  // passangers = wahyu

  /* Interact with different functions(with top function) with the same object: Problem */
  function newPassport(person) {
    person.passport = Math.trunc(Math.random() * 1000000000000000);
  }
  newPassport(wahyu);
  checkIn(flight, wahyu);

  console.log(flight); // can't change the original value
  console.log(wahyu);
}

/*  ******************************************
 *   Functions Accepting Callback Functions
 *  ******************************************/
{
  function oneWord(str) {
    return str.replace(/ /g, "").toLowerCase();
  }

  function upperCaseWord(str) {
    const [first, ...others] = str.split(" ");
    return [first.toUpperCase(), ...others].join(" ");
  }

  /* Higher-ordder Function (fungsi yang menerima fungsi lain sebagai argumen)*/
  // disini fungsi transformer menerapkan konsep "abstraction" yang mana fungsi ini hanya bertindak untuk mengelola input yang diberikan, dan mengandalkan fungsi lain yang akan bertindak memanipulasi input (dalam kasus ini fungsi upperCaseWord dan oneWord).
  function transformer(str, fn) {
    console.log(`Original String: ${str}`);
    console.log(`Transformerd String: ${fn(str)}`);
    console.log(`Transformerd By: ${fn.name}`);
  }
  transformer("JavaScript is the best!", upperCaseWord);
  transformer("JavaScript is the best!", oneWord);

  // JS. uses Callbacks all the time
  function high5() {
    // console.log("😁");
  }

  // Pada dasarnya disini addEventListener function juga merupakan Higher-ordder Function dengan hight-level abstraction yang menerima callback function (high5) yang bertindak memberitahu fungsi addEventListener apa yang harus dilakukan.
  document.body.addEventListener("click", high5); // function high5 is Callback Functions
  ["jonas", "wahyu", "stepan"].forEach(high5);
}

/*  *********************************
 *   Functions Returning Functions
 *  *********************************/
{
  function greet(greetings) {
    return function (name) {
      console.log(`${greetings} yo ${name}`);
    };
  }
  const greeterHii = greet("hii");
  greeterHii("monyet");

  greet("hey")("komar");

  // arrow functions versions
  const greetArr = (greeting) => (name) =>
    console.log(`${greeting} yo ${name}`);

  greetArr("hello")("wahyu");
}

/*  ******************************
 *   The Call and Apply Methods
 *  ******************************/
/* Manually manipulate this keyword using the Call method */
{
  // replace this keyword reference to a new object
  const lufthansa = {
    airline: "lufthansa",
    iataCode: "LH",
    booking: [],
    // book: function() {}
    book(flightNum, name) {
      console.log(
        `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
      );

      this.booking.push({
        flight: `${this.iataCode}${flightNum}`,
        name,
        flightNum,
      });
    },
  };
  lufthansa.book(299, "wahyu komarudin");
  lufthansa.book(654, "wahyu");

  const eurowings = {
    airline: "eurowings",
    iataCode: "EW",
    booking: [],
  };

  // Call Method
  // fungsi books disini bukan lagi merujuk ke method dalam objek lufthansa, itu hanya salinan dari method tersebut yang membuatnya menjadi regular function.
  const books = lufthansa.book;
  // Does not work, kata kunci this akan berupa undefined karena books function merupakan fungsi biasa dan bukan lagi method dalam objek lufthansa.
  // books(45, "justin pardi")

  // solusinya menggunakan call atau apply method. Disini kita tidak memanggil fungsi books itu sendiri, sebagai gantinya kita memanggil call method, call method inilah yang memanggil fungsi book dengan kata kunci this nya disetel ke eurowings
  books.call(eurowings, 45, "justin pardi");
  console.log(eurowings);

  books.call(lufthansa, 100, "sarah meong");
  console.log(lufthansa);

  const swiss = {
    airline: "swiss Air Lines",
    iataCode: "WT",
    booking: [],
  };
  books.call(swiss, 50, "Mukidi Ricart");
}

/* Manually manipulate this keyword using the Apply method 
NOTE:
    1. Apply method works the same as the call method
    2. In modern JavaScript Apply method is no longer used */
{
  // old way
  const flighData = [576, "kamaludin"];
  books.apply(swiss, flighData);
  console.log(swiss);

  // Modern way
  books.call(swiss, ...flighData);
}

/*  *******************
 *   The Bind method
 *  *******************/
{
  // dengan bind method akan membuat fungsi baru dimana kata kunci this disetel ke fungsi yang kita inginkan.
  const bookLH = books.bind(lufthansa);
  const bookEW = books.bind(eurowings);
  const bookWT = books.bind(swiss);

  bookLH(700, "Wahyu Komarudin");
  bookEW(700, "Wahyu Komarudin");
  bookWT(700, "Wahyu Komarudin");

  const bookLH23 = books.bind(lufthansa, 23);
  bookLH23("joko");
  bookLH23("Thomas");

  /* With Event Litenes */
  lufthansa.planes = 300;
  lufthansa.buyPlane = function () {
    console.log(this);

    this.planes++;
    console.log(this.planes);
  };

  // when using the event listener this keyword will refer to the element being used. so use the bind method to refer to the object in question
  document
    .querySelector(".buy")
    .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

  /* Partial Applications (can set parameters) */
  const addTax = (rate, value) => value + value * rate;
  console.log(addTax(0.1, 200)); // 220

  const addVax = addTax.bind(null, 0.23); // set the rate parameters
  // addVax = value => value + value * 0.23;
  console.log(addVax(100)); // 123
  console.log(addVax(23)); // 28.29

  // sama seperti dibawah
  function addTaxRate(rate) {
    return function (value) {
      return value + value * rate;
    };
  }
  const addTax2 = addTaxRate(0.23);
  console.log(addTax2(100)); // 123
  console.log(addTax2(23)); // 28.29
}

/*  ************************
 *   CODING CHALLENGE #01
 *  ************************
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter 'poll' object below.

Your tasks:
    1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
        1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
        1.2. Based on the input number, update the 'answers' array property. For example, if the option is 3, increase the value at position 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g. answer 52 wouldn't make sense, right?)
    2. Call this method whenever the user clicks the "Answer poll" button.
    3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a
    string like "Poll results are 13, 2, 4, 1".
    4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.
    5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll object! So what should the this keyword look like in this situation?
    
Test data for bonus:
    - Data 1: [5, 2, 3]
    - Data 2: [1, 5, 3, 9, 6, 1]
    
Hints: Use many of the tools you learned about in this and the last section �
        */
// Answer:
{
  const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    // This generates [0, 0, 0, 0]. More in the next section!
    answers: new Array(4).fill(0),
  };

  // 1
  poll.registerNewAnswer = function () {
    // 1.1
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\n(write option number)`
      )
    );

    // 1.2
    typeof answer === "number" &&
      answer < this.answers.length &&
      this.answers[answer]++;

    // 4.
    this.displayResults();
    this.displayResults("string");
  };

  // 3.
  poll.displayResults = function (type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      // poll result are 13, 2, 4, 1
      console.log(`poll result are ${this.answers.join(", ")}`);
    }
  };

  // 5.
  poll.displayResults.call({ answers: [5, 2, 3] }, "string");
  poll.displayResults.call({ answers: [1, 5, 3, 9, 6] }, "string");
  poll.displayResults.call({ answers: [1, 5, 3, 9, 6] });

  // 2.
  document
    .querySelector(".poll")
    .addEventListener("click", poll.registerNewAnswer.bind(poll));
}

/*  ***************************************************
 *   Immediately Invoked Function Expressions (IIFE)
 *  ***************************************************/
{
  /* can in two ways */
  // regular function
  (function () {
    console.log("This will never run again!");
  })();

  // arrow functions
  (() => console.log("This will ALSO never run again!"))();

  /* Example */
  // two functions that have the same variable name and function
  let userName = "wahyu";
  function myName(name) {
    console.log(`my name is: ${name}`);
  }
  myName(userName);

  userName = "jeki";
  function myName(name) {
    console.log("hai my name is:" + name);
  }
  myName(userName);

  // Above problem can be fixed with IIFE
  (function () {
    const userName = "wahyu";

    function myName(name) {
      console.log("my name is:" + name);
    }
    myName(userName);
  })();
}

/*  ************
 *   Closures
 *  ************/
{
  // Fungsi booker memiliki akses ke variabel passengerCount, karena pada dasarnya didefinisikan dalam scope dimana fungsi booker dibuat.
  const secureBooking = function () {
    let passengerCount = 0;

    return function () {
      passengerCount++;
      console.log(`${passengerCount} passenger`);
    };
  };
  const booker = secureBooking();
  booker();
  booker();
}

// *   More Closure Examples
{
  /* Example 1 */
  let f;

  function g() {
    const a = 23;

    f = function () {
      console.log(a * 2);
    };
  }

  function h() {
    const b = 100;

    f = function () {
      console.log(b * 2);
    };
  }
  g();
  f();

  // Re-assigning f function
  h();
  f();

  /* Example 2 */
  // Berkat adanya closure, fungsi callbacks masih dapat memiliki akses ke variabel yang didefinisikan dalam fungsi boardPassengers yang telah lama selesai dieksekusi (mendapatkan akses ke variabel perGrop dan parameter n)
  function boardPassengers(n, wait) {
    const perGroup = n / 3;

    setTimeOut(function () {
      console.log(`we are now boarding all ${n} passengers`);
      console.log(`There are 3 Groups, each with ${perGroup} passengers`);
    }, wait * 1000); // will execute code in ...per second

    console.log(`Will start boarding in ${wait} seconds`);
  }

  // membuktikan Closure memiliki prioritas di atas scope chain
  const perGrop = 1000;

  boardPassengers(180, 3);
}

/*  ************
 *   Currying
 *  ************/
{
  // * Example:
  function add(a, b) {
    return a + b;
  }

  // diubah dengan teknik Currying
  function add(a) {
    return function (b) {
      return a + b;
    };
  }
  const addTwo = add(2); // Mengembalikan fungsi yang siap menerima argumen berikutnya
  const result = addTwo(3); // Menghasilkan hasil penjumlahan 2 + 3 = 5

  // * Another example:
  function curry(func) {
    return function curried(...args) {
      if (args.length >= func.length) {
        return func.apply(this, args);
      } else {
        return function (...moreArgs) {
          return curried.apply(this, args.concat(moreArgs));
        };
      }
    };
  }

  function calculateTotal(tax, price, discount) {
    return price + price * tax - discount;
  }

  const calculateTotalWithTax = curry(calculateTotal)(0.1);

  const total1 = calculateTotalWithTax(100, 20);
  const total2 = calculateTotalWithTax(50, 10);

  console.log(total1); // Output: 90
  console.log(total2); // Output: 45
}

/*  ************
 *   Compose
 *  ************/
{
  const compose = (f, g) => (a) => f(g(a));

  const add1 = (num) => num + 1;
  const add5 = (num) => num + 5;

  compose(add1, add5)(10); // 16
}

/*  *************************
 *   Avoiding Side-effects
 *  *************************/
// Side-effects example:
let a = 1;
function b() {
  return (a = 2);
}

/*  ************************
 *   CODING CHALLENGE #02
 *  ************************
This is more of a thinking challenge than a coding challenge �
Your tasks:
    1. Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the body element is clicked. Do not select the h1 element again!
    2. And now explain to yourself (or someone around you) why this worked! Take all the time you need. Think about when exactly the callback function is executed, and what that means for the variables involved in this example.
        */
{
  (function () {
    const header = document.querySelector("h1");
    header.style.color = "yellow";

    document.body.addEventListener("click", function () {
      header.style.color = "blue";
    });
  })();
}
