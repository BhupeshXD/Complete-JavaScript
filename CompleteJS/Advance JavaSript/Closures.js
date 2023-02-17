// What is Closure?


// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

// eg 1

// const outerFun =(a) => {
//     let b = 10;
//     const innerFun = () =>{
//         let sum = a+b;
//         console.log(`the sum of two numbers is ${sum}`);
//     }
//     innerFun();
// }
// outerFun(5);



// eg2
const outerFun =(a) => {
    let b = 10;
    const innerFun = () =>{
        let sum = a+b;
        console.log(`the sum of two numbers is ${sum}`);
    }
    return innerFun;
}
let checkClosure = outerFun(5);
//console.log(checkClosure());   //case 1
// checkClosure();                 // case 2
 console.dir(checkClosure);         // CASE 3 IN CHROME CONSOLE
