console.log("****************Exporting the module*******************");

/*  ***************************************************************************************************
 *   Exporting in the ES6 module
 *  ***************************************************************************************************/
/*
////////////////////////////////////////////////////////////////////////////
// Blocking code
console.log("Start fetching user");

const getUserResponse = await fetch(
    "https://jsonplaceholder.typicode.com/users"
);
console.log(getUserResponse);

console.log("Finish fetching user");

const shippingCost = 10;
console.log(shippingCost);

////////////////////////////////////////////////////////////////////////////
// Only can exporting code in top-level
export function addToCart(product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
addToCart("sugar", 100);

////////////////////////////////////////////////////////////////////////////
// can't exporting code in low-level
// if (true) {
//     export function addToCart(product, quality) {
//         cart.push({ product, quality });
//         console.log(`${quality} ${product} added to cart`);
//     }
//     addToCart("sugar", 100);
// }

////////////////////////////////////////////////////////////////////////////
// Exporting with variable name and by changing the name
const totalPrice = 234;
const totalQuantity = 100;

export { totalPrice, totalQuantity as qt };
*/
////////////////////////////////////////////////////////////////////////////
// exporting array
export const cart = [];

////////////////////////////////////////////////////////////////////////////
// Export Default (exporting a single value in a JavaScript file, be it a primitive value, function, array, object, or class, we use the keyword export default)
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}

/*  ***************************************************************************************************
 *   Exporting in the CommonJS Module
 *  **************************************************************************************************
Note:   
        - export and require keywords are objects which are not defined in code and browser environment, but in node they are important objects to use 
*/
////////////////////////////////////////////////////////////////////////////
// Export
// module.export.addToCart = function (product, quantity) {
//   cart.push({ product, quantity });
//   console.log(`${quantity} ${product} added to carts!!`);
// };
