
// 1.

// * 
// * *         
// * * *       
// * * * *     
// * * * * *   
// * * * * * * 

// let n = 6;
// let string = "";

// for(let row =1; row<=n; row++ ){
//     for(let col =1; col<=row;col++){
//         string+="* ";
//     }
//     string+="\n"; 
// }
// console.log(string);


//     *
//    **
//   ***
//  ****
// *****


// let n = 5; 
// let string="";

// for(let i=1;i<=n;i++){
//     for(let j=0;j<n-i;j++){
//         string +=" ";
// }
// for(let k =0;k<i;k++){
//     string +="* ";
// }
// string +="\n";
// }
// console.log(string);

let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = 0; j < n - i; j++) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < i; k++) {
    string += "*"; 
  }
  string += "\n";
}
console.log(string);


