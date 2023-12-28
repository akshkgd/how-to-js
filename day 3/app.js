// DOM


function joined(){
    let title = document.getElementById('title');
    let btn = document.getElementById('btn')
    title.innerText = 'Thanks for joining the session! 🎉';
    btn.style.display = 'none'
}


function checkData(){
    let val = document.getElementById('input');
    console.log(val.value)
}

function split(){
    let amount = document.getElementById('amount');
    let persons = document.getElementById('persons');

    let bill = (amount.value / persons.value).toFixed(2);
    let result = bill + ' rs each!'
    document.getElementById('result').innerText = result;
}


function bmi(){
    let height = document.getElementById('height');
    let weight = document.getElementById('weight');

    let cal = weight.value / (height.value * height.value);
    if(cal< 18.5){
        document.getElementById('result').innerText = 'Underweight, enjoy the party!'
    }
    else if(cal>= 18.5 && cal<=24.9){
        document.getElementById('result').innerText = 'Normal Weight, enjoy the party!'
    }
    else if(cal>= 25 && cal<=29.9){
        document.getElementById('result').innerText = 'Overweight, try to avoid party!'
    }
    else if(cal>= 30 && cal<=35){
        document.getElementById('result').innerText = 'Obesity, avoid the party!'
    }
    else{
        document.getElementById('result').innerText = 'Severe Obesity, Do what ever you want!'
    }
    height.value = "";
    weight.value = ""
}

let demo = document.getElementById('demo')
demo.innerHTML = '<h1>This is a heading</h1>'