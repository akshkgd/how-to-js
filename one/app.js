// varaibles
// data types
// arrays
// objects
// winning prediction


// variables =>  (var, depreciated ?? ) let and const 
// let email = 'yash@gmail.com';
// data types => strings, numbers, boolean, arrays, objects

// let movieName = '' //string
// let movieName2 = "a"   // string => '' ""

// let age = 25.6;
// let isUserActive = false

// console.log(typeof isUserActive)


let items = ['milk', 'bread', 'butter']
items[1] = 'brown bread';
// items[3] = 'coffee';

// items.push('apple');
// items.push('coffee', 'dmalsdlsad')


// items.pop()
// items.pop()


// splice(index, deleteCount)
// console.log(items)
// items.splice(0, 0, 'grapes', 'coffee')
// console.log(items)



// objects

let user = {
    name: 'yash',
    email: 'yash@gmamil.com',
    salary: 45000,
    pinCode: 211005
}
user.name = 'yash goel';
delete user.pinCode;

user.age = 24
console.log(user)

// semicolans are optional

let users = [
    {name: 'yash', email: 'yash@gmail.com', age: 25},
    {name: 'mayank', email: 'mayank@gmail.com', age: 45},
    {name: 'himanshu', email: 'himanshu@gmail.com', age: 15},
    {name: 'kunal', email: 'kunal@gmail.com', age: 25},
    {name: 'bhavna', email: 'bhavna@gmail.com', age: 31},
    {name: 'naveen', email: 'naveen@gmail.com', age: 45},
    {name: 'kavya', email: 'kavya@gmail.com', age: 25},
    {name: 'aneesh', email: 'aneesh@gmail.com', age: 45},
    {name: 'jayant', email: 'jayant@gmail.com', age: 45},
    {name: 'akash', email: 'akash@gmail.com', age: 45},

]
let random = Math.floor(Math.random()*10);
console.log(random)
console.log(users[random].name)