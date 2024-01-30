const name = "Yash"
const repoCount = 10

// console.log(name + repoCount + "Value");


console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String ('yash-pd');

console.log(gameName[2]);
console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toLocaleUpperCase());
console.log(gameName.charAt(1));
console.log(gameName.indexOf("y"));

const newString = gameName.substring(0, 3);
console.log(newString);

const anotherString = gameName.slice(-9, 4)
console.log(anotherString);

const newStringOne = "     Yash   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://yash.com//yash%20dakhore"
console.log(url.replace("%20", '-'));

console.log(url.includes('yash'));

console.log(gameName.split('-'));