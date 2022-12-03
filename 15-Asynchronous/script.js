"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

function renderCountry(data, className = "") {
    // Country Properties
    const flag = data.flags.svg;
    const countryName = data.name.common;
    const region = data.region;
    const population = (+data.population / 1000000).toFixed(1);
    const languages = Object.values(data.languages)[0];
    const currencies = Object.values(data.currencies)[0].name;

    const html = `
    <article class="country ${className}">
        <img class="country__img" src="${flag}" />
        <div class="country__data">
            <h3 class="country__name">${countryName}</h3>
            <h4 class="country__region">${region}</h4>
            <p class="country__row"><span>👫</span>${population} people</p>
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

function getJSON(url, errorMsg = "Something went wrong") {
    return fetch(url).then(function (response) {
        if (!response.ok) throw new Error(`${errorMsg}: ${response.status}`);

        return response.json(); // result a Promises
    });
}

/*  ****************************************************************************************
 *   old version of ajax calling with XML Http Request function
 *  *****************************************************************************************/
{
    function getCountryData(country) {
        const request = new XMLHttpRequest();
        request.open("GET", `https://restcountries.com/v2/name/${country}`);
        request.send();

        request.addEventListener("load", function () {
            // the result is an array containing objects, so make it a destructuring
            const [data] = JSON.parse(this.responseText);
            console.log(data);

            const html = `
    <article class="country">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
                +data.population / 1000000
            ).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
                data.currencies[0].name
            }</p>
        </div>
    </article>
    `;
            countriesContainer.insertAdjacentHTML("beforeend", html);
            countriesContainer.style.opacity = 1;
        });
    }
    // multiple Ajax calls made at the same time, running in parallel, and can't control which one finishes first
    getCountryData("indonesia");
    getCountryData("usa");
}

/*  ****************************************************************************************
 *   callback Hell (create an Ajax call sequence)
 *  *****************************************************************************************/
{
    function renderCountry(data, className = "") {
        // Country Properties
        const flag = data.flags.svg;
        const countryName = data.name.common;
        const region = data.region;
        const population = (+data.population / 1000000).toFixed(1);
        const languages = Object.values(data.languages)[0];
        const currencies = Object.keys(data.currencies);
        const html = `
        <article class="country ${className}">
            <img class="country__img" src="${flag}" />
            <div class="country__data">
                <h3 class="country__name">${countryName}</h3>
                <h4 class="country__region">${region}</h4>
                <p class="country__row"><span>👫</span>${population} people</p>
                <p class="country__row"><span>🗣️</span>${languages}</p>
                <p class="country__row"><span>💰</span>${currencies}</p>
            </div>
        </article>
        `;
        countriesContainer.insertAdjacentHTML("beforeend", html);
        countriesContainer.style.opacity = 1;
    }

    function getCountryAndNeighbour(country) {
        // AJAX call country 1
        const request = new XMLHttpRequest();
        request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
        request.send();
        request.addEventListener("load", function () {
            const [data] = JSON.parse(this.responseText);
            // Render country
            renderCountry(data);
            // Get neighbours country (use "optional chaining" to account for countries with no borders property)
            const neighbours = data.borders?.[0];
            if (!neighbours) return;
            // AJAX call country 2 ()
            const request2 = new XMLHttpRequest();
            request2.open(
                "GET",
                `https://restcountries.com/v3.1/alpha/${neighbours}`
            );
            request2.send();
            request2.addEventListener("load", function () {
                const [data2] = JSON.parse(this.responseText);
                console.log(data2);
                renderCountry(data2, "neighbour");
            });
        });
    }
    getCountryAndNeighbour("indonesia");
    getCountryAndNeighbour("australia");

    ////////////////////////////////////////////////////
    // another example of callback hell (callback on setTimeout works in Asynchronous way)
    setTimeout(() => {
        console.log("1 second passed");
        setTimeout(() => {
            console.log("2 second passed");
            setTimeout(() => {
                console.log("3 second passed");
                setTimeout(() => {
                    console.log("4 second passed");
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}

/*  ****************************************************************************************
 *   Promises and Fetch API
 *  *****************************************************************************************/
// {
//     function renderCountry(data, className = "") {
//         // Country Properties
//         const flag = data.flags.svg;
//         const countryName = data.name.common;
//         const region = data.region;
//         const population = (+data.population / 1000000).toFixed(1);
//         const languages = Object.values(data.languages)[0];
//         const currencies = Object.values(data.currencies)[0].name;

//         const html = `
//         <article class="country ${className}">
//             <img class="country__img" src="${flag}" />
//             <div class="country__data">
//                 <h3 class="country__name">${countryName}</h3>
//                 <h4 class="country__region">${region}</h4>
//                 <p class="country__row"><span>👫</span>${population} people</p>
//                 <p class="country__row"><span>🗣️</span>${languages}</p>
//                 <p class="country__row"><span>💰</span>${currencies}</p>
//             </div>
//         </article>
//         `;
//         countriesContainer.insertAdjacentHTML("beforeend", html);
//         countriesContainer.style.opacity = 1;
//     }

//     // modern versions (with Promise)
//     function getCountryData(country) {
//         // call Ajax
//         fetch(`https://restcountries.com/v3.1/name/${country}`)
//             // get the response, then change the format to JSON
//             .then(function (response) {
//                 response.json();
//             })
//             // perform the process of destroying and rendering data to the DOM
//             .then(function ([data]) {
//                 renderCountry(data);
//                 console.log(data);
//             });
//     }
//     getCountryData("indonesia");
//     getCountryData("australia");
// }

/*  ****************************************************************************************
 *   Handling Rejected Promises (catch method)
 *  *****************************************************************************************/
// {
//     function getCountryData(country) {
//         // call country 1
//         fetch(`https://restcountries.com/v3.1/name/${country}`)
//             .then((response) => response.json())
//             .then(([data]) => {
//                 renderCountry(data);
//                 const neighbour = data.borders?.[0];
//                 if (!neighbour) return;
//                 console.log(neighbour);

//                 // call country 2
//                 return fetch(
//                     `https://restcountries.com/v3.1/alpha/${neighbour}`
//                 );
//             })
//             .then((response) => response.json())
//             .then(([data]) => renderCountry(data, "neighbour"))
//             .catch((err) =>
//                 renderError(
//                     `Something went wrong...${err.message}. Please try again`
//                 )
//             )
//             .finally((countriesContainer.style.opacity = 1));
//     }

//     btn.addEventListener("click", function () {
//         getCountryData("australia");
//         // getCountryData("indonesia");
//     });
//     // getCountryData("ghghg");
// }

/*  ****************************************************************************************
 *   Chaining Promises
 *  *****************************************************************************************/
// {
//     function getCountryData(country) {
//         // call country 1
//         getJSON(
//             `https://restcountries.com/v3.1/name/${country}`,
//             "Country not found"
//         )
//             .then(function ([data]) {
//                 renderCountry(data);
//                 const neighbour = data.borders?.[0];
//                 // if no neighboring countries found
//                 if (!neighbour) throw new Error("No neighbour found");

//                 return getJSON(
//                     `https://restcountries.com/v3.1/alpha/${neighbour}`
//                 );
//             })
//             .then(function ([data]) {
//                 renderCountry(data, "neighbour");
//             })
//             .catch((err) =>
//                 renderError(`Something went wrong ☠️☠️ ${err.message}.`)
//             )
//             .finally((countriesContainer.style.opacity = 1));
//     }

//     btn.addEventListener("click", function () {
//         // getCountryData("australia");
//         getCountryData("indonesia");

//         // getCountryData("ghghg");
//     });
// }

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
//     btn.addEventListener("click", function () {
//         function whereAmI(lat, lng) {
//          // look up the coordinates of the current location
//             fetch(
//                 `https://geocode.xyz/${lat},${lng}?geoit=json&auth=4933728612661335400x95127`
//             )
//                 .then((response) => {
//                     // console.log(response);
//                     if (!response.ok)
//                         throw new Error(`too many requests ${response.status}`);
//                     return response.json();
//                 })
//                 .then((data) => {
//                     // console.log(data);
//                     if (data.error)
//                         throw new Error(
//                             "enter the correct number of coordinates!!"
//                         );
//                     console.log(`You are in ${data.state}, ${data.country}`);
//          // determine the country from the coordinates
//                     fetch(`https://restcountries.com/v3.1/name/${data.country}`)
//                         .then((response) => {
//                             // console.log(response);
//                             if (!response.ok)
//                                 throw new Error("Country not found...");

//                             return response.json();
//                         })
//                         .then(([data]) => {
//                             renderCountry(data);
//                         });
//                 })
//                 .catch((err) => renderError(`Error ⛔ : ${err.message}`))
//                 .finally((countriesContainer.style.opacity = 1));
//         }
//         // whereAmI("gjg", "kkkk");
//         whereAmI(-7.484171, 110.735247);
//         whereAmI(-33.933, 18.474);
//     });
// }

/*  ****************************************************************************************
 *   Event loops in practice
 *  *****************************************************************************************/
// {
//     console.log("test start");

//     setTimeout(() => console.log("0 sec timer"), 0);

//     Promise.resolve("Resolved promise 1").then((response) =>
//         console.log(response)
//     );

//     Promise.resolve("Resolved promise 2").then((response) => {
//         for (let i = 0; i < 1000000000; i++) {}
//         console.log(response);
//     });

//     console.log("Test end");
// }

/*  ****************************************************************************************
 *   create a simple Promises with the Promises constructor
 *  *****************************************************************************************/
// {
//     const lottryPromise = new Promise(function (resolve, reject) {
//         console.log("Lotter draw is happening...");
//         setTimeout(function () {
//             if (Math.random() >= 0.5) {
//                 resolve("You Win!");
//             } else {
//                 reject(new Error("You lost your money!"));
//             }
//         }, 3000);
//     });
//     // in practice, most of the time all we do is fulfill promises
//     lottryPromise
//         .then((response) => console.log(response))
//         .catch((error) => console.error(error));

//     console.log("Start Checking");

//     ////////////////////////////////////////////////////////////////////////////////////////
//     // Promisifying setTimeout
//     function wait(second) {
//         return new Promise((resolve) => setTimeout(resolve, second * 1000));
//     }
//     // chain of asynchronous behavior
//     wait(1)
//         .then(() => {
//             console.log("1 second passed");
//             return wait(1);
//         })
//         .then(() => {
//             console.log("2 second passed");
//             return wait(1);
//         })
//         .then(() => {
//             console.log("3 second passed");
//             return wait(1);
//         })
//         .then(() => console.log("4 second passed"));

//     /* fulfill or reject a promise that is immediately executed */
//     Promise.resolve("abs").then((x) => console.log(x));
//     Promise.reject(new Error("Problem")).catch((err) => console.error(err));

//     /////////////////////////////////////////////////////////////////////////////////////////
//     // Promisifyng the Geolocation API
//     btn.addEventListener("click", function () {
//         function getPosition() {
//             return new Promise(function (resolve, reject) {
//                 //   navigator.geolocation.getCurrentPosition(position => resolve(position), err => reject(err))
//                 navigator.geolocation.getCurrentPosition(resolve, reject);
//             });
//         }

//         function whereAmI() {
//             getPosition()
//                 .then((respon) => {
//                     const { latitude: lat, longitude: lng } = respon.coords;
//                     console.log(lat, lng);
//                     return fetch(
//                         `https://geocode.xyz/${lat},${lng}?geoit=json&auth=4933728612661335400x95127`
//                     );
//                 })
//                 .then((response) => {
//                     // console.log(response);
//                     if (!response.ok)
//                         throw new Error(`too many requests ${response.status}`);
//                     return response.json();
//                 })
//                 .then((data) => {
//                     console.log(data);
//                     if (data.error)
//                         throw new Error(
//                             "enter the correct number of coordinates!!"
//                         );
//                     console.log(`You are in ${data.state}, ${data.country}`);

//                     fetch(`https://restcountries.com/v3.1/name/${data.country}`)
//                         .then((response) => {
//                             // console.log(response);
//                             if (!response.ok)
//                                 throw new Error("Country not found...");

//                             return response.json();
//                         })
//                         .then(([data]) => {
//                             renderCountry(data);
//                         });
//                 })
//                 .catch((err) => renderError(`Error ⛔ : ${err.message}`))
//                 .finally((countriesContainer.style.opacity = 1));
//         }
//         whereAmI();
//     });
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

/* full version of async function complete with error handling */
// {
//     function getPosition() {
//         return new Promise(function (resolve, reject) {
//             navigator.geolocation.getCurrentPosition(resolve, reject);
//         });
//     }

//     const whereAmI2 = async function () {
//         try {
//             // Geolocation (if something goes wrong in Geolocation, we have created a promise so it will automatically reject and then pass to the catch method to return the error)
//             const coordLocation = await getPosition();
//             const { latitude: lat, longitude: lng } = coordLocation.coords;

//             // reverse coordinates (promises that come from fetch are only rejected when there is no internet connection, in case of 403 or 404 errors the promise does not automatically return rejected and therefore we have to create it manually)
//             const responGeo = await fetch(
//                 `https://geocode.xyz/${lat},${lng}?geoit=json&auth=4933728612661335400x95127`
//             );
//             // make Error manually
//             if (!responGeo.ok) throw new Error("Problem getting location data");
//             const dataGeo = await responGeo.json();

//             // Country data
//             /* with promises constructor */
//             // fetch(`https://restcountries.com/v3.1/name/${country}`).then((res) =>
//             //     console.log(res)
//             // );

//             /* with Async/Await */
//             const respon = await fetch(
//                 `https://restcountries.com/v3.1/name/${dataGeo.country}`
//             );
//             // make Error manually
//             if (!respon.ok)
//                 throw new Error("Problem getting country information");
//             const [data] = await respon.json();
//             renderCountry(data);

//             // returning value from Async function
//             return `you are in ${dataGeo.city}, ${dataGeo.country}`;

//             // displays an error when promises are not fulfilled (reject)
//         } catch (err) {
//             renderError(`Try again: ${err.message}`);
//             countriesContainer.style.opacity = 1;
//         }

//         // get the Reject promise returned from async function
//         throw err;
//     };
//     console.log("1: wahyu");

//     /*  ****************************************************************************************
//      *   Returning values from async function
//      *  *****************************************************************************************/
//     /* will keep a promise */
//     const city = whereAmI2();
//     console.log(city);

//     /* will be returning value from Async function */
//     whereAmI2()
//         .then((city) => console.log(`2: ${city}`))
//         .catch((err) => console.log(`2 Error the value: ${err.message}`))
//         .finally(() => console.log("3: komar")); // the finally method will sort the code, because it will always execute

//     /* will be returning value from Async function (konvertion with Async/await) */
//     (async function () {
//         try {
//             const city = await whereAmI2();
//             console.log(`2: ${city}`);
//         } catch (err) {
//             console.log(`2 Error the value: ${err.message}`);
//         }
//         console.log("3: komar");
//     })();
// }

/*  ***************************************************************************************************
 *   get some data from Async function about three states at the same time, with random parallel order
 *  ***************************************************************************************************/
// {
//     const get3Countries = async function (c1, c2, c3) {
//         try {
//             // const [data1] = await getJSON(
//             //     `https://restcountries.com/v3.1/name/${c1}`
//             // );
//             // const [data2] = await getJSON(
//             //     `https://restcountries.com/v3.1/name/${c2}`
//             // );
//             // const [data3] = await getJSON(
//             //     `https://restcountries.com/v3.1/name/${c3}`
//             // );
//             // console.log([data1.capital, data2.capital, data3.capital]);

//             // run in parallel(run all concurrently)
//             const data = await Promise.all([
//                 getJSON(`https://restcountries.com/v3.1/name/${c1}`),
//                 getJSON(`https://restcountries.com/v3.1/name/${c2}`),
//                 getJSON(`https://restcountries.com/v3.1/name/${c3}`),
//             ]);
//             console.log(data.map((arr) => arr[0].capital));
//         } catch (err) {
//             console.log(err);
//         }
//     };
//     get3Countries("indonesia", "malaysia", "singapura");
// }

/*  ***************************************************************************************************
 *   Other Promise combinators : race, allSettled and any
 *  ***************************************************************************************************/
// {
//     /* Promise.race */
//     (async function () {
//         const data = await Promise.race([
//             getJSON(`https://restcountries.com/v3.1/name/italyhg`),
//             getJSON(`https://restcountries.com/v3.1/name/egypt`),
//             getJSON(`https://restcountries.com/v3.1/name/mexicoy`),
//         ]);
//         console.log(data[0]);
//     })();

//     // handle too long AJAX calls
//     function timeOut(sec) {
//         return new Promise(function (_, reject) {
//             setTimeout(function () {
//                 reject(new Error("Request took too long!"));
//             }, sec * 1000);
//         });
//     }

//     Promise.race([
//         getJSON(`https://restcountries.com/v3.1/name/tanzania`),
//         timeOut(0.05),
//     ])
//         .then((res) => console.log(res[0]))
//         .catch((err) => console.log(err));

//     /* Promise.allSettled (ES2020)*/
//     Promise.allSettled([
//         Promise.resolve("Success 1"),
//         Promise.resolve("Success 2"),
//         Promise.reject("Error"),
//         Promise.resolve("Success 3"),
//         Promise.reject("Error Again"),
//     ])
//         .then((res) => console.log(res))
//         .catch((err) => console.log(err));

//     /* Promise.all */
//     Promise.all([
//         Promise.resolve("Success 1"),
//         Promise.resolve("Success 2"),
//         Promise.reject("Error"),
//         Promise.resolve("Success 3"),
//         Promise.reject("Error Again"),
//     ])
//         .then((res) => console.log(res))
//         .catch((err) => console.log(err));

//     /* Promise.any (ES2021)*/
//     Promise.any([
//         Promise.resolve("Success 1"),
//         Promise.resolve("Success 2"),
//         Promise.reject("Error"),
//         Promise.resolve("Success 3"),
//         Promise.reject("Error Again"),
//     ])
//         .then((res) => console.log(res))
//         .catch((err) => console.log(err));
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
{
    const imageContainer = document.querySelector(".images");

    function wait(time) {
        return new Promise((resolve) => setTimeout(resolve, time * 1000));
    }

    function createImage(imgPath) {
        return new Promise(function (resolve, reject) {
            const image = document.createElement("img");
            image.src = imgPath;

            image.addEventListener("load", function () {
                imageContainer.append(image);
                resolve(image);
            });
            image.addEventListener("error", function () {
                reject(new Error("image not found"));
            });
        });
    }
    // let currentImage;
    // createImage("img/img-1.jpg")
    //     .then((img) => {
    //         currentImage = img;
    //         return wait(2);
    //     })
    //     .then(() => {
    //         currentImage.style.display = "none";
    //         return createImage("img/img-2.jpg");
    //     })
    //     .then((img) => {
    //         currentImage = img;
    //         return wait(2);
    //     })
    //     .then(() => {
    //         currentImage.style.display = "none";
    //     })
    //     .catch((err) => console.log(err));

    /* PART 1 */
    async function loadNPause() {
        try {
            // Load image 1
            let image = await createImage("img/img-1.jpg");
            await wait(2);
            image.style.display = "none";

            // Load image 2
            image = await createImage("img/img-2.jpg");
            await wait(2);
            image.style.display = "none";
        } catch (err) {
            console.log("image not found");
        }
    }
    loadNPause();

    /* PART 2 */
    async function loadAll(imgArr) {
        try {
            // await keyword = stop function execution (if we intend to do something with the 'img' returned from the createImage() in the callback function, we need to use async /await. In this case, we don't need to use Async/await anymore because the createImage function already returns promises)
            const imgs = imgArr.map((img) => createImage(img));
            const imgEl = await Promise.all(imgs);
            imgEl.forEach((img) => img.classList.add("parallel"));
        } catch (err) {
            console.log(err);
        }
    }
    loadAll(["img/img-1.jpg", "img/img-2.jpg", "img/img-3.jpg"]);
}

function minMax(arrayOfNumbers) {
    let currentMin = arrayOfNumbers[0];
    let currentMax = arrayOfNumbers[0];
    for (value1 of arrayOfNumbers) {
        if (value1 < currentMin) {
            currentMin = value1;
        } else if (value1 > currentMax) {
            currentMax = value1;
        }
    }

    console.log(`currentMin: ${currentMin}, currentMax: ${currentMax}`);
}

minMax([8, -6, 0, 9, 40, 2, 23, 50, 2, -3, -15, 15, -23, 71]);
