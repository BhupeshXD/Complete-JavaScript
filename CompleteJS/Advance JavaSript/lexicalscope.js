// What is Lexical Scope code in javascript?


// the inner function can get access to their parent functions variables but the vice-versa is not true.

let a = "Hello guys"  // global scope

const first=()=>{
    let b = " how are you";

    const second =()=>{
        let c = " I am fine";
        console.log(a+b+c);
    }
    second();
}
first();