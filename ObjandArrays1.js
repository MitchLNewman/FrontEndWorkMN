"Use Strict";


let myArray = ["hello",'everyone'];
 console.log(myArray.length);
 myArray.push("goodbye");
 console.log(myArray.length);
 myArray.shift();

 for(let eachElement of myArray) {
     console.log(eachElement);
 }