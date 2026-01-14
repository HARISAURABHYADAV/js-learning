let age = null ;
let score = "33a";



// there are two type of using typeof function 
console.log(typeof score);
console.log(typeof(age));  // like method

let valueInNumber = Number(score);
console.log(typeof(valueInNumber));
console.log(valueInNumber); //NaN(not a number) -> if string is like "33a" or "abc" 

let valueInNumber1 = Number(age);
console.log(typeof(valueInNumber1));
console.log(valueInNumber1); //null will be convert as 0

//Note
// "33" => 33
// "33a" => NaN
// null => 0
//true => 1 and false => 0
// "" => false
// "Hari" => true

let isLoggedIn = 1;
let isBolleanLoggedIn = Boolean(isLoggedIn)
console.log(typeof(isBolleanLoggedIn)); // boolean
console.log(isBolleanLoggedIn); //true 

let someNumber = 33
let someStringNumber = String(someNumber);
console.log(typeof(someStringNumber)); //string 
console.log(someNumber); // "33"
