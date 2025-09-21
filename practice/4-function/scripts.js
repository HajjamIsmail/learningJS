// Simple example
function add1(a, b) {
    return a + b;
}
console.log(add1(3, 4));

// classic declaration
function sayHello() {
    console.log("Hello");
}
sayHello();

// Hoisting => can call if before its definition
sayeHello2();
function sayeHello2() {
    console.log("hello2");
}

// function expression => no hoisting
const sayGoodNight = function() {
    console.log("Good night");
}
sayGoodNight();

// Arrow function => introduced in ES6
const add2 = (a, b) => a + b;
console.log(add2(5, 3));

// Default values param
function greet(name = "xxx") {
    console.log("yyy " + name);
}
greet();

// Anonymous Function
setTimeout(function() {
    console.log("3 seconds passed !");
}, 3000);


// Arrow Functions + Callbacks
setTimeout(() => console.log("Another 2 seconds..."), 2000);

// Nested Function
function outer() {
    function inner() {
        console.log("I am inside !");
    }
    inner();
}

outer();

// function as values
function multiply(x) {
    return x * 2;
}

function apply(fn, value) {
    return fn(value);
}

console.log(apply(multiply, 5));

// Immediately Invoked Function Expression (IIFE) => a function that runs immediately after its definition
// Useful to avoid polluting the global scope
(function() {
    console.log("I run immediately !");
})();

// Higher-Order Function (HOF)
function repeat(action, times) {
    for(let i = 0; i < times; i++) {
        action(i);
    }
}

repeat(console.log, 3);

// Closures
function makeCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}
const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// Recursion
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5));

// Callbacks
function fetchData(callback) {
    setTimeout(() => {
        callback("DataReceived!");
    }, 2000);
}
fetchData((rslt) => {
    console.log(rslt);
});

// Promises
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Data Received!"), 2000);
    });
}
fetchData()
    .then(result => console.log(result))
    .catch(error => console.error(error));

// Async - Await
async function getData() {
    try {
        const data = await fetchData();
        console.log(data);
    }
    catch (error) {
        console.error(error);
    }
}
getData();

// Function Currying
function add(a) {
    return function(b) {
        return a + b;
    };
}
console.log(add(5)(3));

// IIFE => advanced
const result = (function() {
    const secret = 42;
    return secret * 2;
})();
console.log(result);

// function binding (this)
const obj = {
    value: 10,
    show: function() {
        console.log(this.value);
    }
};
obj.show();
// !!!! be attention of used function binding
const obj2 = {
    value: 20,
    show: () => {
        console.log(this.value);
    }
};
obj2.show(); // undefined (arrow takes "this" from outside)