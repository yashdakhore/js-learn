const promiseOne = new Promise(function(resolve, reject){
    // console.log('async task is complete');\

    setTimeout(function(){
        console.log('async task is complete');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log('Promise consumed');
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('async task two');
        resolve()
    }, 1000)
}).then(function(){
    console.log('async 2 resolved');
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username : "Yash", email: "Yash.p.dakhore@gmail.com"})
    }, 1000)
})


promiseThree.then(function(user){
    console.log(user);
})


const promiseFour = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({username:'Yash dakhore' , password:'12345' })
        } else {
            reject('something went wrong')
        }
    }, 1000)
})


 promiseFour.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(function(){
    console.log("The Promise Is Either Resolved or Rejected");
})


const promiseFive = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({username:'Yash dakhore' , password:'12345' })
        } else {
            reject('something went wrong')
        }
    }, 1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
    console.log(response);
    } catch (error) {
        console.log(error);
    }

}

consumePromiseFive()
 
// async function getAllusers(){
//    try {
//     const response =  await fetch('https://jsonplaceholder.typicode.com/users')
    
//    const data = await response.json()
//    console.log(data);
//    } catch (error) {

//     console.log("E: " , error);
//    }
// }

// getAllusers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))