// console.log("Hello world!");


// Values and variables in javascript

// var myName = "Bhupesh Dhapola";
// var myAge="21 years";

// console.log(myAge);


// Challenge time


// VALIDITY

// var _myName = "Bhupesh Dhapola";
// // var _1my__Name = "Bhupesh Dhapola";
// var 1myName = "Bhupesh Dhapola";          //error
// var $myName = "Bhupesh Dhapola";

// var myname% = "Bhupesh Dhapola";   //error

// console.log(1my__Name);




// DATA TYPES IN JAVASCRIPT

// SIX DATA TYPES IN JAVASCRIPT

// undefined 
// Boolean
// Number
// String
// BigInt
// Symbol

// var myName = "Bhupesh Dhapola";
// console.log(myName);

// var myAge= 24;
// console.log(myAge);

// var iMBhu = true;
// console.log(iMBhu);

// // console.log(typeof(myName));
// // console.log(typeof(myAge));
// console.log(typeof(iMBhu));




// Data type Practice Challenge

// console.log(10+"20");  //cocatination happens in this..
// console.log(10-"20"); // minus happens but it just a bug...
// console.log("Java" + "Script");  //Concatination happens in this
// console.log("" + ""); // blank because string is blank
// console.log("" + 0);  // 0
// console.log("bhupesh"-"dhapola");  // NaN ----  not a number because  we cannot substract string


// true is 1;
// false is 0;

// console.log(true+true); 1+1= 2 will be printed
// console.log(true+false); // 1+0 =1 will be printed
// console.log(false+true); 0+1=1 will be printed
// console.log(false-true); 0-1= -1 will be printed

// ****** Interview question ********
// 1. difference between null vs undefinded ?

// var a = null;
// console.log(a);   //op  null because  we create one variable and assign the value null so that null will come
// console.log(typeof a); //javascript consist a bug but there is no abject because we have written a null

// var b;  
// console.log(b); //decalred the value but have no idea what to do further than this called as undifined
// console.log(typeof b); //undefined same becz we didn't defined...

// 2. What is Nan?

// Nan is a property of the global object..
// in other words it is a variable in global scope ..
// when two strings are added op comes its NaN.. . 

// var myphone= 57398209830;
// var myname="Bhupesh Dhapola";

// console.log(isNaN(myphone));  false because it is a number
// console.log(isNaN(myname)); true because it is a string not a number

// *********** NaN challenge time****************

// console.log(NaN === NaN);  //false if when we write triple time NaN false is printed..
// console.log(Number.NaN=== NaN); //false because we have put that the number is Not a number

// console.log(isNaN(NaN));  //because NaN is not a number and we are finding NaN so it is True

// console.log(isNaN(Number.NaN)); //true because number is NaN

// console.log(Number.isNaN(NaN)); //true becasue number is true and it is not a number..


