# 📚 JavaScript Documentation

## 📋 Table of Contents

1. [Variables and Constants](#-variables-and-constants)
2. [Conditional Statements](#-conditional-statements)
3. [Objects and Memory Reference](#-objects-and-memory-reference)
4. [Arrays](#-arrays)
5. [Array Manipulation Methods](#-array-manipulation-methods)

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