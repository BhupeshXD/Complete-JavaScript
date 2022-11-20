// const arr = [
//     ['zone_1','zone_2'],
//     ['zone_3','zone_4'],
//     ['zone_5','zone_6'],
//     ['zone_7',['zone_8','zone_9']]
// ];

// console.log(arr.flat(Infinity));

// use flat(Infinity) for flatling array in easy way





// convert array to object 

const person ={
    name : 'John',
    age : 23
}

const arrObj = Object.entries(person);
console.log(Object.fromEntries(arrObj));