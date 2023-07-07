"use strict";

/*  **********************************************************
 *  METHOD: test(), match() and replace()
 *  **********************************************************/
{
  // * method test():
  let myString = "Hello, World!";
  let myRegex = /Hello/;
  let result = myRegex.test(myString);
  console.log(result); // true

  // * method match():
  let extractStr = "Extract the word 'coding' from this string.";
  let codingRegex = /coding/;
  let result2 = extractStr.match(codingRegex);
  console.log(result2); // [ 'coding', index: 18, input: 'Extract the word \'coding\' from this string.', groups: undefined ]

  // * method replace():
  let hello = "   Hello, World!  ";
  let wsRegex = /^\s+|\s+$/g;
  let result3 = hello.replace(wsRegex, "");
  console.log(result3); // Hello, World!
}

/*  **********************************************************
 *  MODIFIER FLAGS
 *  **********************************************************/
{
  // * flag `g` (global):
  let twinkleStar = "Twinkle, Twinkle, little star";
  let starRegex = /Twinkle/g;
  let result = twinkleStar.match(starRegex);
  console.log(result); // ['Twinkle', 'Twinkle']

  // * flag `i` (ignore case):
  let regex = /apple/i;
  let str = "I love Apple";
  console.log(regex.test(str)); // Output: true

  // * flag `m` (multiline):
  let regex2 = /^apple/m;
  let str2 = "apple\nbanana\napple pie";
  console.log(regex2.test(str2)); // Output: true

  // * flag `u` (unicode):
  let regex3 = /\u{1F60D}/u; // Representasi emoticon "😍"
  let str3 = "I love you! 😍";
  console.log(regex3.test(str3)); // Output: true

  // * flag `s` (dotAll):
  let regex4 = /apple.*pie/s;
  let str4 = "apple\nbanana\napple pie";
  console.log(regex4.test(str4)); // Output: true

  // * kita dapat menggunakan flag lebih dari satu pada regex
  let twinkleStar2 = "Twinkle, twinkle, little star";
  let starRegex2 = /Twinkle/gi;
  let result2 = twinkleStar2.match(starRegex2);
  console.log(result2);
}

/*  **********************************************************
 *  SPECIAL CHARACTER: |
 *  **********************************************************/
{
  let petString = "James has a pet cat.";
  let petRegex = /dog|cat|bird|fish/;
  let result = petRegex.test(petString);

  console.log(result); // true
}

/*  **********************************************************
 *  SPECIAL CHARACTER: .
 *  **********************************************************/
{
  // Example 1:
  let humStr = "I'll hum a song";
  let hugStr = "Bear hu";
  let huRegex = /hu./;
  huRegex.test(humStr); // true
  huRegex.test(hugStr); // false, karena tidak ada lagi kata" setelah "hu"

  // Example 2:
  let exampleStr = "Let's have fun with regular expressions!";
  let unRegex = /.un/;
  let result = exampleStr.match(unRegex);

  console.log(result); // ["fun", index: 11, input: 'Let\'s have fun with regular expressions!', groups: undefined]
}

/*  **********************************************************
 *  CHARACTER SETS AND RANGES: [pola]
 *  **********************************************************/
{
  let quoteSample =
    "Beware of bugs in the above code; I have only proved it correct, not tried it.";
  let vowelRegex = /[aeiou]/gi;
  let result = quoteSample.match(vowelRegex);

  console.log(result); // [ 'e', 'a', 'e', 'o', 'u', 'i', 'e', 'a', 'o', 'e', 'o', 'e', 'I', 'a', 'e', 'o', 'o', 'e', 'i', 'o', 'e', 'o', 'i', 'e', 'i' ]
}

/*  **********************************************************
 *  CHARACTER SETS AND RANGES: [^pola]
 *  **********************************************************/
{
  // Example: mencocokkan semua karakter yang bukan angka dan huruf vocal
  let quoteSample = "3 blind mice.";
  let myRegex = /[^0-9aeiou]/gi; // Change this line
  let result = quoteSample.match(myRegex);

  console.log(result); // [ ' ', 'b', 'l', 'n', 'd', ' ', 'm', 'c', '.' ]
}

/*  **********************************************************
 *  CHARACTER: [-]
 *  **********************************************************/
{
  // * Mencocokkan rentang karakter huruf
  // Example 1:
  let catStr = "cat";
  let batStr = "bat";
  let matStr = "mat";
  let bgRegex = /[a-e]at/; // rentang karakter dari a, b, c, d, e

  catStr.match(bgRegex); // ["cat"]
  batStr.match(bgRegex); // ["bat"]
  matStr.match(bgRegex); // null

  // Example 2:
  let quoteSample = "The quick brown fox jumps over the lazy dog.";
  let alphabetRegex = /[a-z]/gi;
  let result = quoteSample.match(alphabetRegex);

  console.log(result); // [ 'T', 'h', 'e', 'q', 'u', 'i', 'c', 'k', 'b', 'r', 'o', 'w', 'n', 'f', 'o', 'x', 'j', 'u', 'm', 'p', 's', 'o', 'v', 'e', 'r', 't', 'h', 'e', 'l', 'a', 'z', 'y', 'd', 'o', 'g' ]

  // * Mencocokkan rentang karakter huruf dan angka
  let quoteSample2 = "Blueberry 3.141592653s are delicious.";
  let myRegex = /[h-s2-6]/g;
  let result2 = quoteSample2.match(myRegex);

  console.log(result2); // [ 'l', 'r', 'r', '3', '4', '5', '2', '6', '5', '3', 's', 'r', 'l', 'i', 'i', 'o', 's' ]
}

/*  **********************************************************
 *  QUANTIFIER CHARACTER: *
 *  **********************************************************
    Note:
    - Sederhananya, * digunakan untuk mencari nol atau lebih perulangan dari karakter sebelumnya.
    - misal Pola regex "gol*" akan cocok dengan string yang dimulai dengan "g", diikuti oleh karakter "o", dan karakter "l" dapat muncul beberapa kali atau tidak muncul sama sekali setelah karakter "o".
    - misal Pola regex "ca*t" akan cocok dengan string yang memiliki karakter "c", diikuti oleh nol atau lebih kemunculan karakter "a", dan diakhiri dengan karakter "t".
 * */
{
  // Example:
  let soccerWord = "gooooooooal!";
  let gPhrase = "gut feeling";
  let oPhrase = "over the moon";
  let goRegex = /go*/;

  console.log(soccerWord.match(goRegex)); // ["goooooooo"]
  console.log(gPhrase.match(goRegex)); // ["g"]
  console.log(oPhrase.match(goRegex)); // null
}

/*  **********************************************************
 *  QUANTIFIER CHARACTER: +
 *  **********************************************************
    Note:
    - Sederhananya, + digunakan untuk mencari satu atau lebih perulangan dari karakter sebelumnya.
 * */
{
  // Example:
  let difficultSpelling = "Mississippi";
  let myRegex = /s+/;
  let result = difficultSpelling.match(myRegex);
  console.log(result); // [ 'ss' ]

  // Example2:
  let soccerWord = "gooooooooal!";
  let gPhrase = "gut feeling";
  let oPhrase = "over the moon";
  let goRegex = /go+/;

  console.log(soccerWord.match(goRegex)); // ["goooooooo"]
  console.log(gPhrase.match(goRegex)); // null
  console.log(oPhrase.match(goRegex)); // null
}

/*  **********************************************************
 *  QUANTIFIER CHARACTER: ?
 *  **********************************************************
    Note:
    - Sederhananya, ? digunakan untuk mencari nol atau satu perulangan dari karakter sebelumnya.
    - Atau bisa dikatakan karakter sebelumnya adalah optional, bisa ada sebanyak satu kali atau juga bisa tidak ada sama sekali.
 * */
{
  // Example:
  let soccerWord = "gooooooooal!";
  let gPhrase = "gut feeling";
  let oPhrase = "over the moon";
  let goRegex = /go?/;

  console.log(soccerWord.match(goRegex)); // ["go"]
  console.log(gPhrase.match(goRegex)); // ["g"]
  console.log(oPhrase.match(goRegex)); // null

  // Example2:
  let favWord = "favorite";
  let favRegex = /favou?rite/; // bisa juga cocok dengan "favourite"
  let result = favRegex.test(favWord);

  console.log(result); // true
}

/*  **********************************************************
 *  QUANTIFIER CHARACTER: {...}
 *  **********************************************************
    Note:
    - {n} digunakan untuk mencocokkan karakter sebelumnya yang berjumlah `n`.
    - misal ab{2}c hanya cocok dengan abbc. Tidak cocok dengan abbbc, abc, dll.
    
    - {n, m} digunakan untuk mencocokkan karakter sebelumnya yang berjumlah `n` hingga `m`.
    - misal ab{1,2}c cocok dengan abc, abbc. Tidak cocok dengan abbbc, ac, dll.
    
    - {n,} digunakan untuk mencocokkan karakter sebelumnya setidaknya sejumlah `n`, bisa juga berarti sejumlah lebih dari atau sama dengan `n`.
    - misal ab{2,}c cocok dengan abbc, abbbc, abbbbc, dll. Tidak cocok dengan abc atau ac.
 * */
{
  let timStr = "Timmmmber";
  let timRegex = /Tim{4}ber/;
  let result = timRegex.test(timStr);
  console.log(result); // true

  let ohStr = "Ohhh no";
  let ohRegex = /Oh{3,6} no/;
  let result2 = ohRegex.test(ohStr);
  console.log(result2); // true

  let haStr = "Hazzzzah";
  let haRegex = /Haz{4,}ah/;
  let result3 = haRegex.test(haStr);
  console.log(result3); // true
}

/*  **********************************************************
 *  ANCHORS: ^
 *  **********************************************************/
{
  let rickyAndCal = "Cal and Ricky both like racing.";
  let calRegex = /^Cal/;
  let result = calRegex.test(rickyAndCal);
  console.log(result); // true

  let rickyAndCal2 = "Calff and Ricky both like racing.";
  let calRegex2 = /^Cal/;
  let result2 = rickyAndCal2.match(calRegex2);
  console.log(result2); // ["Cal"]
}

/*  **********************************************************
 *  ANCHORS: $
 *  **********************************************************/
{
  let caboose = "The last car on a train is the caboose";
  let lastRegex = /caboose$/;
  let result = lastRegex.test(caboose);

  console.log(result); // true
}

/*  **********************************************************
 *  ANCHORS: \b and \B
 *  **********************************************************/
{
  // * Example \b:
  let regex = /\bapple\b/; // mencocokkan kata "apple" sebagai kata terpisah.
  let str = "I love apple and pineapple";
  console.log(regex.test(str)); // Output: true, dimana kata "pineapple" tidak akan cocok.

  // * Example \B:
  let regex2 = /\Bapple\B/; // mencocokkan kata "apple" di mana "apple" dikelilingi oleh karakter lain (bukan batas kata).
  let str2 = "pineapple and apple pie";
  console.log(regex2.test(str2)); // Output: true, dimana kata "apple" tidak akan cocok.
}

/*  **********************************************************
 *  SPECIAL CHARACTER: \w atau [a-zA-Z0-9_]
 *  **********************************************************/
{
  let quoteSample = "The five boxing wizards jump quickly.";
  let alphabetRegexV2 = /[\w+]/g;
  let result = quoteSample.match(alphabetRegexV2).length;

  console.log(result); // 31
}

/*  **********************************************************
 *  SPECIAL CHARACTER: \W atau [^a-zA-Z0-9_]
 *  **********************************************************/
{
  let quoteSample = "The five boxing wizards jump quickly.";
  let nonAlphabetRegex = /\W/g;
  let result = quoteSample.match(nonAlphabetRegex).length;

  console.log(result); // 6
}

/*  **********************************************************
 *  SPECIAL CHARACTER: \d atau [0-9]
 *  **********************************************************/
{
  let movieName = "2001: A Space Odyssey";
  let numRegex = /\d/g;
  let result = movieName.match(numRegex).length;

  console.log(result); // 4
}

/*  **********************************************************
 *  SPECIAL CHARACTER: \D atau [^0-9]
 *  **********************************************************/
{
  let movieName = "2001: A Space Odyssey";
  let noNumRegex = /\D/g;
  let result = movieName.match(noNumRegex).length;

  console.log(result); // 17
}

/*  **********************************************************
 *  SPECIAL CHARACTER: \s
 *  **********************************************************/
{
  let sample = "Whitespace is important in separating words";
  let countWhiteSpace = /\s/g;
  let result = sample.match(countWhiteSpace);

  console.log(result); // ["", "", "", "", ""]
}

/*  **********************************************************
 *  SPECIAL CHARACTER: \S
 *  **********************************************************/
{
  let sample = "Whitespace is important in separating words";
  let countNonWhiteSpace = /\S/g;
  let result = sample.match(countNonWhiteSpace);

  console.log(result); // [ 'W', 'h', 'i', 't', 'e', 's', 'p', 'a', 'c', 'e', 'i', 's', 'i', 'm', 'p', 'o', 'r', 't', 'a', 'n', 't', 'i', 'n', 's', 'e', 'p', 'a', 'r', 'a', 't', 'i', 'n', 'g', 'w', 'o', 'r', 'd', 's' ]
}

/*  **********************************************************
 *  GROUP
 *  **********************************************************/
// * regular group `(pola)`
let regex = /(apple|banana) pie/;
let str = "I love apple pie";
let matches = str.match(regex);
console.log(matches); // Output: ["apple pie", "apple"]

// * Non-Capturing Group `(?:pola)`
let regex2 = /(?:apple|banana) pie/;
let str2 = "I love apple pie";
let matches2 = str2.match(regex2);
console.log(matches2); // Output: ["apple pie"]

// * named capturing group `(?<name>pola)`
let regex3 = /(?<fruit>apple|banana) pie/;
let str3 = "I love apple pie";
let matches3 = str3.match(regex3);
console.log(matches3.groups.fruit); // Output: "apple"

/*  **************************************************************
 *  LOOKAHEADS: positif dan negatif
 *  **************************************************************
    Note:
    - Lookaheads adalah pola yang memberi tahu JavaScript untuk melihat ke depan dalam string untuk memeriksa pola lebih jauh. Ini bisa berguna saat ingin mencari beberapa pola pada string yang sama.
    
    - Positive lookahead = mencocokkan apakah pola tertentu ada di depan posisi saat ini, tetapi pola tersebut tidak diikutsertakan dalam hasil pencocokan.
    - Positive lookahead digunakan dengan menggunakan sintaks `(?=...)`, di mana `...` adalah pola tertentu yang dimaksud dalam penjelasan diatas.
    
    - Negative lookahead = mencocokkan posisi jika pola yang diharapkan tidak ada di depan posisi saat ini.
    - Negative lookahead dapat berguna untuk mengekstrak atau mencocokkan sesuatu yang tidak diikuti oleh pola tertentu.
    - Negative lookahead digunakan dengan menggunakan sintaks (?!...), di mana ... adalah pola yang ingin diperiksa.
 * */
{
  // * Positive lookahead
  // Example 1: Mencocokkan satu atau lebih semua karakter alfanumerik yang diikuti oleh tanda hubung (-), tetapi tanda hubung tersebut tidak diikutsertakan dalam hasil pencocokan.
  let sampleWord = "OpenAI-GPT Macan-kumbang";
  let pwRegex = /\w+(?=-)/g;
  let result = sampleWord.match(pwRegex);
  console.log(result); // ["OpenAI", "Macan"];

  // Example 2: mencocokkan satu atau lebih semua karakter alfanumerik yang diikuti digit dan berisi setidaknya satu karakter khusus (simbol) di dalamnya
  let myString = "password123!";
  let myRegex = /\w+(?=\d)(?=.*[!@#$%^&*])/;
  let result2 = myRegex.test(myString);
  console.log(result2);

  // * Negative lookahead
  // Mencocokkan satu atau lebih karakter alfanumerik yang tidak diikuti oleh digit.
  let string = "password123!";
  let regex = /\w+(?!\d)/;
  let result3 = regex.test(string);
  console.log(result3);
}
