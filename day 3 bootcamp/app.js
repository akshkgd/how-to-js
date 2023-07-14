// bill slpit application
// bmi application
// student registration system


function split(){
    let amount = document.getElementById('amount');
    let persons = document.getElementById('persons');
    let bill = amount.value / persons.value;
    document.getElementById('result').innerText = Math.floor(bill);
    // remove values from input field
    amount.value = '';
    persons.value = '';
    // document.getElementById('amount').value = ''
}

function bmi(){
    let height = document.getElementById('height')
    let weight = document.getElementById('weight')
    let result = weight.value / (height.value * height.value);
    console.log(result)
    if(result < 18.5){
        document.getElementById('result').innerText = 'underweight 🍔';
    }
    else if(result> 18.5 && result<24.9){
        document.getElementById('result').innerText = 'normal 🤩';
    }
    else if(result>25 && result < 29.9){
        document.getElementById('result').innerText = 'overweight 🤫';
    }
    else if(result>30 && result < 35){
        document.getElementById('result').innerText = 'obesity 😔';
    }
    else{
        document.getElementById('result').innerText = 'severe obesity 🤯';
    }
}


// arrow functions

function functionName(a, b){
    // logic
}

add=(num1, num2)=>{
    console.log(num1 + num2)
}
add(2,3)

let users = [];
addUser = ()=>{
    let name = document.getElementById('name');
    let email = document.getElementById('email');

    let tempUser = {
        name: name.value,
        email: email.value,
    }
    users.push(tempUser);
    console.log(users)
    
}

// day 4
// array mapping and filters
// fcf
// completing

//day 5 =>  async, promises, movie app (API's), callbacks





// student refistration system