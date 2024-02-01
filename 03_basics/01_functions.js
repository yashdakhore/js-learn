// console.log("Y");
// console.log("A");
// console.log("S");
// console.log("H");

function sayMyName(){
    console.log("Y");
    console.log("A");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers (number1, number2){
//     console.log(number1+number2);

// }
function addTwoNumbers (number1, number2){
    
    // let result = number1+number2
    // return result
    return number1+number2
}
// addTwoNumbers(3, 4)

const result = addTwoNumbers(3, 5)

// console.log(  `Result:`, result);

function loginUserMessage (username = "yash"){
    if (username === undefined){
        console.log('please enter username');
        return
    }
    return `${username} Just Logged In`
}

// console.log(loginUserMessage("Yash"))
// console.log(loginUserMessage()) 

function calculateCartPrice (val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "Yash",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)
handleObject({
    username: "Sanskar",
    price : 399
})


const myNewArray = [ 200, 400, 600, 100]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 800, 300, 400, 600, 100]));