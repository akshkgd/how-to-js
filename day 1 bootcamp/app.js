//day 1  introduction => 
//day 2 advance concepts with loops and cinditionals
//day 3 array mapping filters, arrow funcitions => 
//day 4 DOM
//day 5 Async await and promises 


// words and keywords
// any word which is relevent to js compiler is a keyword
// ex for if var async
// morning
// nksjdfkdsjdfks


// variables => store the data
var email = 'ashish@gmail.com';
// console.log(email)


// var let and const
// es5 and es6
// es5 => var
// es6 => let and const

let age = 23;
// console.log(age)

const tds = 10;
// console.log(tds)



// data types => string, boolean  number, array, object

// let movie = 'avengers';
// let ratings = 7.5;
// let codekaro = true;


// console.log(codekaro)
// console.log(typeof codekaro)


// let shoppingList = ['milk', 'butter', 'rice']
// shoppingList[0] = 'coffee'
// console.log(shoppingList)

console

// object
// let user = ['ashish', 25, 'allahabad']




// arrays
// let shoppingList = ['milk', 'butter', 'rice', 1, true]
// shoppingList[3] = 'test'
// // how it's created
// let arr = {
//     0:'milk',
//     1:'butter',
//     2:'rice',
// }

// console.log(shoppingList)



// object
let user = {
    name: 'ashish',
    age: 25,
    address: 'allahabad'
}
user.name = 'ashish shukla'
// console.log(user)

// console.log(typeof user)




let shoppingList = ['milk', 'butter', 'rice'];
console.log(shoppingList)
// push adds a value in last
// pop removes a value from last
// shoppingList.pop()
// shoppingList.push('coffee')


// splice => add a new value where you want
// splice => delete a  value where you want
// splice(index, how many value you want to delete, )
shoppingList.splice(0, 1, 'cookies', 'choclate')

console.log(shoppingList)