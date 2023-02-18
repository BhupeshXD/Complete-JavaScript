// Function Currying is a tehnique of evaluating function with multiple arguments, into sequence of function with single argument.


//sum (5)(3)(8)

// function sum(num1){
//     //console.log(num1);
//     return function(num2){
//         // console.log(num1, num2);
//         return function(num3){ 
//         //  console.log(num1, num2, num3);  //will print number
//         console.log(num1+num2+num3);
//     }
// }
// }
// sum(5)(3)(8);


const sum = (num1) => (num2) => (num3) => console.log(num1+num2+num3);  

sum(5)(3)(8);