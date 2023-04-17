const name = "Prime"

const repoCount = 50

//  console.log(name + repoCount + " value")   // outdate syntex 


// nor morden days use in backtex , here comes String interpolation
console.log(`Hello my name is  ${name}  and my repo count is ${repoCount} `);


const gameName = new String('Primech')     // Second type to declare String

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toLocaleUpperCase());
console.log(gameName.charAt(2));

console.log(gameName.indexOf('m'));

const newString = gameName.substring(0,4);

console.log(newString);

const anotherString  = gameName.slice(-5, 4)  // support negitive index
console.log(anotherString);  // 

const newStringone = "  prime   "
console.log(newStringone)
console.log(newStringone.trim());   // trim remove space 


const url1 = "https://prime.com/prime%20Chauhan"

console.log(url1.replace('%20', '-'))

const str2 = "Pra- shan-t"

console.log(str2.split('-'));

