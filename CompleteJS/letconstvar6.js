// var vs let vs const

// let and const is block scope 
// var is function scope


//var   // if var is used to declare variable that it can be used anywhere in code 

function biodata(){
    var myfirstname = "Bhupesh";
    console.log("Innerscope "+ myfirstname);

if(true){
    var mylastname = "Dhapola";
    console.log("Innerscope "+ mylastname);
    console.log("Innerscope "+ myfirstname);
}
console.log('Outerscope '+mylastname);
}
biodata();

// let
function biodata(){
    let myfirstname = "Bhupesh";
    console.log("Innerscope "+ myfirstname);

if(true){
    let mylastname = "Dhapola";
    console.log("Innerscope "+ mylastname);
    console.log("Innerscope "+ myfirstname);
}
console.log('Outerscope '+mylastname);  // error on this line because it is out of scope
}
biodata();


//const

function biodata(){
    const myfirstname = "Bhupesh";
    console.log("Innerscope "+ myfirstname);

if(true){
    const mylastname = "Dhapola";
    console.log("Innerscope "+ mylastname);
    console.log("Innerscope "+ myfirstname);
}
console.log('Outerscope '+mylastname);  // error on this line because it is out of scope
}
biodata();

