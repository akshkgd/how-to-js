// primitive
// reference => [] {}

// primitive
// let a = 10;
// let b = a;
// b= b+5;
// console.log(a, b)



// reference
let a = [1,2,3]
let b = a;
b.pop()
// console.log(a)


let x = 'fjdkjks'
let y = 1212
// reference
let z = [2,3,4] 
let m = z;
m.pop()
// console.log(m, z)







// conditionals
// if any condition gets converted or results to true will execute
let age = 4;

// if(age > 18){
//     console.log("Elegible")
// }
// else{
//     console.log("Not Elegible")
// }

// if("dog"){
//     console.log('statement 1')
// }
// else if (false){
//     console.log('statement 2')
// }
// else{
//     console.log('last statement')
// }




// if, else if , else, 
// truthy, falsy
// truthy => anything apart from fasly will get executed
// falsy => 0, false, "", -0, Nan, null, undefined

// if(1){
//     console.log('truthy 🤪')
// }




if(-2){
    console.log('morning sleep is best!!')
}


// loops => repeat
// for(start point, condition, iteration)
for(let i=1; i<11; i++){
    // console.log(i)
}


// % gives you the reminder
for(let i=1;i<=10; i++){
    if(i%2==1){
        // console.log(i)
    }
}


// functions =>same task, when we need, how many times

function grinder(items){
    console.log('grinding...', items)
}


// grinder('tomatoes');
// grinder('garlic')



function add(a, b){
    console.log(a+b)
}
add(2,3)
add(12,14)


function sqr(n){
    console.log(n*n)
}


sqr(6)
sqr(12)







// functions
// arrow functions
// array mapping
// array filters
// foreach



// bmi, bill split, registration system