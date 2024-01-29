const accountId = 1445553
let accountEmail ="yash.p.dakhore@gmail.com"
var accountPassword ="12345"
accountCity = "Pune"
let accountState;

// accountId = 2 // Not allowed
// {} is known as SCOPE


accountEmail = "dakhoreyashp@gmail.com"
accountPassword = 3333333
accountCity = "Bemgaluru"

console.log(accountId);

/* 
Prefer Not to Use var , Because of issue in block scope an funtional scope
 */

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);