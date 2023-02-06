// Higher order Function

// function which takes another function as an arguments is called as Higher order function 

// wo function jo dusre  function ko as an argument accept karta hai usse Higher Order function bolte hai 

const add = (a,b)=>{
    return a+b;
}

const subs = (a,b)=>{
    return Math.abs(a-b);
}

const mult = (a,b)=>
{
    return a*b;
}

// LINE 7 TO 18 will be called as callback function 

const calculator = (num1, num2, operator)=>{
    return operator (num1,num2);
}

// here calculator is an higher order function 
// because wo dusre function ko as a argument accept kar raha hai thats why HOF...

console.log(calculator(5,2,add));



// Call back Function

// A function which get passed as a argument function is called as call back function

// A callback function is a function that is passed as an argument to another function, to be called back at a later time 

// Jis bhi function ko hum kisi or function ke under as an argument pass karte hai then usko hum callback function bolte hai 






