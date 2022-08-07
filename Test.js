

function reg(e){
    event.preventDefault();

    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    var Fname = document.getElementById("username").value
    var Lname = document.getElementById("username2").value
    var phone_num = document.getElementById("Phone").value
    var Address = document.getElementById("Address").value

    var account = {
        email: email,
        password: password,
        firstname: Fname,
        lastname: Lname,
        phone: phone_num,
        Address: Address,
    };

    var json = JSON.stringify(account);
    localStorage.setItem(email, json);
    console.log ('account registered!')

}

function login(e) {
event.preventDefault();

var email = document.getElementById("email").value
var password = document.getElementById("password").value
var result = document.getElementById("result")

var account = localStorage.getItem(email);
var data = JSON.parse(account);
console.log(data);

if (account == null){
    result.innerHTML = 'Incorrect'
} else if (email == data.email && password == data.password) {
    document.location.href="home.html";
} else {
    result.innerHTML = "Inncorect password";
}

}



function pet(e) {
    event.preventDefault();

    const name = document.getElementById('petname').value;
    const type = document.getElementById('animal').value;
    const breed = document.getElementById('breed').value;
    const age = document.getElementById('age').value;
    const color = document.getElementById('color').value;
    const gender = document.getElementById('boy').value;
    const microchip = document.getElementById('micro').value;
    const date_lost = document.getElementById('date').value;
    const last_loco = document.getElementById('loco').value;
    const picture = document.getElementById('chooseFile').value;

    localStorage.setItem("petname", name)
    localStorage.setItem("animal", type)
    localStorage.setItem("breed", breed)
    localStorage.setItem("age", age)
    localStorage.setItem("color", color)
    localStorage.setItem("boy", gender)
    localStorage.setItem("micro", microchip)
    localStorage.setItem("date", date_lost)
    localStorage.setItem("loco", last_loco)
    localStorage.setItem("chooseFile", picture)
    document.location.href="receipt.html";
}

window.addEventListener('load', (e) => {

    e.preventDefault();

        const name = localStorage.getItem("petname")
        const type = localStorage.getItem("animal")
        const breed = localStorage.getItem("breed")
        const age = localStorage.getItem("age")
        const color = localStorage.getItem("color")
         const gender = localStorage.getItem("boy")
        const microchip = localStorage.getItem("micro")
        const date_lost = localStorage.getItem("date")
        const last_loco = localStorage.getItem("loco")
       

        document.getElementById('pet-name').innerHTML = name
        document.getElementById('ani-type').innerHTML = type
        document.getElementById('ani-breed').innerHTML = breed
        document.getElementById('ani-age').innerHTML = age
        document.getElementById('ani-color').innerHTML = color
        document.getElementById('gender').innerHTML = gender
        document.getElementById('microchip').innerHTML = microchip
        document.getElementById('date').innerHTML = date_lost
        document.getElementById('locoate').innerHTML = last_loco
        document.getElementById('pic').innerHTML = picture

})

function hide(){
    document.getElementById('rev').style.height='0px'
    document.getElementById('rev').style.display='none'
}



