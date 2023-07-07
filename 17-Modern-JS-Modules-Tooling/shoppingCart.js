/*  **************************************
 *   Exporting in the ES6 module
 *  **************************************/

// * Blocking code
// console.log("Start fetching user");

// const getUserResponse = await fetch(
//     "https://jsonplaceholder.typicode.com/users"
// );
// console.log(getUserResponse);

// console.log("Finish fetching user");

// const shippingCost = 10;
// console.log(shippingCost);

// ----------------------------------------------------

// * Hanya bisa mengeksport code di top-level
// export function addToCart(product, quantity) {
//   cart.push({ product, quantity });
//   console.log(`${quantity} ${product} added to cart`);
// }
// addToCart("sugar", 100);

// * Tidak bisa mengeksport code di low-level
// if (true) {
//     export function addToCart(product, quality) {
//         cart.push({ product, quality });
//         console.log(`${quality} ${product} added to cart`);
//     }
//     addToCart("sugar", 100);
// }

// ----------------------------------------------------

// * Mengeksport dengan nama variabel dan mengubah namanya
const totalPrice = 234;
const totalQuantity = 100;

export { totalPrice, totalQuantity as qt };

// ----------------------------------------------------

// * Mengeksport array
export const cart = [];

// * Export Default (mengeksport nilai tunggal pada file JavaScript (baik itu primitive value, function, array, object, atau class).
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}

// ----------------------------------------------------

/*  ***************************************
 *  Exporting in the CommonJS Module
 *  ***************************************
    Note:
      - kata kunci "export" atau "export default" dan "import" hanya berjalan di browser environment (berjalan di sisi client), tidak dapat berjalan di sisi server.
      - Untuk mengeksport module di sisi server menggunakan kata kunci "module.export" atau "exports"
*/
// * Export
// module.export.addToCart = function (product, quantity) {
//   cart.push({ product, quantity });
//   console.log(`${quantity} ${product} added to carts!!`);
// };
