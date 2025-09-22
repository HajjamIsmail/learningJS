# 📚 JavaScript Documentation

## 📋 Table of Contents

1. [Variables and Constants](#-variables-and-constants)
2. [Conditional Statements](#-conditional-statements)
3. [Objects and Memory Reference](#-objects-and-memory-reference)
4. [Arrays](#-arrays)
5. [Array Manipulation Methods](#-array-manipulation-methods)
6. [Complete Guide to Loops in JavaScript](#-complete-guide-to-loops-in-javascript)
7. [Functions in JavaScript](#-functions-in-javascript)
8. [Advanced JavaScript Functions](#-advanced-javascript-functions)
9. [DOM – Complete Guide + Cheatsheet](#-dom--complete-guide--cheatsheet)

---

## 🔧 Variables and Constants

### Declaration and Modification

```javascript
let age = 25;         // modifiable variable
const name = "Ismail"; // constant (non-reassignable)
var city = "Paris";    // old way (avoid today)
```

### Differences Between `var`, `let` and `const`

| Keyword | Reassignment Possible? | Scope                  | Redeclaration Possible? | Recommended Usage       |
| ------- | ---------------------- | ---------------------- | ----------------------- | ----------------------- |
| `var`   | ✅ Yes                  | Function scope         | ✅ Yes                   | ⚠️ Legacy, avoid        |
| `let`   | ✅ Yes                  | Block (`{}`) scope     | ❌ No                    | ✅ Modern and safe      |
| `const` | ❌ No                   | Block (`{}`) scope     | ❌ No                    | ✅ When no reassignment needed |

### Visual Scope Example

```javascript
if (true) {
    var a = 1;  // still exists outside the block ❗
    let b = 2;  // exists only here
    const c = 3; // exists only here
}

console.log(a); // 1
console.log(b); // ❌ error
console.log(c); // ❌ error
```

### Variable Summary

* 🟢 `let` → **modifiable** variable (block scope)
* 🟢 `const` → **non-reassignable** variable (block scope)
* 🔴 `var` → legacy, **avoid** (function scope)

> 🔒 Use `const` by default, and `let` only if the value needs to change.
> ⚠️ Avoid `var`.

---

## 🔀 Conditional Statements

### Condition Basics

#### 1. Simple `if`

```javascript
let age = 18;

if (age >= 18) {
  console.log("You are an adult"); 
}
```

#### 2. `if ... else`

```javascript
let age = 16;

if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}
```

#### 3. `if ... else if ... else`

```javascript
let grade = 15;

if (grade >= 16) {
  console.log("Very good");
} else if (grade >= 10) {
  console.log("Passable");
} else {
  console.log("Fail");
}
```

### Shorthand Conditions

#### 4. Ternary Operator (`? :`)

```javascript
let age = 20;
let message = (age >= 18) ? "Adult" : "Minor";
console.log(message);
```

#### 5. One-line Logical Condition

```javascript
let isConnected = true;
isConnected && console.log("Welcome!");

let name = "" || "Guest";
console.log(name); // "Guest"
```

### Comparison Operators

#### 6. Comparison Operators

```javascript
==   // equal (compares value only)
===  // strictly equal (compares value + type) ✅ recommended
!=   // not equal
!==  // strictly not equal ✅ recommended
>    // greater than
<    // less than
>=   // greater than or equal
<=   // less than or equal
```

Example:
```javascript
console.log(5 == "5");   // true (compares value)
console.log(5 === "5");  // false (compares type too)
```

#### 7. Logical Operators

```javascript
&&  // AND  (all conditions must be true)
||  // OR   (at least one condition true)
!   // NOT  (inverts the value)
```

Example:
```javascript
let age = 20;
let hasLicense = true;

if (age >= 18 && hasLicense) {
  console.log("You can drive!");
}

if (age < 18 || !hasLicense) {
  console.log("You cannot drive!");
}
```

### Special Cases

#### 8. `switch`

```javascript
let day = "tuesday";

switch (day) {
  case "monday":
    console.log("Start of week");
    break;
  case "tuesday":
    console.log("Second day");
    break;
  case "wednesday":
    console.log("Midweek");
    break;
  default:
    console.log("Unknown day");
}
```

#### 9. Checking "Truthiness" (truthy / falsy)

Values considered automatically **false**:
```javascript
false, 0, "", null, undefined, NaN
```

Example:
```javascript
if ("Hello") {
  console.log("This displays"); // because "Hello" is truthy
}

if (0) {
  console.log("Never executed"); // 0 is falsy
}
```

### 🚀 Key Takeaways

1. Use **`===`** and **`!==`** instead of `==` and `!=` (safer).
2. Logical operators `&&`, `||`, `!` are essential.
3. The ternary operator is handy for concise writing.
4. `switch` is useful when testing many cases for a single variable.
5. Watch out for "falsy" values (`0, "", null, undefined, false, NaN`).

---

## 🧠 Objects and Memory Reference

### Memory Functioning

When we write:

```javascript
const user = { name: "Ismail" };
```

🧠 In memory:

```
┌───────────┐       ┌────────────────────┐
│  user     │ ────▶ │ { name: "Ismail" } │
└───────────┘       └────────────────────┘
```

* `user` is a **reference** (a link) to the actual object in memory.
* `const` prevents **changing this link**, but **the object's content can be modified**.

### Adding or Modifying Properties (Allowed)

```javascript
const user = { name: "Ismail" };

user.age = 25;         // Adding a property
user.name = "Ali";     // Modifying a property

console.log(user);
// { name: "Ali", age: 25 }
```

> ✔️ Allowed because we **modify the pointed object**, not the `user` variable.

### Reassigning a New Object (Forbidden with `const`)

```javascript
const user = { name: "Ismail" };

user = { name: "Ali" }; // ❌ Error: Assignment to constant variable
```

> 🚫 Forbidden because it would **change the link of `user`** to another object.

### Special Case - Preventing Additions

Special methods to block modification:

* `Object.seal(obj)`: prevents adding or deleting properties (but existing ones can still be modified).
* `Object.freeze(obj)`: prevents adding, deleting, or modifying properties.

**Example:**

```javascript
const user = { name: "Ismail" };
Object.freeze(user);

user.age = 25;   // ❌ ignored in non-strict mode, error in strict mode
console.log(user); // { name: "Ismail" }
```

### Clear Object Summary

| Action                          | `const` | `let` |
| ------------------------------- | ------- | ----- |
| Modify an existing property     | ✅ Yes   | ✅ Yes |
| Add a new property              | ✅ Yes   | ✅ Yes |
| Reassign a new object           | ❌ No    | ✅ Yes |

🟢 `const`: Fixed reference → modifiable content
🟡 `let`: Modifiable reference → modifiable content

---

## 📊 Arrays

### Key Points to Know

| Concept            | Explanation                                                           |
| ------------------ | --------------------------------------------------------------------- |
| Declaration        | Create an array with `[]`                                             |
| Element Access     | By their **index**: `array[0]`                                        |
| Modification       | Can change an existing element                                        |
| Add/Remove         | With methods like `push`, `pop`, `shift`, `unshift`, `splice`         |
| Iteration          | With `for`, `for...of`, `forEach`, `map`, `filter`, `reduce`, etc.    |
| Type               | Arrays are special **objects** in JavaScript (passed by **reference**) |

### Basic Examples

```javascript
const fruits = ["apple", "banana", "orange"];

// Access
console.log(fruits[0]); // "apple"

// Modification
fruits[1] = "strawberry";
console.log(fruits); // ["apple", "strawberry", "orange"]

// Addition
fruits.push("kiwi"); // ["apple","strawberry","orange","kiwi"]

// Remove last
fruits.pop(); // ["apple","strawberry","orange"]
```

### Copy by **Reference**

```javascript
const original = ["a", "b"];
const copy = original; // ⚠️ Copy by reference

copy[0] = "z";

console.log(original); // ["z", "b"]  ← also modified!
console.log(copy);     // ["z", "b"]
```

🧠 Both variables point to **the same memory space**.

### Making a **Real (Independent) Copy**

```javascript
const original = ["a", "b"];

// 1. With spread (...)
const copy1 = [...original];

// 2. With slice()
const copy2 = original.slice();

// 3. With Array.from()
const copy3 = Array.from(original);

copy1[0] = "z";

console.log(original); // ["a", "b"]  ← not modified
console.log(copy1);    // ["z", "b"]
```

📌 These copies are called **"shallow copies"**
→ they suffice if your array contains only **primitive values (string, number, boolean)**.
→ if your array contains **nested objects**, you'll need to make a **deep copy** (e.g., `structuredClone` or `JSON.parse(JSON.stringify(arr))`).

### Transforming a "Reference Copy" into a "Real Copy"

```javascript
const a = ["x","y"];
const b = a; // same reference

// Transformation to real copy
const b = [...a];  // ⬅ creates a new independent array
```

### Clear Array Summary

| Copy Type          | How to Do It                  | Behavior                                          |
| ------------------ | ----------------------------- | ------------------------------------------------- |
| Reference copy     | `const b = a;`                | Both variables point to the **same array**        |
| Real copy          | `const b = [...a];` / `a.slice()` | Each variable has its **own array**               |

### Tip: Strings to Arrays

```javascript
const text = "Hello";
const letters = text.split("");
// ["H","e","l","l","o"]
```

---

## 🔧 Array Manipulation Methods

### Basic Methods (Add/Remove/Search)

| Method      | Effect                                  | Modifies Original? | Example               |
| ----------- | --------------------------------------- | ------------------ | --------------------- |
| `push()`    | Adds to the **end**                     | ✅ Yes              | `arr.push("x")`       |
| `pop()`     | Removes the last                        | ✅ Yes              | `arr.pop()`           |
| `unshift()` | Adds to the **beginning**               | ✅ Yes              | `arr.unshift("x")`    |
| `shift()`   | Removes the first                       | ✅ Yes              | `arr.shift()`         |
| `splice()`  | Removes/adds at a **specific index**    | ✅ Yes              | `arr.splice(1,1,"x")` |
| `slice()`   | Copies part of the array                | ❌ No               | `arr.slice(0,2)`      |
| `indexOf()` | Finds the index of an element           | ❌ No               | `arr.indexOf("x")`    |
| `includes()`| Checks if an element exists             | ❌ No               | `arr.includes("x")`   |

#### Example

```javascript
const fruits = ["apple", "banana", "orange"];

fruits.push("kiwi");         // ["apple","banana","orange","kiwi"]
fruits.pop();                 // ["apple","banana","orange"]
fruits.unshift("strawberry"); // ["strawberry","apple","banana","orange"]
fruits.shift();               // ["apple","banana","orange"]
fruits.splice(1,1,"mango");   // ["apple","mango","orange"]
const part = fruits.slice(0,2); // ["apple","mango"]
```

### Iteration and Transformation Methods

| Method       | Role                                                              | Returns What?          |
| ------------ | ----------------------------------------------------------------- | ---------------------- |
| `forEach()`  | Iterate through each element (returns nothing)                    | `undefined`            |
| `map()`      | Transform each element                                            | New array              |
| `filter()`   | Keep only certain elements                                        | New array              |
| `reduce()`   | Accumulate a value from the elements                              | Single value           |
| `find()`     | Find the **first** element that meets a condition                 | Element or `undefined` |
| `findIndex()`| Find the **index** of the first element that meets a condition    | Index or `-1`          |
| `some()`     | Check if **at least one** element meets a condition               | `true` / `false`       |
| `every()`    | Check if **all** elements meet a condition                        | `true` / `false`       |

#### Example

```javascript
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(n => console.log(n * 2)); 
// 2 4 6 8 10

const doubled = numbers.map(n => n * 2);
// [2, 4, 6, 8, 10]

const even = numbers.filter(n => n % 2 === 0);
// [2, 4]

const sum = numbers.reduce((acc, n) => acc + n, 0);
// 15

const firstEven = numbers.find(n => n % 2 === 0);
// 2

const indexEven = numbers.findIndex(n => n % 2 === 0);
// 1

const hasEven = numbers.some(n => n % 2 === 0);
// true

const allPositive = numbers.every(n => n > 0);
// true
```

### Other Useful Methods

| Method     | Description                                        | Example                             |
| ---------- | -------------------------------------------------- | ----------------------------------- |
| `concat()` | Merge multiple arrays                              | `[1,2].concat([3,4])` → `[1,2,3,4]` |
| `join()`   | Convert to string with separator                   | `["a","b"].join("-")` → `"a-b"`     |
| `reverse()`| Reverse the order of elements                      | `[1,2,3].reverse()` → `[3,2,1]`     |
| `sort()`   | Sort elements                                      | `[3,1,2].sort()` → `[1,2,3]`        |
| `flat()`   | Flatten a nested array                             | `[1,[2,3]].flat()` → `[1,2,3]`      |
| `at()`     | Access an element by index (including negative)    | `[10,20,30].at(-1)` → `30`          |

### Visual Array Methods Summary

| Category              | Key Methods                               |
| --------------------- | ----------------------------------------- |
| Modify the array      | `push`, `pop`, `shift`, `unshift`, `splice` |
| Extract/Copy          | `slice`, `concat`, `flat`                 |
| Search                | `indexOf`, `includes`, `find`, `findIndex`|
| Iterate/Transform     | `forEach`, `map`, `filter`, `reduce`      |
| Verify                | `some`, `every`                           |
| Miscellaneous         | `join`, `sort`, `reverse`, `at`           |

---

## 🔧 Complete Guide to Loops in JavaScript

### 1️⃣ Classic `for` loop

#### Syntax

```javascript
for (initialization; condition; increment) {
    // code to repeat
}
```

#### Example

```javascript
for (let i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
}
```

#### Key Points

* `i` is initialized at the start.
* The condition is checked **before each iteration**.
* The increment (or decrement) modifies the control variable.
* **Pitfall**: forgetting `i++` creates an infinite loop.

---

### 2️⃣ `while` loop

#### Syntax

```javascript
while (condition) {
    // code to repeat
}
```

#### Example

```javascript
let i = 0;
while (i < 5) {
    console.log(i); // 0, 1, 2, 3, 4
    i++;
}
```

#### Key Points

* Executes the block **as long as the condition is true**.
* **Pitfall**: forgetting to update the control variable = infinite loop.

---

### 3️⃣ `do...while` loop

#### Syntax

```javascript
do {
    // code to repeat
} while (condition);
```

#### Example

```javascript
let i = 0;
do {
    console.log(i); // 0, 1, 2, 3, 4
    i++;
} while (i < 5);
```

#### Key Feature

* The block is executed **at least once**, even if the condition is false.

---

### 4️⃣ `for...of` loop

#### Syntax

```javascript
for (const element of iterable) {
    // code using element
}
```

#### Example

```javascript
const fruits = ["apple", "banana", "orange"];
for (const fruit of fruits) {
    console.log(fruit);
}
```

#### Key Points

* Works for **arrays, strings, Map, Set**.
* No direct access to the index (use `entries()` if needed).
* **Pitfall**: does not work on non-iterable objects.

---

### 5️⃣ `for...in` loop

#### Syntax

```javascript
for (const key in object) {
    // code using key
}
```

#### Example

```javascript
const person = { name: "Alice", age: 30 };
for (const key in person) {
    console.log(key, person[key]);
}
```

#### Key Points

* Iterates over the **keys of an object**.
* For arrays, be careful: includes all properties, including inherited ones.
* **Pitfall**: don’t use for regular arrays → prefer `for...of` or `forEach`.

---

### 6️⃣ Functional loops (array methods)

| Method    | Use                                   | Example                                | Returns             |
| --------- | ------------------------------------- | -------------------------------------- | ------------------- |
| `forEach` | Iterate over each element             | `[1,2,3].forEach(n => console.log(n))` | undefined           |
| `map`     | Transform each element                | `[1,2,3].map(n => n*2)`                | New array `[2,4,6]` |
| `filter`  | Filter certain elements               | `[1,2,3,4].filter(n=>n%2===0)`         | New array `[2,4]`   |
| `reduce`  | Reduce array to a single value        | `[1,2,3].reduce((acc,n)=>acc+n,0)`     | 6                   |
| `some`    | Checks if at least one element passes | `[1,2,3].some(n=>n>2)`                 | true                |
| `every`   | Checks if all elements pass           | `[1,2,3].every(n>0)`                   | true                |

#### Key Points

* `forEach` **cannot be interrupted** (`break` not allowed).
* `map`, `filter`, `reduce` always return **new values**.
* Very useful for **functional and readable code**.

---

### 7️⃣ Loop control: `break` and `continue`

#### `break`

* Exits the loop entirely.

```javascript
for (let i = 0; i < 5; i++) {
    if (i === 3) break;
    console.log(i); // 0, 1, 2
}
```

#### `continue`

* Skips to the next iteration.

```javascript
for (let i = 0; i < 5; i++) {
    if (i === 2) continue;
    console.log(i); // 0,1,3,4
}
```

---

### 8️⃣ Infinite loop (to avoid)

```javascript
while(true) {
    console.log("Warning!");
    break; // always provide an exit, otherwise infinite loop
}
```

---

### 📌 Visual Summary

| Loop             | Main Use                       | Key Feature / Pitfall                               |
| ---------------- | ------------------------------ | --------------------------------------------------- |
| `for`            | Counting with an index         | Watch increment, `var` is function-scoped           |
| `while`          | While condition is true        | Risk of infinite loop if control variable forgotten |
| `do...while`     | Execute at least once          | Runs even if initial condition is false             |
| `for...of`       | Iterate array or iterable      | No direct index access                              |
| `for...in`       | Iterate object keys            | For arrays, includes inherited keys                 |
| `forEach`        | Functional array iteration     | Cannot `break` or `return`                          |
| `map` / `filter` | Transform or filter array      | Always returns a new array                          |
| `reduce`         | Reduce array to a single value | Very powerful but syntax is slightly complex        |

---

Got it 👍 Here’s the English version of the full explanation I gave you about **functions in JavaScript**:

---

## 🚀 Functions in JavaScript

### 1. What is a function?

A function is a **reusable block of code** that performs a specific task.
It can take **parameters** (inputs) and can return a **result** (output).

**Basic syntax:**

```js
function functionName(param1, param2) {
  // instructions
  return result;
}
```

**Simple example:**

```js
function add(a, b) {
  return a + b;
}

console.log(add(3, 4)); // 7
```

---

### 2. Function Declaration vs Function Expression

#### a) **Function Declaration** (classic)

Defined using the `function` keyword.

```js
function sayHello() {
  console.log("Hello!");
}
sayHello(); // Hello!
```

⚡ Special feature: **Hoisting** → you can call it before its definition:

```js
sayHello(); // works
function sayHello() { console.log("Hello!"); }
```

---

#### b) **Function Expression**

The function is stored inside a variable.

```js
const sayGoodNight = function() {
  console.log("Good night!");
};
sayGoodNight(); // Good night!
```

⚡ Difference: No **hoisting**. You must declare it before using it.

---

### 3. Arrow Functions

Introduced with **ES6 (2015)**, they are shorter and cleaner.

**Example:**

```js
const add = (a, b) => a + b;
console.log(add(5, 3)); // 8
```

⚡ Key points:

* Shorter syntax.
* Do not create their own `this` (important in OOP).
* Great for callbacks and array methods.

---

### 4. Parameters and Default Values

#### a) Normal parameters

```js
function greet(name) {
  console.log("Hello " + name);
}
greet("Ismail"); // Hello Ismail
```

#### b) Default values

```js
function greet(name = "stranger") {
  console.log("Hello " + name);
}
greet(); // Hello stranger
```

---

### 5. Returning a Value with `return`

If you want to get back a result → use `return`.

```js
function square(x) {
  return x * x;
}
console.log(square(5)); // 25
```

⚡ Without `return`, the function outputs `undefined`.

---

### 6. Anonymous Functions

A function without a name → often used as a **callback**.

```js
setTimeout(function() {
  console.log("3 seconds passed!");
}, 3000);
```

---

### 7. Arrow Functions + Callbacks

Callbacks are often easier to read with arrow functions:

```js
setTimeout(() => console.log("Another 2 seconds..."), 2000);
```

---

### 8. Nested Functions

A function can be defined **inside another one**.

```js
function outer() {
  function inner() {
    console.log("I am inside!");
  }
  inner();
}
outer(); // I am inside!
```

---

### 9. Functions as Values

In JS, a function is a **special object** → you can store it, pass it as an argument, or return it.

```js
function multiply(x) {
  return x * 2;
}

function apply(fn, value) {
  return fn(value);
}

console.log(apply(multiply, 5)); // 10
```

---

### 10. Immediately Invoked Function Expression (IIFE)

A function that runs immediately after its definition.

```js
(function() {
  console.log("I run immediately!");
})();
```

⚡ Useful to avoid polluting the global scope.

---

### 11. Common Pitfalls and Best Practices

* ❌ **Don’t forget `return`** if you want a result.
* ❌ **Watch out for `this`** → behaves differently in normal vs arrow functions.
* ✅ Use clear names (`calculateSum` instead of `cs`).
* ✅ Split your code into small reusable functions.

---

### 12. Full Example

```js
// Declaration
function add(a, b) {
  return a + b;
}

// Expression
const multiply = function(a, b) {
  return a * b;
};

// Arrow
const subtract = (a, b) => a - b;

// Usage
console.log(add(2, 3));      // 5
console.log(multiply(2, 3)); // 6
console.log(subtract(5, 2)); // 3
```
---

## ⚡ Advanced JavaScript Functions

### 1. Higher-Order Functions (HOF)

A **higher-order function** is a function that:

* Takes another function as an argument, OR
* Returns a function.

**Example:**

```js
function repeat(action, times) {
  for (let i = 0; i < times; i++) {
    action(i);
  }
}

repeat(console.log, 3);
// 0
// 1
// 2
```

---

### 2. Closures

A **closure** is when a function "remembers" the variables from the scope in which it was created, even after that scope is gone.

**Example:**

```js
function makeCounter() {
  let count = 0; // private variable
  return function() {
    count++;
    return count;
  };
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
```

⚡ Key point: Closures allow you to create **private variables**.

---

### 3. Recursion

A function that **calls itself** to solve a problem.

**Example: Factorial**

```js
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5)); // 120
```

⚡ Use recursion for problems like tree structures, nested data, or algorithms.

---

### 4. Callbacks

A **callback** is a function passed as an argument to another function.
They are widely used in JavaScript, especially in asynchronous code.

**Example:**

```js
function fetchData(callback) {
  setTimeout(() => {
    callback("Data received!");
  }, 2000);
}

fetchData((result) => {
  console.log(result); // Data received!
});
```

---

### 5. Promises

A **Promise** is a modern way to handle async operations without “callback hell”.

**Example:**

```js
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data received!"), 2000);
  });
}

fetchData()
  .then(result => console.log(result))
  .catch(error => console.error(error));
```

---

### 6. Async / Await

A cleaner syntax for handling Promises.

**Example:**

```js
async function getData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

getData(); // Data received!
```

⚡ `await` makes async code look like synchronous code.

---

### 7. Function Currying

Currying transforms a function with multiple arguments into a sequence of functions that take one argument each.

**Example:**

```js
function add(a) {
  return function(b) {
    return a + b;
  };
}

console.log(add(5)(3)); // 8
```

⚡ Useful for partial application and functional programming.

---

### 8. Pure Functions

A **pure function**:

* Always gives the same output for the same input.
* Has no side effects (doesn’t change global variables, DOM, etc.).

**Example:**

```js
function pureAdd(a, b) {
  return a + b;
}
```

⚡ Easier to test, debug, and reason about.

---

### 9. Immediately Invoked Function Expression (IIFE)

(We saw it earlier, but here’s why it’s advanced.)
It creates a private scope immediately.

**Example:**

```js
const result = (function() {
  const secret = 42;
  return secret * 2;
})();
console.log(result); // 84
```

---

### 10. Function Binding (`this`)

Normal functions and arrow functions behave differently with `this`.

**Example with normal function:**

```js
const obj = {
  value: 10,
  show: function() {
    console.log(this.value);
  }
};
obj.show(); // 10
```

**Arrow function ignores its own `this`:**

```js
const obj2 = {
  value: 20,
  show: () => {
    console.log(this.value);
  }
};
obj2.show(); // undefined (arrow takes `this` from outside)
```

---

### ✅ Best Practices with Functions

* Prefer **arrow functions** for callbacks and small tasks.
* Use **pure functions** whenever possible.
* Use **async/await** instead of nested callbacks.
* Keep functions **small and focused** (do one thing).
* Name functions clearly (`getUserData`, `calculateTotal`).

---

🔥 With this, you now know:

* Basics (declaration, parameters, return, arrow functions)
* Advanced concepts (closures, recursion, promises, async/await, currying, pure functions)

---

## 📘 DOM – Complete Guide + Cheatsheet

---

### 1. Introduction

#### What is the DOM?

The **DOM** (Document Object Model) is a **tree-like representation** of the HTML/XML elements of a page.
When the browser loads a page, it builds this model, and JavaScript can:

* read / modify content and attributes,
* add / remove elements,
* react to events (click, keyboard…),
* change styles, etc.

---

### 2. Interfaces & Core Concepts

* **window** → the global object (contains `document`, timers, etc.)
* **document** → root of the HTML DOM
* **Node** → base interface (elements, text, comment, etc.)
* **Element** → interface for any HTML element
* **HTMLElement** → specialized version for HTML tags
* **DocumentFragment** → lightweight container, useful for batch insertions
* **Text**, **Comment** → special node types

---

### 3. Selecting Elements

#### Main Methods

| Method                                       | Description                            | Example                                   |
| -------------------------------------------- | -------------------------------------- | ----------------------------------------- |
| `document.getElementById(id)`                | One element by `id` or `null`.         | `document.getElementById('myId')`         |
| `document.getElementsByClassName(className)` | *HTMLCollection* (live).               | `document.getElementsByClassName('item')` |
| `document.getElementsByTagName(tagName)`     | *HTMLCollection* (live).               | `document.getElementsByTagName('div')`    |
| `document.querySelector(selector)`           | First element matching a CSS selector. | `document.querySelector('#id .class')`    |
| `document.querySelectorAll(selector)`        | *NodeList* (static).                   | `document.querySelectorAll('p')`          |

✅ `NodeList` supports `.forEach()` in modern browsers.

#### Example

```html
<div id="container">
  <p class="text">Hello</p>
  <p class="text">Hi</p>
</div>
```

```js
const container = document.getElementById('container');
const first = document.querySelector('.text');
const all = document.querySelectorAll('.text');
```

---

### 4. Creating, Inserting, Removing Elements

#### Classic Methods

* `document.createElement(tagName)`
* `document.createTextNode(text)`
* `element.appendChild(child)`
* `element.insertBefore(newNode, referenceNode)`
* `element.removeChild(child)`
* `element.replaceChild(newChild, oldChild)`
* `element.cloneNode(deep)`

#### Modern Methods

* `element.append(...nodesOrStrings)`
* `element.prepend(...nodesOrStrings)`
* `element.insertAdjacentHTML(position, html)`
* `element.insertAdjacentText(position, text)`

#### Example

```js
const ul = document.createElement('ul');
const li = document.createElement('li');
li.textContent = 'Item 1';
ul.appendChild(li);
document.body.appendChild(ul);

li.remove(); // modern removal
```

---

### 5. Modifying Content, Attributes & Styles

#### Content

* `innerHTML` → read/write raw HTML
* `textContent` → plain text, no HTML
* `innerText` → visible text (depends on rendering)

#### Attributes

* `getAttribute(name)` / `setAttribute(name, value)` / `removeAttribute(name)`
* `hasAttribute(name)`
* `dataset` → access `data-*` attributes

#### Classes

* `className` → string of all classes
* `classList.add/remove/toggle/contains/replace`

#### Styles

* `element.style.prop` (inline styles)
* `getComputedStyle(element)` → read resolved styles

#### Example

```js
const div = document.querySelector('#myDiv');
div.textContent = 'Hello';
div.setAttribute('data-info', '123');
div.classList.add('active');
div.style.color = 'blue';
```

---

### 6. DOM Tree Navigation

| Property                                        | Description                       | Example                         |
| ----------------------------------------------- | --------------------------------- | ------------------------------- |
| `parentNode` / `parentElement`                  | Parent of a node.                 | `elt.parentElement`             |
| `children`                                      | Child elements only.              | `for (let c of elt.children) …` |
| `childNodes`                                    | Includes text, comments…          | `elt.childNodes`                |
| `firstChild` / `lastChild`                      | First/last child (any type).      |                                 |
| `firstElementChild` / `lastElementChild`        | Elements only.                    |                                 |
| `nextSibling` / `previousSibling`               | Next/previous sibling (any type). |                                 |
| `nextElementSibling` / `previousElementSibling` | Element siblings only.            |                                 |

---

### 7. Handling Events

#### Attach & Remove

* `addEventListener(type, listener, options)`

  * options: `{ once, capture, passive }`
* `removeEventListener(type, listener, options)`

#### Useful Methods

* `event.preventDefault()`
* `event.stopPropagation()`
* `event.stopImmediatePropagation()`
* `element.dispatchEvent(event)`

#### Common Events

`click`, `input`, `change`, `submit`, `keydown`, `keyup`, `DOMContentLoaded`…

#### Example

```js
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('#myButton');
  btn.addEventListener('click', () => alert('Clicked!'));
});
```

---

### 8. Other Document/Element Utilities

* `document.body`, `document.head`
* `document.documentElement` (the `<html>` element)
* `document.readyState` → `"loading"`, `"interactive"`, `"complete"`
* `createDocumentFragment()` → performance optimization
* `element.matches(selector)`
* `element.closest(selector)`
* `Node.isConnected`
* `Node.nodeType`, `Node.nodeName`, `Node.nodeValue`

---

### 9. Pitfalls & Best Practices

| Problem                          | Why it happens                                        | Solution                                                            |
| -------------------------------- | ----------------------------------------------------- | ------------------------------------------------------------------- |
| Manipulating before DOM is ready | DOM not loaded → `null`.                              | Use `DOMContentLoaded`, `defer`, or place `<script>` at the bottom. |
| Overusing `innerHTML`            | Removes event listeners, XSS risks.                   | Prefer `textContent` or `createElement`.                            |
| Not cleaning event listeners     | Memory leaks.                                         | Use `removeEventListener` or event delegation.                      |
| Too many DOM queries             | Repeated lookups are costly.                          | Cache elements in variables.                                        |
| Expensive reflows/repaints       | Many style/layout changes.                            | Group changes, use classes, or fragments.                           |
| Live vs static collections       | `getElementsBy*` = live, `querySelectorAll` = static. | Be aware of the type you’re using.                                  |
| Bad selectors                    | Wrong selector returns `null`.                        | Check existence before using.                                       |
| DOM Clobbering                   | `id`/`name` conflicts with JS variables.              | Use safe, unique names.                                             |

---

### 10. Modern Variants / ES6+ Tips

* Convert `NodeList` to array:

  ```js
  const nodes = [...document.querySelectorAll('.cls')];
  nodes.forEach(n => …);
  ```
* `append()` and `prepend()` accept multiple nodes/strings.
* Use `dataset` for `data-*` attributes:

  ```js
  elem.dataset.userId = '123';
  ```
* `classList.replace(old, new)`.
* `{ once, passive }` in `addEventListener`.

---