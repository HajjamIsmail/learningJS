console.log("hello ismail");

// Condition basics

// Simple if
let age1 = 28;
if (age1 >= 18) {
    console.log("test1");
}

// if ... else
let age2 = 16;

if (age2 >= 18) {
    console.log("test1");
}
else {
    console.log("test 2");
}

// if ... else if ... else 
let grade = 15;
if (grade >= 16) {
    console.log("very good");
}
else if (grade >= 10) {
    console.log("pass");
}
else {
    console.log("fail");
}

// Shorthand conditions:
// Ternary operator ?
let var1 = 20;
let message = (var1 >= 18) ? "test1" : "test2";
console.log(message);

// AND operator &&
let isConnected = true;
isConnected && console.log("welcome !");

// OR operator ||
let name = "" || "guest"; // The value || is falsy because empty string so it returns a non-empty string 
console.log(name); // "guest"
console.log("Ali" || "Ismail"); //"Ali"
console.log(null || "default"); //"default" because null is falsy
console.log(0 || 42); //42 because 0 is falsy

// Comparison operators

// ==
console.log(5 == "5"); // true

// !=
console.log(5 != "5"); //false

// ===
console.log(5 === 5); //true
console.log(5 === "5"); //false

// !==
console.log(5 !== "5"); //true
console.log(5 !== 5); //false

// >
console.log(5 > 3); // true

// <
console.log(5 < 4); // false

// >=
console.log(5 >= 5); //true

// <=
console.log(3 <= 2); // false

// Other examples
console.log(0 == false);   // true  (because 0 is falsy)
console.log("" == false);  // true  (empty string is falsy)
console.log(null == false); // false => (exception)

console.log(1 == true);  // true  (1 is truthy)
console.log(2 == true);  // false (2 is not converted to 1)

console.log(null == undefined); // true (special case)
console.log(null === undefined); // false (different types)

console.log(0 === false);  // false (because number ≠ boolean)
console.log("5" === 5);    // false (because string ≠ number)
console.log(null === undefined); // false

console.log([] == false);   // true (because [] is converted to "")
console.log([] == "");      // true
console.log([0] == false);  // true (because [0] → "0" → 0)


// switch
// Basics

let day = "tuesday";

switch (day) {
    case "monday":
        console.log("1");
        break;
    case "tuesday":
        console.log("2");
        break;
    case "wednesday":
        console.log("3");
        break;
    case "thursday":
        console.log("4");
        break;
    case "friday":
        console.log("5");
        break;
    case "saturday":
        console.log("6");
        break;
    case "sunday":
        console.log("7");
        break;
    default:
        console.log("Unknown");
}

// Without break => fall-through 
let fruit = "apple";
switch (fruit) {
    case "apple":
        console.log("red fruit");
    case "banana":
        console.log("yellow fruit");
    default:
        console.log("Other fruit");
    // Result: 
    // red fruit
    // yellow fruit
    // Other fruit
    // Forgetting break when you don't want "fall-through".
}

// Group multiple cases:
let var2 = "saturday";
switch (var2) {
    case "saturday":
    case "sunday":
        console.log("weekend");
    default:
        console.log("weekday");
}

// Switch with numbers
let var3 = 10;
switch (var3) {
    case 20:
        console.log("very good");
        break;
    case 10:
        console.log("not bad");
        break;
    default:
        console.log("other grades");
}

// Switch with expression: (boolean value)
let number = 25;
switch (true) {
    case (number < 18):
        console.log("minor");
        break;
    case (number >= 18 && number < 60):
        console.log("adult");
        break;
    case (number >= 60):
        console.log("senior");
        break;
    default:
        console.log("Unknown");
}

// Strict comparison => switch uses strict comparison "==="
let x = "5";
switch (x) {
    case 5:
        console.log("5 number");
        break;
    case "5":
        console.log("5 string");
        break;
    default:
        console.log("unknown");
}

// Modern alternative => switch can be replaced by an object
let role = "admin";
const actions = {
    "admin": "FullAccess",
    "user": "LimitedAccess",
    "guest": "NoAccess"
};

console.log(actions[role] || "Unknown role");