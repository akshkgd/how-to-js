// conditionals
// functions
// loops

// true/false or anything that converts to true or false
// if(' '){
//     console.log('i will run....')
// }
// else{
//     console.log('i am the last hope!')
// }

// if you write anything in condition which is not true/false or which is not getting converted to true or false will br trated as truthy and falsy values.

// truthy => true
// falsy => false 0, -0, "", '', undefined, 



// functions

// function grinder(data){
//     console.log('grinding...', data)
// }

// grinder('tomatoes');
// grinder('milk and coffee');


// function add(a,b,){
//     console.log(a+b)
// }
// add(2,3)
// add(6,7)



// loops => repeat
// for loop

// for(start, end, increment)

// for(let i=0; i<5; i++){
//     console.log(i)
// }


let users = [
    {name: 'yash', salary: 45000},
    {name: 'bhavna', salary: 67000},
    {name: 'naveen', salary: 34000}, 
    {name: 'mayank', salary: 39000}, 
    {name: 'neha', salary: 44000}, 
    {name: 'kunal', salary: 44000}, 
    {name: 'arpit', salary: 44000}, 
    {name: 'himanshu', salary: 44000}, 
    {name: 'akbar', salary: 44000}, 
]
// // if the salary is greater than 40000 than the tds will be 20% else 10%
// function checkSalary(name, salary){
//     if(salary> 40000){
//         let tds = salary* .2;
//         salary = salary-tds;
//         console.log(name, ' will get ', salary)
//     }
//     else{
//         let tds = salary* .1;
//         salary = salary-tds;
//         console.log(name, ' will get ', salary)
//     }
// }



// for(let i=0; i<5; i++){
//     checkSalary(users[i].name, users[i].salary)
// }


// console.log(users.length)


// for(let i=0; i<users.length; i++){
//     console.log(users[i].name)
// }


// if(10){
//     console.log('will work')
// }
// else{
//     console.log('not work')
// }

// ternary operator....
// 10>1 ? console.log('yes') : console.log('no')



let day ='rainy'
if(day == 'sunny'){
    console.log('wear a tshirt')
}
else if(day == 'rainy'){
    console.log('wear a raincoat')
}
else if(day== 'cold'){
    console.log('wear a jacket')
}
else{
    console.log('wear a tshirt')

}




let fruits = []
console.log(fruits)


    // fruits.push('apple')
    // fruits.push('banana')
    // fruits.push('orange')

    // console.log(fruits)