// conditionals
// functions
// DOM
// Cool 



let age = 24;
// if(condition/ true/false)

// if(false){
//     console.log('party')
// }
// else if(""){
//     console.log('web series')
// }
// else{
//     console.log('Sleep!!')
// }

// inside the bracket we write
// true/false or something that
// converts to true/false


// truthy and falsy

// falsy => false =>  0, -0, "", '', null and undefined
// truthy =>true 



// functions

// function is a piece of code that is used to 
// create same task mulpiple times 
// when required


// function grinder(items, a, b){
//     console.log('grinding...', items)
// }
// grinder('tomatoes')
// grinder('garlic')


function joined(){
    let title = document.getElementById('title');
    let btn = document.getElementById('btn')
    // console.log(title)
    title.innerText = 'Thanks for joining the bootcamp live!!'
    btn.style.display = 'none'
}


// let demo = document.getElementById('demo')
// console.log(demo)
// demo.innerHTML = '<h1>This is an example of innertext</h1>'


let counter = 0;
let counterTitle = document.getElementById('counter')
function increment(){
    counter = counter + 1;
    counterTitle.innerText = counter;
}


function decrement(){
    if(counter > 0){
        counter = counter - 1;
        counterTitle.innerText = counter;
    }
    
}

function reset(){
    counter = 0;
    counterTitle.innerText = counter;
}