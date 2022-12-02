"use strict";

/*  ***************************************************************************************************
 *   FUNCTIONS
 *  ***************************************************************************************************/
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}
const finland = describeCountry("finland", 6, "helsinki");
const indonesia = describeCountry("indonesia", 40, "jakarta");
const malaysia = describeCountry("malaysia", 20, "kuala lumpur");
console.log(`${finland}, ${indonesia}, ${malaysia}`);

/*  ***************************************************************************************************
 *   FUNCTION DECLARATION VS EXPRESSIONS
 *  ***************************************************************************************************/
////////////////////////////////////////////////////////////
// Function Declarations
function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const percPortugal1 = percentageOfWorld1(10);
const percChina1 = percentageOfWorld1(1441);
const percUSA1 = percentageOfWorld1(332);
console.log(percPortugal1, percChina1, percUSA1);

////////////////////////////////////////////////////////////
// Function Expressions
const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
};

const percPortugal2 = percentageOfWorld2(10);
const percChina2 = percentageOfWorld2(1441);
const percUSA2 = percentageOfWorld2(332);
console.log(percPortugal2, percChina2, percUSA2);

/*  ***************************************************************************************************
 *   ARROW FUNCTION
 *  ***************************************************************************************************/
const percentageOfWorld3 = (population) => (population / 7900) * 100;

const percPortugal3 = percentageOfWorld3(10);
const percChina3 = percentageOfWorld3(1441);
const percUSA3 = percentageOfWorld3(332);
console.log(percPortugal3, percChina3, percUSA3);

/*  ***************************************************************************************************
 *   Functions Calling Other Functions
 *  ***************************************************************************************************/
function describePopulation(country, population) {
    const percentage = percentageOfWorld1(population);
    const describtion = `${country} has ${population} million people, which is about ${percentage}% of the world.`;
    console.log(describtion);
}
describePopulation("china", 1441);
describePopulation("portugal", 332);
describePopulation("usa", 10);

/*  ***************************************************************************************************
 *   Introduction to Arrays
 *  ***************************************************************************************************/
const populations = [1441, 332, 10, 60];
console.log(populations.length === 4);

const percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3]),
];
console.log(percentages);

/*  ***************************************************************************************************
 *   Basic Array Operations (Methods)
 *  ***************************************************************************************************/
const neighbours = ["malaysia", "brunei", "singapore"];

//add array
neighbours.push("Utopia");
console.log(neighbours);

//remove array
neighbours.pop();
console.log(neighbours);

//using include to write conditionals
if (!neighbours.includes("germany")) {
    console.log("Probably not a central European country :D");
}
console.log(neighbours);

//change array name
neighbours[neighbours.indexOf("malaysia")] = "indonesia";
console.log(neighbours);

/*  ***************************************************************************************************
 *   Introduction to Objects
 *  ***************************************************************************************************/
const myCountry = {
    country: "indonesian",
    capital: "jakarta",
    language: "indonesia",
    populations: 257,
    neighbours: ["malaysia", "brunei", "singapore"],
};
console.log(myCountry);

/*  ***************************************************************************************************
 *   Dot vs. Bracket Notation
 *  ***************************************************************************************************/
console.log(
    `${myCountry.country} has ${myCountry.populations} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring counties and a capital called ${myCountry.capital}`
);

myCountry.populations += 2;
console.log(myCountry.populations);

myCountry.populations -= 2;
console.log(myCountry.populations);

/*  ***************************************************************************************************
 *   Object Methods
 *  ***************************************************************************************************/
const myCountry2 = {
    country: "indonesian",
    capital: "jakarta",
    language: "indonesia",
    populations: 257,
    neighbours: ["malaysia", "brunei", "singapore"],
    describe: function () {
        console.log(
            `${this.country} has ${this.populations} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring counties and a capital called ${this.capital}`
        );
    },
    checkIsland: function () {
        this.isIsland = !!this.neighbours.length;
        return this.isIsland;
    },
};
myCountry2.describe();
myCountry2.checkIsland();

console.log(myCountry2.isIsland);
console.log(myCountry2);

/*  ***************************************************************************************************
 *   Iteration: The for Loop
 *  ***************************************************************************************************/
for (let voter = 1; voter <= 50; voter++) {
    console.log(`vote number ${voter} is currently voting`);
}

/*  ***************************************************************************************************
 *   Looping Arrays, Breaking and Continuing
 *  ***************************************************************************************************/
const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
    const population = percentageOfWorld1(populations[i]);
    percentages2.push(population);
}
console.log(percentages2);

/*  ***************************************************************************************************
 *   Looping Backwards and Loops in Loops
 *  ***************************************************************************************************/
const listOfNeighbours = [
    ["Canada", "Mexico"],
    ["Spain"],
    ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
    for (let y = 0; y < listOfNeighbours[i].length; y++) {
        console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
    }
}

/*  ***************************************************************************************************
 *   The while Loop
 *  ***************************************************************************************************/
const percentages3 = [];

let i = 0;
while (i < populations.length) {
    const population = percentageOfWorld1(populations[i]);
    percentages3.push(population);
    i++;
}
console.log(percentages3);
