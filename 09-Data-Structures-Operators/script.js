"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (firstParam, lastParam) {
    return [this.starterMenu[firstParam], this.mainMenu[lastParam]];
  },

  // passing an object into a function as an argument
  orderDelivery: function ({ time, address, mainIndex }) {
    console.log(
      `Order Received! ${this.mainMenu[mainIndex]} to ${address} at ${time}` //mainMenu take index
    );
  },

  // using spread operators to forward arguments
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  // rest parameters
  orderPizza: function (mainIngredient, ...optionalIngredients) {
    console.log(
      `the main ingredients of making pizza are ${mainIngredient} and their supporting raw materials are ${optionalIngredients}`
    );
  },
};

/*  ***************************************************************************************************
 *   Destructuring Arrays
 *  ***************************************************************************************************/
{
  const arr = [10, 15, 20];
  const a = arr[0];
  const b = arr[1];
  const c = arr[2];

  // with detrukturing can declare three variables together
  const [x, y, z] = arr;
  console.log(x, y, z);

  // Retrieve array elements number one and three with detrukturing
  let [first, , three] = restaurant.categories;
  console.log(first, three);

  // Switching variable with detrukturing
  [first, three] = [three, first];
  console.log(first, three);

  // Receive 2 return value from a function with detrukturing
  const [data1, data2] = restaurant.order(2, 0);
  console.log(data1, data2);

  // Get an element from an array in an array (Nested array)
  const nested = [2, 4, [5, 6]];
  const [i, , [j, k]] = nested; // destrukturing inside the destrukturing
  console.log(i, j, k);

  // Default value in arrays = used when not knowing the length of the array. e.g. when wanting to get data from an API
  const [value1 = 1, value2 = 1, value3 = 1] = [8, 9];
  console.log(value1, value2, value3);
}

/*  ***************************************************************************************************
 *   Destructuring objects
 *  ***************************************************************************************************/
{
  // calling the property name as a variable
  const { openingHours, name, categories } = restaurant;
  console.log(openingHours, name, categories);

  // Stores a property in a variable
  const { openingHours: data1, name: data2, categories: data3 } = restaurant;
  console.log(data1, data2, data3);

  // Default value in objects = useful when we don't know the data
  const { menu = [], name: restaurantName, categories: categorie } = restaurant;
  console.log(menu, restaurantName, categorie, restaurant);

  // change the value of a variable from an object
  let a = 124;
  let b = 500;
  const objects = { a: 20, b: 30, c: 40 };
  console.log(a, b);

  ({ a, b } = objects);
  console.log(a, b);

  // Nested Object, store it in a variable dataOpen and dataClose
  const {
    fri: { open: dataOpen, close: dataClose },
  } = openingHours;
  console.log(dataOpen, dataClose);

  // passing an object into a function as an argument
  restaurant.orderDelivery({
    time: "20.00",
    address: "Via del sole, 21",
    mainIndex: 0,
  });
}

/*  ***************************************************************************************************
 *   Spread Operators (...)
 *  ***************************************************************************************************/
{
  // SPREAD OPERATOR DESTRUCTURING
  // create a new array by adding an existing array
  const arr = [7, 8, 9];
  const newArr = [1, 2, ...arr]; //adding all elements in variable arr
  console.log(newArr);

  console.log(...newArr);

  const newMenu = ["nasi padang", ...restaurant.mainMenu, "rica guguk"];
  console.log(newMenu); //create new arrays

  // Copy array
  const mainMenuCopy = [...restaurant.mainMenu];
  console.log(mainMenuCopy);

  // join 2 arrays
  const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
  console.log(menu);

  // use operator spread in strings
  const str = "wahyu";
  const letters = [...str, " ", "K"];
  console.log(letters);

  // SPREAD OPERATOR FUNCTION
  // using spread operators to forward arguments in the function(Real-world example)
  const ingredients = [
    /*  prompt("let's make pasta! ingredients 1?"),
        prompt("ingredients 2?"),
        prompt("ingredients 3?"), */
  ];
  console.log(ingredients);
  restaurant.orderPasta(...ingredients);

  // SPREAD OPERATOR OBJECT
  // since ES 2018, spread operators are actually also working on objects, even though objects are not iterables
  const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "wahyu" };
  console.log(newRestaurant);
  // console.log(...newRestaurant); can't used

  // copy and change the object
  const restaurantCopy = { ...restaurant };
  restaurantCopy.name = "hik udin";
  console.log(restaurantCopy);
  console.log(restaurant);
}

/*  ***************************************************************************************************
 *   Rest Pattern and Parameters
 *  ***************************************************************************************************/
{
  // REST PATTERN DESTRUCTURING
  // SPREAD OPERATOR, Because on RIGHT side of =
  const arr = [1, 2, ...[3, 4]];

  // REST PATTERN, Because on LEFT side of =
  const [a, b, ...other] = [1, 2, 3, 4, 5, 6];
  console.log(a, b, other);

  const [Pizza, , Risotto, ...otherFood] = [
    ...restaurant.mainMenu,
    ...restaurant.starterMenu,
  ];
  console.log(Pizza, Risotto, otherFood);

  // REST PATTERN IN OBJECT
  const { sat, ...weekdays } = restaurant.openingHours;
  console.log(weekdays);

  // REST PATTERN FUNCTION
  // rest parameters
  function add(...number) {
    let sum = 0;
    for (let i = 0; i < number.length; i++) sum += number[i];

    console.log(sum);
  }
  add(2, 3);
  add(5, 6, 7, 8, 9, 67);
  add(45, 48, 87);

  //add value in the function
  const x = [23, 5, 7];
  add(...x);

  restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");
}

/*  ***************************************************************************************************
 *   Short Circuiting ( && and || )
 *  ***************************************************************************************************/
{
  // OR ( || )
  // Use Any data types, return Any data types, Short-circuiting
  console.log("---- OR ----");
  console.log(3 || "wahyu");
  console.log("" || "wahyu");
  console.log(true || 0);
  console.log(undefined || null);

  console.log(undefined || 0 || "" || "wahyu" || 23 || null);

  // Easier to use Short-Circuiting ( || ) than ternary operators
  restaurant.numGuests = 23;
  const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
  console.log(guests1);

  const guests2 = restaurant.numGuests || 10;
  console.log(guests2);

  // AND ( && )
  console.log("---- AND ----");
  console.log(3 || "wahyu");
  console.log(0 || "wahyu");
  console.log(true || 0);
  console.log(undefined || null);

  console.log("hello" && 23 && null && "wahyu");

  // Practical example
  if (restaurant.orderPizza) {
    restaurant.orderPizza("tepung", "kol");
  }
  // same with
  restaurant.orderPizza && restaurant.orderPizza("tepung", "kol");
}

/*  ***************************************************************************************************
 *   The Nullish Coalescing Operator ( ?? )
 *  ***************************************************************************************************/
{
  // when we set the value to 0, it will error when using the OR operator
  restaurant.numGuests = 0;
  const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
  console.log(guests1);

  // The Solution: use Nullish Coalescing Operator
  const guestsCorrect = restaurant.numGuests ?? 10;
  console.log(guestsCorrect);
}

/*  ***************************************************************************************************
 *   Logical Assignment Operators
 *  ***************************************************************************************************/
{
  const rest1 = {
    name: "mangkobar",
    numGuests: 20,
    employee: 0,
  };
  const rest2 = {
    name: "HIK gurih",
    owner: "wahyu komarudin",
  };

  /* GIVE A DEFAULT VALUE */
  // use OR Assignment Operators
  // rest1.numGuests = rest1.numGuests || 10;
  // rest2.numGuests = rest2.numGuests || 10;
  rest2.numGuests ||= 10;
  console.log(rest2);

  // use Nullish Assignment Operators (Null or Undefined)
  rest1.employee ??= 10;
  console.log(rest1);

  /* REPLACING VALUES */
  // use AND Assignment Operators
  // rest1.owner = rest1.owner && "joko";
  // rest2.owner = rest2.owner && "joko";
  rest2.owner &&= "joko";
  console.log(rest2);
}

/*  ***************************************************************************************************
 *   CODING CHALLENGE #01
 *  **************************************************************************************************
We're building a football betting app (soccer for my American friends �)! Suppose we get data from a web service about a certain game ('game' variable on next page). In this challenge we're gonna work with that data.

Your tasks:
    1. Create one player array for each team (variables 'players1' and 'players2')
    2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
    3. Create an array 'allPlayers' containing all players of both teams (22 players)
    4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final' containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
    5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
    6. Write a function ('printGoals') that receives an arbitrary number of player names (not an array) anprints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
    7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator.
    
Test data for 6.:
    First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
        */

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
{
  // 1.
  const [players1, players2] = game.players;
  console.log(players1);
  console.log(players2);
  // 2.
  const [gk, ...fieldPlayers] = players1;
  console.log(gk);
  console.log(fieldPlayers);
  // 3.
  const [...allPlayers] = [...players1, ...players2];
  console.log(allPlayers);
  // 4.
  const [...players1Final] = [...players1, "Thiago", "Coutinho", "Perisic"];
  console.log(players1Final);
  // 5.
  const { team1, x: draw, team2 } = { ...game.odds };
  console.log(team1);
  console.log(draw);
  console.log(team2);
  // 6.
  function printGoals(...players) {
    console.log(`${players.length} goals were scored`);
  }
  printGoals(...game.scored);
  // 7.
  team1 < team2 && console.log("Team 1 is more likely to win");
  team1 > team2 && console.log("Team 2 is more likely to win");
}

/*  ***************************************************************************************************
 *   Looping Arrays: The for-of Loop
 *  ***************************************************************************************************/
{
  const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

  for (const item of menu) {
    console.log(item);
  }

  // get index use for-of loop
  for (const [i, el] of menu.entries()) {
    console.log(`${i + 1} = ${el}`);
  }
}

/*  ***************************************************************************************************
 *   Enhanced Object Literals
 *  ***************************************************************************************************/
/* three easy ways to write object literals */
{
  // 3. change property name
  const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

  // 1. take a separate variable and put it in an object literal
  const openingHours = {
    [weekdays[3]]: {
      open: 12,
      close: 22,
    },
    [weekdays[4]]: {
      open: 11,
      close: 23,
    },
    // can do expression
    [`day-${2 + 4}`]: {
      open: 0,
      close: 24,
    },
  };

  // this is object literals
  const restaurant = {
    name: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],

    // ES6 enhanced object literals
    openingHours,

    // 2. ES6 writing method
    order(firstParam, lastParam) {
      return [this.starterMenu[firstParam], this.mainMenu[lastParam]];
    },

    orderDelivery({ time, address, mainIndex }) {
      console.log(
        `Order Received! ${this.mainMenu[mainIndex]} to ${address} at ${time}` //mainMenu take index
      );
    },

    orderPasta(ing1, ing2, ing3) {
      console.log(
        `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
      );
    },

    orderPizza(mainIngredient, ...optionalIngredients) {
      console.log(
        `the main ingredients of making pizza are ${mainIngredient} and their supporting raw materials are ${optionalIngredients}`
      );
    },
  };
  console.log(restaurant);
}

/*  ***************************************************************************************************
 *   Optional Chaining ( ?. )
 *  ***************************************************************************************************/
/* Check the property name */
{
  // console.log(restaurant.openingHours.mon.open); ERROR
  console.log(restaurant.openingHours.mon?.open); // Solution: with Optional Chaining

  // Example
  const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

  for (const day of weekdays) {
    const open = restaurant.openingHours[day]?.open ?? "close";
    console.log(`on ${day}, we open at ${open}`);
  }
}

{
  /* Check a method before it is called */
  // Check method order!
  console.log(restaurant.order?.(5, 6) ?? "Method does not exist");

  // Check method orderRisotto!
  console.log(restaurant.orderRisotto?.(5, 6) ?? "Method does not exist");

  /* Check Arrays */
  const data1 = [{ name: "wahyu", age: 21 }];
  // const data2 = [];

  console.log(data1[0]?.name ?? "user array is empty");

  if (data1.length > 0) console.log(data1[0].age);
  else console.log("user array is empty");
}

/*  ***************************************************************************************************
 *   Looping Object: Object Keys, Values, and Entries
 *  ***************************************************************************************************/
/* Property Names ( Object.keys() ) */
{
  const properties = Object.keys(restaurant.openingHours);
  console.log(properties);

  let openStr = `we are open on ${properties.length} days:  `;
  for (const day of properties) {
    openStr += `${day}, `;
  }
  console.log(openStr);
}

/* property value ( Oject.value() ) */
{
  const value = Object.values(restaurant.openingHours);
  console.log(value);
}

{
  /* entries in Object (Change Object to Arrays) */
  const entries = Object.entries(restaurant.openingHours);
  console.log(entries);

  // [key, value]
  for (const [key, { open, close }] of entries) {
    console.log(`on ${key} we open at ${open} and close at ${close}`);
  }
}

/*  ***************************************************************************************************
 *   CODING CHALLENGE #02
 *  **************************************************************************************************
Let's continue with our football betting app! Keep using the 'game' variable from before.
Your tasks:
    1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
    2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
    3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
        Odd of victory Bayern Munich: 1.33
        Odd of draw: 3.25
        Odd of victory Borrussia Dortmund: 6.5
    Get the team names directly from the game object, don't hardcode them (except for "draw"). Hint: Note how the odds and the game objects have the same property names �
    4. Bonus: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
        {
            Gnarby: 1,
            Hummels: 1,
            Lewandowski: 2
        }
    */
{
  for (const [i, player] of game.scored.entries()) {
    console.log(`"Goal ${i + 1}: ${player}"`);
  }

  const odds = Object.values(game.odds);
  console.log(odds);

  let average = 0;
  for (const i of odds) average += i;
  average /= odds.length;
  console.log(average);

  for (const [teamName, odd] of Object.entries(game.odds)) {
    const teamStr = teamName === "x" ? "draw" : `victory ${game[teamName]}`;
    console.log(`Odd of ${teamStr} ${odd}`);
  }

  /* BONUS */
  // So the solution is to loop over the array, and add the array elements as object properties, and then increase the count as we encounter a new occurence of a certain element
  const scorers = {};
  for (const player of game.scored) {
    scorers[player] ? scorers[player]++ : (scorers[player] = 1);
  }
  console.log(scorers);
}

/*  ***************************************************************************************************
 *   Sets
 *  ***************************************************************************************************/
{
  // the same array will disappear
  const orderSet = new Set([
    "pasta",
    "pizza",
    "pizza",
    "risotto",
    "pasta",
    "pasta",
    "risotto",
  ]);
  console.log(orderSet);

  console.log(new Set("wahyu"));

  // check the sum of the same value
  console.log(orderSet.size);

  console.log(new Set(["wahyu", "joni", "wahyu", "angga", "budi"]).size);

  // check the presence or absence of data in the Sets (similar to include() method in array)
  console.log(orderSet.has("pizza"));
  console.log(orderSet.has("bread"));

  // add element in the Sets
  orderSet.add("bawang");
  orderSet.add("bawang");
  console.log(orderSet);

  // remove element
  orderSet.delete("risotto");
  console.log(orderSet);

  // remove all elements
  // orderSet.clear();

  // with sets can also do loops
  for (const order of orderSet) console.log(order);

  // best practice
  const staff = ["waiter", "chef", "waiter", "manager", "chef", "waiter"];

  const staffUnique = [...new Set(staff)]; // to konvert string in array, can use operator spread
  console.log(staffUnique);
}

/*  ***************************************************************************************************
 *   Maps: Fundamentals
 *  ***************************************************************************************************/
{
  // create a new Maps
  const rest = new Map();

  // add elements to the rest
  rest.set("name", "HIK asyik");
  rest.set(1, "firenze, italy");
  rest.set(2, "lisbon, portugal");

  // add any elements to the rest
  rest
    .set("people", ["wahyu", "joni", "wahyu", "angga", "budi"])
    .set("open", 11)
    .set("close", 23)
    .set(true, "we are open")
    .set(false, "we are close");
  console.log(rest);

  // Get data from keys
  console.log(rest.get(true));
  console.log(rest.get("name"));

  const time = 9;
  console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

  // check the presence or absence of data in the Map
  console.log(rest.has("people"));

  //remove the data from the map
  rest.delete(2);

  // remove all elements
  // rest.clear();

  // check length of the map
  console.log(rest.size);

  // Best practice
  const arr = [1, 2];
  rest.set(arr, "test");
  console.log(rest.get(arr));
}

/*  ***************************************************************************************************
 *   Maps: Iteration
 *  ***************************************************************************************************/
{
  // Another way to add elements to maps
  const questions = new Map([
    ["questions", "what is the best programming language?"],
    [1, "c"],
    [2, "java"],
    [3, "javascript"],
    ["correct", 3],
    [true, "Correct"],
    [false, "Try again"],
  ]);
  console.log(questions);

  // quiz app
  console.log(questions.get("questions"));
  for (const [key, value] of questions) {
    if (typeof key === "number") console.log(`answer ${key}: ${value}`);
  }

  // const answer = Number(prompt("Your answer"));
  const answer = 3;
  console.log(answer);
  console.log(questions.get(questions.get("correct") === answer));

  // Konvert Object to Map
  console.log(Object.entries(restaurant.openingHours));
  const hoursMap = new Map(Object.entries(restaurant.openingHours));
  console.log(hoursMap);

  // konvert Map to Arrays
  console.log([...questions]);
  console.log([...questions.keys()]);
  console.log([...questions.values()]);
}

/*  ***************************************************************************************************
 *   CODING CHALLENGE #03
 *  **************************************************************************************************
Let's continue with our football betting app! This time, we have a map called 'gameEvents' (see below) with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).
Your tasks:
    1. Create an array 'events' of the different game events that happened (no duplicates)
    2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
    3. Compute and log the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
    4. Loop over 'gameEvents' and log each element to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this: [FIRST HALF] 17: ⚽ GOAL
        */
{
  const gameEvents = new Map([
    [17, "⚽ GOAL"],
    [36, "� Substitution"],
    [47, "⚽ GOAL"],
    [61, "� Substitution"],
    [64, "🟨 Yellow card"],
    [69, "🟥 Red card"],
    [70, "� Substitution"],
    [72, "� Substitution"],
    [76, "⚽ GOAL"],
    [80, "⚽ GOAL"],
    [92, "🟨 Yellow card"],
  ]);

  // 1.
  const events = new Set([...gameEvents.values()]);
  console.log(events);

  // 2.
  gameEvents.delete(64);
  console.log(gameEvents);

  // 3.
  console.log(
    `"An event happened, on average, every ${90 / gameEvents.size} minutes"`
  );

  // Bonus: get last element
  const lastElement = [...gameEvents.keys()].pop();
  console.log(lastElement);

  // 4.
  for (const [min, event] of gameEvents) {
    min >= 1 && min <= 45
      ? console.log(`[FIRST HALF] ${min}: ${event}`)
      : console.log(`[SECOND HALF] ${min}: ${event}`);
  }
}

/*  ***************************************************************************************************
 *   Working with String
 *  ***************************************************************************************************/
/* Working With String Part-1 */
{
  const airplane = "TAP Air Indonesia";
  const plane = "A349";

  /* get character string at specified position */
  console.log(airplane[0]);
  console.log(plane[2]);
  console.log("wahyu"[4]);

  /* read string length */
  console.log(airplane.length);
  console.log("joko".length);

  /* method in string */
  // get index
  console.log(airplane.indexOf("r"));

  // get last index
  console.log(airplane.lastIndexOf("a"));

  // search all words ( case sensitive )
  console.log(airplane.indexOf("indonesia"));
  console.log(airplane.indexOf("Indonesia"));

  // index use case on string: Extract String part ( slice() )
  console.log(airplane.slice(4)); // extract first index part 4
  const str = airplane.slice(4, 7); // extract index 4 to 7
  console.log(str);
  console.log(airplane);

  // extract the part without knowing the index number
  console.log(airplane.slice(0, airplane.indexOf(" "))); // first part
  console.log(airplane.slice(airplane.lastIndexOf(" ") + 1)); // last part

  // extract from behind
  console.log(airplane.slice(-2));

  // cut character
  console.log(airplane.slice(0, -2));
  console.log(airplane.slice(1, -1));

  /* Best Practic */
  function checkMiddleSeat(seat) {
    // B and C are middle seat
    const middleSeat = seat.slice(-1);
    if (middleSeat === "B" || middleSeat === "C") {
      console.log("you get the middle seat");
    } else {
      console.log("you got lucky");
    }
  }
  checkMiddleSeat("11B");
  checkMiddleSeat("23C");
  checkMiddleSeat("3E");
}

/* Working With String Part-2 */
{
  const text = "INDONESIA is Beautiful Country";

  // change case strings
  console.log(text.toLowerCase());
  console.log(text.toUpperCase());

  // Fix capitalization in name
  const name = "wAhYu"; // Wahyu
  const nameLower = name.toLowerCase();
  const nameCorrect = nameLower[0].toUpperCase() + nameLower.slice(1);
  console.log(nameCorrect);

  // Comparing Email: remove spaces from beginning to end ( trim() )
  const email = "hello@example.com";
  const loginEmail = " Hello@Example.com \n";
  console.log(loginEmail);

  const normalizedEmail = loginEmail.toLowerCase().trim();
  console.log(normalizedEmail);
  console.log(email === normalizedEmail);

  // Replacing
  const priceRp = "Rp500,00";
  const priceUS = priceRp.replace("Rp", "$").replace(",", ".");
  console.log(priceUS);

  // replace more than the same word
  const announcement =
    "All passengers come to boarding door 23. boarding door 23!";

  console.log(announcement.replace("door", "gate"));
  console.log(announcement.replace(/door/g, "gate")); // Global

  // Return Boolean
  const plane = "Airbus A320neo";
  console.log(plane.includes("32"));
  console.log(plane.includes("boeing"));
  console.log(plane.startsWith("Ai")); // starting with the first word

  if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
    console.log("Part of the New Airbus family");
  }

  //Practice exercise
  function checkBaggage(items) {
    const baggage = items.toLowerCase();
    if (baggage.includes("knife") || baggage.includes("gun")) {
      console.log("You are not allowed to boarding");
    } else {
      console.log("Welcome boarding");
    }
  }

  checkBaggage("I have a laptop, some Food and a pocket Knife");
  checkBaggage("Socks and camera");
  checkBaggage("Got some snacks and Gun for protection");
}

/* Working With String Part-3 */
{
  /* Split and Join */
  // split the string into parts based on the divisor string ( Split() ) return Arrays
  console.log("a+very+simple+string".split("+"));
  console.log("Wahyu Komarudin Hidayah".split(" "));

  const [firstName, lastName] = "wahyu komarudin hidayah".split(" ");
  console.log(firstName, lastName);

  // join() = opposite of Split
  const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
  console.log(newName);

  // practice ( change the first word to uppercase )
  function capitalizeName(name) {
    const namePerson = name.split(" ");
    const nameLower = [];

    for (const n of namePerson) {
      nameLower.push(n.replace(n[0], n[0].toUpperCase()));
      // nameLower.push(n[0].toUpperCase() + n.slice(1));
    }
    return nameLower.join(" ");
  }
  console.log(capitalizeName("wahyu komarudin hidayah"));
  console.log(capitalizeName("jessica ann smith davis"));

  /* padding */
  // adding a number of characters according to what has been determined
  const message = "Go to gate 23!";
  console.log(message.padStart(23, " +").padEnd(30, " +")); // length string is 30
  console.log("wahyu".padStart(20, "+").padEnd(33, "+"));

  // Example
  function maskCreditCard(number) {
    const str = number + ""; // konvert number to string
    const last = str.slice(-4);
    return last.padStart(str.length, "*");
  }
  console.log(maskCreditCard(938477745));
  console.log(maskCreditCard(938444444477745));
  console.log(maskCreditCard("93847774657677655775"));

  /* Repeat */
  // repeating the same string many times
  const message2 = "Bad waether...All Departures Delayed...";
  console.log(message2.repeat(3));

  function planesInLine(n) {
    console.log(`There are ${n} planes in line ${"🙏".repeat(n)}`);
  }

  planesInLine(2);
  planesInLine(5);
  planesInLine(8);
}

/*  ***************************************************************************************************
 *   CODING CHALLENGE #04
 *  **************************************************************************************************
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to insert the elements), and conversion will happen when the button is pressed.

Test data (pasted to textarea, including spaces):
    underscore_case
     first_name
    Some_Variable
      calculate_AGE
    delayed_departure

Should produce this output (5 separate console.log outputs):
    underscoreCase ✅
    firstName ✅✅
    someVariable ✅✅✅
    calculateAge ✅✅✅✅
    delayedDeparture ✅✅✅✅✅
    
Hints:
§ Remember which character defines a new line in the textarea �
§ The solution only needs to work for a variable made out of 2 words, like a_b
§ Start without worrying about the ✅. Tackle that only after you have the variable name conversion working �
§ This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!
        */
{
  document.body.append(document.createElement("textarea"));
  document.body.append(document.createElement("button"));

  document.querySelector("button").addEventListener("click", function () {
    const text = document.querySelector("textarea").value;
    const rows = text.split("\n");

    for (const [i, el] of rows.entries()) {
      const [firstWord, lastWord] = el.toLowerCase().trim().split("_");

      const output = `${firstWord}${lastWord.replace(
        lastWord[0],
        lastWord[0].toUpperCase()
      )}`;

      console.log(`${output.padEnd(20)}${"✅".repeat(i + 1)}`);
    }
  });
}

/*  ***************************************************************************************************
 *   String Method Practice
 *  ***************************************************************************************************/
{
  const flights =
    "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

  /* Output */
  // 🔴 Delayed Departure from FAO to TXL (11h25)
  //              Arrival from BRU to FAO (11h45)
  //   🔴 Delayed Arrival from HEL to FAO (12h05)
  //            Departure from FAO to LIS (12h30)

  const getCode = (str) => str.slice(0, 3).toUpperCase();

  for (const flight of flights.split("+")) {
    const [type, from, to, time] = flight.split(";");
    const output = `${type.startsWith("_Delayed") ? "⛔" : ""}${type.replaceAll(
      "_",
      " "
    )} from ${getCode(from)} to ${getCode(to)} ${time.replace(
      ":",
      "h"
    )}`.padStart(60);
    console.log(output);
  }
}
