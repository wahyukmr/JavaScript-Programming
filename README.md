<p align="right">27/11/2022</p>

<h1 align="center"> :clipboard: Notes </h1>

</br>

<details><summary>

## [Fundamentals-Part-1](https://github.com/wahyukmr/JavaScript-Programming/blob/master/01-Fundamentals-Part-1/script.js)

</summary>

### ~ Introduction of JavaScript

<strong>JavaScript is a High-Level, Object-oriented, Multi-paradigm programming language.</strong>

-   Programming language hanyalah alat yang memungkinkan kita untuk menulis kode yang akan memerintahkan komputer untuk melakukan sesuatu.
-   High-level berarti kita tidak perlu memikirkan banyak hal rumit, seperti mengelola memeori komputer.
-   Object-oriented berarti bahasa tersebut sebagian besar didasarkan pada konsep objek untuk menyimpan sebagian besar jenis data.
-   Multi-paradigm berarti fleksibel dan serbaguna, sehingga kita dapat menggunakan semua jenis gaya pemrograman yang berbeda (cara berbeda untuk menyusun kode) seperti imperative dan deklarative programming.

    ### ~ Type conversion and coercion :

    Type Coercion atau type coercion adalah konversi nilai dari tipe data yang berbeda dan menentukan mana yang memiliki posisi lebih tinggi untuk dieksekusi terlebih dahulu.

    -   Type conversion (ketika kita secara menual mengonversi dari satu tipe data ke tipe lainnya).
    -   Type coercion (terjadi setiap kali operator berurusan dengan dua nilai yang memiliki tipe data berbeda, Jadi javascript dibalik layar mengonversi salah satu nilai agar sesuai dengan nilai lainnya sehingga operasi dapat dijalankan).

    ### ~ Truthy and falsy operators

    -   Nilai falsy adalah nalai yang tidak sepenuhnya salah, tetapi akan menjadi false ketika kita mencoba mengubahnya menjadi boolean.
    -   Lima nilai falsy di javascript: 0, "", undefined, null, NaN

    ### ~ Statements and expressions

    -   Expressions adalah bagian kode yang menghasilkan nilai.
    -   Statements seperti kalimat yang menerjemahkan tindakan kita, tindakan yang kita ingin program lakukan. Jadi pada dasarnya setiap kali sesuatu yang diakhiri dengan titik koma itu adalah statement.
    </details>

<details> <summary>

## [Fundamentals-Part-2](https://github.com/wahyukmr/JavaScript-Programming/blob/master/02-Fundamentals-Part-2/script.js)

</summary>
  
  ### ~ Activating Strict Mode :
  - always use ***'use strict'*** to help debug code
  
  ### ~ Reviewing Functions :
  - the same two parameters in different functions, have nothing to do with each other
  - ***Expression*** is code that produces a value or is a value
  - ***Statement*** is an action / action taken
  
  ### ~ Primitive data types :
    1. Number
    2. String
    3. Boolean
    4. Undefined
    5. Null
    6. Symbol
    7. BigInt
  
  ### ~ Object data types :
    1. Object literal
    2. Arrays
    3. Function
    4. Many more...
</details>

<details> <summary>

## [Developer-Skills](https://github.com/wahyukmr/JavaScript-Programming/blob/master/03-Developer-Skills/script.js)

</summary>

### ~ 4 Step to solve any problem :

1. Make sure you 100% understand the problem. **"Ask the right questions"** to get a clear picture of the problem
2. **"Divide and conquer"**: Break a big problem into smaller sub-problems
3. Don't be afraid to do **"research"** on each problem
    - Google, stackoverflow, MDN web docs,...
4. For bigger problems, **"write pseudo-code"** before writing the actual code

### ~ The Debugging Process :

-   **Identify** (Aware that there is a bug)

    -   :point_right: During development
    -   :point_right: Testing software
    -   :point_right: User reports during production
    -   :point_right: Context: browsers, user, etc

-   **Find** (Isolating where exactly the bug is happening in code)

    -   :point_right: Developer console (simple code)
    -   :point_right: Debugger (complex code)

-   **Fix** (Correct the bug)

    -   :point_right: Change wrong solution with correct solution

-   **Prevent** (Preventing it from happening again) - :point_right: Searching for the same bug in similar code - :point_right: Writing tests using testing software
</details>

<details> <summary>

## [Behind-the-Scenes](https://github.com/wahyukmr/JavaScript-Programming/blob/master/08-Behind-the-Scenes/script.js)

</summary>
  
  ### ~ Scope in JavaScript :
  - Scope Concepts
    - scoping asks the question "where do variable live?" or "where can we access a certain variable, and where not?".
    - There are 3 type Scope in JavaScript: Global Scope, Function Scope(local Scope), and Block Scope.
    - Only let and const variable are block scope.
    - in JavaScript, we have lexical scoping, so the rules of where we can access variables are based on exactly where in the code functions and code blocks are written.
  - Scope Chain
    - Every Scope always has access to all the variables from all its outer scope. This is the **scope chain!**
    - When a variable is not in the current Scope, The engine looks up in the scope chain until it finds the variable it's looking for. This is called **variable lookup**.
    - The Scope chain is a one-way street: a Scope will never, ever have access to the variables of  an inner Scope.
    - The Scope chain in a certain Scope is equal to adding together all the variable environment of the all parent Scopes.
    - The Scope chain has nothing to do with the order in which functions were called. it does not affect the scope chain at all!
  - The 3 Types of scope
    1. Global Scope
        - 👉 Outside of any function or block
        - 👉 Variable declared in global scope are accessible **everywhere**
    2. Function Scope
        - 👉 The scope of the **function**
        - 👉 Variable are accessible only **inside function, NOT** outside
        - 👉 Also called local scope
    3. Block Scope (ES6)
        - 👉 The scope of the **if block, for loop block, etc**
  
  ### ~ Hoisting and TDZ in Practice :
  - The conclusions in this material are
    - Don't use "var" to declare variables
    - Use "const" at part of the time declaring variables
    - Always declare variables above the Scope
    - Always declare the function first before it is used
  
  ### ~ The "this" Keyword in Practice :
  - use of the "this" keyword in calling functions
    - Method 👉 "this" = Object that is calling the method
    - Simple Function call 👉 "this" = undefined (if using strict mode)
    - Arrow Function 👉 "this" = using the this keyword from the parent scope
    - Event Listener 👉 "this" = DOM Element that the handler is attached to
  
  ### ~ Regular Functions vs. Arrow Functions :
  - The conclusions in this material are
    - Don't use Arrow function in object method
    - The use of this keyword depends on the object that calls it
    - When it has a function inside a method, best solution is use Arrow function
    - Keyword arguments are no longer important in javascsript because there are more modern ways to it
  
  ### ~ Primitives Types vs. Objects (reference types) :
  - The conclusions in this material are
    - in primitives declare the const variable cannot be changed in value, but does not apply to object (reference types)
    - Type Data Primitive: String, Number, Boolean, Null, bigint, simbool, undefined
    - Type Data Object: Object Literal, Arrays, Functions, many more...
    - in primitive = fetch last change
    - in object(reference types) = every time you make changes to the copy, the original object changes too
</details>

<details> <summary>

## [Data-Structures-Operators](https://github.com/wahyukmr/JavaScript-Programming/blob/master/09-Data-Structures-Operators/script.js)

</summary>

<<<<<<< HEAD
### ~ Data Structure Overview :
=======
   ### ~ Data Structure Overview :
  - Array or Set = simple list of values and have only values without any description
  - Object or Map = if necessary key and value pairs. So with keys, we have a way of describing or describing values
  - The use of Array Object is also common in JavaScript
  
  ### ~ Arrays Vs Sets :
  - Array
    - Use when you need an ordered list of values (might contain duplicates)
    - Use it when you need to manipulate data
  - Set
    - Use it when you need to work with unique values
    - Use when high performance is really important
    - Use to remove duplicates from arrays
  
  ### ~ Objects Vs Maps :
  - Object
    - More “traditional” to store keys/values
    - Easier to write and access values whit the dot operator( . ) and bracket( [] )
    - Keys are just type strings
    - Many developers are familiar with Object
    - Use when you need to include functions (method)
    - Use when working with JSON
    - Objects are still being used all the time
  - Map
    - Better performance
    - Keys can have any data type
    - Easy to iterate
    - Easy to calculate length/size data
    - Use when you simply need to map key to values
    - Use when you need keys that are not strings
    - Map is an important data structure for now
  
  ### ~ Destructuring Arrays :
  - destructuring is an ES6 feature for disassembling array or object values into separate variables. In other words destructuring is breaking down complex data structures into small data structures such as variables.
  - In arrays, we use distructuring to retrieve elements from the array and store them on a variable
  
  ### ~ Destructuring objects :
  - In the unimportant order object, just call the name of the property to be retrieved
  
  ### ~ Spread Operators ( ... ) :
  - Spread operator = used to split up array elements OR object properties
  - The use of the spread operator is to create a new array or pass some value into a function
  - Spread operators are similar to Destructuring, as they help output elements on arrays
  - The big difference is that the spread operator takes the entire element on the array and does't create a new variable
  - That way we can only use it in the place where it should write values separated by commas
  - Two important cases of using spread operators are Copy array and combine with two or more arrays
  - Spread operators work on all iterable data types (can be changed)
  
  ### ~ Rest Pattern and Parameters :
  - Rest Pattern = used to marge a list of functions arguments into an array
  - Uses it in the argument list of the function, which allows it to accept an unlimited number of arguments and they will all be concatenated into one array
  - Rest Pattern is the opposite of spread operator
  - Operator spread used when writing values and separated by commas
  - While Rest Pattern used when writing variable names and separated by commas
  
  ### ~ Short Circuiting ( && and || ) :
  - We can use the OR operator to specify a default value
  - We can use the AND operator to execute the code in the second operand if the first operand is true
  - Short Circuiting in OR ( || ) = returns the first truth value, or only the last value if everything is false (doesn't have to be a BOOLEAN)
  - Short Circuiting in OR ( || ) are opposite to Short Circuiting in AND ( && )
  - Short Circuiting in AND ( && ) = returns the first false value, or the last value if everything is true (doesn't have to be a BOOLEAN)
  - Don't use short circuiting to replace if statements, because it will make the code difficult to read
  
  ### ~ The Nullish Coalescing Operator ( ?? ) :
  - It works similarly to the OR operator, and will fix errors there
  - It works to Nullish: Null and Undefined (***Not For:*** 0 or "")
  
  ### ~ Logical Assignment Operators :
  - The principle of its work is the same as that of the OR, AND, NULLISH operators. but with this it is simpler
  - operator OR for give a default value
  - operator NULLISH for used if there is a value Null or Undefined
  - operator AND we can use it if we want to change an existing value
  
  ### ~ Looping Arrays: The for-of Loop
  - Use a for-of loop when dealing with data iterables( arrays, strings, maps, sets )
  - Use a for-in loop when dealing with data Objects
  - With the for-of loop we can still use the continue and break keywords
>>>>>>> 63240b895b31736c3acdf82659e369812c9b3ef8

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
