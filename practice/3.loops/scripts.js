//basic for (...; ...; ...) {}
for (let i = 0; i < 5; i++) {
    console.log(i);
}

//basic while(...) {}
let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}

//basic do { ... } while(..)
let k = 0;
do {
    console.log(k);
    k++;
} while(k < 5);

// for ... of // used for arrays
const fruits = ["apple", "banana", "orange"];
for (const fruit of fruits) {
    console.log(fruit);
}

// for ... in => used in iterated object
const person = { name: "Ismail", age: 28};
for (const key in person) {
    console.log(key, person[key]);
}

// loop control break - continue
// exists in loop => break
for (let i = 0; i < 5; i++) {
    if (i === 3) break;
    console.log(i); //show 0, 1, 2
}

// skip in loop
for (let i = 0; i < 5; i++) {
    if (i === 2) continue;
    console.log(i); // 0, 1, 2, 4, 5
}

// functional Array methods for loops

// forEach() => iterates overs each elt of the array => does return a new array
const numbers1 = [1, 2, 3];
numbers1.forEach(n => console.log(n));

// map() => tranforms each elt and returns a new array
const numbers2 = [1, 2, 3];
const doubled = numbers2.map(n => n * 2);
console.log(doubled); // [2, 4, 6]

// filter => returns a new array containing only elts that satisfy a condition
const numbers3 = [1, 2, 3, 4];
const even = numbers3.filter(n => n % 2 === 0);
console.log(even); // [2, 3]

// reduce => reduces an array to single value
const numbers4 = [1, 2, 3, 4];
const sum = numbers4.reduce((acc, n) => acc + n, 0);
console.log(sum); // 10

// some() => returns true if at least one elt satisfies the condition
const numbers5 = [1, 2, 3];
const hasEven = numbers5.some(n => n % 2 === 0);
console.log(hasEven); // true

// every() => returns tru if all alements satisfy the condition
const numbers6 = [2, 4, 6];
const allEven = numbers6.every(n => n % 2 === 0);
console.log(allEven); // true

// find() => returns the first elt that statifies the condition
const numbers7 = [1, 2, 3, 4];
const firstEven = numbers1.find(n => n % 2 === 0);
console.log(firstEven); // 2

// findIndex() => returns the index of the first elt that satisfies the condition
const numbers = [1, 2, 3, 4];
const index = numbers.findIndex(n => n % 2 === 0);
console.log(index);

// includes() => checks if an array contains a specific value
const fruits2 = ["apple", "banana", "orange"];
console.log(fruits2.includes("banana")); // true
console.log(fruits.includes("kiwi")); // false

// flat() => Flattens nested arrays into a single array
const nested = [1, [2, 3], [4, 5]];
const flatArray = nested.flat();
console.log(flatArray); // [1, 2, 3, 4, 5]

// concat() => combines arrays into a new array
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = arr1.concat(arr2);
console.log(combined); // [1, 2, 3, 4]

// join() => converts array elemnts into a string
const fruits3 = ["apple", "banana", "orange"];
console.log(fruits3.join(", ")); // "apple, banana, orange"

// slice() => returns a shallow copy of a portion of the array
const fruits4 = ["apple", "banana", "orange"];
const someFruits = fruits4.slice(0, 2);
console.log(someFruits); // ["apple", "banana"]

// splice() => adds or remove elt in-place
const fruits5 = ["apple", "banana", "orange"];
fruits5.splice(1, 1, "kiwi"); // remove 1 element at index 1, add "kiwi"
console.log(fruits5); // ["apple", "kiwi", "orange"]

// sort() => sorts array elt in-place
const numbers8 = [3, 1, 2];
numbers8.sort();
console.log(numbers8); // [1, 2, 3]

// revers() => reverses array in-places
const numbers9 = [1, 2, 3];
numbers9.reverse();
console.log(numbers9); // [3, 2, 1]

// at() => accesses elt at a specific index(supports negatives indices)
const numbers10 = [10, 20, 30];
console.log(numbers10.at(0));  // 10
console.log(numbers10.at(-1)); // 30