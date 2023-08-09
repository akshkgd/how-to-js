// console.log('app.js is connected!!')

// keywords is every words that js can understand
// variables
// var, let and const
// es5 => var
// es6 => let and const

let email = 'ashish@gmail.com'
email = 'ashish@codekaro.in';
// console.log(email)



// data types
// in js => string, numbers, boolean, array and objects

let userName = "ashish ";
let age = 25.67;
let isUserActive = true;
// console.log(typeof isUserActive);
// arrays

// let items = ['milk', 'bread', 'butter']
// console.log(items)

// indexes are to add, read, update
// items[1] = 'brown bread'
// console.log(items)




// objects
let user = {
    name: 'ashish',
    email: 'ahsish@gmail.com',
    age: 25,
    address: 'allahabad',
    hobbies : ['reading books', 'cooking', 'teaching']
}
// console.log(user)
// user.mobile = 9876543210;
// user.name = 'ashish shukla'
// delete user.age;
// console.log(user.name, user.hobbies[0])



// why array is object in js
// let a = [1,2,3,4]
// a[4] = 5;

// a['name'] = 'ashish'
// console.log(a)


// advance arrays concepts
let items = ['milk', 'bread', 'butter']
// console.log(items)
// to add new value at the end
// items.push('apple')
// delete a value from end
// items.pop()

// splice => used to add and remove the value from array
// splice(where(in which index), deleteCount, addItem)
items.splice(0, 0, 'apple', 'coffee', 'grapes')



// console.log(items)




// primitive and reference


// primitive anything apart from reference is primitive
// reference => [array] {object}


// let students = ['nayan', 'kunal', 'arpit']
// let codekaroStudents = students;
// codekaroStudents.pop()
// console.log(students)


// let a = 5;
// let b = a;
// b = 10;

// console.log(a, b)



let users = [
    {name:'ashish', age: 25},
    {name:'yash', age: 25},
    {name:'nayan', age: 25},
    {name:'kunal', age: 25},

]

console.log(users[0].name)