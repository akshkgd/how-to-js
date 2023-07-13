// conditionals
// ""=> undefined

if(true){
    // console.log('option 1: party')
}
else if(false){
    console.log('option 2: sleep')
}
else{
    console.log('option 3: Netflix')
}

// truthy and falsy
// falsy => 0, false, undefined, null, NaN(Not a Number)

// loops => repeat
// for

// for(initialize, condition, iteration)
for(let i=0; i<20; i++){
    if(i % 2 == 0){
        // console.log(i)
    }
}
// functions

// function grinder(item){
//     console.log('grinding...', item)
// }

// grinder('tomatoes')

function add(num1, num2){
    console.log(num1 + num2)
}

// add(2,3)
// add(12,13)


function joined(){
    let title = document.getElementById('title');
    console.log(title)
    title.innerText = 'Thanks for joining the masterclass live!'
    let btn = document.getElementById('btn')
    btn.style.display = 'none'
}

// function enroll(){
//     let name = document.getElementById('name');
//     document.getElementById('welcome').innerText = "Welcome to the Javascript bootcamp," + name.value;
// }

function mToCm(){
    let meter = document.getElementById('meter');
    let cm = meter.value * 100;
    document.getElementById('result').innerText = cm
}



// premitive and reference
