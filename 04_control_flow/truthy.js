const userEmail = " y@yash.ai"

if(userEmail){
    console.log("Got User Email");
}
else{
    console.log("Dont Have User Email");
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy Values 
// "0", 'false', ' ', [], {}, function(){}

// if (userEmail.length === 0 ){
//     console.log('Array is empty');
// }

const emptyObj ={}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object Is empty");
}

// Nullish coalescing Operator (??): null undefined

let val1;

// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = null ?? 10 ?? 20

console.log(val1);

// Terinay Operator

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log('less than 80') : console.log('more than 80');