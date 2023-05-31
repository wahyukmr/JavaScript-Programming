"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

function renderCountry(countryInfo, borderClass = "") {
  const flag = countryInfo.flag.large;
  const name = countryInfo.name;
  const region = countryInfo.region;
  const population = (countryInfo.population / 1000000).toFixed(1);
  const languages = Object.values(countryInfo.languages)[0];
  const currencies = Object.values(countryInfo.currencies)[0].name;

  const html = `
    <article class="country ${borderClass}">
        <img class="country__img" src="${flag}" />
        <div class="country__data">
            <h3 class="country__name">${name}</h3>
            <h4 class="country__region">${region}</h4>
            <p class="country__row"><span>👫</span>${population} million souls</p>
            <p class="country__row"><span>🗣️</span>${languages}</p>
            <p class="country__row"><span>💰</span>${currencies}</p>
        </div>
    </article>
    `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
}

function renderError(massage) {
  countriesContainer.insertAdjacentText("beforeend", massage);
  // countriesContainer.style.opacity = 1;
}

function getJSON(url, errorMsg = "") {
  return fetch(url).then(function (response) {
    if (!response.ok) throw new Error(`ERROR ${response.status}: ${errorMsg}`);

    return response.json(); // result a Promises
  });
}

/*  ****************************************************************************************
 *   old version of ajax calling with XMLHttpRequest object
 *  *****************************************************************************************/
// {
//   function getCountryData(country) {
//     const request = new XMLHttpRequest();
//     request.open(
//       "GET",
//       `https://countryapi.io/api/name/${country}?apikey=SNZ2eNfCPebdlVGJ7zAcF4ooqJJXQPzjyIv5Vu2k`
//     );
//     request.send();

//     request.addEventListener("load", function () {
//       const dataCountry = JSON.parse(this.responseText);
//       const infoCountry = Object.values(dataCountry)[0];

//       renderCountry(infoCountry);
//     });
//   }

//   // Membuat banyak panggilan ajax di waktu yang bersamaan, berjalan secara paralel, dan tidak bisa mengendalikan mana yang selesai pertama kali.
//   btn.addEventListener("click", () => {
//     getCountryData("indonesia");
//     getCountryData("Philippines");
//   });
// }

/*  ****************************************************************************************
 *   callback Hell (create an Ajax call sequence) with XMLHttpRequest object
 *  *****************************************************************************************/
// {
//   function getCountryAndNeighbour(country) {
//     const requestCountry = new XMLHttpRequest();
//     requestCountry.open(
//       "GET",
//       `https://countryapi.io/api/name/${country}?apikey=SNZ2eNfCPebdlVGJ7zAcF4ooqJJXQPzjyIv5Vu2k`
//     );
//     requestCountry.send();

//     requestCountry.addEventListener("load", function () {
//       const countryInObject = JSON.parse(this.responseText);
//       const dataCountry = Object.values(countryInObject)[0];
//       renderCountry(dataCountry);

//       const neighbours = dataCountry.borders;

//       // jika negara tidak memiliki perbatasan, maka eksekusi selesai.
//       if (typeof neighbours == "string") return;

//       const requestAllCountries = new XMLHttpRequest();
//       requestAllCountries.open(
//         "GET",
//         `https://countryapi.io/api/all?apikey=SNZ2eNfCPebdlVGJ7zAcF4ooqJJXQPzjyIv5Vu2k`
//       );
//       requestAllCountries.send();

//       requestAllCountries.addEventListener("load", function () {
//         const allCountriesInObject = JSON.parse(this.responseText);
//         const dataAllCountries = Object.values(allCountriesInObject);

//         const neighbourOfCountry = dataAllCountries.filter(
//           (neighbour) => neighbour.alpha3Code === neighbours[0]
//         );

//         renderCountry(neighbourOfCountry[0], "neighbour");
//       });
//     });
//   }

//   btn.addEventListener("click", () => {
//     getCountryAndNeighbour("indonesia");
//     getCountryAndNeighbour("Philippines");
//   });
// }

// {
//   // another example of callback hell (callback on setTimeout works in Asynchronous way)
//   setTimeout(() => {
//     console.log("1 second passed");
//     setTimeout(() => {
//       console.log("2 second passed");
//       setTimeout(() => {
//         console.log("3 second passed");
//         setTimeout(() => {
//           console.log("4 second passed");
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }

/*  ****************************************************************************************
 *   modern version of ajax calling with Promises and Fetch API
 *  *****************************************************************************************/
// {
//   function getCountryData(country) {
//     fetch(
//       `https://countryapi.io/api/name/${country}?apikey=SNZ2eNfCPebdlVGJ7zAcF4ooqJJXQPzjyIv5Vu2k`
//     )
//       .then((response) => response.json())
//       .then((dataCountry) => {
//         renderCountry(Object.values(dataCountry)[0]);
//       });
//   }

//   btn.addEventListener("click", () => {
//     getCountryData("indonesia");
//     getCountryData("Philippines");
//   });
// }

/*  ****************************************************************************************
 *   Handling Rejected Promises (catch method)
 *  ****************************************************************************************/
// {
//   function getCountryData(country) {
//     getJSON(
//       `https://countryapi.io/api/name/${country}?apikey=SNZ2eNfCPebdlVGJ7zAcF4ooqJJXQPzjyIv5Vu2k`,
//       `Country name ${country} not found`
//     )
//       .then((dataCountries) => {
//         const dataCountry = Object.values(dataCountries)[0];
//         renderCountry(dataCountry);
//       })
//       .catch((err) => renderError(`${err.message}`))
//       .finally((countriesContainer.style.opacity = 1));
//   }

//   btn.addEventListener("click", function () {
//     getCountryData("ghghg");
//   });
// }

/*  ****************************************************************************************
 *   Chaining Promises
 *  *****************************************************************************************/
{
  function getCountryData(country) {
    getJSON(
      `https://countryapi.io/api/name/${country}?apikey=SNZ2eNfCPebdlVGJ7zAcF4ooqJJXQPzjyIv5Vu2k`,
      `Country name ${country} not found`
    )
      .then((dataCountry) => {
        const value = Object.values(dataCountry)[0];
        renderCountry(value);

        const neighbours = value.borders;
        if (typeof neighbours == "string")
          throw new Error("No neighbour found");

        fetch(
          `https://countryapi.io/api/all?apikey=SNZ2eNfCPebdlVGJ7zAcF4ooqJJXQPzjyIv5Vu2k`
        )
          .then((response) => response.json())
          .then((dataAllCountries) => {
            const values = Object.values(dataAllCountries);
            const neighbourOfCountry = values.filter(
              (neighbour) => neighbour.alpha3Code === neighbours[0]
            );

            renderCountry(neighbourOfCountry[0], "neighbour");
          });
      })
      .catch((err) => renderError(`${err.message}.`))
      .finally((countriesContainer.style.opacity = 1));
  }

  btn.addEventListener("click", function () {
    getCountryData("Philippines");
    // getCountryData("indonesia");

    // getCountryData("ghghg");
  });
}

/*  ****************************************************************************************
 *   Coding Challenge #1
 *  ****************************************************************************************
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:
PART 1
    1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
    2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api. The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
    3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
    4. Chain a .catch method to the end of the promise chain and log errors to the console
    5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
    6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
    7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
         */
// {
//   btn.addEventListener("click", function () {
//     function whereAmI(lat, lng) {
//       // * look up the coordinates of the current location
//       fetch(
//         `https://geocode.xyz/${lat},${lng}?geoit=json&auth=17537062076610228836x83998`
//       )
//         .then((response) => {
//           // console.log(response);
//           if (!response.ok)
//             throw new Error(`too many requests ${response.status}`);

//           return response.json();
//         })
//         .then((data) => {
//           console.log(data);
//           if (data.error)
//             throw new Error("enter the correct number of coordinates!!");
//           // console.log(`You are in ${data.state}, ${data.country}`);

//           // * determine the country from the coordinates
//           fetch(
//             `https://countryapi.io/api/name/${data.country}?apikey=SNZ2eNfCPebdlVGJ7zAcF4ooqJJXQPzjyIv5Vu2k`
//           )
//             .then((response) => {
//               console.log(response);
//               if (!response.ok) throw new Error("Country not found...");

//               return response.json();
//             })
//             .then((dataCountries) => {
//               const dataCountry = Object.values(dataCountries)[0];
//               renderCountry(dataCountry);
//             });
//         })
//         .catch((err) => renderError(`Error ⛔ : ${err.message}`))
//         .finally((countriesContainer.style.opacity = 1));
//     }
//     // whereAmI("gjg", "kkkk");
//     whereAmI(-6.17, 106.82);
//     // whereAmI(-33.933, 18.474);
//   });
// }

/*  ****************************************************************************************
 *   Event loops in practice
 *  *****************************************************************************************/
// {
//   console.log("test start");

//   setTimeout(() => console.log("0 sec timer"), 0);

//   Promise.resolve("Resolved promise 1").then((response) =>
//     console.log(response)
//   );

//   Promise.resolve("Resolved promise 2").then((response) => {
//     for (let i = 0; i < 1000000000; i++) {}
//     console.log(response);
//   });

//   console.log("Test end");
// }

/*  ****************************************************************************************
 *   create a simple Promises with the Promises constructor
 *  *****************************************************************************************/
// {
// const lottryPromise = new Promise(function (resolve, reject) {
//     console.log("Lotter draw is happening...");
//     setTimeout(function () {
//         if (Math.random() >= 0.5) {
//             resolve("You Win!");
//         } else {
//             reject(new Error("You lost your money!"));
//         }
//     }, 3000);
// });

// // * in practice, most of the time all we do is fulfill promises
// lottryPromise
//     .then((response) => console.log(response))
//     .catch((error) => console.error(error));
// console.log("Start Checking");

// // * Promisifying setTimeout
// function wait(second) {
//     return new Promise((resolve) => setTimeout(resolve, second * 1000));
// }
// // chain of asynchronous behavior
// wait(1)
//     .then(() => {
//         console.log("1 second passed");
//         return wait(1);
//     })
//     .then(() => {
//         console.log("2 second passed");
//         return wait(1);
//     })
//     .then(() => {
//         console.log("3 second passed");
//         return wait(1);
//     })
//     .then(() => console.log("4 second passed"));

// // * fulfill or reject a promise that is immediately executed
// Promise.resolve("abs").then((x) => console.log(x));
// Promise.reject(new Error("Problem")).catch((err) => console.error(err));

/**
 * * Promisifyng the Geolocation API
 * ? promisifyng merupakan mengubah perilaku Asynchronous berbasis callback menjadi promise
 */
// btn.addEventListener("click", function () {
//   function getPosition() {
//     return new Promise(function (resolve, reject) {
//       //   navigator.geolocation.getCurrentPosition(position => resolve(position), err => reject(err))
//       navigator.geolocation.getCurrentPosition(resolve, reject);
//     });
//   }
//   function whereAmI() {
//     getPosition()
//       .then((geolocation) => {
//         const { latitude: lat, longitude: lng } = geolocation.coords;
//         console.log(lat, lng);
//         return fetch(
//           `https://geocode.xyz/${lat},${lng}?geoit=json&auth=17537062076610228836x83998`
//         );
//       })
//       .then((response) => {
//         // console.log(response);
//         if (!response.ok)
//           throw new Error(`too many requests ${response.status}`);
//         return response.json();
//       })
//       .then((data) => {
//         console.log(data);
//         if (data.error)
//           throw new Error("enter the correct number of coordinates!!");
//         console.log(`You are in ${data.state}, ${data.country}`);

//         fetch(
//           `https://countryapi.io/api/name/${data.country}?apikey=SNZ2eNfCPebdlVGJ7zAcF4ooqJJXQPzjyIv5Vu2k`
//         )
//           .then((response) => {
//             if (!response.ok) throw new Error("Country not found...");
//             return response.json();
//           })
//           .then((dataCountry) => {
//             renderCountry(Object.values(dataCountry)[0]);
//           });
//       })
//       .catch((err) => renderError(`Error ⛔ : ${err.message}`))
//       .finally((countriesContainer.style.opacity = 1));
//   }
//   whereAmI();
// });
// }

/*  ****************************************************************************************
 *   Coding Challenge #2 (Promise for image)
 *  ****************************************************************************************
Build the image loading functionality that I just showed you on the screen.
Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
    1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
    2. Comsume the promise using .then and also add an error handler;
    3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
    4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
    5. After the second image has loaded, pause execution for 2 seconds again;
    6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
         */
// {
//     const imageContainer = document.querySelector(".images");

//     function wait(time) {
//         return new Promise((resolve) => setTimeout(resolve, time * 1000));
//     }

//     // PART 1: bagian 1
//     function createImage(imgPath) {
//         return new Promise(function (resolve, reject) {
//             const image = document.createElement("img");
//             image.src = imgPath;

//             image.addEventListener("load", function () {
//                 imageContainer.append(image);
//                 resolve(image);
//             });
//             image.addEventListener("error", function () {
//                 reject(new Error("image not found"));
//             });
//         });
//     }

//     let currentImage;
//     createImage("img/img-1.jpg")
//         .then((img) => {
//             currentImage = img;
//             return wait(2);
//         })
//         .then(() => {
//             currentImage.style.display = "none";
//             return createImage("img/img-2.jpg");
//         })
//         .then((img) => {
//             currentImage = img;
//             return wait(2);
//         })
//         .then(() => {
//             currentImage.style.display = "none";
//         })
//         .catch((err) => console.log(err));
// }

/*  ****************************************************************************************
 *   create a simple Promises with the Async/Await
 *  *****************************************************************************************/

// * full version of async function complete with error handling
// {
//   function getPosition() {
//     return new Promise(function (resolve, reject) {
//       navigator.geolocation.getCurrentPosition(resolve, reject);
//     });
//   }

//   const whereAmI2 = async function () {
//     try {
//       // Geolocation (jika ada yang salah di Geolocation, kita udah bikin Promise nih supaya otomatis ke-Rejected dan kemudian lewat ke method catch buat balikin error-nya)
//       const coordLocation = await getPosition();
//       const { latitude: lat, longitude: lng } = coordLocation.coords;

//       // Reverse coordinates (Promises yang datang dari "fetch" hanya "Rejected" kalau tidak ada koneksi internet, jika ada kesalahan 403 atau 404, Promise tersebut tidak secara otomatis "Rejected" dan karena itu kita harus membuatnya secara manual)
//       const responGeo = await fetch(
//         `https://geocode.xyz/${lat},${lng}?geoit=json&auth=17537062076610228836x83998`
//       );

//       // Membuat error manual
//       if (!responGeo.ok) throw new Error("Problem getting location data");
//       const dataGeo = await responGeo.json();

//       // * with promises constructor
//       // fetch(`https://countryapi.io/api/name/${dataGeo.country}?apikey=SNZ2eNfCPebdlVGJ7zAcF4ooqJJXQPzjyIv5Vu2k`).then((res) =>
//       //     console.log(res)
//       // );
//       console.log(dataGeo);
//       // * with Async/Await
//       const respon = await fetch(
//         `https://countryapi.io/api/name/${dataGeo.country}?apikey=SNZ2eNfCPebdlVGJ7zAcF4ooqJJXQPzjyIv5Vu2k`
//       );

//       // Membuat error manual
//       if (!respon.ok) throw new Error("Problem getting country information");
//       const dataCountry = await respon.json();
//       renderCountry(Object.values(dataCountry)[0]);

//       // * returning value from Async function
//       return `you are in ${dataGeo.city}, ${dataGeo.country}`;

//       // Mengembalikan error jika Promise dalam keadaan Rejected
//     } catch (err) {
//       renderError(`Try again: ${err.message}`);
//       countriesContainer.style.opacity = 1;
//     }

//     // Mendapatkan Promise Rejected yang dikembalikan dari fungsi async.
//     throw err;
//   };
//   console.log("1: wahyu");

/*  ****************************************************************************************
 *  Returning values from async function
 *  *****************************************************************************************/

//   // * will keep a promise
//   const city = whereAmI2();
//   console.log(city);

//   // * will be returning value from Async function
//   setTimeout(() => {
//     whereAmI2()
//       .then((city) => console.log(`2: ${city}`))
//       .catch((err) => console.log(`2 Error the value: ${err.message}`))
//       .finally(() => console.log("2: komar")); // the finally method will sort the code, because it will always execute
//   }, 10000);

//   // * will be returning value from Async function (konvertion with Async/await)
//   setTimeout(() => {
//     (async function () {
//       try {
//         const city = await whereAmI2();
//         console.log(`3: ${city}`);
//       } catch (err) {
//         console.log(`3 Error the value: ${err.message}`);
//       }
//       console.log("3: komar");
//     })();
//   }, 12000);
// }

/*  ***************************************************************************************************
 *   Running Promise in parallel
 *  ***************************************************************************************************/
// {
//   const get3Countries = async function (c1, c2, c3) {
//     try {
//       // * Running promise secara berurutan (async/await chaining)
//       // const [data1] = await getJSON(
//       //     `https://restcountries.com/v3.1/name/${c1}`
//       // );
//       // const [data2] = await getJSON(
//       //     `https://restcountries.com/v3.1/name/${c2}`
//       // );
//       // const [data3] = await getJSON(
//       //     `https://restcountries.com/v3.1/name/${c3}`
//       // );
//       // console.log([data1.capital, data2.capital, data3.capital]);

//       // * Running promise secara parallel (menjalankan semua secara bersamaan dalam waktu yang sama).
//       const data = await Promise.all([
//         getJSON(`https://restcountries.com/v3.1/name/${c1}`),
//         getJSON(`https://restcountries.com/v3.1/name/${c2}`),
//         getJSON(`https://restcountries.com/v3.1/name/${c3}`),
//       ]);
//       console.log(data.map((arr) => arr[0].capital));
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   get3Countries("indonesia", "malaysia", "singapura");
// }

/*  ***************************************************************************************************
 *   Other Promise combinators : race, allSettled and any
 *  ***************************************************************************************************/
// {
//   // * Promise.race = mengembalikan hasil (resolve) atau gagal (reject) dari promise yang paling cepat selesai dan mengabaikan sisanya
//   (async function () {
//     try {
//       const data = await Promise.race([
//         getJSON(`https://restcountries.com/v3.1/name/egypt`),
//         getJSON(`https://restcountries.com/v3.1/name/mexicoy`),
//         getJSON(`https://restcountries.com/v3.1/name/indonesia`),
//       ]);
//       console.log(data[0]);
//     } catch (error) {
//       console.log(error);
//     }
//   })();

//   // handle too long AJAX calls
//   function timeOut(sec) {
//     return new Promise(function (_, reject) {
//       setTimeout(function () {
//         reject(new Error("Request took too long!"));
//       }, sec * 1000);
//     });
//   }

//   Promise.race([
//     getJSON(`https://restcountries.com/v3.1/name/tanzania`),
//     timeOut(0.005), // promise dari timeOut yang paling cepat selesai
//   ])
//     .then((res) => console.log(res[0]))
//     .catch((err) => console.log(err));

//   // * Promise.allSettled (ES2020) = mengembalikan hasil dan atau gagal dari semua promise dalam bentuk array object yang mana akan memisahkan antara kondisi promise (fulfillled atau rejected) dengan value nya.
//   Promise.allSettled([
//     Promise.resolve("Promise allSettled Success 1"),
//     Promise.resolve("Promise allSettled Success 2"),
//     Promise.reject("Promise allSettled Error"),
//     Promise.resolve("Promise allSettled Success 3"),
//     Promise.reject("Promise allSettled Error Again"),
//   ])
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));

//   // * Promise.all = mengembalikan semua hasil sesuai urutan jika semua promise berhasil (fulfilled) dan mengembalikan gagal jika salah satu dari promise ditolak (rejected)
//   Promise.all([
//     Promise.resolve("Promise all Success 1"),
//     Promise.resolve("Promise all Success 2"),
//     Promise.reject("Promise all Error"),
//     Promise.resolve("Promise all Success 3"),
//     Promise.reject("Promise all Error Again"),
//   ])
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));

//   // * Promise.any (ES2021) = mengembalikan hasil yang pertama jika salah satu dari promise berhasil (fulfilled) dan mengembalikan gagal jika semua promise ditolak (rejected).
//   Promise.any([
//     Promise.resolve("Promise 'any' Success 1"),
//     Promise.resolve("Promise 'any' Success 2"),
//     Promise.reject("Promise 'any' Error"),
//     Promise.resolve("Promise 'any' Success 3"),
//     Promise.reject("Promise 'any' Error Again"),
//   ])
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// }

/*  ***************************************************************************************************
 *   Coding Challenge #3
 *  **************************************************************************************************
 PART 1
    Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more. Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
    1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
    2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
    3. Check out the 'imgs' array in the console! Is it like you expected?
    4. Use a promise combinator function to actually get the images from the array 😉
    5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
        */
// {
//   const imageContainer = document.querySelector(".images");
//   function wait(time) {
//     return new Promise((resolve) => setTimeout(resolve, time * 1000));
//   }

//   function createImage(imgPath) {
//     return new Promise(function (resolve, reject) {
//       const image = document.createElement("img");
//       image.src = imgPath;

//       image.addEventListener("load", function () {
//         imageContainer.append(image);
//         resolve(image);
//       });

//       image.addEventListener("error", function () {
//         reject(new Error("image not found"));
//       });
//     });
//   }
//   // let currentImage;
//   // createImage("img/img-1.jpg")
//   //     .then((img) => {
//   //         currentImage = img;
//   //         return wait(2);
//   //     })
//   //     .then(() => {
//   //         currentImage.style.display = "none";
//   //         return createImage("img/img-2.jpg");
//   //     })
//   //     .then((img) => {
//   //         currentImage = img;
//   //         return wait(2);
//   //     })
//   //     .then(() => {
//   //         currentImage.style.display = "none";
//   //     })
//   //     .catch((err) => console.log(err));
//   /* PART 1 */
//   async function loadNPause() {
//     try {
//       // Load image 1
//       let image = await createImage("img/img-1.jpg");
//       await wait(2);
//       image.style.display = "none";
//       // Load image 2
//       image = await createImage("img/img-2.jpg");
//       await wait(2);
//       image.style.display = "none";
//     } catch (err) {
//       console.log("image not found");
//     }
//   }
//   loadNPause();

//   // * PART 2
//   async function loadAll(imgArr) {
//     try {
//       // await keyword = stop function execution (if we intend to do something with the 'img' returned from the createImage() in the callback function, we need to use async /await. In this case, we don't need to use Async/await anymore because the createImage function already returns promises)
//       const imgs = imgArr.map((img) => createImage(img));
//       const imgEl = await Promise.all(imgs);
//       imgEl.forEach((img) => img.classList.add("parallel"));
//     } catch (err) {
//       console.log(err);
//     }
//   }
//   loadAll(["img/img-1.jpg", "img/img-2.jpg", "img/img-3.jpg"]);
// }

// function minMax(arrayOfNumbers) {
//   let currentMin = arrayOfNumbers[0];
//   let currentMax = arrayOfNumbers[0];
//   for (const value1 of arrayOfNumbers) {
//     console.log(value1);
//     if (value1 < currentMin) {
//       currentMin = value1;
//     } else if (value1 > currentMax) {
//       currentMax = value1;
//     }
//   }
//   console.log(`currentMin: ${currentMin}, currentMax: ${currentMax}`);
// }
// minMax([8, -6, 0, 9, 40, 2, 23, 50, 2, -3, -15, 15, -23, 71]);
