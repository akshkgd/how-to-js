// var
// data types
// arrays and objects
// win prediction game

// var, let and const
// code => keyword

// var 

// let email = 'yash@gmail.com'
// email = 'yash@codekaro.in'
// console.log(email)


// data types => string, numbers, boolean, arrays and objects
let userName = "jdskjdks";
// string => '', ""
let age = -24.6;
let isUserActive = true;
// console.log(typeof isUserActive)

// array => amazon, flipkart, myntra, => wishlist

// let item1 = 'milk'
// let item2 = 'bread'
// let item3 = 'butter'


let items = ['milk', 'bread', 'butter']

// console.log(items);
// items.push('apple')
// items.pop();
// splice(index, deleteCount, add new values(optional))


items.splice(1, 0, 'apple', 'coffee')
// console.log(items)


// objects
// let user = {
//     name: 'yash',
//     address: 'allahabad', 
//     age: 24,
//     salary: 45000,
//     hobbies: ['cooking', 'reading books', 'watching movies']
// }
// user.name = 'yash goel';
// user.pin = 211003;
// delete user.salary;
// console.log(user.hobbies[0])


let users = [
    {name: 'yash', email: 'yash@gmail.com'},
    {name: 'yash', email: 'yash@gmail.com'},
    {name: 'nayan', email: 'nayan@gmail.com'},
    {name: 'himanshu', email: 'himanshu@gmail.com'},
    {name: 'pawan', email: 'pawan@gmail.com'},
    {name: 'neha', email: 'neha@gmail.com'},
    {name: 'kavya', email: 'kavya@gmail.com'},
    {name: 'thulasi', email: 'thulasi@gmail.com'},
    {name: 'sathya', email: 'sathya@gmail.com'},
    {name: 'dhawal', email: 'dhawal@gmail.com'},
    {name: 'tisha', email: 'tisha@gmail.com'},
]
let random =Math.floor((Math.random()*users.length)) 

console.log(users.length)
console.log(users[random].name)