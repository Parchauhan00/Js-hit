// Primintive datatypes   -  call by value

// 7 types :  String , Number, Boolearn , null, undefined , Symbol , BigInt 

const score = 100
const scorevalue = 100.3


const isLoggedIn = false

const outsideTemp = null 
let useEmail;

let userEmail;

const id = Symbol('123')

const anotherId = Symbol('123')

const bigNumber = 3456546346467n;

console.log(id === anotherId);

// Reference datatype (Non primitive)

// Array, Objects , functions

const hero = ["shaktiman","naagraj" , "doga"];
let myObj = {    
    name: "hitesh",
    age : 22,

}

  const myfunction = function() {
    console.log("Hello word");
  }

  console.log(typeof outsideTemp);

  //