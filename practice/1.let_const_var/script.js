console.log("=== DEMONSTRATION OF THE DIFFERENCES BETWEEN VAR, LET, AND CONST ===\n");
// This prints a header to the console explaining what the demo is about

// 1. Demonstration of var scope (function scope)
console.log("1. VAR SCOPE (FUNCTION SCOPE):");
// Explaining that var variables are function-scoped

function testVarScope() {
    if (true) {
        var varVariable = "I am accessible outside the block (var)";
        // var declared inside the block is accessible outside the block
        console.log("Inside the block:", varVariable);
    }
    console.log("Outside the block:", varVariable);
    // Works because var ignores block scope, only function-scoped
}
testVarScope();
console.log("");

// 2. Demonstration of let/const scope (block scope)
console.log("2. LET/CONST SCOPE (BLOCK SCOPE):");
// Explaining that let and const are block-scoped

function testLetConstScope() {
    if (true) {
        let letVariable = "I am let (block scope)";
        const constVariable = "I am const (block scope)";
        // Both are scoped to this block only
        console.log("Inside the block - let:", letVariable);
        console.log("Inside the block - const:", constVariable);
    }
    try {
        console.log(letVariable); // This will throw a ReferenceError
    } catch (e) {
        console.log("Error: letVariable is not defined outside the block");
    }
    try {
        console.log(constVariable); // This will throw a ReferenceError
    } catch (e) {
        console.log("Error: constVariable is not defined outside the block");
    }
}
testLetConstScope();
console.log("");

// 3. Redeclaration with var vs let/const
console.log("3. REDECLARATION:");

// var can be redeclared without error
var x = 10;
console.log("First declaration of x (var):", x);
var x = 20; // No error with var
console.log("Redeclaration of x (var):", x);

// let cannot be redeclared in the same scope
let y = 30;
console.log("First declaration of y (let):", y);
// let y = 40; // Uncommenting this line will throw an error

// const cannot be redeclared
const z = 50;
console.log("Declaration of z (const):", z);
// const z = 60; // Uncommenting this line will throw an error
console.log("");

// 4. Reassignment with const
console.log("4. REASSIGNMENT WITH CONST:");
const PI = 3.14159;
console.log("Value of PI (const):", PI);
// PI = 3.14; // Uncommenting this line will throw an error

// Modifying properties of a const object is allowed
const person = { name: "Alice", age: 30 };
console.log("Person before modification:", person);
person.age = 31;       // Valid, modifying a property, not the reference
person.city = "Paris"; // Adding a new property is also valid
console.log("Person after modification:", person);
console.log("");

// 5. Hoisting demonstration
console.log("5. HOISTING:");
console.log("Before declaration - a (var):", a); // undefined due to hoisting
var a = 5;
console.log("After declaration - a (var):", a);

// let and const are hoisted but not initialized (Temporal Dead Zone)
// console.log("Before declaration - b (let):", b); // Uncomment to see ReferenceError
let b = 10;
console.log("After declaration - b (let):", b);

// console.log("Before declaration - c (const):", c); // Uncomment to see ReferenceError
const c = 15;
console.log("After declaration - c (const):", c);
console.log("");

// 6. Loop with var vs let
console.log("6. LOOP WITH VAR VS LET:");
console.log("With var (classic problem):");

for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log("var - i =", i); // Always prints 3 because var is function-scoped
    }, 100);
}

setTimeout(function() {
    console.log("\nWith let (expected behavior):");
    for (let j = 0; j < 3; j++) {
        setTimeout(function() {
            console.log("let - j =", j); // Prints 0, 1, 2 because let is block-scoped
        }, 100);
    }
}, 500);

// 7. Practical example with const and objects/arrays
setTimeout(function() {
    console.log("\n7. CONST WITH OBJECTS AND ARRAYS:");
    const colors = ["red", "green", "blue"];
    console.log("Original array:", colors);
    
    // You can modify elements of a const array
    colors.push("yellow");
    console.log("After push:", colors);
    
    colors[0] = "purple";
    console.log("After modifying an element:", colors);
    
    // colors = ["new", "array"]; // Uncommenting this line would throw an error
}, 1000);

console.log("\nOpen the console to see all the results!");
