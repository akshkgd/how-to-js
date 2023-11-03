function changeColor(){
    let body = document.getElementById('body');
    body.style.backgroundColor = 'blueviolet'
}
function joined(){
    let title = document.getElementById('title');
    let btn = document.getElementById('btn');
    title.innerText = 'Thanks for joining!!';
    btn.style.display = 'none'
}

function demo(){
    let nameInput = document.getElementById('name');
    document.getElementById('result').innerText = nameInput.value;
}


split=()=>{
    let amount = document.getElementById('amount');
    let persons = document.getElementById('persons');

    let result = (amount.value / persons.value).toFixed(0);
    let finalResult = result + ' Rs each!';

    amount.value = ''
    persons.value = ''
    document.getElementById('result').innerText = finalResult;
}


function bmi(){
    let height = document.getElementById('height');
    let weight = document.getElementById('weight');

    let result = weight.value / (height.value * height.value);
    if(result < 18.5){
        document.getElementById('result').innerText = 'underweight 🍔'
    }
    else if(result> 18.5 && result < 24.9){
        document.getElementById('result').innerText = 'Normal 💪'
    }
    else if(result> 25 && result < 29.9){
        document.getElementById('result').innerText = 'Overweight 🤫'
    }
    else if(result> 30 && result < 35){
        document.getElementById('result').innerText = 'Obesity 😔'
    }
    else{
        document.getElementById('result').innerText = '🤯'

    }

}