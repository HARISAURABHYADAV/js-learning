const accountID = 111312;
let accountName = "Hari";
var accountEmail = "hari@google.com"
accountCity = "Allahabad" //global variable 

let accountState; // value is undefined

//accountID = 3333333;  //not allowed 
// in const declaration once it will be declare can not be changed 

/*
  prefer not be use VAR as 
  because of the issue of block scope and functional scope
*/

accountName = "Saurabh"
accountEmail = "saurabh@google.com"
accountCity = "Prayagraj"

console.log(accountState)
console.log(accountID)

console.table([accountID, accountName, accountEmail, accountCity])