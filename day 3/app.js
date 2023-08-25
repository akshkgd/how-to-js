// array mapping and filters
// let arr = [1,2,3,4,5,6,7,8]

// let sqrArr = arr.map(function(n){
//     return n*n;
// })

// let cubeArr = arr.map((n)=> n*n*n)
// console.log(cubeArr)


const users = [
    { firstName: 'ashish', lastName: 'shukla', age: 25, address: 'allahabad', gender: 'male' },
    { firstName: 'Amit', lastName: 'Patel', age: 32, address: 'Mumbai Street', gender: 'male' },
    { firstName: 'Priya', lastName: 'Desai', age: 28, address: 'Delhi Street', gender: 'female' },
    { firstName: 'Rahul', lastName: 'Gupta', age: 35, address: 'Bangalore Street', gender: 'male' },
    { firstName: 'Sneha', lastName: 'Kumar', age: 42, address: 'Chennai Street', gender: 'female' },
    { firstName: 'Anjali', lastName: 'Sharma', age: 29, address: 'Kolkata Street', gender: 'female' },
    { firstName: 'Vikram', lastName: 'Chatterjee', age: 30, address: 'Hyderabad Street', gender: 'male' },
    { firstName: 'Swati', lastName: 'Joshi', age: 27, address: 'Pune Street', gender: 'female' },
    { firstName: 'Nikhil', lastName: 'Mehta', age: 46, address: 'Ahmedabad Street', gender: 'male' },
    { firstName: 'Shreya', lastName: 'Pandit', age: 23, address: 'Jaipur Street', gender: 'female' }
  ];
  
let firstNames = users.map((a)=>{
    return a.firstName + " " + a.lastName
}) 
  

// console.log(firstNames)
  

let females = users.filter((user)=>{
    return user.gender == 'female'
}).map((user)=>{
    return user.firstName
})


let filterdUsers = users.filter((user)=>{
    return user.age < 40 && user.gender == 'male'
}).map((user)=>{
    return user.firstName;
})


// console.log(filterdUsers)



// let test = users.map((user)=>{
//     if(user.gender == 'male'){
//         return user.firstName
//     }
// })

// console.log(test)



function joined(){
    let title = document.getElementById('title');
    title.innerText = 'Thanks for joining the bootcamp live!!'
    let btn = document.getElementById('btn')
    btn.style.display = 'none'

}


// let demo = document.getElementById('demo')
// demo.innerHTML = '<h1>This is innerText</h1>'


// innerHTML = it converts the html tags to output
// innerText = it prints the tag as a text


// innerText


let counter = 0;

function increment(){
    counter = counter + 1;
    let counterValue = document.getElementById('counter')
    counterValue.innerText = counter;
    console.log(counter)
}

function decrement(){
    if(counter >0){
        counter = counter - 1;
        let counterValue = document.getElementById('counter')
        counterValue.innerText = counter;
        console.log(counter)
    }
    

}