// Hoisting in JS

// we ahave creation phase and execution phase

// Hoisting in Javascript is a mechnism where variables and functions declarations are moved to the top of their scope before the code execute.

// for example 

// console.log(myName);
// var myName;
// myName = 'Bhupesh';

// program to display value
// a = 5;
// console.log(a);
// var a; // 5

// The program behaves as:
// program to display value
// var a;
// a = 5;
// console.log(a); // 5


// when the variable is used inside the function, the variable is hoisted only to the top of the function. For example,
// program to display value
// var a = 4;

// function greet() {
//     b = 'hello';
//     console.log(b); // hello
//     var b;
// }

// greet(); // hello
// console.log(b);

// op
// hello
// Uncaught ReferenceError: b is not defined

// How it will be in op during creation phase

// where variables and functions declarations are moved to the top of their scope before the code execute

// var myName;  // var myName = undefined;
// console.log(myName);
// myName = 'Bhupesh';

// let and const does not allow hoisting.

// instead of var .(the other difference is that variables declared with let are local to the surronding block, not the entire function)


// Function Hoisting

// A function can be called before declaring it. For example,

// program to print the text
greet();

function greet() {
    console.log('Hi, there.');
}

 