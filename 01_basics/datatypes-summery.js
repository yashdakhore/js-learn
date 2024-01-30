// Primitive DataType

// 7 types : string, Number, Boolean, null, undefined, symbol, BigInt

const score = 100
const scorevalue = 100.3

const isLoggeIn = false
const outsideTemp = null 
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 2342334432432n



// Refernece (Non Primitive)

// Array, object, Functions

const heros = ["shaktiman", "nagraj", 'doga'];
let myobj = {
    name: "yash",
    age : 26,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof anotherId);


// *****************************************************************************


// StackMemory (Primitive), Heap Memory (Non-Primitive)

let myYoutubename = "Norman";

let anothername = myYoutubename
anothername = "YashDakhore"
console.log(myYoutubename);
console.log(anothername);

let userOne ={
    email: 'yash@gmail.com',
    upi: "user@ybl"
}
let userTwo = userOne

userTwo.email = "dakhore@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);