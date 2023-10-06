// 3000 


function test(){
    let inputData = document.getElementById('input')
    console.log(inputData.value);

}


function split(){
    let amount = document.getElementById('amount');
    let persons = document.getElementById('persons');
    let bill = (amount.value / persons.value).toFixed(2);
    document.getElementById('result').innerText = bill
    console.log(bill)
}




function checkBMI(){
    let height = document.getElementById('height')
    let weight = document.getElementById('weight')
    let bmi = weight.value / (height.value * height.value);
    if(bmi< 18.5){
        document.getElementById('result').innerText = 'underweight! 🍔'
    }
    else if(bmi > 18.5 && bmi<24.9){
        document.getElementById('result').innerText = 'Normal 🎉'
    }
    else if(bmi > 25 && bmi<29.9){
        document.getElementById('result').innerText = 'Overweight 🤫'
    }
    else if(bmi > 30 && bmi<35){
        document.getElementById('result').innerText = 'Obesity 🤯'
    }
    else{
        document.getElementById('result').innerText = 'Severe Obesity 🥱'

    }
}