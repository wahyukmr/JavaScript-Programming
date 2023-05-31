"use strict";

/*  ***************************************************************************************************
 *   TECHNIQUE USING PROTOTYPE INHERITANCE: Constructor functions
 *  ***************************************************************************************************/

// Prototype Person
function Person(firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Jangan pernah membuat method didalam Constructor function
  // this.calcAge = function() {
  //     console.log(2700 - this.birthYear);
  // }
}
// membuat Instance atau object baru berdasarkan Prototype Person.
const wahyu = new Person("wahyu", 2001);
console.log(wahyu);

// membuat lebih banyak Instance yang berbeda berdasarkan Prototype Person.
const bagong = new Person("bagong", 1950);
const dugong = new Person("dugong", 2000);
console.log(bagong, dugong);

// "instanceof" adalah operator untuk menguji instance dari prototype tertentu, mengembalikan boolean.
const j = "kolor";
console.log(bagong instanceof Person);
console.log(wahyu instanceof Person);
console.log(j instanceof Person);

/*  ***************************************************************************************************
 *   Prototype
 *  ***************************************************************************************************/
/* property Prototype */
{
  // Person.prototype disini sebenarnya bukan prototype dari Person. Namun sebaliknya, itulah yang akan digunakan sebagai prototype dari semua object yang dibuat dengan Constructor function Person.
  console.log(Person.prototype);

  // prototype dari wahyu, bagong dan dugong adalah Person.prototype (menambahkan method calcAge di prototype Person).
  Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
  };
  // Object apapun selalu dapat mengakses ke method atau properti dari prototype nya. Jadi setiap instance mewarisi method calcAge dari prototype nya.
  wahyu.calcAge();
  bagong.calcAge();
  dugong.calcAge();

  // menggunkaan metode Object.getPrototypeOf() untuk mengakses properti [[Prototype]].
  console.log(Object.getPrototypeOf(wahyu) === Person.prototype);

  console.log(Object.getPrototypeOf(wahyu));

  console.log(Person.prototype.isPrototypeOf(wahyu));
  console.log(Person.prototype.isPrototypeOf(dugong));
  console.log(Person.prototype.isPrototypeOf(bagong));

  // Mengatur properti pada prototype (properti species tidak berada dalam object itu sendiri, melainkan pada prototype).
  Person.prototype.species = "Homo Sapiens";
  console.log(wahyu.species, dugong.species);
  // hasOwnProperty is prototype property of the object wahyu ( it works because of the prototype chain )
  console.log(wahyu.hasOwnProperty("firstName")); // true
  console.log(wahyu.hasOwnProperty("species")); // false
}

/* Prototypal Inheritance on Built-In Objects */
{
  // prototype Inheritance (prototype wahyu yang sebenarnya merupakan properti prototype milik “Person”)
  console.log(Object.getPrototypeOf(wahyu)); // Person.prototype

  // prototype Chain (melihat prototype yang lebih dalam dari object wahyu)
  console.log(Object.getPrototypeOf(Object.getPrototypeOf(wahyu))); // Object.prototype
  console.log(
    Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(wahyu)))
  ); // Null

  // prototype of array (Array apapun dapat mewarisi semua method dari Array.prototype)
  const arr = [2, 2, 45, 67, 67, 80, 80];
  console.log(Object.getPrototypeOf(arr)); // see the prototype of the array
  console.log(Object.getPrototypeOf(arr) === Array.prototype); // true
  console.log(Object.getPrototypeOf(Object.getPrototypeOf(arr)));

  // DON'T MAKE YOURSELF DO THIS WHILE WORKING IN A TEAM (menambahkan metode baru ke properti prototype dari konstruktor array, akibatnya, semua array akan mewarisi metode ini)
  Array.prototype.unique = function () {
    return [...new Set(this)];
  };
  console.log(arr.unique());

  // prototype of any function (for example, look at the prototype of the anonymous function x)
  console.dir((x) => x + 1); // console.dir for see prototype
}

/*  ***************************************************************************************************
 *   Coding Challenge #1
 *  **************************************************************************************************
TASKS:
    1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is  the current speed of the car in km/h;
    2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
    3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
    4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
        */
{
  // membuat constructor function
  function Car(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }

  // prototype inheritances (implement the methods)
  Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.brand} is going at ${this.speed}`);
  };
  Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.brand} is going at ${this.speed}`);
  };

  // create a new objects or instance objects
  const car1 = new Car("BMW", 120);
  const car2 = new Car("Mercedes", 95);

  // call the method on the objects
  car1.accelerate();
  car1.accelerate();
  car1.accelerate();
  car1.brake();

  car2.accelerate();
  car2.brake();
  car2.brake();
}

/*  ***************************************************************************************************
 *   TECHNIQUE USING PROTOTYPE INHERITANCE: Es6 Classes
 *  ***************************************************************************************************/

/* there are two forms of class */
{
  // 1. Class expressions
  // const Person1 = class {};

  // 2. Class declarations
  class Person2 {
    // add constructor methods
    constructor(firstName, birthYear) {
      this.firstName = firstName;
      this.birthYear = birthYear;
    }
    // add method in the Class, not in constructor function.
    calcAge() {
      console.log(2022 - this.birthYear);
    }

    great() {
      console.log(`Hey my name is ${this.firstName}`);
    }
  }
  // create a new instance
  const jessica = new Person2("jessica", 1956);
  console.log(jessica);

  // calling method
  jessica.great();
  jessica.calcAge();
}

// Another Class Example
{
  class accounts {
    constructor(owner, currency, pin) {
      this.owner = owner;
      this.currency = currency;
      this.pin = pin;
      this.movements = [];
      this.locale = navigator.language;

      console.log(`Thanks for opening an account ${owner}`);
    }

    // public interface
    deposit(value) {
      this.movements.push(value);
    }
    // can call other methods into certain methods
    withdraw(value) {
      this.deposit(-value);
    }

    approveLoan() {
      return true;
    }

    requestLoan(value) {
      if (this.approveLoan(value)) {
        this.deposit(value);
        console.log(`Loan approved`);
      }
    }
  }

  const acc1 = new accounts("wahyu", "IDR", 1111);
  acc1.deposit(250);
  acc1.withdraw(150);
  acc1.requestLoan(1000);
  acc1.approveLoan();

  console.log(acc1);
  console.log(acc1.pin);
}

/* Setters (set or rate) and getters (return a value) */
{
  /* getters and setters in the object literals */
  const account = {
    owner: "wahyu",
    movement: [200, 590, 500, 340],

    // getters
    get latest() {
      return this.movement.slice(-1);
    },

    // setters
    set latest(value) {
      this.movement.push(value);
    },
  };

  // memnaggil method getter, kita tidak memnaggil method nya, tetapi menulisnya seolah-oalah itu hanya properti.
  console.log(account.latest);

  // sama seperti getter, dalam mengatur value melalui setter, terlihat seperti layaknya mengatur value di properti.
  account.latest = 50;
  console.log(account.movement);

  /* getters and setters in the Class */
  class Person3 {
    constructor(fullName, birthYear) {
      this.fullName = fullName;
      this.birthYear = birthYear;
    }

    calcAge() {
      console.log(2022 - this.birthYear);
    }

    great() {
      console.log(`Hey my name is ${this.fullName}`);
    }

    get age() {
      return 2022 - this.birthYear;
    }

    // mengatur properti yang sudah ada.
    set fullName(name) {
      // Jika memiliki setter yang mencoba mengatur properti yang sudah ada, maka sebagai KONVENSI (bukan fitur JS) tambahkan garis bawah(_).
      if (name.includes(" ")) this._fullName = name;
      else alert(`${name} is not a fullName!`);
    }

    // Ketika menambahkan garis bawah di properti, itu akan membuat variable baru, jadi jika kita memanggil variable fullName(tanpa garis bawah) hasilnya berupa `undefined`. Untuk memperbaikinya perlu membuat getter untuk properti fullName.
    get fullName() {
      return this._fullName;
    }
  }
  const wahyu = new Person3("wahyu D monkey", 1966);
  console.log(wahyu);

  wahyu.great();
  wahyu.calcAge();

  console.log(wahyu.fullName);
}

/* Static Methods */
{
  class Person4 {
    constructor(fullName, birthYear) {
      this.fullName = fullName;
      this.birthYear = birthYear;
    }
    // Instance methods
    // Method wiil be added to .prototype property
    calcAge() {
      console.log(2022 - this.birthYear);
    }

    great() {
      console.log(`Hey my name is ${this.firstName}`);
    }

    get age() {
      return 2022 - this.birthYear;
    }

    set fullName(name) {
      if (name.includes(" ")) this._fullName = name;
      else alert(`${name} is not a fullName!`);
    }

    // Static Methods
    // The method will not be added to the .prototype property
    static hey() {
      console.log("hey there !");
      console.log(this); // this keyword refers to the class constructor
    }
  }
  const wahyu = new Person4("wahyu D monkey", 1966);
  console.log(wahyu);

  Person4.hey();
  // wahyu.hey(); cannot access because it is not in prototype property
}

/*  ***************************************************************************************************
 *   TECHNIQUE USING PROTOTYPE INHERITANCE: Object.create
 *  ***************************************************************************************************/
{
  const PersonProto = {
    calcAge() {
      console.log(2090 - this.birthYear);
    },

    // different from the constructor in the class
    init(firstName, birthYear) {
      this.firstName = firstName;
      this.birthYear = birthYear;
    },
  };
  // create a new instance
  const steven = Object.create(PersonProto);
  console.log(steven);
  steven.name = "Steven";
  steven.birthYear = 2022;
  steven.calcAge();

  // cek prototype
  console.log(steven.__proto__ === PersonProto);

  // create a another new instance
  const sarah = Object.create(PersonProto);
  console.log(sarah);
  sarah.init("sarah", 1978);
  sarah.calcAge();
}

/*  ***************************************************************************************************
 *   Coding Challenge #2
 *  **************************************************************************************************
TASKS:
    1. Re-create challenge 1, but this time using an ES6 class;
    2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
    3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
    4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
        */
{
  class Car {
    constructor(brand, speed) {
      this.brand = brand;
      this.speed = speed;
    }

    accelerate() {
      this.speed += 10;
      console.log(`${this.brand} is going at ${this.speed} km/h`);
    }

    brake() {
      this.speed -= 5;
      console.log(`${this.brand} is going at ${this.speed} km/h`);
    }

    get speedUS() {
      return `${this.brand} is going at ${(this.speed /= 1.6)} ml/h`;
    }

    set speedUS(value) {
      return (this.speed = value * 1.6);
    }
  }
  const car1 = new Car("Ford", 120);
  console.log(car1);

  console.log(car1.speedUS); // 120 : 1,6 = 75 ml/h
  car1.speedUS = 50; // 50 *1,6 = 80 km/h
  console.log(car1);

  car1.accelerate(); // 90 km/h
  car1.brake(); // 85 km/h
}

/*  ***************************************************************************************************
 *   inheritance between "classes" using constructor functions
 *  ***************************************************************************************************/
{
  // Parent constructor function
  const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  };

  Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
  };

  // Child constructor functions
  const Student = function (firstName, birthYear, course) {
    Person.call(this, firstName, birthYear);
    this.course = course;
  };

  // linking prototype Person with prototype Student (connect first before creating method)
  Student.prototype = Object.create(Person.prototype);

  Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName} and i study is ${this.course}`);
  };

  const mike = new Student("Mike", 2020, "Computer Science");
  mike.introduce();
  mike.calcAge();

  // see how the prototype chain works
  console.log(mike.__proto__); //going to student prototype
  console.log(mike.__proto__.__proto__); //going to Person prototype

  Student.prototype.constructor = Student;
  console.dir(Student.prototype.constructor);
}

/*  ***************************************************************************************************
 *   Coding Challenge #3
 *  **************************************************************************************************
TASKS:
    1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
    2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
    3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
    4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
        */
{
  const Car = function (brand, speed) {
    this.brand = brand;
    this.speed = speed;
  };

  Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.brand} is going at ${this.speed} km/h`);
  };

  Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.brand} is going at ${this.speed} km/h`);
  };

  const Ev = function (brand, speed, charge) {
    Car.call(this, brand, speed);
    this.charge = charge;
  };
  // link the prototype(will set prototype Ev to a new object, which inherits from the Car.prototype properti property)
  Ev.prototype = Object.create(Car.prototype);

  Ev.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo;
  };

  // when there is the same method, then this accelerate method will overwrite the one from the parent class (polymorphism)
  Ev.prototype.accelerate = function () {
    console.log(
      `${
        this.brand
      } going at ${(this.speed += 20)} km/h, with a charge of ${(this.charge -= 1)}%`
    );
  };

  const dataCar1 = new Ev("Tesla", 120, 23);
  dataCar1.accelerate();
  dataCar1.brake();
  dataCar1.chargeBattery(90);
  console.log(dataCar1);
}

/*  ***************************************************************************************************
 *   inheritance between "classes" using Classes
 *  ***************************************************************************************************/
{
  /* Class dasar */
  class Person {
    constructor(firstName, birthYear) {
      this.firstName = firstName;
      this.birthYear = birthYear;
    }

    calcAge() {
      console.log(2037 - this.birthYear);
    }
  }

  /* Class turunan */
  class Student extends Person {
    constructor(firstName, birthYear, course) {
      // super must be called first
      super(firstName, birthYear);
      this.course = course;
    }

    introduce() {
      console.log(
        `My name is ${this.firstName} My birth year is ${this.birthYear} and i study is ${this.course}`
      );
    }

    // override methods derived from parent class (Polymorphism)
    calcAge() {
      console.log(
        `I'am ${
          2037 - this.birthYear
        } year old, but as a student I feel more like ${
          2037 - this.birthYear + 10
        }`
      );
    }
  }

  const mike = new Student("Mike", 2020, "Computer Science");
  mike.introduce();
  mike.calcAge();
}

/*  ***************************************************************************************************
 *   inheritance between "classes" using Object.create
 *  ***************************************************************************************************/
// in this case, object jay inherits from StudentProto which inherits from PersonProto
{
  // parent class
  const PersonProto = {
    calcAge() {
      console.log(2037 - this.birthYear);
    },

    init(firstName, birthYear) {
      this.firstName = firstName;
      this.birthYear = birthYear;
    },
  };

  // Student(child class) inherits from Person(parent class)
  const StudentProto = Object.create(PersonProto);

  StudentProto.init = function (firstName, birthYear, course) {
    PersonProto.init.call(this, firstName, birthYear);
    this.course = course;
  };

  StudentProto.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
  };

  // create a new object, so object jay inherits from StudentProto(becomes jay prototype)
  const jay = Object.create(StudentProto);
  jay.init("wahyu", 2010, "Computer Science");
  jay.introduce();
  jay.calcAge();
}

/*  ***************************************************************************************************
 *   fake encapsulation using just convention
 *  ***************************************************************************************************/
{
  class Accounts {
    constructor(owner, currency, pin) {
      this.owner = owner;
      this.currency = currency;
      // Protested properties (This property cannot be touched outside the class)
      this._pin = pin;
      this._movements = [];
      this.locale = navigator.language;

      console.log(`Thanks for opening an account ${owner}`);
    }

    // if you want to give access to array movements from outside, you have to apply public methods to it
    // Public interface
    getMovements() {
      return this._movements;
    }

    deposit(value) {
      this.movements.push(value);
    }

    withdraw(value) {
      this.deposit(-value);
    }
    // this is a method that is only performed internally by the bank, so it should not be part of the public API
    _approveLoan() {
      return true;
    }

    requestLoan(value) {
      if (this._approveLoan(value)) {
        this.deposit(value);
        console.log(`Loan approved`);
      }
    }
  }

  // access movements properties
  const acc1 = new Accounts("wahyu", "IDR", 1111);
  acc1._movements.push(250);
  acc1._movements.push(-150);
}

/*  ***************************************************************************************************
 *   encapsulation: Private class fields and methods
 *  ***************************************************************************************************/
{
  class Accounts {
    // 1. declared a public field (is in the instance)
    locale = navigator.language;

    // 2. declared a private field (is in the instance)
    #movements = [];
    #pin;

    constructor(owner, currency, pin) {
      this.owner = owner;
      this.currency = currency;
      this.#pin = pin;
      // this._movements = [];
      // this.locale = navigator.language;

      console.log(`Thanks for opening an account ${owner}`);
    }

    // public methods (semua method yang digunakan disini termasuk kedalam public methods)
    getMovements() {
      return this.#movements;
    }

    deposit(value) {
      this.#movements.push(value);
    }

    withdraw(value) {
      this.deposit(-value);
    }

    requestLoan(value) {
      if (this.#approveLoan(value)) {
        this.deposit(value);
        console.log(`Loan approved`);
      }
      // if (this._approveLoan(value)) {
      //     this.deposit(value);
      //     console.log(`Loan approved`);
      // }
    }

    // privte method
    #approveLoan(val) {
      return true;
    }
    // _approveLoan(val) {
    //     return true;
    // }

    // static methods
    static helper() {
      console.log("helper");
    }
  }

  // access movements properties
  const acc1 = new Accounts("wahyu", "IDR", 1111);
  console.log(acc1);

  // can't access private property
  // console.log(acc1.#movements);
  // console.log(acc1.#pin);
  // console.log(acc1.#approveLoad(100));

  // static method hanya bisa diakses oleh class.
  Accounts.helper();
  // acc1.helper();
}

// Chaining methods
{
  class accounts {
    locale = navigator.language;
    #movements = [];
    #pin;

    constructor(owner, currency, pin) {
      this.owner = owner;
      this.currency = currency;
      this.#pin = pin;

      console.log(`Thanks for opening an account ${owner}`);
    }

    getMovements() {
      return this.#movements;
    }

    deposit(value) {
      this.#movements.push(value);
      return this; // "this" is current object
    }

    withdraw(value) {
      this.deposit(-value);
      return this;
    }

    requestLoan(value) {
      if (this._approveLoan(value)) {
        this.deposit(value);
        console.log(`Loan approved`);
        return this;
      }
    }

    _approveLoan() {
      return true;
    }
  }

  const acc1 = new accounts("wahyu", "IDR", 1111);

  // Chaining
  acc1.deposit(300).deposit(100).withdraw(50).requestLoan(2000).withdraw(50);
  console.log(acc1.getMovements());
}

/*  ***************************************************************************************************
 *   ES6 Classes Summary
 *  ***************************************************************************************************/
{
  // class Student adalah class turunan
  class Student extends Person {
    // Public field
    university = "university of indonesia";

    // Private fields
    #studyHours = 0;
    #course;

    // static public field
    static numSubjects = 10;

    // constructor methods
    constructor(fullName, birthYear, startYear, course) {
      // super
      super(fullName, birthYear);
      // instance property
      this.startYear = startYear;
      // redefining private field
      this.#course = course;
    }
    // public methods(are normals)
    introduce() {
      console.log(`I study ${this.#course} at ${this.university}`);
    }

    // semua method yang ditambahkan disini akan ditambahkan ke Prototypes
    study() {
      // referencing private field and method
      this.#makeCoffe();
      this.#studyHours += h;
    }

    // private methods
    #makeCoffe() {
      return "Here is a Coffe for you";
    }

    // getter methods
    get testScore() {
      return this._testScore; // Student.testScore
    }

    // setter methods
    set testScore(score) {
      this._testScore = score < 20 ? score : 0;
    }

    // static methods
    static printCurriculum() {
      console.log(`There are ${this.numSubjects} subjects`);
    }
  }
  // creating new object with "new" operator
  const wahyu = new Student("wahyu", 2020, 2037, "Medicine");
  console.log(wahyu);
  console.log(Student.numSubjects);
  Student.printCurriculum();
}

/*  ***************************************************************************************************
 *   Coding Challenge #4
 *  **************************************************************************************************
NOTE:
        1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
        2. Make the 'charge' property private;
        3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
        */
{
  class CarCl {
    constructor(brand, speed) {
      this.brand = brand;
      this.speed = speed;
    }
    accelerate() {
      this.speed += 10;
      console.log(`${this.brand} is going at ${this.speed} km/h`);
      // Implement the ability to chain
      return this;
    }
    brake() {
      this.speed -= 5;
      console.log(`${this.brand} is going at ${this.speed} km/h`);
      // Implement the ability to chain
      return this;
    }
    get speedUS() {
      return this.speed / 1.6;
    }

    set speedUS(speed) {
      this.speed = speed * 1.6;
    }
  }

  class EVCl extends CarCl {
    #charge;

    constructor(brand, speed, charge) {
      super(brand, speed);
      this.#charge = charge;
    }
    chargeBattery(chargeTo) {
      this.#charge = chargeTo;
      // Implement the ability to chain
      return this;
    }
    accelerate() {
      console.log(
        `${
          this.brand
        } going at ${(this.speed += 20)} km/h, with a charge of ${(this.#charge -= 1)}%`
      );
      // Implement the ability to chain
      return this;
    }
  }

  const dataCar1 = new EVCl("Rivian", 120, 23);
  console.log(dataCar1);

  // experiment with chining
  dataCar1
    .accelerate()
    .accelerate()
    .accelerate()
    .brake()
    .chargeBattery(50)
    .accelerate();
  console.log(dataCar1.speedUS);
}
