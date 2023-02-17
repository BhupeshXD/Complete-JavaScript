// Spread operator

const colors = ['red','blue','greeen','white'];

const styles = ['red','blue','greeen','white','yellow','black'];

// 2nd time add onemore color on top and tell to write it again on styles array too

// here we use that three dots than it will carry the data of whole previous data array.

const myfavs = [...colors,'yellow', 'black'];

console.log(myfavs);