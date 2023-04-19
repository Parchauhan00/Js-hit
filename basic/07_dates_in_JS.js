// JavaScript Date objects represent a single moment in time in a platform-independent format.
// Date objects encapsulate an integral number that represents milliseconds since the midnight 
// at the beginning of January 1, 1970, UTC (the epoch)

let myDate = new Date()
// console.log(myDate.toDateString());
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleTimeString())
// console.log(myDate.toUTCString())
// console.log(myDate.getTimezoneOffset())

// console.log(typeof myDate)   // Date is a Object


// let myCewateDate = new Date(2023, 0, 23);
// console.log(myCewateDate.toDateString());

// let myCewateDate = new Date(2023, 0, 23 , 5,3);
// 

//   let myCewateDate = new Date("2023-01-14");
//  console.log(myCewateDate.toLocaleDateString());

 let myCewateDate = new Date("01-14-2023");   // indian mostly use this
 //console.log(myCewateDate.toLocaleDateString());



 let myTimeStamp = Date.now()

//  console.log(myTimeStamp)
//  console.log(myCewateDate.getTime())
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());


// `${newDate.getDay()} and the time`


// This is important 
newDate.toLocaleString('default',{
    weekday: "long"
    

})
 
