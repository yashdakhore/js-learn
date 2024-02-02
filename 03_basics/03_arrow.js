const user = {
    username: "Yash",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , Welcome to Website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Sanskar"
// user.welcomeMessage()

// console.log(this);

// function chai (){
//     let username = "Yash"
//     console.log(this.username);
// }

// chai()

// const chai = function  (){
//          let username = "Yash"
//          console.log(this.username);
//     }


const chai =   () => {
         let username = "Yash"
         console.log(this.username);
    }

    // chai()


    // const addTwo = (num1, num2) => {
    //     return num1 + num2
    // }


    // const addTwo = (num1, num2) =>   num1 + num2

    // const addTwo = (num1, num2) =>   (num1 + num2)

    const addTwo = (num1, num2) =>    ({username:"Yash"})

    console.log(addTwo(69, 69));
    