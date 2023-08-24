// conditionals
// loops

// anything in boolean or that gets converted to boolean 
// can be used as a condition

// if(""){
//     console.log('this is true')
// }
// else{
//     console.log('i am the last hope!!')
// }

// truthy => 
// falsy => false, 0, -0 "" '' undefined 

// ternary operator
// 10<1 ? console.log('true') : console.log('false')


// let age = prompt('Enter the age')
// if(age> 18){
//     console.log('eligible to vote')
// }
// else{
//     console.log('not eligible to vote')
// }

// else if
// let day = 'jisadjisad'
// if (day == 'sunny'){
//     console.log('wear t-shirt')
// }
// else if(day== 'rainy'){
//     console.log('wear raincoat')
// }
// else if(day == 'cold'){
//     console.log('wear jacket')
// }
// else{
//     console.log('enjoy the day!!')
// }

// loops => repeat
// for loop
// foreach loop => tomorrow

// for(initial point, condition, increment)
// for(let i=0; i<10; i++){
//     console.log(i)
// }



// functions
// specific purpose
// when we want
// as many times we want


function grinder(items){
    // logic
    console.log('grinding...', items)
}

// grinder('tomatoes')
// grinder('garlic')



// function add(a,b){
//     let sum = a+b;
//     return sum;
// }

// let result = add(2,3)

// console.log(result)
// add(10, 40)





// function sqr(n){
//     return n*n
// }

// let test = sqr(3)
// console.log(test)




// arrow function 
// functionName = ()=>{
// 
// }

// function
// function cube(n){
    // return n*n*n
// }

// es6 => 
cube=(n)=>n*n*n

let result = cube(2)
console.log(result)