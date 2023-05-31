console.log("****************Importing the module*******************");

/*  ***************************************************************************************************
 *   Importing in the ES6 module
 *  ***************************************************************************************************/
/*
////////////////////////////////////////////////////////////////////////////
// importing the module and by changing the name
import { addToCart, totalPrice as price, qt } from "./shoppingCart.js";

addToCart("bread", 5);
console.log(price, qt);

console.log("Importing the module");

////////////////////////////////////////////////////////////////////////////
// import them all at the same time
import * as ShoppingCart from "./shoppingCart.js";
ShoppingCart.addToCart("bread", 5);
console.log(ShoppingCart.totalPrice, ShoppingCart.qt);

////////////////////////////////////////////////////////////////////////////
// importing export default (we can change its variable name directly)
import add from "./shoppingCart.js";
add("pizza", 2);
*/
////////////////////////////////////////////////////////////////////////////
// Importing Array
import arr, { cart } from "./shoppingCart.js";
arr("melon", 5);
arr("banana", 9);
arr("apples", 3);

console.log(cart);

/*  ***************************************************************************************************
 *   Top-Level await (ES2020)
 *  ***************************************************************************************************/

////////////////////////////////////////////////////////////////////////////
// Await keyword in moduls (will block code)
// console.log("...starting...");

// const res = await fetch("https://jsonplaceholder.typicode.com/posts");
// const data = await res.json();
// console.log(data);

// console.log("...Finished...");

////////////////////////////////////////////////////////////////////////////
// how await top level works in the real world
async function getLAstPost() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  // return data;
  return { title: data.at(-1).title, text: data.at(-1).body };
}

const lastPost = getLAstPost();
console.log(lastPost);

// "Not very clean"
lastPost.then((last) => console.log(last));

// "best practice" in the CommonJS Module
// const lastPost2 = await getLAstPost();
// console.log(lastPost2);
/*
////////////////////////////////////////////////////////////////////////////
// Implementing the module pattern
const ShoppingCart2 = (function () {
  const carts = [];
  const amountOfFruits = 5;
  const amountOfFoods = 16;
  const amountOfDrinks = 9;

  function addToProduct(product, quantity) {
    carts.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to carts and some fruit as much ${amountOfFruits}`
    );
  }

  function orderStock(product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  }

  return {
    addToProduct,
    carts,
    amountOfFoods,
    amountOfDrinks,
  };
})();

ShoppingCart2.addToProduct("bath soap", 3);
ShoppingCart2.addToProduct("shampoo", 8);
console.log(ShoppingCart2);
console.log(ShoppingCart2.amountOfFruits); // private variable, not accessible
*/

/*  ***************************************************************************************************
 *   Importing in the CommonJS Module
 *  **************************************************************************************************
Note:   
        - export and require keywords are objects which are not defined in code and browser environment, but in node they are important objects to use 
*/
////////////////////////////////////////////////////////////////////////////
// Import
// const { addToCartNodeJs } = require("./shoppingCart.js");
// addToCartNodeJs.addToCart("sugar", 10);
// addToCartNodeJs.addToCart("bread", 5);

/*  ***************************************************************************************************
 *   Bundling with Parcel and NPM Script
 *  **************************************************************************************************

/* lodash-es pakages (will be make our code cleaner and tidier) */
// deep clone ( if you want to make deepCopy or deepClone manually it will be difficult, the solution is to use the functions provided by lodash, so we use open source software to solve the problems we face in javascript )

// import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";
import cloneDeep from "lodash-es";

const state = {
  cart: [
    { product: "sugar", quantity: 10 },
    { product: "bread", quantity: 8 },
  ],
  user: { loggedIn: true },
};
const stateCloneManually = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateCloneManually);
console.log(stateDeepClone);

// make the browser page not reload (This is very useful when we want to test something)
if (module.hot) {
  module.hot.accept();
}

/*  ***************************************************************************************************
 *   Configuring Babel and Polyfilling
 *  ***************************************************************************************************/
class Person {
  #greeting = "hey";
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting}, ${this.name}`);
  }
}
const wahyu = new Person("wahyu");

console.log("wahyu" ?? null);

console.log(cart.find((el) => el.quantity > 2));

Promise.resolve("TEST").then((x) => console.log(x));

////////////////////////////////////////////////////////////////////////////
// Polyfilling

/* core-js packages (Polyfilling Promises and all method arrays) */
import "core-js/actual";
// import "core-js/stable/array/find";
// import "core-js/stable/promise"

/* regenerator-runtime packages (Polyfilling async functions) */
import "regenerator-runtime/runtime";
