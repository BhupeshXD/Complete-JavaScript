// console.log(5+20);  // 25  + is a operator and 5 is operand

// Assignment Operators
// Arithmetic Operators
// Comparison Operators
// Logical Operators
// String Operators
// Conditional (ternary) Operators

// var x = 5; 
// var y = 4;

// console.log("is both the x and y are equal or not" + x ==y);  concatination is happening thaats why flase is showing

// // arithmetic operators
// console.log(3+3);
// console.log(30-20);
// console.log(36/3);
// console.log(32*3);

// console.log("Remainder operator : " + 27%4);  //modulus operator

// **************Increment and Decrement**********

// Operator : x++ or ++x or x-- or --x


// x++ : the increment operator increments and returns the value after incrementing

// var num = 35;
// var newnum = num++ + 5;
// console.log(num);
// console.log(newnum);

//prefix

// var num = 35;
// var newnum = ++num +5 ;
// console.log(num);
// console.log(newnum);

// increment happens first and then addition then the expression is evaluated using the new value of thr variable


// decrement

// x--

// var num = 35;
// var newnum = num-- +5 ;
// console.log(num);
// console.log(newnum);

// // --x
// var num = 35;
// var newnum = --num +5 ; // num-1 + 5
// console.log(num);
// console.log(newnum);


//Comparison Operator

// var a = 30;
// var b = 20;

// // equal (==)

// console.log(a == b);  //false

// // not equal
// console.log(a != b); //true

// GreaterThan (>)
// greater than equal to
//less tham
//les tham equal to


// ******logical operator **** ***   true or false

var a = 30;
var b =-10;

// && logical AND operator ( if both true than true )

// console.log(a>b && b<0);  //both should b true thats why op is false

// // logical OR operator ( if both false than false)

// console.log(a>b || b>0 || b<0); // op true 



   // console.log(!((a>0) || (b<0))); // op false
   // console.log(!true); // op false

// **************String Operator**************

// // Concatenation operator (+) 
// console.log("Hello world!");

// console.log("hello "+"world!");

// var myname = "Bhupesh";
// console.log(myname + " world!");
// console.log(myname + " dhapola");

// ***********challenge time************


//  1. (3**3) ?
// console.log(3**3);  //double * means power is we take 3**5 = 243
 
// 2. add number and string
// console.log(8 + "Bhupesh"); //concatinate if we minus so nan will be shown

// 3. swap two numbers
// var a = 10;
// var b = 20;

// var c=b; //c=20
// b=a; //b=10
// a=c;

// console.log(a);
// console.log(b);


// 4. swap number without using third variable

// var a =5;
// var b=10;

// a= a+b; //a=5+10=15
// b= a-b; //b=5-10=5
// a= a-b;  //15-5=10

// console.log(a);
// console.log(b);

 
// *******************interview question*************

// Difference between == and === ?

var num1 = 5;
var num2 = "10";

console.log(typeof num1);
console.log(typeof num2);

console.log(num1 === num2);








