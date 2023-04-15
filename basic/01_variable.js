const accountId  = 144553
let accountEmail = "prime0@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// Prefer not use var , because of issue of block scope and functional scope, use "let" only for variable


// accountId = 2  //not allowed

let accountState;

accountEmail = "pcim@gmail.com"
accountPassword = "234567"
accountCity = "Kolcata"

console.table([accountId,accountEmail,accountCity,accountPassword])

console.log(accountId);