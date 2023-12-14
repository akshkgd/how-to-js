// DOM => document object model

function joined(){
   let title = document.getElementById('title');
   title.innerText = 'Thanks for joining the bootcamp!'
   let btn = document.getElementById('btn');
   btn.style.display = 'none'
}


function welcome(){
    let name = document.getElementById('name');
    let result = document.getElementById('result');
    result.innerText = name.value;
}


function split(){
    let amount = document.getElementById('amount');
    let persons = document.getElementById('persons')
    let result = (amount.value / persons.value).toFixed(2)
    document.getElementById('result').innerText = result;


    amount.value = ''
    persons.value = ''

}

function bmi(){
    let height = document.getElementById('height');
    let weight = document.getElementById('weight');

    height = height.value / 100;
    let result = weight.value/ (height * height);
    if(result < 18.5){
        document.getElementById('result').innerText = 'Underweight!'
    }
    else if(result>18.5 && result <24.9){
        document.getElementById('result').innerText = 'Normal!'
    }
    else if(result>25 && result <29.9){
        document.getElementById('result').innerText = 'overweight!'
    }
    else if(result>30 && result <35){
        document.getElementById('result').innerText = 'Obesity!'
    }
    else{
        document.getElementById('result').innerText = 'Severe Obesity!'

    }
}