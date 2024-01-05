function joined(){
    let title  = document.getElementById('title');
    let btn = document.getElementById('btn');
    title.innerText = 'Thanks for joining the session live!';
    btn.style.display = 'none'
}
function welcome(){
    let name = document.getElementById('name');
    console.log(name.value)
    let welcomeName = document.getElementById('welcomeName');
    welcomeName.innerText = name.value;
    name.value = '';
}


function split(){
    let amount = document.getElementById('amount');
    let persons = document.getElementById('persons');
    if(persons.value == 0){
        bill = 'Add atleast two users to split the  bill!';
        let result = document.getElementById('result');
        result.innerText = bill
    }
    else{
        let bill = (amount.value / persons.value).toFixed(2);
        let result = document.getElementById('result');
        result.innerText = bill
    }
    
    
}

let demo = document.getElementById('demo');
demo.innerHTML = '<h1>This is the intro to DOM!</h1>'