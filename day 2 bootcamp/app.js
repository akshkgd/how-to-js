// conditionals

// if("abc"){
//     console.log('codekaro')
// }
// else{
//     console.log('Ashish')
// }

// in if always write a condition that is either
// true either false or something that converts


// truthy and falsy
// falsy => 0, -0, false, "", '', undefined, Null 


// if(-1){
//     console.log('yes')
// }


// let age = prompt("Enter Age");

// if(age>= 18){
//     console.log('Eligible to Vote')
// }
// else{
//     console.log('Not eligible to Vote')
// }


// ternanry operator
// true ? console.log('Codekaro') : console.log("live class");
// 1 ? console.log('true') : console.log('false');


// else if

// if(false){
//     console.log('cookies')
// }
// else if(false){
//     console.log('coffee')
// }
// else if(true){
//     console.log('Burger')
// }
// else{
//     console.log('apple')
// }


// let weather = 'sunny'

// if(weather === 'sunny'){
//     console.log('tshirts')
// }
// else if(weather == 'rainy'){
//     console.log('take umbrella')
// }
// else if(weather == 'cold'){
//     console.log('jackate')
// }
// else{
//     console.log('enjoy!!')
// }


// === is strictly equal also check the data type
// let n = '1'

// if(n == 1){
//     console.log('true')
// }
// else{
//     console.log('false')
// }




// loops repeat
// for
// foreach

// for(initial value, condition, increment)
// for(let i=1; i<=10;i++){
//     if(i%2 == 1){
//         console.log(i)
//     }
// }


// functions and Arrow funcitons
// funciton => same task, anytime, as many times


// function grinder(items){
//     console.log('grinding...', items)
// }
// grinder('tomatoes')
// grinder('garlic')
// grinder();



// function add(a,b){
//     console.log('calculating...')
//     return a+b;
// }


// let result = add(3,2)
// console.log(result)


// arrow funcitons
// function functionName(){
    // logic
// }


sqr = (n)=> n*n

// let result = sqr(5)
// console.log(result)



// foreach 


let arr = [1,2,3,4,5,6,7,8,9,10]

// arr.forEach(function(n){
//     console.log(n*n)
// })


arr.forEach((n)=>{
    if(n%2 == 0){
        console.log(n + " is even")
    }
    else{
        console.log(n + " is odd")
    }
})


// foreach, array mapping filters, reduces
// callbacks