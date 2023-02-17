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

 
// Synchronous js

// agar do kaam kar rahe hai jab tak pahala kaam nahi hota dusra kaam nahi kar sakte

// 1 work me 10 Min lag raha hai 2 work ko 5s isme jab tak first wala nahi hoga tabtak u cant go on second

// const fun1 =()=>{
//     console.log(`Function 1 is caled`);
//     }
//     const fun2 =()=>{
//     console.log(`Function 2 is called`);
//     fun1();
//     console.log(`Function 1 is called again`);
//     }
//     fun2();


//Aysnchronous js 

// we dont have to wait sab ek sath kaam karta hai 

// 1 work 10 m
// 2 work 5s
//  dono work ho jayege 5s wala ho jayega and 10m wala chalta rahega till not complete

const fun1 =()=>{
    setTimeout(() => {
        console.log(`Function 1 is called`);
    }, 2000);
    }
    const fun2 =()=>{
    console.log(`Function 2 is called`);
    fun1();
    console.log(`Function 1 is called again`);
    }
    fun2();
    

