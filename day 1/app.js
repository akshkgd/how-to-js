// keywords
// var and data types
// arrays and objects
// primitive and reference


// keyword => 
// variable ?? 

// strings, numbers, boolean, array and object/
// string => char or combination of char inside "" ''


// let email = "f";
// let age = -24.6;
// let isActive = false

// array
let items = ['milk', 'bread', 'butter'];
// items[0] = 'apple';
// items[3] = 'coffee';
// items.push('grapes')
// items.push('apple')
// items.pop();

// splice(idex, deleteCount, addItem(optional))
items.splice(1, 2, 'apple', 'coffee')


// console.log(items)


// console.log(typeof isActive);



// objects
// let user = {
//     name: 'ashish',
//     email: 'ashish@gmail.com',
//     age: 25
// }
// user.name = 'ashish shukla'
// user.address = 'Pune'
// delete user.age
// console.log(typeof user)


// why arrays are objects
// primitive and reference 



// let arr = [1,2,3,4, 'test', true] 


// index always starts fro  0
// index number is always a number 
// arr['magic'] = 'test'
// console.log(arr)



// primitive and reference

// primitive : 
// reference: [],{}

let a = [1,2,3]
let b = a;

b.pop()
console.log(a)



// primitive
// let a = 5;
// let b = a;
// b = 10;
// console.log(a, b)
