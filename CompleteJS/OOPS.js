

// object 

// Object literal is simply a key : value pair data structure 

//  Storing variable and functions together in one container, we can refer this as an object

// How to create an Object  

// 1st way 

// let biodata = {
//     myName : "Bhupesh",
//     myAge :   21,
//     getData : function(){
//         console.log(`My name is ${biodata.myName} and my age is ${biodata.myAge}`);
//     }
// }
//  biodata.getData();

 // 2nd way 

//  No need to write functions as well after ES6

// let biodata = {
//     myName : "Bhupesh",
//     myAge :   21,
//     getData(){
//         console.log(`My name is ${biodata.myName} and my age is ${biodata.myAge}`);
//     }
// }
//  biodata.getData();

//  What if we want object as value inside an Object

// let biodata = {
//     myName : {
//         realname : "Boss",
//         channelname : "Boss Bitch"
//     },
//     myAge :   21,
//     getData(){
//         console.log(`My name is ${biodata.myName} and my age is ${biodata.myAge}`);
//     }
// }
// console.log(biodata.myName.channelname);


// What is this Object ?  

// THe definition of 'this' object is that it contain the current context. 


// the this object can have different values depending on where it is placed.

// example 1 

// console.log(this);

// it refers to curre t context and that is wondow global object 

// console.log(this.alert('Awesome'));

// example 2 

// var mynames = "bhupesh";
// function myName(){
//     console.log(this.mynames);
// }
// myName();

// example 3

// const obj ={
//     myAge : 21,
//     myName(){
//         console.log(this.myAge);
//     }
// }
// obj.myName();

// Example 4 

// this cannot be used in fat arrow function
// because it still excesss whole window  

// const obj ={
//         myAge : 21,
//         myName : ()=>{
//             console.log(this);
//         }
//     }
//     obj.myName();


// example 6

let bioData = {
    myName : {
        realname : "Bhupesh",
        channel : "BD Tutorials",
    },
    // things to remember is that the myName is the 
myAge : 21,
getData (){
    console.log(`my name is ${this.myName.channel}`);
}
}
bioData.getData();
