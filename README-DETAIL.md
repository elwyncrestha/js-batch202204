# JavaScript Training

## Pre-requisites

* HTML
* CSS

## What is JavaScript?

* High-level, interpreted programming language.
* Conforms to the ECMAScript specification.
* Multi-paradigm.
* Client-side as well as Server-side.

## Contents

### Day 1 (2 hrs)

#### Fundamentals

* HTML and Scripts
* Console Output
* Variables
  * var
  * let (ES6)
    * Variables defined with let cannot be Redeclared.
    * Variables defined with let must be Declared before use.
    * Variables defined with let have Block Scope.
  * const (ES6)
    * Variables defined with const cannot be Redeclared.
    * Variables defined with const cannot be Reassigned.
    * Variables defined with const have Block Scope.
* Data Types
  * JavaScript has dynamic types.
  * number
  * string
  * boolean
  * array
  * object
  * undefined
  * null
* Type Conversion
  * Converting Strings to Numbers
    * `Number()`
    * `parseFloat()`
    * `parseInt()`
    * unary + operator
  * Converting Numbers to Strings
    * `String()`
    * `x.toString()`
  * Converting Dates to Numbers
    * `Number(new Date())`
    * `new Date().getTime()`
  * Converting Dates to String
    * `String(Date())`
    * `Date().toString()`
  * Converting Booleans to Numbers
    * `Number(false)`
    * `Number(true)`
  * Converting Booleans to Strings
    * `String(false)`
    * `String(true)`
    * `false.toString()`
    * `true.toString()`
* Functions
* Strings and String methods
  * String literal
  * String object
  * Using comparator operator `==` and `===`
  * `slice(start, end)`
  * `substring(start, end)`
  * `substr(start, length)`
  * `replace()`
  * `toUpperCase()`
  * `toLowerCase()`
  * `concat()`
  * `trim()`
  * `charAt(position)`
  * `charCodeAt(position)`
  * Property access [ ]
  * `split()`
* Numbers and Math object
  * Numbers are Always 64-bit Floating Point
  * JavaScript uses the + operator for both addition and concatenation.
  * Numbers are added. Strings are concatenated.

  ```JS
  let x = 10;
  let y = 20;
  let z = x + y;
  ---
  let x = "10";
  let y = "20";
  let z = x + y;
  ---
  let x = 10;
  let y = "20";
  let z = x + y;
  ---
  let x = "10";
  let y = 20;
  let z = x + y;
  ---
  let x = 10;
  let y = 20;
  let z = "The result is: " + x + y;
  ---
  let x = 10;
  let y = 20;
  let z = "30";
  let result = x + y + z;
  ---
  ```

  * NaN
    * `isNaN(x)`

  ```JS
  let x = 100 / "Apple";
  ```

  * Infinity
  * Hexadecimal
  * JavaScript Numbers as Objects

* Arrays and Array methods
  * Arrays are a special kind of objects, with numbered indexes.
  * `push()`
  * `pop()`
  * `shift()`
  * `unshift()`
  * `splice()`
* Object literals
  * Destructuring
* JSON
* Conditionals
* Loops
  * for
  * while
  * do while
  * for of
  * for in

---

### Day 2 (2 hrs)

* Function
  * Function call
  * Function apply
  * Function bind
* Function closures
* Arrow functions
* High Order Array Methods
  * map
  * filter
  * reduce
  * forEach
  * some
  * every
  * flat
  * flatMap
  * find
  * sort
* Constructor Functions & Prototypes Intro
* ES6 Classes Intro
* Prototypes
* Prototypal Inheritance
* ES6 Classes and Sub Classes

---

### Day 3 (2 hrs)

#### DOM Manipulation

* Window Object
* DOM
  * language independent interface
  * is not part of the JavaScript language
  * a standard for accessing documents
* DOM Selection
  * Single element selection
  * Multiple elements selection
* Manipulating The DOM
  * Changing HTML content
  * Changing the value of an attribute
* Creating elements
* Removing the elements
* Events
  * Event attributes
  * Assign Events using the HTML DOM
  * Event Listener
* Event bubbling and capturing
* Event delegation

---

### Day 4 (2 hrs)

* Try/catch error handling
* Asynchronous programming
* Callbacks
* ES6 Promises
* Async/Await
* Ajax and XHR
* Fetch API
* Local storage
* Session storage
* Module pattern

---
