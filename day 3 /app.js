// array mapping array filters
// foreach
// callbacks


// function 
// functionName = ()=>{logic}

let arr = [1,2,3,4]
// array mapping always returns an array

// let result = arr.map(function(n){
//     return n*n;
// })

// let result = arr.map((n)=>{
//     return n*n
// })



// let result = arr.filter((n)=>{
//     return n>2
// })


// console.log(result)



let users = [
    {firstName: 'ashish', lastName: 'shukla', gender: 'male', age: 25, address: 'allahabad'},
    {firstName: 'yash', lastName: 'goel', gender: 'male', age: 26, address: 'delhi'},
    {firstName: 'bhavna', lastName: 'chaturvedi', gender: 'female', age: 21, address: 'chitrakoot'},
    {firstName: 'arpit', lastName: 'khare', gender: 'male', age: 24, address: 'mumbai'},
    {firstName: 'neha', lastName: 'singh', gender: 'female', age: 22, address: 'kolkata'},
    {firstName: 'kunal', lastName: 'bhal', gender: 'male', age: 29, address: 'allahabad'},
    {firstName: 'anand', lastName: 'singh', gender: 'male', age: 24, address: 'hyderabad'},
    {firstName: 'selva', lastName: 'kumar', gender: 'male', age: 23, address: 'allahabad'},
]


// let names = users.map((user)=>{
//     return user.firstName + " " + user.lastName;
// })


// let males = users.filter((user)=>{
//     return user.gender == 'male'
// }).filter((user)=>{
//     return user.age> 24;
// }).map((user)=>{
//     return user.firstName
// })

let males = users.filter((user)=>{
        return user.gender == 'male' && user.age > 24
    }).map((user)=>{
        return user.firstName
    })




// let maleNames = males.map((user)=>{
//     return user.firstName;
// })


// chaining
// console.log(males)



// foreach
let names = users.forEach((user)=>{
    return user.firstName
})

// console.log(names)

// 
// function joined(){
//     let title = document.getElementById('title');
//     let btn = document.getElementById('btn');
//     console.log(title)
//     btn.style.display = 'none'
//     title.innerHTML = 'Thanks for joining the bootcamp!!'
// }



// let demo = document.getElementById('demo');
// console.log(demo)
// demo.innerHTML = '<h1>Welcome to the javascript bootcamp</h1>'



// callbacks => function


function notify(){
    console.log('download complete!!')
}


users.map(()=>{

})


users.forEach(()=>{
    
})