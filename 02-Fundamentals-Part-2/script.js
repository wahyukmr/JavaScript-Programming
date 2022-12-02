"use strict";

/*  ***************************************************************************************************
 *   Activating Strict Mode
 *  ***************************************************************************************************/
{
    let hasDriversLicense = false;
    const passTest = true;

    if (passTest) hasDriversLicense = true;
    if (hasDriversLicense) console.log("I can drive :D");

    // const interface = 'Audio';
    // const private = 534;
}

/*  ***************************************************************************************************
 *   Functions
 *  ***************************************************************************************************/
{
    // example function
    function logger() {
        console.log("My name is wahyu");
    }
    // calling / running / invoking function
    logger();
    logger();
    logger();

    // function with parameters
    function fruitProcessor(apples, oranges) {
        return `Juice with ${apples} apples and ${oranges} oranges.`;
    }
    //pass arguments to function
    console.log(fruitProcessor(5, 0));

    //to return the value, need to store it in a variable
    const appleJuice = fruitProcessor(9, 5);
    console.log(appleJuice);
    const appleOrangeJuice = fruitProcessor(2, 4);
    console.log(appleOrangeJuice);

    //Number: Change the type data string to type data number
    const num = Number("23");
    console.log(num);
}

/*  ***************************************************************************************************
 *   Function Declarations vs. Expressions
 *  ***************************************************************************************************/
{
    // Function declaration
    function calcAge1(birthYeah) {
        return 2037 - birthYeah;
    }
    const age1 = calcAge1(1991);

    // Function expression
    const calcAge2 = function (birthYeah) {
        return 2037 - birthYeah;
    };
    const age2 = calcAge2(1991);

    console.log(age1, age2);
}

/*  ***************************************************************************************************
 *   Arrow functions
 *  ***************************************************************************************************/
{
    // Arrow function one linear
    const calcAge3 = (birthYeah) => 2037 - birthYeah;
    const age3 = calcAge3(1991);
    console.log(age3);

    // Arrow function one parameter
    const yearsUntilRetirement1 = (birthYeah) => {
        const age = 2037 - birthYeah;
        return 65 - age;
    };
    console.log(yearsUntilRetirement1(2001));

    // Arrow function more than one parameter
    const yearsUntilRetirement2 = (birthYeah, firstName) => {
        const age = 2037 - birthYeah;
        const retirement = 65 - age;
        return `${firstName} retires in ${retirement} years`;
    };
    console.log(yearsUntilRetirement2(1991, "wahyu"));
    console.log(yearsUntilRetirement2(1980, "Bob"));
}

/*  ***************************************************************************************************
 *   Functions Calling Other Functions
 *  ***************************************************************************************************/
{
    const cutFruitPieces = (fruit) => fruit * 4;

    function fruitProcessor2(apples, oranges) {
        const applePieces = cutFruitPieces(apples);
        const orangePieces = cutFruitPieces(oranges);
        return `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
    }
    console.log(fruitProcessor2(2, 3));
}

/*  ***************************************************************************************************
 *   Reviewing Functions
 *  ***************************************************************************************************/
{
    // the same two parameters in different functions, have nothing to do with each other
    const calcAge = function (yourAge) {
        //Function expression
        return 2037 - yourAge;
    };

    const yearsUntilRetirement = function (birthYeah, firstName) {
        const age = calcAge(birthYeah); //Functions Calling Other Functions
        const retirement = 65 - age;

        if (retirement > 0) {
            console.log(`${firstName} retires in ${retirement} years`);
            return retirement;
        } else {
            console.log(`${firstName} has already retired 🎉`);
            return -1;
        }
    };

    console.log(yearsUntilRetirement(1991, "joko"));
    console.log(yearsUntilRetirement(1950, "Mike"));
}

/*  ***************************************************************************************************
 *   CODING CHALLENGE 01
 *  **************************************************************************************************
Your tasks:
    1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
    2. Use the function to calculate the average for both teams
    3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
    to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)"
    4. Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2
    5. Ignore draws this time
Test data:
    - Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
    - Data 2: Dolphins score 23, 34 and 27. Koalas score 85, 54 and 41
Hints:
    - To calculate average of 3 values, add them all together and divide by 3
    - To check if number A is at least double number B, check for A >= 2 * B.
    Apply this to the team's average scores
        */
{
    // test data 1
    const calculateAverage = (a, b, c) => (a + b + c) / 3;
    let dolphinScore = calculateAverage(44, 23, 71);
    let koalaScore = calculateAverage(65 + 54 + 49);

    function checkWinner(avgDolhins, avgKoalas) {
        if (avgDolhins >= 2 * avgKoalas) {
            console.log(`Dolphin is win ${avgDolhins} vs ${avgKoalas}`);
        } else if (avgKoalas >= 2 * avgDolhins) {
            console.log(`Koala is win ${avgKoalas} vs ${avgDolhins}`);
        } else {
            console.log("Nothing to win");
        }
    }
    checkWinner(dolphinScore, koalaScore);
    checkWinner(500, 100); // try with other values

    // test data 2
    dolphinScore = calculateAverage(23, 34, 27);
    koalaScore = calculateAverage(85, 54, 41);
    checkWinner(dolphinScore, koalaScore);
}

/*  ***************************************************************************************************
 *   Introduction to Arrays
 *  ***************************************************************************************************/
{
    // store data with variables
    const friend1 = "Michael";
    const friend2 = "Steven";
    const friend3 = "Peter";
    console.log(friend1, friend2, friend3);

    // creating an array (make simple store data with an array)
    const friends = ["Michael", "Steven", "Peter"];
    console.log(friends);

    // another example of creating an array
    // const y = new Array (1991, 1984, 2008, 2020);

    // return index array
    console.log(friends[0]);
    console.log(friends[1]);
    console.log(friends[2]);

    // find the length of the array
    console.log(friends.length);
    console.log(friends[friends.length - 1]);

    // change array by index
    friends[3] = "wahyu";
    console.log(friends);

    // inserting variables and other arrays into arrays
    const firstName = "wahyu";
    const wahyu = [firstName, "komarudin", 2037 - 1991, "teacher", friends];
    console.log(wahyu);
    console.log(wahyu.length);

    // Exercise
    const calcAge4 = (birthYeah) => 2037 - birthYeah;
    const years = [1990, 1967, 2002, 2010, 2018];

    const age01 = calcAge4(years[0]);
    const age02 = calcAge4(years[1]);
    const age03 = calcAge4(years[years.length - 2]);
    console.log(age01, age02, age03);

    // put the result into a new array (in the form of expression)
    const ages = [
        calcAge4(years[0]),
        calcAge4(years[1]),
        calcAge4(years[years.length - 2]),
    ];
    console.log(ages);
}

/*  ***************************************************************************************************
 *   Basic Array Operations (Methods)
 *  ***************************************************************************************************/
{
    const people = ["Michael", "Steven", "Peter"];

    /* Add elements */
    const newLength = people.push("wahyu"); //push: adding elements to the end of the array
    console.log(people);
    console.log(newLength); //returns the length of the array

    people.unshift("John"); //unshift: adding elements to the first of the array
    console.log(people);

    /* Remove elements */
    people.pop(); // pop: remove array from last
    console.log(people);
    const popped = people.pop();
    console.log(popped); //return array the removed

    people.shift(); // shift: remove array form first
    console.log(people);

    /* indexOf: tells the position of an element on an array */
    console.log(people.indexOf("Steven"));
    console.log(people.indexOf("Bob"));

    /* includes: checking the presence or absence of elements on the array */
    people.push(23);
    console.log(people.includes("Steven"));
    console.log(people.includes("Bob"));
    console.log(people.includes(23));

    //using include to write conditionals
    if (people.includes("Steven")) {
        console.log("You have a friend called Steven");
    }
}

/*  ***************************************************************************************************
 *   CODING CHALLENGE 02
 *  **************************************************************************************************
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
Your tasks:
    1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100
    2. And now let's use arrays! So create an array 'bills' containing the test data below
    3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before
    4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data:
    125, 555 and 44
Hint:
    Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array)
        */
{
    const calcTip = (billValue) =>
        billValue >= 50 && billValue <= 300
            ? billValue * 0.15
            : billValue * 0.2;
    calcTip();

    const bills = [125, 555, 44];

    const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
    console.log(tips);

    const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
    console.log(total);
}

/*  ***************************************************************************************************
 *   Introduction to Objects
 *  ***************************************************************************************************/
{
    // data array: access an array element with its sequence number(index)
    const jokoArray = [
        "Joko",
        "Susanto",
        2037 - 1991,
        "teacher",
        ["Michael", "Peter", "Steven"],
    ];
    console.log(jokoArray);

    // a literal object: accessing an element object with a property name. order of unimportant data in the object
    const andri = {
        firstName: "andri",
        lastName: "waluyo",
        age: 2037 - 1991,
        job: "teacher",
        friends: ["Michael", "Peter", "Steven"],
    };
    console.log(andri);
}

/*  ***************************************************************************************************
 *   Dot vs Bracket Notation
 *  ***************************************************************************************************/
{
    //object data
    const wahyu = {
        firstName: "wahyu",
        lastName: "komarudin",
        age: 2037 - 1991,
        job: "teacher",
        friends: ["Michael", "Peter", "Steven"],
    };
    console.log(wahyu);

    // two ways to get property name:
    console.log(wahyu.lastName); //with dot (.)
    console.log(wahyu["lastName"]); //with Bracket Notation ([])

    // inserting an expression can only use Bracket Notation not with dot
    const nameKey = "Name";
    console.log(wahyu["first" + nameKey]);
    console.log(wahyu["last" + nameKey]);
    // console.log(wahyu.'last' + nameKey) //error

    // get a property that doesn't already exist
    const interestedIn = prompt(
        "What do you want to know about wahyu? Choose between firstName, lastName, age, job, and friends"
    );
    console.log(wahyu[interestedIn]);

    if (wahyu[interestedIn]) {
        console.log(wahyu[interestedIn]);
    } else {
        console.log(
            "Wrong request! Choose between firstName, lastName, age, job, and friends"
        );
    }

    //add new property with a dot and bracket notation
    wahyu.location = "Indonesian";
    wahyu["twitter"] = "wahyukmr";
    console.log(wahyu);

    // Challenge
    // "wahyu has 3 friends, and his best friend is called Michael"
    console.log(
        `${wahyu.firstName} has ${wahyu.friends.length} friends, and his best friend is called ${wahyu.friends[0]}`
    );
}

/*  ***************************************************************************************************
 *   Object Methods
 *  ***************************************************************************************************/
{
    const wahyu = {
        firstName: "wahyu",
        lastName: "komarudin",
        birthYeah: 1991,
        job: "teacher",
        friends: ["Michael", "Peter", "Steven"],
        hasDriversLicense: true,

        //function in an object are called 'Method'
        calcAge: function () {
            this.age = 2037 - this.birthYeah; //this: called object property
            return this.age;
        },

        /* Challenge */
        // "wahyu is a 46-year-old teacher, and he has a driver's license"
        getSummary: function () {
            return `${this.firstName} is a ${this.calcAge()}-year old ${
                wahyu.job
            }, and he has ${
                this.hasDriversLicense ? "a" : "no"
            } driver's license.`;
        },
    };

    // accessing the method(function in an object)
    console.log(wahyu.calcAge());
    console.log(wahyu["getSummary"]());

    console.log(wahyu.age);
}

/*  ***************************************************************************************************
 *   CODING CHALLENGE 03
 *  **************************************************************************************************
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 or (height * height) = mass. (mass in kg and height in a meter)
Your tasks:
    1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
    2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method
    3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data:
    Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
        */
{
    const marks = {
        fullName: "Mark Miller",
        mass: 78,
        height: 1.69,
        calcBMI: function () {
            this.BMI = this.mass / this.height ** 2;
            return this.BMI;
        },
    };
    marks.calcBMI();

    const john = {
        fullName: "John Smith",
        mass: 92,
        height: 1.95,
        calcBMI: function () {
            this.BMI = this.mass / this.height ** 2;
            return this.BMI;
        },
    };
    john.calcBMI();

    if (marks.calcBMI() > john.calcBMI()) {
        console.log(
            `${marks.fullName}'s BMI is (${marks.calcBMI()}) is higher than ${
                john.fullName
            }'s (${john.calcBMI()})`
        );
    } else {
        console.log(
            `${john.fullName}'s BMI is (${john.calcBMI()}) is higher than ${
                marks.fullName
            }'s (${marks.calcBMI()})`
        );
    }
}

/*  ***************************************************************************************************
 *   Iteration: The for Loop
 *  ***************************************************************************************************/
{
    /* Example Manually */
    // console.log('Lifting weights repetition 1 🏋️‍♀️');
    // console.log('Lifting weights repetition 2 🏋️‍♀️');
    // console.log('Lifting weights repetition 3 🏋️‍♀️');
    // console.log('Lifting weights repetition 4 🏋️‍♀️');
    // console.log('Lifting weights repetition 5 🏋️‍♀️');
    // console.log('Lifting weights repetition 6 🏋️‍♀️');
    // console.log('Lifting weights repetition 7 🏋️‍♀️');
    // console.log('Lifting weights repetition 8 🏋️‍♀️');
    // console.log('Lifting weights repetition 9 🏋️‍♀️');
    // console.log('Lifting weights repetition 10 🏋️‍♀️');

    /* for loop keeps running while condition is TRUE */
    for (let rep = 1; rep <= 30; rep++) {
        console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
    }
}

/*  ***************************************************************************************************
 *   Looping Arrays, Breaking and Continuing
 *  ***************************************************************************************************/
{
    const wahyu = [
        "wahyu",
        "komarudin",
        2037 - 1991,
        "teacher",
        ["Michael", "Peter", "Steven"],
        true,
    ];

    // console.log(wahyu[0])
    // console.log(wahyu[1])
    // ...
    // console.log(wahyu[5])
    // wahyu[6] does NOT exist

    const types = [];
    for (let i = 0; i < wahyu.length; i++) {
        // Reading from wahyu array
        console.log(wahyu[i], typeof wahyu[i]);

        // Filling types array
        // types[i] = typeof wahyu[i];
        types.push(typeof wahyu[i]);
    }
    console.log(types);

    const years = [1991, 2007, 1969, 2020];
    const ages = [];
    for (let i = 0; i < years.length; i++) {
        ages.push(2037 - years[i]);
    }
    console.log(ages);

    // continue and break
    console.log("--- ONLY STRINGS ---");
    for (let i = 0; i < wahyu.length; i++) {
        if (typeof wahyu[i] !== "string") continue; // loop string only

        console.log(wahyu[i], typeof wahyu[i]);
    }

    console.log("--- BREAK WITH OBJECT ---");
    for (let i = 0; i < wahyu.length; i++) {
        if (typeof wahyu[i] === "object") break; // stop loop until object

        console.log(wahyu[i], typeof wahyu[i]);
    }
}

/*  ***************************************************************************************************
 *   Looping Backwards and Loops in Loops
 *  ***************************************************************************************************/
{
    const wahyu = [
        "wahyu",
        "komarudin",
        2037 - 1991,
        "teacher",
        ["Michael", "Peter", "Steven"],
    ];

    // 0, 1, ..., 4 looping Forward
    // 4, 3, ..., 0 looping Backward

    // looping Backward
    for (let i = wahyu.length - 1; i >= 0; i--) {
        console.log(i, wahyu[i]);
    }

    // Loops in loops
    for (let exercise = 1; exercise < 4; exercise++) {
        console.log(`-------- Starting exercise ${exercise}`);

        for (let rep = 1; rep < 6; rep++) {
            console.log(
                `Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`
            );
        }
    }
}

/*  ***************************************************************************************************
 *   The while Loop
 *  ***************************************************************************************************/
{
    // for loop: run the loop under certain conditions. For example loop on array
    for (let rep = 1; rep <= 3; rep++) {
        console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
    }

    // While Loop: when you don't know how many times you will repeat
    let rep = 1;
    while (rep <= 3) {
        console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
        rep++;
    }

    // example when shaking the dice
    let dice = Math.trunc(Math.random() * 6) + 1; // generate random data
    while (dice !== 6) {
        console.log(`You rolled a ${dice}`);
        dice = Math.trunc(Math.random() * 6) + 1;
        if (dice === 6) console.log("Loop is about to end...");
    }
}

/*  ***************************************************************************************************
 *   CODING CHALLENGE 02
 *  **************************************************************************************************
Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
    1. Create an array 'bills' containing all 10 test bill values
    2. Create empty arrays for the tips and the totals ('tips' and 'totals')
    3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for a loop to perform the 10 calculations!
Test data:
    22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints:
    Call ‘calcTip ‘in the loop and use the push method to add values to the tips and totals arrays.
Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a difficult challenge (we haven't done this before)! Here is how to solve it:
    4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for a loop. In each iteration, add the current value to the
    'sum' variable. This way, by the end of the loop, you have all values added together
    4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
    4.3. Call the function with the 'totals' array
        */
{
    const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
    const tips = [];
    const totals = [];

    for (let i = 0; i < bills.length; i++) {
        const tip = calcTip(bills[i]);
        tips.push(tip);
        totals.push(tip + bills[i]);
    }
    console.log(tips); //cek data tips
    console.log(totals); //cek data totals

    function calcAverage(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum / arr.length;
    }
    console.log(calcAverage([1, 2, 3]));
    console.log(calcAverage(totals));
    console.log(calcAverage(tips));
}
