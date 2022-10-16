// function sum(a, b){  // function parameter
//     // var a =10, b =5;
//     var total = a+b;
//     console.log(total);
// }
// // sum();   
// sum(10,30); // function calling (value inside is called as arguments)

// why functions?

// you can reuse the code: Define the code once and use it many times 
// you can use same code many times with different arguments


// ******** Function Expression ************ 


// function sum(a, b){  // function parameter
//     var total = a+b;
//     console.log(total);
// } 
// sum(10,30); 
// var funExp=sum(10,20);
// funExp;

// Return Keyword ****************************
// compute and returns the value
// the returned value is returnted back to the caller

// function sum(a, b){ 
//      return total = a+b;
//     console.log(total);
// }
// var funExp= sum(50,10);
// console.log(funExp);

//Anonymous function

// anonymous function Expression
// function without name

var Funexp = function(a,b){   // function with no name
    return total = a + b;
}
var sum = Funexp(13,43);
var sum2 = Funexp(14,40);
console.log(sum>sum2);