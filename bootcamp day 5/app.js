// array mapping and filters

// let arr = [1,2,3,4,5]
// console.log(arr)

// let result = arr.map(function(n){
//     return n*n
// })


// let result = arr.map((n)=> n*n)
// let result = arr.map(n => n*n)

// console.log(result)


// array mapping => iterating each values of the array
// store the result in an array
// chaining


// filters



// let result = arr.filter(n=> n>2)
// console.log(result)


const users = [
    { firstName: 'Aarav', lastName: 'Patel', age: 28, gender: 'Male', salary: 50000 },
    { firstName: 'Aishwarya', lastName: 'Sharma', age: 22, gender: 'Female', salary: 45000 },
    { firstName: 'Arjun', lastName: 'Rao', age: 35, gender: 'Male', salary: 30000 },
    { firstName: 'Dia', lastName: 'Verma', age: 29, gender: 'Female', salary: 55000 },
    { firstName: 'Kiran', lastName: 'Chopra', age: 31, gender: 'Male', salary: 52000 },
    { firstName: 'Ananya', lastName: 'Gupta', age: 27, gender: 'Female', salary: 28000 },
    { firstName: 'Vikram', lastName: 'Singh', age: 33, gender: 'Male', salary: 58000 },
    { firstName: 'Isha', lastName: 'Mishra', age: 25, gender: 'Female', salary: 51000 },
    { firstName: 'Rahul', lastName: 'Verma', age: 30, gender: 'Male', salary: 59000 },
    { firstName: 'Jiya', lastName: 'Malhotra', age: 26, gender: 'Female', salary: 27000 }
  ];
//   let firstNames = users.map(user => user.firstName + " "+ user.lastName )
//   console.log(firstNames)

// let males = users.filter(user=> user.gender == 'Male').map(user=> user.firstName);
// console.log(males)


// chaining
// Array.filter().map().filter().map()
// Array.map().filter().filter().filter()



// let malesName = males.map(user=>user.firstName);
// console.log(malesName)



let females = users.filter(user=>user.gender == 'Female').filter(
    user => user.salary>=30000).map(user => user.firstName);
console.log(females)


let firstNameUsers = []
for(let i=0; i<users.length; i++){
    firstNameUsers.push(users[i].firstName)
}
let mapDemo = users.map(user=> user.firstName)
console.log(firstNameUsers)