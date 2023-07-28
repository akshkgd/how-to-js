// functions => 

// function cube(n){
//     let result = n*n*n;
//     return result;
// }

// let cube1 = cube(3)
// let cube2 = cube(6)


// console.log(cube1, cube2)

// es5
// normal function
// function functionName(){
//     ...
// }


//es6 =>  arrow functions

// functionName = () => {
//     ...
// }


// add=(a,b)=>{
//     console.log(a+b)
// }
// add(2,3)
// add(4,5)

// function sqr(){
//     return n*n;
// }
// sqr=(n)=>{
//     ...
//     ...
//     ...
// }


// let result = sqr(4)
// console.log(result)



// array mapping
// let arr = [1,2,3,4,5]
// let sqr = arr.map((n)=>n*n)


// console.log(sqr)
// console.log(arr)


// function downloadImg(){
//     setTimeout(()=>{
//         console.log('image downloded')
//     }, 3000)
// }


// downloadImg()


let users = [
    {firstName: 'ashish', lastName: 'shukla', age: 25, salary: 45000},
    {firstName: 'yash', lastName: 'goel', age: 27, salary: 22000},
    {firstName: 'kunal', lastName: 'shah', age: 14, salary: 37000},
    {firstName: 'nayan', lastName: 'kapoor', age: 17, salary: 38000},
    {firstName: 'bhavna', lastName: 'shukla', age: 21, salary: 40000},
    {firstName: 'arpit', lastName: 'khare', age: 23, salary: 55000},
    {firstName: 'himanshu', lastName: 'srivastava', age: 20, salary: 11000},
    {firstName: 'neha', lastName: 'singh', age: 16, salary: 20000},
]

users.forEach((user)=>{
    console.log(user.firstName)
})

let names = users.map((user)=>{
    let name = user.firstName 
    return name
})


console.log(names)

// let newUsers = users.filter((user)=>{
//     return user.age > 18;
// }).map((user)=>{
//     return user.firstName;
// })


// console.log(newUsers)


// let seniors = users.filter((user)=>{
//     return user.salary > 35000
// }).map((user)=>{
//     return user.firstName + " " + user.lastName
// })

// console.log(seniors)

let seniors = users.map((user)=>{
    let updatedUser = {
        firsName: user.firstName,
        lastName: user.lastName,
        age: user.age,
        salary: user.salary + 7000,
    }
    return updatedUser;
}).filter((user)=>{
    return user.salary > 40000;
}).map((user)=>{
    return user.firsName;
})


// console.log(seniors)


function joined(){
    let title = document.getElementById('title')
    title.innerHTML = '<h1>Thanks for joining the Bootcamp 🎉</h1>'
    let btn = document.getElementById('btn');
    btn.style.display = 'none'
}