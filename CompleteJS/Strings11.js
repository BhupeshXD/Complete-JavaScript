// ************Strings in Javascript************

// A javascript string is zero or more characters written inside quotes.

// javascript strings are used for storing and manipulating text.
// You can use single or double quotes

// Strings can be created as primitive, from string literals, or as objects, using the String() constructor

// let myName= "Bhupesh Dhapola";
// let myChannel= "Dhapola";

// // ********* let ytname = new  String ('BD Thechnicals');    // exceptional is the interviewer asks you to make string  from string constructor  ********

// console.log(myName);
// console.log(ytname);


// ********How to find the length of a string********
// String.prototype.length
// reflects the length of a string

// let myName = 'Bhupesh Dhapola'  // in string space is also been counted
// console.log(myName.length);



// Escape Character

// let anySentence = "We are so called \"Vikings\" from the north...";
// console.log(anySentence);

// // if you dont want to mess, simply use the alertnate quotes

// let anySentencez = 'We are so called "Vikings" from the north...';
// console.log(anySentence);

// ************* Finding a string is a string ***************

// indexOf() method

// String.prototype.indexOf = (searchvalue [, fromIndex])

// The indexOf() method returns the index of the ( the position of ) the first occurrence of a specified text in a string

// const myBioData = "I am the Bhupesh Dhapola";
// // console.log(myBioData.indexOf("dhapola"));
// // if data is not present or couldnt find than it will return -1
// console.log(myBioData.indexOf("Bhupesh"));

// console.log(myBioData.indexOf("p",2));  // 2 is from where it will start the searching process



// lastindexOf() method

// String.prototype.lastIndexOf(searchvalue[, fromIndex])

// const myBioData = 'my name is bhupesh dhapola';
// console.log(myBioData.lastIndexOf("name",9));



//Searching For String in a String

// String.prototype.search = (regexp)

// the search() method searches a string for a specified value and returns the position of the match

// const myBioData = 'Hi my name is Bhupesh';
// let search = myBioData.search("Bhupesh");
// console.log(search);

// search method cannot take a second start position argument....








// **********Extracting String*******

// 3 methods for exracting a part of a string: 

// slice(start,end)
// substring(start,end)
// substr(start,length)

// The slice () method
// slice() extracting a part of a string and returns the extracted part in a new string

// method takes 2 parameters: the start and the ending position (end not included)

// var str = "apple, bananna, kiwi";
// // let res = str.slice(0,4);
// // console.log(res);


// // console.log(str.slice(6,-3)); // will start from 6 and goes till end but will not print last 3 characters


// // console.log(str.slice(7)); // print everything from 7th index




// // display only 280 characters of a string
// //  like the one used in instagram and wp limit?

 // let myTweets = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat pretium libero. Cras id dui. Aenean ut";

//  console.log(myTweets.slice(0,200));
//  console.log(myTweets.length);



// substring() method 
// substring is similar to slice 

// difference is substring dosnt accept negative index

// var str = "apple, bananna, kiwi";
// // let res = str.substring(0,4);
// let res = str.substring(2,-2); // wont print negative index value
// console.log(res);



//substr()method 

// substr() is similar to slice method 
// difference is that the second paramenter specifies the length of extracted part.

var str ="apple, bananna, kiwi";
// let res = str.substr(7,-2 );
// console.log(res);

// console.log(str.substr(-2));




//********Replacing String Content******** */



