const accountId = 14453
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur" //you can also declare variable this way but prefer not to use.

let accountState;

//accountId = 2

accountEmail = "rsjkhb.com"
accountPassword = "2134678"
accountCity = "Bengaluru"


console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
Prefer not to use var
because of issues in block scope and functional scope
*/