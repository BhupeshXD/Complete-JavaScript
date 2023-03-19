//promises are used to handle asynshronous operations in js. 
// they are easy to manage when dealing with multiple asynshronus operations where callbacks can create callback hell leading to unmanagable code.



// A Promise is object that keeep about whether a certain event happened already or not.

// Determines what happens after the events has happened.


// Promises has 3 stages

// task

// promise me you will call me at 10am 

// stage 1 = pending

// event time  hogya 10am - call karo ya na karo success or fail 
// the task is fullfilled or rejected

// stage 2 : RESOLVE THE TASK IF THE TASK IS FULLFILLED

//stage 3: rejected


// pending
// resolve
// reject

//promise produce
// const obj1 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         let roll_no = [1,3,4,5,6];
//         resolve(roll_no);
//         },2000);

// });

// // note 
// // we use then when resolve is used

// //promise consume
// obj1.then((roll_no)=>{
// console.log(roll_no);
// });


// if it wont resolved
const obj2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let roll_no = [1,3,4,5,6];
        reject('Error while communicating');
        },2000);

});

// we use catch when reject is used.
// promise consume
obj2.then((roll_no)=>{
    console.log(roll_no);
    }).catch((error)=>{
        console.log(error);
    })
    

