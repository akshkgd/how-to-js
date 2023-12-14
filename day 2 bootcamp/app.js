// conditionals
// anything that is true/false or that gets converted to true or false can be writen as a condition
// if("dkasjdkdja"){
//     console.log('i will run!')
// }
// else{
//     console.log('i am the last hope!')
// }
let age = 18;

// if(age >= 18){
//     console.log('eligible to vote')
// }
// else{
//     console.log('not eligible to vote!')
// }



// truthy => true => true
// falsy => false => 0, -0, "", '', undefined, Null

// functions => block of code = same task => when we want => any number of times

// function grinder(items){
//     console.log('grinding...', items)
// }


// grinder('tomatoes')
// grinder('potatoes')


// function add(a,b){
//         console.log(a+b)
// }

// add(2,3)
// add(5,8)



// arrow functions => es6 => different way of writing a function
// square = (n) =>{
//     console.log(n*n)
// }
// square(5)

// loops => repeat
// 
// let users = ['yash', 'nayana', 'mayank', 'himanshu', 'arpit']
// console.log(users)
// for(let i=1; i<=10; i++){
//     console.log(i)
// }


// for (let i=0; i< users.length; i++){
//     console.log(i+1, users[i])
// }



const users = [
    { name: "Aarav", salary: 50000 },
    { name: "Aanya", salary: 55000 },
    { name: "Arjun", salary: 60000 },
    { name: "Diya", salary: 52000 },
    { name: "Ishaan", salary: 48000 },
    { name: "Kavya", salary: 53000 },
    { name: "Rohan", salary: 58000 },
    { name: "Sanya", salary: 56000 },
    { name: "Vivaan", salary: 51000 },
    { name: "Zara", salary: 54000 }
  ];


  function calculateTax(name, salary){
    let tds = 0
    if(salary > 50000){
        tds = salary * .2;
    }
    else{
        tds = salary * .1;
    }
    let inHand = salary - tds;
    let tax = tds;
    console.log('For ' + name + " the tax is: " + tax)
  }

 for(let i=0; i<users.length; i++){
    calculateTax(users[i].name, users[i].salary)
 }