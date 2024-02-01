// singleton 
// object.create

// object literals

const mySym = Symbol("Key1")

const JsUser = {
    name : "yash",
    "full name": "Yash Dakhore",
    [mySym]:"Key1",
    age : 26,
    location: "Nagpur",
    email: 'Yash.package.dakhore@gmail.com',
    isLoggedIn:  false,
    lastLoginDays: ["Monday", "Saturday"]

}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "Dakhoreyashp@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "Dakhoreyashp@chatgpt.in"

// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());