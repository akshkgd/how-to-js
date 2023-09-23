function joined(){
    let title = document.getElementById('title');
    let btn = document.getElementById('btn');
    title.innerText = 'Thanks for joining the bootcamp live! 🎉'
    btn.style.display = 'none'
}

function welcome(){
    let userName = document.getElementById('userName')
    console.log(userName.value)
}

function split(){
    let amount = document.getElementById('amount');
    let persons = document.getElementById('persons');

    if(persons.value >= 1){
        let bill = (amount.value / persons.value).toFixed(2);
        let result = bill + " Rs each"
        document.getElementById('result').innerText = result;
    }
}   
let users = []
function add(){
    let name = document.getElementById('name');
    let email = document.getElementById('email')

    let user = {
        name: name.value,
        email: email.value
    }
    users.push(user)
    console.log(users)
}