<p align="right">27/11/2022</p>

<h1 align="center"> :clipboard: Notes </h1>

</br>

<details><summary>

## [Fundamentals-Part-1](https://github.com/wahyukmr/JavaScript-Programming/blob/master/01-Fundamentals-Part-1/script.js)

</summary>

### ~ Introduction of JavaScript

<strong>JavaScript is a High-Level, Object-oriented, Multi-paradigm programming language.</strong>

-   **Programming language** hanyalah alat yang memungkinkan kita untuk menulis kode yang akan memerintahkan komputer untuk melakukan sesuatu.
-   **High-level** berarti kita tidak perlu memikirkan banyak hal rumit, seperti mengelola memeori komputer.
-   **Object-oriented** berarti bahasa tersebut sebagian besar didasarkan pada konsep objek untuk menyimpan sebagian besar jenis data.
-   **Multi-paradigm** berarti fleksibel dan serbaguna, sehingga kita dapat menggunakan semua jenis gaya pemrograman yang berbeda (cara berbeda untuk menyusun kode) seperti imperative dan deklarative programming.

### ~ Type conversion and coercion :

Type Coercion atau type coercion adalah konversi nilai dari tipe data yang berbeda dan menentukan mana yang memiliki posisi lebih tinggi untuk dieksekusi terlebih dahulu.

-   **Type conversion** (ketika kita secara menual mengonversi dari satu tipe data ke tipe lainnya).
-   **Type coercion** (terjadi setiap kali operator berurusan dengan dua nilai yang memiliki tipe data berbeda, Jadi javascript dibalik layar mengonversi salah satu nilai agar sesuai dengan nilai lainnya sehingga operasi dapat dijalankan).

### ~ Truthy and falsy operators

-   Nilai falsy adalah nalai yang tidak sepenuhnya salah, tetapi akan menjadi false ketika kita mencoba mengubahnya menjadi boolean.
-   Lima nilai falsy di javascript: 0, "", undefined, null, NaN

### ~ Statements and expressions

-   **Expressions** adalah bagian kode yang menghasilkan nilai.
-   **Statements** seperti kalimat yang menerjemahkan tindakan kita, tindakan yang kita ingin program lakukan. Jadi pada dasarnya setiap kali sesuatu yang diakhiri dengan titik koma itu adalah statement.
</details>

<details> <summary>

## [Fundamentals-Part-2](https://github.com/wahyukmr/JavaScript-Programming/blob/master/02-Fundamentals-Part-2/script.js)

</summary>
  
  ### ~ Activating Strict Mode :
  - Selalu gunakan ***'use strict'*** untuk membantu men-debug code.
  
  ### ~ Reviewing Functions :
  Tiga perbedaan cara menulis fungsi, tetapi semua bekerja dengan cara yang sama. menerima input data, mengubah data, dan kemudian mengeluarkan data. 
  1. **Fuction declaration**, fungsi yang dapat digunakan sebelum di nyatakan sebelumnya.
  2. **Function expression**, pada dasarnya fungsu yang nilainya disimpan pada sebuah variabel.
  3. **Arrow function**, bagus untuk fungsi dengan hanya satu baris statement dan tidak memiliki kata kunci *this*.
  
### ~ Breaking and Continuing
-   **continue** berarti keluar dari iterasi loop saat ini dan melanjutkan ke loop selanjutnya.
-   **break** digunakan untuk sepenuhnya mengakhiri seluruh loop.

### ~ Looping

Secara umum looping / perulangan dibagi menjadi dua, yaitu counted loop dan uncounted loop.

1. **counted loop**
    - Merupakan perulangan yang jelas dan sudah diketahui banyaknya perulangannya.
    - Contoh: for loop, forEach loop, repeat loop.
2. **uncounted loop**
    - Merupakan perulangan yang tidak jelas berapa kali perulangannya.
    - Contoh: while loop dan do/while loop.

</details>

<details> <summary>

## [Developer-Skills](https://github.com/wahyukmr/JavaScript-Programming/blob/master/03-Developer-Skills/script.js)

</summary>

### ~ 4 Step to solve any problem :

1. Pastikan untuk memahami 100% masalahnya. **_ajukan pertanyaan yang tepat_** untuk mendapatkan gambaran yang jelas tentang masalahnya.
2. **_Membagi masalah_**. memecah masalah besar menjadi sub-masalah yang lebuh kecil.
3. Jangan takut untuk melakukan **_research_** pada setiap masalah (Google, stackoverflow, MDN web docs,...)
4. Untuk masalah yang lebih besar, **_tulis pseudo-code_** atau rancangan program sebelum menulis kode yang sebenarnya.

### ~ The Debugging Process :

1. **Identify** (sadar bahwa ada bug)

    - Selama development
    - Testing software
    - Report dari pengguna selama production
    - Context: browsers, user, etc

2. **Find** (Mengisolasi dimana tepatnya bug terjadi dalam kode)

    - Developer console (simple code)
    - Debugger (complex code)

3. **Fix** (Perbaiki bugnya)

    - Ubah solusi yang salah dengan solusi yang benar

4. **Prevent** (Mencegahnya agar tidak terjadi lagi)

    - Mencari untuk bug yang sama dalam kode serupa
    - Menulis test menggunakan testing software

    </details>

<details> <summary>

## [DOM and Events](<https://github.com/wahyukmr/JavaScript-Programming/blob/master/05-Dom-And-Events-Fundamental-(Project#1-Guess-My-Number)/script.js>)

</summary>

-   **DOM** (Document Object Model) adalah Struktur yang merepresentasikan html documents. Memungkinkan javascript untuk mengakses elemen html dan memanipulasi style (mengubah teks, atribut html dan bahkan gaya CSS) nya.

-   **DOM bukanlah javascript**, methods DOM dan properti untuk memanipulasi DOM bukan bagian dari JavaScript, tetapi dapat berinteraksi dengan javascript.

</details>

<details> <summary>

## [Behind-the-Scenes](https://github.com/wahyukmr/JavaScript-Programming/blob/master/08-Behind-the-Scenes/script.js)

</summary>

### ~ JavaScript :

-   **High-level** berarti kita tidak perlu memikirkan banyak hal rumit, seperti mengelola memeori komputer. Kelemahannya tidak akan secepat atau dioptimalkan seperti bahasa low-level.
-   **Garbage-collected** adalah algoritma didalam javascript yang secara otomatis menghapus objek lama yang tidak digunakan dari memori.
-   **Interpreted or just-in-time compiled** dengan ini javascript mengkompilasi seluruh kode kedalam mesin sekaligus dan kemudian mengeksekusinya segera.
-   **Multi-paradigm** berarti fleksibel dan serbaguna, sehingga kita dapat menggunakan semua jenis gaya pemrograman yang berbeda (cara berbeda untuk menyusun kode) seperti imperative dan deklarative programming.
-   **Prototype-based object-oriented** adalah pendekatan object-oriented berbasis prototype.
-   **First-class functions** berarti bahwa fungsi diperlakukan seperti variabel biasa, jadi dapat meneruskan fungsi ke fungsi lain dan bahkan mereturn fungsi dari fungsi.
-   **Dynamically-type language** Ini berarti bahwa JS tidak memerlukan deklarasi eksplisit dari variabel sebelum digunakan.
-   **Single-threaded** berarti bahwa JS hanya dapat melakukan satu hal pada satu waktu. Thread pada dasarnya tempat kode kita dieksekusi di CPU.
-   **Non-blocking event loop** event loop mengambil tugas yang berjalan, mengeksekusi mereka di background dan mengembalikannya ke thread utama setelah selesai.

### ~ JS Engine

-   JS Engine hanyalah sebuah program komputer yang mengeksekusi kode javascript, jadi bertanggung jawab untuk mengurai kode dan mengonversinya menjadi perintah yang dapat dijalankan.
-   Setiap Engine JavaScript selalu berisi **_call stack_** dan **_heap_**.
-   **Call stack** adalah tempat kode kita sebenarnya dieksekusi menggunakan sesuatu yang disebut **_execution context_**.
-   Execution context adalah environment di mana potongan javascript diekseksi, seperti kotak yang menyimpan semua informasi yang diperlukan untuk beberapa kode yang akan dieksekusi. execution context mengandung variable environment, scope chain dan this keyword.
-   Variabel environment mencakup variable declaration(let, const dan var), function dan argument object.
-   **Heap** adalah tempat kumpulan memori yang terstruktur yang menyimpan semua objek(reference types) yang dibutuhkan.

### ~ JS Runtime

-   **JavaScript runtime** seperti kotak yang menyediakan beberapa objek ke JavaScript yang kita butuhkan sehingga dapat berinteraksi dengan dunia luar.
-   Inti dari setiap JS runtime selalu merupakan JS Engine. Misalnya, Browser Chrome dan node.js menggunakan Engine yang sama - V8, tetapi Runtime mereka berbeda: di Chrome memiliki window, objek DOM, dll., sedangkan node memberi kita require, Buffers dan processes.
-   JavaScript runtime biasanya juga menyertakan **_callback queue_**, ini adalah struktur data yang berisi semua fungsi callback yang siap dieksekusi. Misalnya callback fungsi dari DOM event listener(click, timer, dll).
-   ketika call stack kosong, fungsi callback diteruskan ke stack agar dapat dieksekusi. Dan ini terjadi berkat **Event loop**. Jadi event loop mengambil fungsi callback dari callback queue dan menempatkannya ke call stack sehingga dapat dieksekusi.

### ~ Scope in JavaScript :

Scope:

-   ruang atau environment dimana sebuah variabel tertentu dideklarasikan.
-   Ada Global Scope, Function Scope(local Scope), dan Block Scope.

Scope Concepts:

-   scoping mengajukan pertanyaan "dimana variabel tinggal?" atau "dimana kita bisa mengakses variabel tertentu dan dimana yang tidak".
-   Hanya let dan const variabel yang merupakan block scope. Variabel yang dideklarasikan dengan var berakhir di local function terdekat.
-   Di JavaScript, kita mempunyai **_lexical scoping_**, Jadi aturan dimana kita bisa mengakses variabel berdasarkan pada dimana tepatnya kode functions dan kode blocks ditulis.

Scope Chain:

-   Semua Scope selalu memiliki akses ke semua variabel dari Scope terluarnya. Inilah yang disebut **scope chain!**.
-   Ketika sebuah variabel tidak berada di Scope saat ini, Mesin akan mencari dalam Scope chain sampai menemukan variabel yang dicarinya. Inilah yang disebut **variable lookup**.
-   Scope chain adalah one-way street: artinya Scope induk tidak akan pernah memiliki akses ke variabel dari inner Scope (merujuk pada lingkup variabel yang dibuat di dalam sebuah fungsi atau blok kode tertentu).
-   Scope chain di dalam suatu Scope atau ruang lingkup tertentu sama dengan menambahkan semua variable environment dari semua Scope induk.
-   Scope chain tidak memiliki hubungan dengan urutan di mana fungsi dipanggil. Hal ini sama sekali tidak memengaruhi Scope chain!

Tiga jenis Scope di Javascript:

1. Global Scope
    - Berada di luar dari function atau block apapun.
    - Variabel yang dideklarasikan di global scope dapat diakses **dimana saja**.
2. Function Scope
    - Scope atau ruang lingkup dari **function**.
    - Variabel hanya dapat diakses **didalam function, Bukan** diluar.
    - Juga biasa dipanggil **_local scope_**.
3. Block Scope (ES6)
    - Scope atau ruang lingkup dari **if block, for loop block, etc**

### ~ Hoisting in javascript :

-   **Hoisting** adalah membuat beberapa jenis variabel dapat diakses/digunakan kembali pada kode sebelum mereka dideklarasikan

-   Kesimpulan dari bagian ini:
    -   Jangan menggunakan **var** untuk mendeklarasikan variabel.
    -   Gunakan "const" pada bagian dari waktu mendeklarasikan variabel.
    -   Mengakses variabel sebelum mendeklarasikannya adalah praktik yang buruk dan harus dihindari.
    -   Selalu mendeklarasikan fungsi terlebih dahulu sebelum menggunakannya.

### ~ How the "this" Keyword works :

-   **this keyword/variable** adalah variabel spesial yang dibuat untuk setiap execution context(dalam kasus ini untuk setiap fungsi). Mengambil nilai yang merujuk ke "pemilik" dari fungsi dimana kata kunci **_this_** ini digunakan.

-   Pengertian diatas bukan static. Tergantung pada bagaimana fungsi dipanggil, dan nilainya hanya diberikan ketika fungsi sebenarnya dipanggil.

-   Penerapan kata kunci **_this_**:
    -   **Method** 👉 kata kunci **_this_** merujuk ke **objek** yang memanggil method.
    -   **Simple Function call** 👉 kata kunci **_this_** mengembalikan **undefined** (jika menggunakan strict mode).
    -   **Arrow Function** 👉 kata kunci **_this_** merujuk ke this dari fungsi induk terdekatnya.
    -   **Event Listener** 👉 kata kunci **_this_** merujuk ke elemen DOM tempat tempat penanganan dilampirkan.

### ~ Primitives vs. Objects (Primitive vs. Reference Types) :

Kesimpulan dari bagian ini:

-   **Primitive data type**: String, Number, Boolean, Null, bigint, simbool, undefined.
-   **Object**: selain dari primitive seperti Object Literal, Arrays, Functions, banyak lagi...
-   Berbicara tentang memori dan manajemen memori, biasanya disebut **_primitives types_** dan **_reference types_**
-   Semua objek atau dengan kata lain Reference types akan disimpan pada Heap di engine JS.
-   Sedangkan Primitive atau Primitive types akan disimpan pada Call Stack tepatnya didalam execution context dimana mereka dideklarasikan.
-   Pada primitives types, akan mengambil perubahan terakhir.
-   Pada object(reference types), setiap kali membuat perubahan pada salinannya maka data aslinya juga ikut berubah. Karena ketika kita mencoba untuk meng-copy objek, hal ini tidak akan membuat objek baru pada Heap, itu hanya variabel lain pada Stack yang menyimpan referensi ke objek aslinya, jadi kedua variabel ini menunjuk ke alamat memori yang sama di Heap, oleh karenanya jika ada perubahan keduannya akan terpengaruh.
-   Mendeklarasikan variabel const tidak dapat diubah nilainya hanya berlaku untuk nilai Primitive, tetapi tidak untuk nilai Reference. karena ini hanya mengubah nilai objek yang disimpan di Heap.

### ~ Regular Functions vs. Arrow Functions :

-   Jangan menggunakan Arrow Function pada object method.
-   Ketika memiliki fungsi didalam method, solusi terbaik menggunakan arrow function.
-   Penggunaan kata kunci **_this_** bergantung pada object yang memanggilnya.
-   Kata kunci **arguments** tidak lagi penting di javascsript karena ada cara yang lebih modern untuk melakukannya.
</details>

<details> <summary>

## [Data-Structures-Operators](https://github.com/wahyukmr/JavaScript-Programming/blob/master/09-Data-Structures-Operators/script.js)

</summary>

### ~ Data Structure Overview :

### ~ Data Structure Overview :

-   Array or Set = simple list of values and have only values without any description
-   Object or Map = if necessary key and value pairs. So with keys, we have a way of describing or describing values
-   The use of Array Object is also common in JavaScript

### ~ Arrays Vs Sets :

-   Array
    -   Use when you need an ordered list of values (might contain duplicates)
    -   Use it when you need to manipulate data
-   Set
    -   Use it when you need to work with unique values
    -   Use when high performance is really important
    -   Use to remove duplicates from arrays

### ~ Objects Vs Maps :

-   Object
    -   More “traditional” to store keys/values
    -   Easier to write and access values whit the dot operator( . ) and bracket( [] )
    -   Keys are just type strings
    -   Many developers are familiar with Object
    -   Use when you need to include functions (method)
    -   Use when working with JSON
    -   Objects are still being used all the time
-   Map
    -   Better performance
    -   Keys can have any data type
    -   Easy to iterate
    -   Easy to calculate length/size data
    -   Use when you simply need to map key to values
    -   Use when you need keys that are not strings
    -   Map is an important data structure for now

### ~ Destructuring Arrays :

-   destructuring is an ES6 feature for disassembling array or object values into separate variables. In other words destructuring is breaking down complex data structures into small data structures such as variables.
-   In arrays, we use distructuring to retrieve elements from the array and store them on a variable

### ~ Destructuring objects :

-   In the unimportant order object, just call the name of the property to be retrieved

### ~ Spread Operators ( ... ) :

-   Spread operator = used to split up array elements OR object properties
-   The use of the spread operator is to create a new array or pass some value into a function
-   Spread operators are similar to Destructuring, as they help output elements on arrays
-   The big difference is that the spread operator takes the entire element on the array and does't create a new variable
-   That way we can only use it in the place where it should write values separated by commas
-   Two important cases of using spread operators are Copy array and combine with two or more arrays
-   Spread operators work on all iterable data types (can be changed)

### ~ Rest Pattern and Parameters :

-   Rest Pattern = used to marge a list of functions arguments into an array
-   Uses it in the argument list of the function, which allows it to accept an unlimited number of arguments and they will all be concatenated into one array
-   Rest Pattern is the opposite of spread operator
-   Operator spread used when writing values and separated by commas
-   While Rest Pattern used when writing variable names and separated by commas

### ~ Short Circuiting ( && and || ) :

-   We can use the OR operator to specify a default value
-   We can use the AND operator to execute the code in the second operand if the first operand is true
-   Short Circuiting in OR ( || ) = returns the first truth value, or only the last value if everything is false (doesn't have to be a BOOLEAN)
-   Short Circuiting in OR ( || ) are opposite to Short Circuiting in AND ( && )
-   Short Circuiting in AND ( && ) = returns the first false value, or the last value if everything is true (doesn't have to be a BOOLEAN)
-   Don't use short circuiting to replace if statements, because it will make the code difficult to read

### ~ The Nullish Coalescing Operator ( ?? ) :

-   It works similarly to the OR operator, and will fix errors there
-   It works to Nullish: Null and Undefined (**_Not For:_** 0 or "")

### ~ Logical Assignment Operators :

-   The principle of its work is the same as that of the OR, AND, NULLISH operators. but with this it is simpler
-   operator OR for give a default value
-   operator NULLISH for used if there is a value Null or Undefined
-   operator AND we can use it if we want to change an existing value

### ~ Looping Arrays: The for-of Loop

-   Use a for-of loop when dealing with data iterables( arrays, strings, maps, sets )
-   Use a for-in loop when dealing with data Objects
-   With the for-of loop we can still use the continue and break keywords

-   Array or Set = simple list of values and have only values without any description
-   Object or Map = if necessary key and value pairs. So with keys, we have a way of describing or describing values
-   The use of Array Object is also common in JavaScript

### ~ Arrays Vs Sets :

-   Array
    -   Use when you need an ordered list of values (might contain duplicates)
    -   Use it when you need to manipulate data
-   Set
    -   Use it when you need to work with unique values
    -   Use when high performance is really important
    -   Use to remove duplicates from arrays

### ~ Objects Vs Maps :

-   Object
    -   More “traditional” to store keys/values
    -   Easier to write and access values whit the dot operator( . ) and bracket( [] )
    -   Keys are just type strings
    -   Many developers are familiar with Object
    -   Use when you need to include functions (method)
    -   Use when working with JSON
    -   Objects are still being used all the time
-   Map
    -   Better performance
    -   Keys can have any data type
    -   Easy to iterate
    -   Easy to calculate length/size data
    -   Use when you simply need to map key to values
    -   Use when you need keys that are not strings
    -   Map is an important data structure for now

### ~ Destructuring Arrays :

-   destructuring is an ESX feature for disassembling array or object values into separate variables. In other words destructuring is breaking down complex data structures into small data structures such as variables.
-   In arrays, we use distructuring to retrieve elements from the array and store them on a variable

### ~ Destructuring objects :

-   In the unimportant order object, just call the name of the property to be retrieved

### ~ Spread Operators ( ... ) :

-   Spread operator = unpacking arrays into individual elements
-   The use of the spread operator is to create a new array or pass some value into a function
-   Spread operators are similar to Destructuring, as they help output elements on arrays
-   The big difference is that the spread operator takes the entire element on the array and does't create a new variable
-   That way we can only use it in the place where it should write values separated by commas
-   Two important cases of using spread operators are Copy array and combine with two or more arrays
-   Spread operators work on all iterable data types (can be changed)

### ~ Rest Pattern and Parameters :

-   Rest Pattern = collect some elements (the rest of the elements) and condense them into an array
-   Rest Pattern is the opposite of spread operator
-   Operator spread used when writing values and separated by commas
-   While Rest Pattern used when writing variable names and separated by commas

### ~ Short Circuiting ( && and || ) :

-   We can use the OR operator to specify a default value
-   We can use the AND operator to execute the code in the second operand if the first operand is true
-   Short Circuiting in OR ( || ) = returns the first truth value, or only the last value if everything is false (doesn't have to be a BOOLEAN)
-   Short Circuiting in OR ( || ) are opposite to Short Circuiting in AND ( && )
-   Short Circuiting in AND ( && ) = returns the first false value, or the last value if everything is true (doesn't have to be a BOOLEAN)
-   Don't use short circuiting to replace if statements, because it will make the code difficult to read

### ~ The Nullish Coalescing Operator ( ?? ) :

-   It works similarly to the OR operator, and will fix errors there
-   It works to Nullish: Null and Undefined (**_Not For:_** 0 or "")

### ~ Logical Assignment Operators :

-   The principle of its work is the same as that of the OR, AND, NULLISH operators. but with this it is simpler
-   operator OR for give a default value
-   operator NULLISH for used if there is a value Null or Undefined
-   operator AND we can use it if we want to change an existing value

### ~ Looping Arrays: The for-of Loop

-   Use a for-of loop when dealing with data iterables( arrays, strings, maps, sets )
-   Use a for-in loop when dealing with data Objects
-   With the for-of loop we can still use the continue and break keywords

### ~ Optional Chaining ( ?. ) :

-   Optional Chaining = check if the value exists or not, otherwise, it will return Undefined
-   If you want to use variable names as property names, you need to use brackets []
-   Use Nullish ( ?? ) to create default values ​​and handle values ​​0 or undefined

### ~ Working with String :

-   Remember that strings cannot be changed (primitive), when using the string method it becomes a string object, after it is finished returning the string back
-   All methods will return a new string
</details>

<details> <summary>

## [Functions](https://github.com/wahyukmr/JavaScript-Programming/blob/master/10-Functions/script.js)

</summary>
  
  ### How Passing Argument Works: Value Vs Reference :
  - pass on a primitive type to a function is tantamount to copying its value (can't change the original value)
  - If it is an object, it will copy the object. and if you make changes to the copy it will also happen to the original
  - Do not interact with different functions with the same object
  
  ### Functions Accepting Callback Functions :
  - Callbacks are very often used in javascript
  - The advantage:
    - it makes it easy to break the code into reusable and interconnected part
    - creating abstractions, that is hides the details of some code implementation
  
  ### Functions Returning Functions :
  - It's function is useful in some situations. Especially if you use a very important programming paradigm, namely functional programming
  
  ### The Bind method :
  - Just like the call method, Bind also to set this keyword manually to call any function
  - The difference is that Bind does not call the function directly, but returns a new function to which this keyword is bound
  - bind method is very useful when using event listener
  
  ### Immediately Invoked Function Expressions (IIFE) :
  - A function that can only be used once 
  - IIFE can be used when you want to create a private function (limiting functions and variables to global)
  - As a result, functions and variables declared in IIFE cannot be accessed globally
  - So the use of IIFE can be a problem solver if there is the same variable name or function name
  
  ### Closures :
  - Closures only happen automatically in certain situations, we just need to recognize those situations
  - Simply Closure is a function inside a function
  - In essence, A inner function that has access rights to the scope in the function it belongs to(parent function)
  - Can access global scope
</details>

<details> <summary>

## [Arrays-Bankist](https://github.com/wahyukmr/JavaScript-Programming/blob/master/11-Arrays-Bankist/script.js)

</summary>
  
  ### Looping Arrays: forEach
  - The forEach method is looping over the array and in each iteration it will execute a callback function
  - When to use for of loop and when to use forEach:
    - when you want to use the Continue and Break statements then use the for of loop
    - other than that it depends on personal preference
  
  ### Data Transformation: Map
  - map: to iterate over an array( similar to forEach ) returns a new array containing the results of applying an operation on all original array element
  - difference between the map method and forEach:
    - forEach if you want to change the value of the data itself, for example entering data into the database
    - map to make changes in the form of an array
  
  ### Data Transformation: Filter
  - filter: returns a new array containing the array elements that passed a specified test condition or filtering elements in the original array that meet certain conditions(use callback function)
  
  ### Data Transformation: Reduce
  - Reduce = Summarizing all the elements in an array into one single value
  - Sintak reduce:
  
        // arrow function
        reduce((nilaiSebelumnya, nilaiSaatIni, indexSaatIni, array) => { ... }, nilaiAwal)

        // callback function
        reduce(callbackFn, nilaiAwal)

-   Should always return accumulator to do the next iteration

### The Magic of Chaining Methods :

-   don't use the Chaining method for apps at scale
-   don't use methods that change the original array( such as splice method )
-   for small-scale applications, the above rules can be used

### The Find Method :

-   The Find Method: retrieves a single array element based on a condition
-   usually the purpose of the find method is to find exactly one element, therefore create a condition where only one element can satisfy that condition
-   the find method is similar to the filter method, the difference is:
    -   filter returns all elements that match the condition, while the find method returns only the first
    -   most importantly, the filter returns a new array while the find method returns the element itself and is not an array

### Method some and avery :

-   Method Some = Similar to the include method, the difference is that some methods can perform a condition to test whether at least one element of the array passed when tested with a callback function it will return true.
-   This method not change the original array
-   every method: similar to Some Method, the difference is that this method will return true if the condition for all array elements is true

### Method flat and flatMap :

-   method flat: flattens nested array elements to have the appropriate depth to the specified
-   method flatMap: combine Map method and Flat method into one part
-   method flapMap can only enter one depth

### Sorting arrays :

-   Method sort: sort arrays in alphabetical order or from A-Z
-   it can be interpreted that the Sort method does sorting by string
-   This method will change the original array

### More Ways of Creating And Filling Arrays :

-   The fill method specifed element in an array with a value - The method overwrites the origina array - Syntax:
    array.fill(value, start, end)
    </details>

<details> <summary>

## [Advanced-DOM-Bankist](https://github.com/wahyukmr/JavaScript-Programming/blob/master/13-Advanced-DOM-Bankist/script.js)

</summary>

### Event Propagation: Bubbling and Cupturing :

-   Bubbling phase the event goes up from the inside(target) to the top through the parent like a bubble in water
-   Cupturing phase the event goes down to the element(target)
-   Cupturing is rarely used, if you want to use it, set the third parameter in the event listener to true
-   Target is the place where the event came from
-   currentTarget is the element to which the event handler is attached
-   cuurrentTarget is exactly the same as "this" in the event handler

### DOM Traversing :

-   DOM Traversing means we can select elements based on other elements
-   The closest() method searches up the DOM tree for elements which matches a specified CSS selector

</details>

<details> <summary>

## [OOP](https://github.com/wahyukmr/JavaScript-Programming/blob/master/14-OOP/script.js)

</summary>
  
  ### TECHNIQUE USING PROTOTYPE INHERITANCE: Constructor functions :
  - in OOP we will create a "class" as a template, so we can create as many objects as possible with the same characters(properties and methods)
  - to make the "class" can use the function (old way). This function is called the constructor function
  - the difference between a regular function and a constructor function is that when calling a constructor function it starts with the "new" operator
  - what happens when calling a function with a "new" operator:
    - new empety object {} is created
    - then the function is called the keyword "this" = refers to the new object
    - the new object linked to the prototype property of the constructor function(in this case Person.prototype) through .__proto__
    - function constructor automatically return the new object
  - arrow function is not work in the constructor function 
  - Writing constructor functions always starts with a capital letter, same like array and Map
  - can't create method inside constructor function, to deal with this problem we can use prototype and prototype inheritance
  
  ### Prototype :
  - any function is also an object
  - every object in javascript automatically has a property called prototype. And that includes the constructor function
  - Every object created by a particular constructor function, will get access to all the mothods and properties defined in the  prototype.constructor property.
  - Prototype inheritence/delegation = if the property or method cannot be found in a particular object, javascript will look at its prototype
  
  ### TECHNIQUE USING PROTOTYPE INHERITANCE: Es6 Classes :
  - classes in javascript do the same thing as constructor functions, but use a nicer and more modern syntax. So still implementing prototype inheritance behind the scenes, but with a syntax that makes sense to people coming from other programming languages
  - add constructor methods (Just like the constructor function, we can pass arguments to the properties we want to use and have on the object)
  - when creating a new instance, the constructor will be called and will return a new object and store it in the specified variable.
  - All methods in the class will be on the prototype object, not on the object itself( same like prototype inheritance)
  - vital Records:
    - class cannot be used before it is declared
    - classes are first-class citizens, which means we can pass it into a function and return it from the function
    - classes are executed in strict mode
    - can leave constructor function and switch to classeshod inside constructor function, to deal with this problem we can use prototype and prototype inheritance
    
  ### Static Methods :
  - Static Methods is method that can be used without having to declare a class (meaning without using a variable first)
  - methods that can be accessed directly from the class without creating an object first
  
  ### TECHNIQUE USING PROTOTYPE INHERITANCE: Object.create :
  - Object.ceate is the least used way of implementing prototype inheritance
  - in Object.create, there is still prototype inheritance but no prototype property involved and also no constructor function and new operator
  - we can set prototype to any object
  - this object will be the prototype of all objects
  - in this case we manually set prototype from object steven to object PersonProto
  
  ### fake encapsulation using just convention :
  - Encapsulation is keeping some properties and methods private inside the class so that they cannot be accessed from outside the class. then the method or other property will be exposed as a public interface (API)
  
  ### encapsulation: Private class fields and methods :
  - We can think of a field as a property that will exist in all instances that we make through class. so Public Field = Public instance
  - public field/ public instance will be present in all instances created through the class, so not in prototype. Because, all methods in the class will always be added to the prototype
  - private field make the property inaccessible from the outside
  - private method hiding implementation details from outside
  - private methods are not fully supported by browsers, therefore we still use the underscore convention
  
  ### ES6 Classes Summary :
  - Student = Child Class
  - extends = inheritance between classes, automatically sets prototype
  - Person = parent class
  - public field = similar to property, available on created object
  - private field = not accessible outside of class. very suitable for implementing data privacy and encapsulation
  - static public field = field or property available only on class. like static method using static keyword to make any field static too
  - Constructor Methods = called by new operator every time we want to create a new instance/object of class. Mandatory in regular class, might be omitted in a child class
  - super = call to parent class(necessary with extends). required every time you want to write a child class, when using the extend keyword. Needs to happen before accessing this
  - instance property = available on created object. The difference between this field and the public field is that the instance property sets data based on the input of the constructor, usually this property is more personalized and unique to each object, whereas the public property is usually something that is common to all objects.
  - private methods = might not yet work in your browser. "fake" alternative: _ instead of #
  - getter methods = so that we can get the value of an object just by writing a property instead of writing a method
  - setter methods = use _ to set a property with same name as method, and also add getter
  - static methods = available only on class. Can not access instance properties nor methods, only static ones
  - some important things about class:
    - Classes just "syntactic sugar" over constructor functions
    - Classes are not hoisted
    - Classes are first-class citizens
    - Class body is always executed in strict mode

</details>

<details> <summary>

## [Asynchronous](https://github.com/wahyukmr/JavaScript-Programming/blob/master/15-Asynchronous/script.js)

</summary>
  
  ### old version of ajax calling with XML Http Request function :
  - Step by step call ajax with XML Http Request function (old way)
    - Step 1: call new XMLHttpRequest and store its value into variable
    - step 2: enter the request type and prepare the URL which will be used to make the Ajax call
    - step 3: send request to URL
    
  ### callback Hell (create an Ajax call sequence) :
  - Callback Hell is when we have lots of calls to execute asynchronous tasks sequentially, this happens in all asyncronous tasks handled with callbacks and not just calls
  - problems with callback hell will make our code messy, difficult to understand, difficult to maintain and give rise to a lot of bugs
  - to solve this problem use Promises
  
  ### Promises and Fetch API :
  - Fetch API = call modern version of ajax
  - Recap:
    - Fetch function return the promises
    - and then handle those Promises using the then method
    - to read from the response, it is necessary to call the JSON method on the response object
    - The JSON method will return Promises, because in the form of Promises it needs to be called again using the then method
    
  ### Event loops in practice :
  - Code that is outside of any callback, will be executed first (test start and test end)
  - Promise and setTimeout will finish together
</details>

<details> <summary>

## [Modern-JS-Modules-Tooling](https://github.com/wahyukmr/JavaScript-Programming/blob/master/16-Modern-JS-Modules-Tooling/script.js)

</summary>
  
  ### Introduction to NPM :
  - how to manage dependencies in a better and more modern way "with NPM"
  - when starting with NPM , it must first initialize it with "npm init"
  - after that, will generate a JSON file which is basically what will store the entire project configuration
  - if we want to move our project to someone else's computer or share it with other developers or even check it to version control like git, we must not include the module_node folder, it must be deleted first before sharing it with others. If we want to use it again on our computer, just type npm i
  
  ### Bundling with Parcel and NPM Script :
  - Install Parcel = npx i parcel --save-dev
  - Parcel is just a build tool which is also in NPM
  - So because Parcel is just a tool, it will be stored in the devDependency which is like a tool we need to build applications, but it's not a dependency included in the code
  - In order to be able to use parcel in the console like "live-server", we can have two options (using NPX or NPM script)
  - Using NPX = npx parcel berkas_html (write on the command line)
  - Using NPM script = in the script object add a property with the name start(optional) and the value is parcel_html file in the package.json file, to call it go to command line then write npm run start

-   besides being able to be used like a "live-server", parcel is also used to combine several modules together (bundling)
-   to combine modules go to package.json file then in script object add property with the name build(optional) and value is parcel build index.html, to call it go to command line then write npm run build
-   then parcel will create a "dist" folder containing the bundling results, and this folder will be sent for production

### Configuring Babel and Polyfilling :

-   configuring Babel for a super modern code transpiler reverts back to ES5 code
-   in parcel automatically uses babel to modify the code to make our code support old browsers
-   for features like Promises, all array methods, and async functions we can polyfill them, by installing packages "core-js" and "regenerator-runtime"
</details>
