// console.log('app.js is connected')


// varaibles
// data types
// arrays and objects
// primitive and reference


// variables
// father, apple, garden, yitoyo, fi ufoisu
// keyword => something that compiler can understand

// var(es5 => depreciated), let and const => es6 

// let email = 'ashish@gmail.com';
// email = 'yash@gmail.com';

// semicolan is js in optional
// console.log(email)



// data types => string, numbers(float, negative), boolean, arrays and objects
let userName = 'yash';
//string=>  anything inside '' or "" 
let age = 26.5;
let userIsOnline = "false";
// boolean => when we store just true/false that is a boolean value

// arrays and objects
let items = ['milk', 'bread', 'butter',]
// index value always starts from zero
// index values  => read, edit, delete
items[1] = 'brown bread';
// push => adds a value at the end of the array
// items.push('coffee')


// pop to remove the value from the end

// console.log(items);
// items.pop()
// splice => remove values where we want
// array.splice(index, deleteCount, addNewItems)
// items.splice(0, 2, 'milk powder')
// console.log(typeof items)






// let users = ['yash', 'yash@gmail.com', 26, 211003, 45000]
// let user = {
//     name: 'yash',
//     email: 'yash@gmail.com',
//     age: 26,
//     zip: 211003,
//     salary: 45000
// }
// user.name = 'yash goel';
// user.address = 'allahabad'
// delete user.zip;
// console.log(typeof user)



// let arr = [1,2,3,4]
// // index number is always number
// // index always starts from 0
// arr[4] = 5;
// arr['test'] = 'i am an object'
// console.log(arr)




// winning app

// array of objects
let users = [
    {name: 'yash', email:'yash@gmail.com'},
    {name: 'asish', email:'ashish@gmail.com'},
    {name: 'neha', email:'neha@gmail.com'},
    {name: 'kunal', email:'kunal@gmail.com'},
    {name: 'bhavna', email:'bhavna@gmail.com'},
    {name: 'raj', email:'raj@gmail.com'},
    {name: 'mayank', email:'mayank@gmail.com'},
    {name: 'vipul', email:'vipul@gmail.com'},
    {name: 'rajat', email:'rajat@gmail.com'},
    {name: 'saurabh', email:'saurabh@gmail.com'},
    {name: 'anand', email:'anand@gmail.com'},
]
let randomUser = Math.floor(Math.random()*10)

console.log(users[randomUser].name)