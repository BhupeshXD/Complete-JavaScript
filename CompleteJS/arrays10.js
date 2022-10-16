// // when we use var, we can stored only one value at a time..

// //traverse

// // var names =["bhupesh","abhishek","rahul","rajesh"];
// // console.log(names[1]);


// //printing all elements in arrays


// // for(var i=0; i<names.length; i++) {
// // console.log(names[i]);
// // }



// // printing last element

// // console.log(names[names.length-1]); // prints the last element

// // es6

// // for in displays indexes of array elements do

// // for(let elements in names) {
// //     console.log(elements);
// // }

// // for of loop 

// // for(let elements of names) {
// //     console.log(elements);
// // }

// // array.prototype.forEach()
// //calls a function for each element in the array.

// var friends = ['bhupesh','dhapola','ranbeer','siddharth','hrithik'];
// // friends.forEach(function(element, index, array){
// //     console.log(element + " index : "+ index + " " + array);  
// // });

// // friends.forEach((element, index, array) => {
// //     console.log(element + " index : "+ index + " " + array);  
// // });
// // ******** searching and filter in an array************

// //indexOf()
// // returns the first index of an element within in the array 
// var friends = ['bhupesh','dhapola','tutorial','notes']
// // console.log(friends.indexOf("dhapola",));
// console.log(friends.indexOf("dhapola",1));

// //lastIndexOf()
// // backward search

// console.log(friends.lastIndexOf("dhapola"));

// //includes()
// // shows boolean value true or false if element is present in the array 

// console.log(friends.includes("dhapola"));

// find()
// returns only first value that it get while searching and stops

// const prices = [200,300,500,700,600,150,350,400]
// display price whole price is less than 400
// price<400

// const findElem = prices.find((currValue) => {
//     return currValue<400;
// });
// console.log(findElem);

// console.log(prices.find((currValue) => currValue < 400));

// findIndex()
// console.log(prices.findIndex((currValue) => currValue > 1400));


// if find() and findIndex() both doesnt satisfy the value then they return undefined and -1

// *************************** filter()***************************

// returns a new array containing all Elements of the calling array for which the provided filtering function returns true
// const prices = [200,300,500,700,600,150,350,400]

// const newPricetag = prices.filter((element, index)=>{
//     // return element<400;
//     return element>1400  //return empty array

// })
// console.log(newPricetag );




// *****************Sorting in array**********


//sort()
// the sort() method sorts the elements of an array in place and returns the sorted array. the default sort order is ascending, built upon converting the elements into strings then comparing their sequences of UTF-16 code units values.
// alphabhet wise sorting happens in asending order..

// const months= ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// console.log(months.sort()); 

// const array1 = [1,4,40000,700,8,99];
// console.log(array1.sort());

//however if numbers are sorted as strings "25" is bigger than "100" because "2" is bigger than "1".

// because of this, the sort() method will produce an incorrect result when sorting numbers



// *************CRUD in Array***********
// create read update delete

// Addition in array

// push()

// push() method adds one or more elements to the end of an array and returns the new length of  the array


// const animals = ['cat', 'dog','rabbit','horze']
// // animals.push('tiger');
// // console.log(animals); 

// animals.push('chicken','cow','sheep'); // can also add more than 1
// console.log(animals); 




//unshift()

// add at beginning of array
// and returns the length of the array

// eg1 

// const animalzzz = ['cat', 'dog', 'rabbit','horze'];
// // const count = animalzzz.unshift('cow');
// const count = animalzzz.unshift('cow','crow','rat');
// console.log(count);
// console.log(animalzzz);

// eg2

// const myNumbers = [1,2,3,4,5,6,7,8,9,10];
// // console.log(myNumbers.unshift(60,40)); //ONLY length GOT RETURNS
// myNumbers.unshift(60,40);
// console.log(myNumbers); //now array will print in beggining..

// Deletetion in array

// pop()

// removes the last element from the array

// const plants = ['cauliflower','brinjal','carrot','tomato','potato'];

// console.log(plants);
// console.log(plants.pop());
// console.log(plants);

// shift()

// remove element from begnning of array

// const plants1 = ['cauliflower','brinjal','carrot','tomato','potato'];

// console.log(plants1);
// console.log(plants1.shift());
// console.log(plants1);

// Challenge time 


//splice()
// add delete update in one method
// mostly used in deletion 


// 1. add dec the end of the month Array

// const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];

// // const newmethod = months.splice(5,0,'Dec');

// const newmethod = months.splice(months.length,0,'Dec'); // months.length autmatically added checks the length and adds at the end
// console.log(months);


// sol 2 :

// UPADTE MAR TO MARCH USING SPICE()

// const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
// const indexmonth = months.indexOf('Mar');
// if(indexmonth !== -1) {
//     const upadtemonth = months.splice(indexmonth,1,'March'); 
//     console.log(months); 
// }else{
//     console.log("no such element present");
// }


// SOL 3

// delete mar from array 


// const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
// const indexmonth = months.indexOf('Mar');
// if(indexmonth !== -1) {
//     const upadtemonth = months.splice(indexmonth,1); 
//     console.log(months); 
//     console.log(upadtemonth);
// }else{
//     console.log("no such element present");
// }


// ...............most important............

// Map() Reduce() filer()


// Map()
// Returns a new array containing the results of the calling function on every element in the array.

// syntax : 
// // let newarray = array.map(callback(currentvalue[,index[,array]]{
// });
// returns Element for newArray, after executing something



// const array = [3,4,6,7,8,9,22,32,23,88];
// //num>9

// let newArray = array.map((currElm, index,arr) => {
//     return currElm>9;
// });
// console.log(array);
// console.log(newArray);

// let newArr = array.map((currelmt,index,arr) =>{
//     return `Index no = ${index} and the value is ${currelmt} belong to ${arr}`
// })
// console.log(newArr);

//it returns new array with out mutauting the original array

// difference between map and for each

// for each returns undefined




//challenge time

// find sqr root in array?

// let arr = [25,36,49,64,81];

// // 1. let arrSqr = arr.map((currElment)=> {
// //     return Math.sqrt(currElment);
// // })

// // 2. you can reduce code by writing in same line 
// let arrSqr = arr.map((currElment)=>Math.sqrt(currElment))
// console.log(arrSqr);


// Q2. multiply each Element by 2 and return only those Element which are greater than 10 and also sum the final array which is greater than 10?

// sol 1

// let arr = [2,3,4,6,8];
// let grtar =arr.map((currElment)=>{
//     return currElment*2
// }).filter((currElment)=>{
//     return currElment > 10 ;
// });
// console.log(grtar);

// sol 2

// let grtarr = arr.map((currElment)=> currElment*2).filter((currElment)=> currElment > 10).reduce((accumulator,currElm)=>{
//     return accumulator * currElm;
// })
// console.log(grtarr);


// **********************reduce method ()******************************

// flatten an array to convert 3d or 2d array to single dimensional array

// to reduce() method a reducer function (that you provide) on each element of the array, resulting in single output value.

// the reducer function takes four arguments:

// Accumulator: works as container
// Current Value
// Current Index
// Source Array

// let arr1 = [5,6,2];

// let sum = arr1.reduce((accumulator,currElm , index, arr)=>{
//     return accumulator + currElm;
// },7)  // 7 is initial value
// console.log(sum);

// how to flaten an array ?
//converting 2d and 3d array into one dimensional array.

const arr = [
    ['zone1' , 'zone2'],
    ['zone3' , 'zone4'],
    ['zone5', 'zone6'],
    ['zone7', 'zone8'],
];

let flatArr = arr.reduce((accu,currval)=>{
    return accu.concat(currval);
})
console.log(flatArr);