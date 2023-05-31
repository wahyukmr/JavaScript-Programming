/* Data used in exercises */
const books = [
  {
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: ["fantasy", "high-fantasy", "adventure"],
    filmAdaptation: true,
  },
  {
    title: "The Cyberiad",
    publicationDate: 1965,
    author: "Stanislaw Lem",
    genres: ["science fiction"],
  },
  {
    title: "Dune",
    publicationDate: 1965,
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    filmAdaptation: true,
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    filmAdaptation: true,
  },
  {
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    filmAdaptation: true,
  },
];

/* ⚠️ YOU WILL CALL THE FUNCTIONS BELOW IN EXERCISES.
       DON'T WORRY IF THEY DON'T MAKE SENSE FOR NOW.
       YOU WILL LEARN EVERYTHING A BIT LATER IN THE COURSE.
       FOR NOW TREAT THEM AS BLACK BOXES (focus on the values they return).
       YOU CAN CALL THEM AND LOG THE RETURNED VALUE TO THE CONSOLE TO SEE WHAT EXACTLY THEY RETURN. */

const getBooksByGenre = (genre) =>
  books.filter((book) => book.genres.includes(genre));
const getBooksAsArrays = () => books.map((book) => Object.entries(book));
const getBookAuthors = () => books.map((book) => book.author);

/*
 *  ********************************************
 *  1) DESTRUCTURING ARRAYS                    *
 *  ********************************************
 */

/* A) Destructure the 'books' array into four variables called 'a', 'b', 'c' and 'd'.
        Leave the rest of the books unused. */
// Answer:
const [a, b, c, d] = books;
console.log(a, b, c, d);

/* B) The second and third books are science fiction.
        Assign these books to the variables called 'second' and 'third' using destructuring. */
// Answer:
const [, second, third] = books;
console.log(second, third);

/* C) The getBooksByGenre() function returns an array of books based on the genre you pass as the argument.
        Use it to get all 'fantasy' books. Destructure the returned array into two variables — the first one called 'theLordOfTheRings',
        and the second one called 'otherFantasyBooks' (an array containing all other values from the returned array). */
// Answer:
const [theLordOfTheRings, ...otherFantasyBooks] = getBooksByGenre("fantasy");
console.log(theLordOfTheRings, ...otherFantasyBooks);

/* D) Are you ready for some hard-core destructuring? 😄
        The getBooksAsArrays() function returns the books array, but all book objects and their properties were converted to arrays.
        Now, you have an array of arrays of arrays.
        Destructure the title of the second book (The Cyberiad) into a variable called 'title'. */
// Answer:
const [, [[, title]]] = getBooksAsArrays();
console.log(title);

/* ⚠️ COMMENT OUT YOUR SOLUTIONS AFTER YOU FINISH SO THAT IT DOESN'T COLLIDE WITH NEXT EXERCISES 🠕 */

/*
 *  ********************************************
 *  2) DESTRUCTURING OBJECTS                   *
 *  ********************************************
 */

/* A) Take the first object from the 'books' array, and assign the author to the 'author' variable using destructuring.
 *     Use the 'let' statement because the 'author' variable may change later. */
// Answer:
let { author } = books[0];
console.log(author);

/* B) Take the second object from the 'books' array, and destructure the title into a variable called 'bookTitle'. */
// Answer:
const { title: bookTitle } = books[1];
console.log(bookTitle);

/* C) The book objects aren't consistent in their form.
        For example, the second book doesn't have the 'filmAdaptation' property.
        Destructure it into a variable called 'hasFilmAdaptation' with a default value of false. */
// Answer:
const { hasFilmAdaptation = false } = books[1];
console.log(books[1]);

/* D) Remember the 'author' variable from exercise A? It's time to reassign it.
        Destructure the author of the third book into existing variable called 'author'. */
// Answer:
const authorThirdBook = books[2];

({ author } = authorThirdBook);
console.log(author);
/* ⚠️ COMMENT OUT YOUR SOLUTIONS AFTER YOU FINISH SO THAT IT DOESN'T COLLIDE WITH NEXT EXERCISES 🠕 */

/*
 *  ********************************************
 *  3) THE SPREAD SYNTAX                       *
 *  ********************************************
 */

/* A) The getBookAuthors() function returns an array of authors from the 'books' array.
        Reassign the 'authors' variable below so that it contains both — already existing authors,
        and authors returned from the getBookAuthors() function. Use the spread syntax. */
// Answer:
let authors = ["George Orwell", "Aldous Huxley", ...getBookAuthors()];

/* B) The console.log() method can take multiple arguments and log them to the console.
First, log the 'authors' array as it is (as one argument).
Second, log the elements of the 'authors' array, but this time use the spread syntax.
Compare the outputs. */
// Answer:
console.log(authors);
console.log(...authors);

/* C) The spread syntax can be used with other iterables, for example, strings.
        Create a new variable called 'firstNameArray', and spread the 'firstName' string
        so that each letter becomes an element of the 'firstNameArray' like ['J', 'o', 'h', 'n']. */
// Answer:
const firstName = "John";
console.log([...firstName]);

/* D) Now it's time to spread some objects. Create a new variable called 'cyberiad',
        and assign an object to it. This object should have all the properties of the second book from the 'books' array,
        plus the missing 'filmAdaptation' property set to false. */
// Answer:
const cyberiad = { ...books[1], filmAdaptation: false };
console.log(cyberiad);

/* ⚠️ COMMENT OUT YOUR SOLUTIONS AFTER YOU FINISH SO THAT IT DOESN'T COLLIDE WITH NEXT EXERCISES 🠕 */
