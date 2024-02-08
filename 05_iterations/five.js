const coding = ['js','rb', 'py', 'java', 'cpp']

// coding.forEach(  function  (itemn){
//     console.log(itemn);
// })


// coding.forEach( (itemn) => {
//     console.log(itemn);
// })

// function printMe(item) {
//     console.log(item);
// }

// coding.forEach (printMe)

// coding.forEach (( item, index, arr) => {
//     console.log(item, index, arr);
// })


const myCoding = [
    {
        languageName: 'javascript',
        languageFileName: 'js'
    },
    {
        languageName: 'java',
        languageFileName: 'java'
    },
    {
        languageName: 'python',
        languageFileName: 'py'
    }
]

myCoding.forEach ((item) => {
    console.log(item.languageFileName);
})