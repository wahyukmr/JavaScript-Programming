"use strict";

const account1 = {
    owner: "Jonas Schmedtmann",
    movements: [200, 455.23, -3067.5, 25000, -642.21, -133.9, 79.97, 1300],
    interestRate: 1.2, // %
    pin: 1111,

    movementsDates: [
        "2019-11-18T21:31:17.178Z",
        "2019-12-23T07:42:02.383Z",
        "2020-01-28T09:15:04.904Z",
        "2020-04-01T10:17:24.185Z",
        "2020-05-08T14:11:59.604Z",
        "2020-07-26T17:01:17.194Z",
        "2020-07-28T23:36:17.929Z",
        "2020-08-01T10:51:36.790Z",
    ],
    currency: "IDR",
    locale: "id-ID", // de-DE
};

const account2 = {
    owner: "Jessica Davis",
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,

    movementsDates: [
        "2019-11-01T13:15:33.035Z",
        "2019-11-30T09:48:16.867Z",
        "2019-12-25T06:04:23.907Z",
        "2020-01-25T14:18:46.235Z",
        "2020-02-05T16:33:06.386Z",
        "2020-04-10T14:43:26.374Z",
        "2020-06-25T18:49:59.371Z",
        "2020-07-26T12:01:20.894Z",
    ],
    currency: "USD",
    locale: "en-US",
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions
function formatMovementDate(date, locale) {
    const calcDaysPassed = (date1, date2) =>
        Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

    const daysPassed = calcDaysPassed(new Date(), date);

    if (daysPassed === 0) return "Today";
    if (daysPassed === 1) return "Yesterday";
    if (daysPassed <= 7) return `${daysPassed} days ago`;

    return new Intl.DateTimeFormat(locale).format(date);
}

function formatRupiah(value, locale, currency) {
    return new Intl.NumberFormat(locale, {
        style: "currency",
        currency: currency,
    }).format(value);
}

function displayMovement(account, sort = false) {
    // set textContent = 0
    containerMovements.innerHTML = "";

    const sortItems = sort
        ? account.movements.slice().sort((a, b) => a - b)
        : account.movements;

    sortItems.forEach(function (mov, i) {
        const type = mov > 0 ? "deposit" : "withdrawal";

        const date = new Date(account.movementsDates[i]);
        const displayDate = formatMovementDate(date, account.locale);

        const inRupiah = formatRupiah(mov, account.locale, account.currency);

        const HTML = `
        <div class="movements__row">
            <div class="movements__type movements__type--${type}">${
            i + 1
        }. ${type}</div>
            <div class="movements__date">${displayDate}</div>
            <div class="movements__value">${inRupiah}</div>
        </div>`;
        containerMovements.insertAdjacentHTML("afterbegin", HTML);
    });
}

function calcDisplayBalance(account) {
    account.totalBalance = account.movements.reduce((acc, mov) => acc + mov, 0);
    const inRupiah = formatRupiah(
        account.totalBalance,
        account.locale,
        account.currency
    );
    labelBalance.textContent = `${inRupiah}`;
}

function calcDisplaySummary(account) {
    const incomes = account.movements
        .filter((mov) => mov > 0)
        .reduce((acc, move) => acc + move, 0);
    const inRupiah1 = formatRupiah(incomes, account.locale, account.currency);
    labelSumIn.textContent = `${inRupiah1}`;

    const out = account.movements
        .filter((mov) => mov < 0)
        .reduce((acc, move) => acc + move, 0);
    const inRupiah2 = formatRupiah(
        Math.abs(out),
        account.locale,
        account.currency
    );
    labelSumOut.textContent = `${inRupiah2}`;

    // 1.2%
    const interest = account.movements
        .filter((mov) => mov > 0)
        .map((deposit) => (deposit * account.interestRate) / 100)
        .filter((int, i, arr) => {
            return int >= 100;
        })
        .reduce((acc, int) => acc + int, 0);
    const inRupiah3 = formatRupiah(interest, account.locale, account.currency);
    labelSumInterest.textContent = `${inRupiah3}`;
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
    displayMovement(value);
    calcDisplayBalance(value);
    calcDisplaySummary(value);
}

function startLogOutTimer() {
    function tick() {
        const min = String(Math.trunc(time / 60)).padStart(2, 0);
        const second = String(time % 60).padStart(2, 0);

        // In each call, print the Remaining time to UI
        labelTimer.textContent = `${min} : ${second}`;
        // When 0 second, stop timer and log out user
        if (time === 0) {
            clearInterval(timer);
            labelWelcome.textContent = "Log in to get started";
            containerApp.style.opacity = "0";
        }
        // Decrese is
        time--;
    }
    // Set time to 5 minute
    let time = 120;

    // Call the time every second
    tick();
    const timer = setInterval(tick, 1000);

    return timer;
}

// Event handlers
let currentAccount, timer;

btnLogin.addEventListener("click", function (e) {
    // Prevent form from submitting
    e.preventDefault();

    currentAccount = accounts.find(
        (acc) => acc.userName === inputLoginUsername.value
    );

    if (currentAccount?.pin === +inputLoginPin.value) {
        //display UI andd messages
        labelWelcome.textContent = `Welcome back, ${
            currentAccount.owner.split(" ")[0]
        }`;
        containerApp.style.opacity = "100";

        /* Create current date and time */
        // Exprimenting API
        const now = new Date();
        const options = {
            hour: "numeric",
            minute: "numeric",
            day: "numeric",
            month: "numeric", // "long" or "2-digit"
            year: "numeric",
            // weekday: "long",
        };
        labelDate.textContent = new Intl.DateTimeFormat(
            currentAccount.locale,
            options
        ).format(now);

        inputLoginUsername.value = inputLoginPin.value = "";

        if (timer) clearInterval(timer);
        timer = startLogOutTimer();

        updateUI(currentAccount);
    }
});

btnTransfer.addEventListener("click", function (e) {
    e.preventDefault();
    const amount = +inputTransferAmount.value;
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

        // add transfer date
        currentAccount.movementsDates.push(new Date().toISOString());
        receiverAcc.movementsDates.push(new Date().toISOString());

        // clearing input after the transfer completes
        inputTransferAmount.value = inputTransferTo.value = "";

        // updateUI
        updateUI(currentAccount);

        // Reset timer
        clearInterval(timer);
        timer = startLogOutTimer();
    }
});

btnLoan.addEventListener("click", function (e) {
    e.preventDefault();

    const amount = +inputLoanAmount.value;
    if (
        amount > 0 &&
        currentAccount.movements.some((mov) => mov >= amount * 0.1)
    ) {
        setTimeout(function () {
            // add movements
            currentAccount.movements.push(amount);

            // add loan date
            currentAccount.movementsDates.push(new Date().toISOString());

            // update UI
            updateUI(currentAccount);

            // Reset timer
            clearInterval(timer);
            timer = startLogOutTimer();
        }, 2500);
    }
    inputLoanAmount.value = "";
});

btnClose.addEventListener("click", function (e) {
    e.preventDefault();

    if (
        inputCloseUsername.value === currentAccount.userName &&
        +inputClosePin.value === currentAccount.pin
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
    displayMovement(currentAccount, sorted);
    sorted = !sorted;
});

/////////////////////////////////////////////////
// LECTURES
/*  ***************************************************************************************************
 *   Converting and Checking Number
 *  ***************************************************************************************************/
{
    /////////////////////////////////////////
    /* javascript in representing numbers */
    console.log(23 === 23.0);

    // Base 10 - 0 to 9. 1/10 = 0.1. 3/10 = 0.3333333
    console.log(0.1 + 0.2);
    console.log(0.1 + 0.2 === 0.3);

    ////////////////////////////////
    /* konvert string to numbers */
    console.log(Number("45"));
    console.log(+"45");

    ////////////////////////////////////////////
    /* Parsing (parse numbers from a string) */
    console.log(Number.parseInt("30px")); // 30, get only the numbers
    console.log(Number.parseInt("px30")); // NaN, must start with a number

    // on parseInt accepts a second parameter called regex
    console.log(Number.parseInt("30px", 10)); // 30
    console.log(Number.parseInt("px30", 10)); // NaN

    // parseFloat
    console.log(Number.parseInt("   2.5rem   ")); // 2
    console.log(Number.parseFloat("   2.5rem   ")); // 2.5

    //////////////////////////////////////////
    /* check the value of whether a number */
    // Checking if value is NaN
    console.log(Number.isNaN(23)); // false
    console.log(Number.isNaN("23")); // false
    console.log(Number.isNaN(+"23n")); // true
    console.log(Number.isNaN(23 / 0)); // false

    // Checking if value is number
    console.log(Number.isFinite(23)); // true
    console.log(Number.isFinite("23")); // false
    console.log(Number.isFinite(+"23n")); // false
    console.log(Number.isFinite(23 / 0)); // true

    // Checking if value is integers
    console.log(Number.isInteger(23)); // true
    console.log(Number.isInteger(23.0)); // true
    console.log(Number.isInteger(23 / 0)); // false
}

/*  ***************************************************************************************************
 *   Math and Rounding
 *  ***************************************************************************************************/
{
    /* square root */
    console.log(Math.sqrt(25)); // 5
    console.log(25 ** (1 / 2)); // 5
    console.log(8 ** (1 / 3)); // 2

    /* get max value */
    console.log(Math.max(5, 18, 23, 11, 2)); // 23
    console.log(Math.max(5, 18, "23", 11, 2)); // 23
    console.log(Math.max(5, 18, "23px", 11, 2)); // NaN

    /* get min value */
    console.log(Math.max(5, 18, 23, 11, 2)); // 2

    ////////////////////////////////
    /* constants on math objects */
    // counting fingers
    console.log(Math.PI * Number.parseFloat("23px") ** 2);

    // make random numbers
    console.log(Math.trunc(Math.random() * 6) + 1);

    // formula to generate random integer between two values
    const randomInt = (min, max) =>
        Math.floor(Math.random() * (max - min) + 1) + min;
    console.log(randomInt(10, 20));

    ////////////////////////
    /* rounding integers */
    // delete decimal value
    console.log(Math.trunc(23.47)); // 23
    console.log(Math.trunc("23.47")); // 23
    console.log(Math.trunc(-23.47)); // -23

    // round to the integer below (the use of the floor is better than the trunc)
    console.log(Math.floor(27.4)); // 27
    console.log(Math.floor("27.9")); // 27
    console.log(Math.floor(-27.9)); // -28

    // round to the nearest integer
    console.log(Math.round(23.4)); // 23
    console.log(Math.round(23.5)); // 24

    // round to the above integer
    console.log(Math.ceil(25.4)); // 26
    console.log(Math.ceil(25.9)); // 26

    ////////////////////////
    /* rounding integers */
    // return a string
    console.log((2.7).toFixed(0));
    console.log((2.7).toFixed(3));
    console.log((2.7567).toFixed(4));
    console.log(+(2.7567).toFixed(2));
}

/*  ***************************************************************************************************
 *   The Remaining Operator
 *  ***************************************************************************************************/
{
    /* return operator rest */
    console.log(5 % 2);
    console.log(5 / 2); // 5 = 2 * 2 + 1

    console.log(8 % 3);
    console.log(8 / 3); // 8 = 2 * 3 + 1

    console.log(6 % 2);
    console.log(6 / 2);

    console.log(7 % 2);
    console.log(7 / 2);

    // Check if a number is divisible by another number
    const isEven = (n) => n % 2 === 0;
    console.log(isEven(8));
    console.log(isEven(70));
    console.log(isEven(345));

    // Example
    labelBalance.addEventListener("click", function () {
        [...document.querySelectorAll(".movements__row")].forEach(function (
            row,
            i
        ) {
            // 0, 2, 4, 6,...
            if (i % 2 === 0) row.style.backgroundColor = "orangered";
            // 0, 3, 6, 9,...
            if (i % 3 === 0) row.style.backgroundColor = "blue";
        });
    });
}

/*  ***************************************************************************************************
 *   Numeric Separators
 *  ***************************************************************************************************/
{
    /* to make it easier to read */
    const diameter = 287_460_000_000;
    console.log(diameter); // 287,460,000,000

    const price = 345_99;
    console.log(price);

    const transferFee1 = 15_00;
    const transferFee2 = 1_500;
    console.log(transferFee1, transferFee2);

    const PI = 3.1_345;
    console.log(PI);

    /* if storing number in string, for example in API or if getting string number from API, DO NOT USE UNDERLINE */
    console.log(Number("230_000"));
    console.log(Number.parseInt("230_000"));
    console.log(Number.parseFloat("230_000"));
}

/*  ***************************************************************************************************
 *   Working with BigInt
 *  ***************************************************************************************************/
// BigInt (Big Integer) can be used to store numbers as large as we want
{
    /* change regular number to BigInt number */
    console.log(2337357485410048406839179595n);
    console.log(BigInt(238541004840));

    /* Operations */
    console.log(10000n + 10000n);
    console.log(1000545485588089893678793969590n + 10000n);
    // console.log(Math.sqrt(23n)); ERROR

    /* can't mix BigInt with regular numbers */
    const huge = 36883853837239383903190n;
    const num = 23;
    // console.log(huge * num); ERROR
    console.log(huge * BigInt(num));

    // Exceptions
    console.log(20n > 15);
    console.log(20n === 20);
    console.log(20n == 20);
    console.log(20n == "20");
    console.log(typeof 20n);

    console.log(huge + "is Really big!!");

    // Divisions
    console.log(11n / 3n);
    console.log(10 / 3);
}

/*  ***************************************************************************************************
 *   Creating Dates
 *  ***************************************************************************************************/
{
    /* Create A Date */
    // with use new date constructor
    const now2 = new Date();
    console.log(now2);

    // parse date from date string
    console.log(new Date("Thu Sep 29 2022 05:54:32"));
    console.log(new Date("December Sep 24, 2015"));
    console.log(new Date(account1.movementsDates[0]));

    // month starts from 0
    console.log(new Date(2037, 10, 19, 15, 23, 5));
    console.log(new Date(2037, 10, 32));

    // insert date constructor function
    console.log(new Date(0));
    console.log(new Date(3 * 24 * 60 * 60 * 1000)); // three days later

    /* Working with dates */
    const future = new Date(2037, 10, 19, 15, 23);
    console.log(future);
    console.log(future.getFullYear());
    console.log(future.getMonth()); // month starts from 0
    console.log(future.getDate());
    console.log(future.getDay());
    console.log(future.getHours());
    console.log(future.getMinutes());
    console.log(future.getSeconds());
    console.log(future.getMilliseconds());

    // converts a specific date object into a string and can be stored somewhere
    const isoString = future.toISOString();
    console.log(isoString);

    // get the timestamp for the date
    console.log(future.getTime());

    // change date by millisecond
    console.log(new Date(2142231780000));

    // method to get current timestamp
    console.log(Date.now());

    // set the date
    future.setFullYear(2021);
    future.setMonth(0);
    future.setDate(1);
    console.log(future);
}

/*  ***************************************************************************************************
 *   Operations with Dates
 *  ***************************************************************************************************/
{
    const future = new Date(2037, 10, 19, 15, 23);
    console.log(future);

    const calcDaysPassed = (date1, date2) =>
        Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

    const days1 = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));
    console.log(days1);
}

/*  ***************************************************************************************************
 *   Internationalizing Dates (Intl)
 *  ***************************************************************************************************/
{
    const date = new Date();
    const option = {
        weekday: "long",
        hour: "numeric",
        minute: "numeric",
    };

    function dates(locale, options) {
        console.log(`${new Intl.DateTimeFormat(locale, options).format(date)}`);
    }
    dates("id-ID", option);

    /* get locale from user's browser */
    const locale = navigator.language;
    console.log(locale);
}

/*  ***************************************************************************************************
 *   Internationalizing Numbers (Intl)
 *  ***************************************************************************************************/
{
    const num2 = 1035743.23;

    const option2 = {
        style: "currency",
        currency: "IDR",
        useGrouping: true,
    };

    console.log(
        "US:   ",
        new Intl.NumberFormat("en-US", {
            style: "unit",
            unit: "celsius",
        }).format(num2)
    );
    console.log(
        "Indonesia:   ",
        new Intl.NumberFormat("id-ID", option2).format(num2)
    );
    console.log(
        "Syria:   ",
        new Intl.NumberFormat("ar-SY", option2).format(num2)
    );
    console.log(
        navigator.language,
        new Intl.NumberFormat(navigator.language, option2).format(num2)
    );
}

/*  ***************************************************************************************************
 *   Timers: setTimeOut and setInterval
 *  ***************************************************************************************************/
{
    /* setTimeout = run the function within a certain time, but the callback function is only executed once */
    const ingredients = ["olives", "spinach"];

    const pizzaTimer = setTimeout(
        (ing1, ing2) =>
            console.log(`here is your pizza with ${ing1} and ${ing2}`),
        3000, // setTimeout
        ...ingredients
    );
    console.log("Waiting...");

    // cancel timer
    if (ingredients.includes("spinach")) clearTimeout(pizzaTimer);

    /* setInterval = run the function repeatedly */
    // create a new date every 3 seconds
    setInterval(function () {
        const now = new Date();
        console.log(now);
    }, 3000);
}
