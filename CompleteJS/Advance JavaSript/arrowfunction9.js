// Fat arrow function 
// fat function we have to intialize first than only calling will happen /
 
//  const sum = () =>{
//    // let a = 4; b = 2;
//    // let sum = a + b; 
//     return `the sum of the two numbers is ${(a=5)+(b=2)}`;
//  }
//  console.log(sum());

 
 const sum = () => `the sum of the two numbers is ${(a=5)+(b=2)}`;

  console.log(sum());