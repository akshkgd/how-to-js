// bill split application
// bmi application
// student registration system


// toFixed means how many decimal values you need


split=()=>{
    let amount = document.getElementById('amount');
    let persons = document.getElementById('persons')
    if(persons.value == 0){
        alert("please enter atleat one person 😅")
    }
    else{
        let result = amount.value / persons.value;
        document.getElementById('result').innerText = result.toFixed(0)
    }
    
}

function bmi(){
    let height = document.getElementById('height');
    let weight = document.getElementById('weight');

    
    let bmi = weight.value / (height.value * height.value) 
    if(bmi<18.5){
        document.getElementById('result').innerText = "Patla 🍔"
    }
    else if(bmi> 18.5 &&  bmi<24.9){
        document.getElementById('result').innerText = "Sahi h 💪"

    }
    else if(bmi> 25 &&  bmi<29.9){
        document.getElementById('result').innerText = "Mota 🤙"

    }
    else if(bmi> 30 &&  bmi<35){
        document.getElementById('result').innerText = "Bahut mota 😔"

    }
    else{
        document.getElementById('result').innerText = "Extreme motaa 🤯"   
    }
    
    height.value = "";
    weight.value = ""
}


let users = []

function add(){
    let name = document.getElementById('name');
    let email = document.getElementById('email');

    let currentUser = {
        name: name.value,
        email: email.value,
    }
    users.push(currentUser);
    console.log(users)
}