"use strict";

/*  ***************************************
 *   Using Google, StackOverflow and MDN
 *  ***************************************
 PROBLEM 1:
we work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperature of one day, calculate the temperature amplitude. Keep in mind that sometimes there mingt be a sensor error."

 solving the problem:
1. Understanding the problem
    - what is temp amplitude? answer: difference between highest and lowest temp
    - How to compute max and min temperatures?
    - What's a sensor error? And what does?
2. Breaking up into sub-problems
    - How to ignore errors?
    - Find max value in temp array
    - Find min value in temp array
    - Subtract min from max (amplitudde) and return it
        */
const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

function calcTempAmplitude(temps) {
    let max = temps[0];
    let min = temps[0];

    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];

        if (typeof curTemp !== "number") continue;

        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }
    console.log(max, min);
    return max - min;
}
console.log(calcTempAmplitude(temperatures));

/* 
PROBLEM 2:
function should now receive 2 arrays of temps

 solving the problem:
1. Understanding the problem
    - with 2 arrays, should we implement functionality twice? NO just merge two arrays
2. Breaking up into sub-problems
    - merge 2 arrays
    */
function calcTempAmplitudeNew(t1, t2) {
    const tempsNew = t1.concat(t2);
    console.log(tempsNew);

    let maxNew = tempsNew[0];
    let minNew = tempsNew[0];

    for (let i = 0; i < tempsNew.length; i++) {
        const curTempNew = tempsNew[i];

        if (typeof curTempNew !== "number") continue;
        if (curTempNew > maxNew) maxNew = curTempNew;
        if (curTempNew < minNew) minNew = curTempNew;
    }
    console.log(maxNew, minNew);
    return maxNew - minNew;
}
console.log(calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]));

/*  ***********************************************
 *   Debugging with the Console and Breakpoints
 *  ***********************************************
Example:
    change data degree Celcius to Fahrenheit, and an error occurred in the result. how do we move in getting it done? here are the steps!
        */
/* Debugging with the Console */
function measureKelvin() {
    const measurement = {
        type: "temp",
        unit: "celcius",

        // error because the result of the prompt is always a string
        // value: prompt('Degree celcius:'),

        // 3. FIXING THE PROBLEM
        value: Number(prompt("Degree celcius:")),
    };

    // 2. SEARCH AND FIND ERRORS
    console.table(measurement);
    //console.log(measurement);
    //console.warn(measurement);
    //console.error(measurement);

    const kelvin = measurement.value + 273;
    return kelvin;
}
// 1. IDENTIFYING THE RESULTS
console.log(measureKelvin());

/* Debugging with Breakpoints */
function calcTempAmplitudeBug(t1, t2) {
    const temps = t1.concat(t2);
    console.log(temps);

    let max = 0;
    // let min = 0; error

    // 3. FIXING THE PROBLEM
    let min = temps[0];

    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];

        if (typeof curTemp !== "number") continue;
        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }
    console.log(max, min);
    return max - min;
}
// 1. IDENTIFYING THE RESULTS
console.log(calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]));
// 2. SEARCH AND FIND ERRORS
//  go to the browser, go to the source, and give a breakpoint by tapping on the part of the code that will be checked.

/*  ************************
 *   Coding Challenge #1
 *  ************************
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example:
    [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]

 solving the problem:
1. Understanding the problem
    - get the value of each array and convert it to a string, separated by ...
    - what is the X days? answer: index + 1
2. Breaking up into sub-problems
    - create an array data container variable
    - transform array into string
    - transform each element to string with °C
    - strings needs to contain day (index + 1)
    - Add ... between the beginning and end of the string
    - log string to console
        */
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(`...${data1[0]}°C...${data1[1]}°C...${data1[2]}°C...`);

function printForecast(arr) {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        str += `${arr[i]}°C in ${i + 1} days...`;
    }
    console.log("..." + str);
}
printForecast(data1);
