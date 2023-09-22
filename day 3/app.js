// array mapping and filters
// callbacks
// return in functions
// difference between foreach and mapping




// let arr = [1,2,3,4,5]
// console.log(arr)


// function cube(n){
//     return n*n*n
// }

// sqr=(n)=>n*n

// let abc = sqr(4)


// console.log(abc)

// array mapping
// let arr = [1,2,3,4,5]

// let sqrArr = arr.map((n)=>{
//     return n*n;
// })

// let forEachResult = arr.forEach((n)=>{
//     return n*n
// })

// console.log(forEachResult)





// let arr = [2,6,3,5,8,9,1]

// let cube = arr.map((n)=>{
//     return n*n*n
// })

// console.log(arr)
// console.log(cube)

// let greaterThan5 = arr.filter((n)=>{
//     return n>5
// })

// console.log(greaterThan5)

let users = [
    {firstName: 'Ashish', lastName: 'Shukla', age: 26, gender: 'male'},
    {firstName: 'Bhavna', lastName: 'Singh', age: 21, gender: 'female'},
    {firstName: 'Yash', lastName: 'Goel', age: 36, gender: 'male'},
    {firstName: 'Naman', lastName: 'Bhandari', age: 16, gender: 'male'},
    {firstName: 'Ramya', lastName: 'Pratibhan', age: 20, gender: 'female'},
    {firstName: 'Mayank', lastName: 'Mishra', age: 40, gender: 'male'},
    {firstName: 'Himanshu', lastName: 'Srivastava', age: 25, gender: 'male'},
    {firstName: 'Neha', lastName: 'Singh', age: 28, gender: 'female'},
]

// let names = users.map((user)=>{
//     return user.firstName + " " + user.lastName
// })
// console.log(names)


// let males = users.filter((user)=>{
//     return user.gender == 'male'
// }).map((user)=>{
//     return user.firstName;
// })



// console.log(males)


// forEach vs Mapping
// can not store in array | store results in array
// return is not supported | return is supported
// no chaining | chaining is possible







// task 1
// task 2 (5 sec)
// task 3


// 

// function downloadDone(){
//     console.log('download complete')
// }



let arr = [2,6,3,5,8,9,1]
let updatedArr = arr.map((n)=>{
    return n+5
})

console.log(arr)
console.log(updatedArr)

// console.log('task 1')
// setTimeout(() => {
//     console.log('task 2')
// }, 3000);
// console.log('task 3')