// DOM
// Bill split
// bmi application


function fetchName(){
    let name = document.getElementById('name');
    console.log(name.value)
}

function split(){
    let amount = document.getElementById('amount');
    let persons = document.getElementById('persons');

    let result = amount.value / persons.value;
    document.getElementById('result').innerText ="₹" + result.toFixed(2);
}

function bmi(){
    let height = document.getElementById('height');
    let weight = document.getElementById('weight');

    let result = weight.value/ (height.value * height.value);
    if(result<18.5){
        document.getElementById('BMIresult').innerText = 'Underweight 🍔'
    }
    else if(result> 18.5 && result < 24.9){
        document.getElementById('BMIresult').innerText = 'Normal 💪'
    }
    else if(result> 25 && result < 29.9){
        document.getElementById('BMIresult').innerText = 'Overweight 🤫 '
    }
    else if(result> 30 && result < 35){
        document.getElementById('BMIresult').innerText = 'Obesity 😔 '
    }
    else{
        document.getElementById('BMIresult').innerText = 'Severe Obesity 🤯 '

    }
    
    height.value = '';
    weight.value = '';
    
}