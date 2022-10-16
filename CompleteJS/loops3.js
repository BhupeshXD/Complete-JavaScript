// if else statements 
 
 
//  var a = 'rain';

//  if(a == 'rain'){
//     console.log('take raincoat');
//     } else {
//         console.log('dont take coat');

//  }

// challenge time

// var year = 2024;
// if(year % 4==0){
//    if(year % 100==0){
//       if(year % 400==0){
//          console.log("is a leap year");
//     }else{
//       console.log("is not a leap year");
//     } 
//  }else{
//     console.log("is a leap year");
//  }
// }else{
//    console.log("is not a leap year");
// }

// if else

// var area ="rectangle";
// var pi = 3.14, l=5, b=3, r= 2;
// if(area=="Circle"){
//    console.log("area of a circle : " + pi*r**2);
// }else if(area=="triangle"){ 
// console.log("area of a triangle : " + ((l*b)/2));
// }else if(area=="rectangle"){
//    console.log("area of a rectangle : " + (l*b));
// }

// what is truthy and falsy values in javascript?

// 0, " " , undefined,null,false,NaN are falsy values

// if(score=0){  // whenever we take 0 or null value it automatically goes to else statement log
//    console.log("we loss the game");
//    }else{
// console.log("we won the game");
//       }

// 2 . Conditional (ternary) operator
//  only operator that takes three operands

// var age = 18;
//    if(age>=18){
//    console.log("you are eligible to vote");
// }else{
//    console.log("you are not eligible to vote");
// }

// var age =17;
// console.log((age>=18) ? "your are eligible to vote" : "your are not eligible to vote");

// var area = 'circle'
// var pi = 3.14, l = 4, b =5, r=3
// switch (area){
// case 'circle':
//    console.log("area of circle : "+(pi*r**2));
//    break;
// case 'rectangle':
//    console.log("area of rectangle : "+ (l*b));
//    break;
// case 'triangle':
//    console.log("area of triangle :"+ ((l*b)/2));
//    break;
// default:
//    console.log("please enter valid data");
// }


// while loop : first check the value and than execute
// var num = 1;
// // block scope
// while(num<=100){
//    console.log(num);  //infinite loop
//    num++;
// }

// do while loop  will work once than check the condition of while

// var num = 40;  
// debugger;
// do{
//    console.log(num);  //infinite loop
//    num++;
// }while(num<=10);

//for loop
//  for(var num = 1; num<=10; num++){
//    debugger;
//    console.log(num);
//  }


// var table =8;
//  for(var num=1; num<=10; num++){
// console.log(table + "*" +num+ "="+ table*num);
// }

var table = 9;
for(var num=1; num<=10; num++){
   console.log(table + " * " +num+ " = "+ table*num);
}