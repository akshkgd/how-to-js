// conditionals
// loops 
// functions


let name = 'yash';
let age = 54;
// console.log(name, age)


// conditionals => decision??
// if and else
// either wrote true/false or something that gets convert to true or false



// if(" "){
//     console.log('i will go to the party!!!')
// }
// else{
//     console.log('lets sleep!!')
// }

// truthy and falsy
// truthy => true
// falsy => false => 0, -0, "", '', null, undefined, NaN


// if(age> 18){
//     console.log(name, " is eligible to vote!")
// }
// else{
//     console.log(name, "is not eligible to vote!")
// }




// function => block of code use to perform the same task multiple times when we want....

// function grinder(items){
//     console.log('grinding...', items)
// }

// grinder('tomatoes');
// grinder('garlic')

// function add(a, b){
//     console.log(a+b)
// }

// add(2,3)
// add(45,60)


// loop => repeat

// console.log('1');
// console.log('2')
// console.log('3')
// console.log('4')
// console.log('5')

// for and foraeach



// for(initial point, condition, counter)





// for(let i=1; i<=5; i++ ){
//     console.log(i)
// }

let users = [
    {name: 'yash', age: 24, gender: 'male'},
    {name: 'mayank', age: 14, gender: 'male'},
    {name: 'neha', age: 32, gender: 'female'},
    {name: 'arpit', age: 21, gender: 'male'},
    {name: 'pranjali', age: 29, gender: 'female'},
    {name: 'bhavna', age: 22, gender: 'female'},
    {name: 'kunal', age: 20, gender: 'male'},
    {name: 'navneet', age: 18, gender: 'male'},
    {name: 'debashish', age:46, gender: 'male'},
 ]

for(let i=0; i<users.length; i++){
    if(users[i].age <28 && users[i].gender == 'male'){
        console.log(users[i].name, users[i].age)
    }
    
}


// ternary
// condition ? if : else \

100>20? console.log('i am running') : console.log('i am not running');