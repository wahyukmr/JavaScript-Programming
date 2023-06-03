// * Exercises PROMISES:
// {
//   // TODO 1: Create a promise that resolves in 4 seconds and returns "success" string
//   const promise = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("success");
//     }, 4000);
//   });
//   console.log(promise);

//   // TODO 2: Run the above promise and make it console.log "success"
//   promise.then((response) => console.log(response));

//   // TODO 3: Read about Promise.resolve() and Promise.reject(). How can you make the above promise shorter with Promise.resolve() and console loggin "success"
//   const promise2 = Promise.resolve(
//     setTimeout(() => {
//       console.log("success2");
//     }, 4000)
//   );

//   // TODO 4: Catch this error and console log 'Ooops something went wrong' Promise.reject('failed')
//   Promise.reject("failed").catch(console.log("Ooops something went wrong"));

//   // TODO 5: Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time. Console.log the output and make sure it has a catch block as well.
//   const urls = [
//     "http://swapi.dev/api/people/1",
//     "http://swapi.dev/api/people/2",
//     "http://swapi.ev/api/people/3",
//     "http://swapi.dev/api/people/4",
//   ];

//   Promise.all(urls.map((url) => fetch(url).then((res) => res.json())))
//     .then((data) => {
//       console.log(data[0]);
//       console.log(data[1]);
//       console.log(data[2]);
//       console.log(data[3]);
//     })
//     .catch((err) => console.log(`fix error ${err}`));

//   // TODO 6: Change one of your urls above to make it incorrect and fail the promise. Does your catch block handle it?
//   // yes
// }

// * Exercises ES8 - ASYNC AWAIT:
{
  /**
   * TODO 1: Convert the below promise into async await!
   *  fetch("https://jsonplaceholder.typicode.com/users/")
      .then((response) => response.json())
      .then((data) => console.log(data));
   */
  (async function () {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/");
    const data = await response.json();
    console.log(data);
  })();

  /**
   * TODO 2 (ADVANCED):
   * Update the function below from the video to also have async await for this line: fetch(url).then(resp => resp.json()). So there shouldn't be any .then() calls anymore! Don't get discouraged... this is a really tough one...
   */
  const urls2 = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums",
  ];
  async function getData() {
    const [users, posts, albums] = await Promise.all(
      urls2.map((url) => fetch(url).then((resp) => resp.json()))
    );
    console.log("users", users);
    console.log("posta", posts);
    console.log("albums", albums);
  }
  // ANSWER:
  (async function getData() {
    const [users, posts, albums] = await Promise.all(
      urls2.map(async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        return data;
      })
    );
    console.log("users", users);
    console.log("posta", posts);
    console.log("albums", albums);
  })();

  // TODO 3: Add a try catch block to the #2 solution in order to catch any errors. Now, use the given array containing an invalid url, so you console.log your error with 'oooooops'.
  const urls3 = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholdeTYPO.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums",
  ];
  (async function getData() {
    try {
      const [users, posts, albums] = await Promise.all(
        urls3.map(async (url) => {
          const response = await fetch(url);
          const data = await response.json();
          return data;
        })
      );
      console.log("users", users);
      console.log("posta", posts);
      console.log("albums", albums);
    } catch (error) {
      console.log(`oooooops ${error}`);
    }
  })();
}
