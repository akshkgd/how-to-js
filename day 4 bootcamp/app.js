// array mapping and filters



// function add(a,b){
//     let sum = a+b;
//     return sum;
// }


// let sum1 = add(2,3)
// console.log(sum1)

// let arr = [1,2,3,4,5,6]
// console.log(arr)

// let result = arr.map(function(num){
//     let sum = num + 5;
//     return sum;
// })

// let cube = arr.map((num)=>{
//     return num*num*num
// })


// let users = [
//     {first: 'ashish', last: 'shukla', age: 19},
//     {first: 'yash', last: 'goel', age: 28},
//     {first: 'kunal', last: 'bhal', age: 15},
//     {first: 'neha', last: 'dixit', age: 20},
//     {first: 'vani', last: 'singh', age: 13},
//     {first: 'prithviraj', last: 'xyz', age:19},
//     {first: 'pranesh', last: 'aditya', age: 25}
// ]

// console.log(users)
// let firstNames = users.map((user)=>{
//     return user.first;
// })


// let names = users.map((user)=>{
//     let name = user.first + " " + user.last;
//     return name;
// })
// console.log(names)


// array mapping is used to transform all the values insode an array and returns 
// a new array

// array mapping always returns a new array


// filters
// let arr = [1,2,3,4,5,6,7,8,9];

// let newArr = arr.filter((num)=>{
//     return num> 5
// })

// console.log(newArr)

// let newUsers = users.filter((user)=>{
//     return user.age > 18
// }).map((user)=>{
//     return user.first
// })


// newUsers.map()



// chaining




// console.log(newUsers)

// console.log(users)
let users = []
let userContainer = document.getElementById('users')
function addUser(){
    let name = document.getElementById('name');
    let email = document.getElementById('email');

    let tempUser = {
        name: name.value,
        email: email.value,
    }

    let userCount = checkIfUserExist(email.value);
    if(userCount.length == 0){
        users.push(tempUser);
    }
    else{
        alert('user already exist!')
    }
    renderUsers();
}


function checkIfUserExist(email){
    let userCount = users.filter((user)=>{
        return user.email == email;
    }) 
    return userCount;
}

function renderUsers(){
    userContainer.innerHTML = ''
    users.map((user)=>{
        let card = document.createElement('div');
        let name = document.createElement('p');
        let email = document.createElement('p');
        card.classList.add('card');
        name.innerText = user.name;
        email.innerText = user.email;
        userContainer.appendChild(card);
        card.appendChild(name)
        card.appendChild(email)

    })
}

