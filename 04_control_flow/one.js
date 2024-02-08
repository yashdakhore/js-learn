// // if 
     const isUserloggedIn = true
     const temperature = 41

// if (temperature === 40){
//     console.log("less than 50");
// }
// else{
//     console.log("Temperature is greater than 50");
// }
// console.log("Executed");
// //  <, >, <=, >=, ==, !=, ===, !== 

// const score = 200

// if (score){
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);


// const balance = 1000

// // if(balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("Less Than");

// }
// else if (balance < 750){
//     console.log("less than 750");
// }
// else if (balance < 900){
//     console.log("Less than 900");
// }
// else {
//     console.log('Less Than 1200');
// }

const userLoggedIn =true
const debitcard = true
const loggedInFromGoogle =false
const loggedInFromEmail = true

if(userLoggedIn && debitcard ){
    console.log('Allow To Buy Courses');
}

if (loggedInFromEmail || loggedInFromGoogle){
    console.log('User logged In ');
}