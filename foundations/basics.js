console.log('hello');

// variables
let age;
console.log(age); // undefined
age = 25;
console.log(age);

const rate = 10;
//rate = 3;
console.log(rate , "is a constant");

let country = 'Russia';
let score = 10;
let isEligible = true;
let javascript = undefined;
let address = null;
console.log(typeof country); // string
console.log(typeof score); // number
console.log(typeof isEligible); // boolean
console.log(typeof javascript); // undefined
console.log(typeof address); // object - reference data type

// dynamically-typed
country = 100;
console.log(typeof country) // number

score = 12.5;
console.log(typeof score); //number (note: javascript doesn't have separate data type for floating numbers)

// object
let person = {
    name: 'john',
    age: 20
};
console.log(typeof person);

console.log(person); // { name: 'john', age: 20 }
person.name = 'sarah';
console.log(person); // { name: 'sarah', age: 20 }
person['age'] = 10; // access properties of an object in dynamic way
console.log(person);// { name: 'sarah', age: 10 }

// arrays - a data structure to store a list of items
let fruits = ['apple', 'banana', 'watermelon']
console.log( typeof fruits); // object
console.log(fruits[0]); // apple
fruits.push('grapes')
console.log(fruits); // [ 'apple', 'banana', 'watermelon', 'grapes' ]

// functions
// function declaration
function greet(name) { // name(parameter)
    console.log('good day! ' + name);
}
console.log(greet); // [Function: greet]
console.log(typeof greet);// function

// function call
greet('batman');// 'batman' (argument)

// function that returns a value
function square(number) {
    return number * number;
}

let squareResult = square(4);
console.log(squareResult);















