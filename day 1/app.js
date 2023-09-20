// keywords
// var
// data types
// arrays []
// objects
// array of objects
// refrewnce and primitive


// keyword
// var, for map

// variables
// var, let and const







// data types => string("", ''), number, boolean, arrays, objects
let email = "ashish@gmail.com";
let age = 24.5;
let isOnline = true;


// arrays
let items = ['milk', 'bread', 'butter']
// items[0] = 'coffee'

// push adds an element to the end
// pop removes the last value
// items.push('apple')
// items.pop()
// items.pop()

// splice(index, deleteCount, items(optional))
// console.log(items)
items.splice(1, 1, 'apple', 'coffee')

// console.log(typeof items)


// console.log(typeof isOnline)



// objects {}
// let user = ['ashish', 'ashish@gmail.com', 45000, 26, 'allahabad']
let user = {
    name: 'ashish',
    email: 'ashish@gmail.com',
    salary: 45000,
    age: 26
}
user.address = 'allahabad'
user.name = 'ashish shukla'
delete user.salary

// console.log(user.name)
// console.log( user.email)


// console.log(typeof user)


// why arays are objects is js??
// index always starts from 0
// index will always be a number


let students = ['arun', 'raj', 'hanumesh']
students['demo'] = 'result!!'

// console.log(Array.isArray(user))


// primitive and reference
// reference = [array], {object}
// primitive => anything apart from reference

// let num1 = 100;
// let num2 = num1;
// num2 = num2 +10;


// console.log(num1, num2)


let a = [1,2,3]
let b = a;
b.pop()
console.log(a,b)