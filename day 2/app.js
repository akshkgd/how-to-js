// conditionals
// truthy and falsy
// functions
// arrow functions
// loops

let age  = 4;
// conditionals
// ?? anything which is true/ false 
// if(' '){
//     console.log('this is true')
// }
// else{
//     console.log('last hope')
// }

// truthy and falsy
// falsy => 0, -0, "", '', undefined, Null

// 10>400 ? console.log('true') : console.log('false')
// condition ?(if)... :(else)...



// let friendsComing = 0
// if(friendsComing == 1){
//     console.log('go to college')
// }
// else if(friendsComing == 2){
//     console.log('go to party')
// }
// else{
//     console.log('just sleep!')
// }



// functions

// function grinder(items){
//     console.log('grinding...', items)
// }

// grinder('tomatoes')
// grinder('onion & garlic')


function add(num1, num2){
    console.log(num1 + num2)
}

// arrow function es6
function name(){
    // logic
}

// functionName=()=>{
//     // logic
// }

// div=(a,b)=>{
//     console.log(a / b)
// }
// div(30,3)


// LOOP => repeat 
// for and foreach

// for(let i=1; i<11; i++){
//     console.log(i*25)
// }


let items = ['milk', 'bread', 'butter'];
// console.log(items)


// for(let i=0; i<3; i++){
//     console.log(items[i])
// }

// foreach => arrays

// items.forEach(function(item){
//     console.log(item)
// })

// items.forEach((xyz)=>{
//     console.log(xyz)
// })

let users = [
    {name: 'ashish', age: 26, gender: 'male'},
    {name: 'arun', age: 28, gender: 'male'},
    {name: 'mayank', age: 21, gender: 'male'},
    {name: 'neha', age: 32, gender: 'female'},
    {name: 'varun', age: 24, gender: 'male'},
    {name: 'himsnshi', age: 16, gender: 'female'},
]

users.forEach((user, index)=>{
    console.log(index, user.name)
})