// const tinderUser = new object()

const tinderUser = {}

tinderUser.id = "1234xyz"
tinderUser.name = "Yash Dakhore"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmal.com",
    fullname: {
        userfullname: {
            firstname: "Yash",
            lastname: "Dakhore" 
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}
const obj3 = {5: "a", 6:"b"}

// const obj3 = {obj1, obj2}
// const obj4 = Object.assign({}, obj1, obj2, obj3)

const obj4 = {...obj1, ...obj2, ...obj3} 
// console.log(obj4);

const users = [
    {
        id:1,
        email: 'y@gmail.com'
    },
    {
        id:1,
        email: 'y@gmail.com'
    },
    {
        id:1,
        email: 'y@gmail.com'
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


//********************************* other object lecture


const course = {
    coursename: "Js In Hindi",
    price: "999",
    courseInstructor: "Yash Dakhore"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

