class user {
    constructor(firstName, lastName, email, password) {
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
        this.password = password
        
    }
    setFirstName(newFirstName) {
        if (firstName != '') {
            this.firstName = newName
        }
    }
    setLastName(newLastName) {
        if (lastName != '') {
            this.lastName = newLastName
        }
    }
    setEmail(newEmail) {
        if (email != '') {
            this.email = newEmail
        }
    }
    setPassword(newPassword) {
        if (password != '') {
            this.password = newPassword
        }
    }
}

let objectLocalStorage = JSON.parse(localStorage.getItem("user"))

if (objectLocalStorage) {
    let usuario = new user(objectLocalStorage.firstName, objectLocalStorage.lastName, objectLocalStorage.email, objectLocalStorage.password)
    console.log(usuario)
    asignarValores(usuario)

} else {
    let usuario = new user('','','','')
    asignarValores(usuario)
}

//BOTON CLEAR
let btnClear = document.querySelector('button')
let inputs = document.querySelectorAll('input')
btnClear.addEventListener('click',() => {
    inputs.forEach(input => input.value = '')
})


document.getElementById("formSaveData").addEventListener("submit", saveData);
//FUNNCION GUARDAR
function saveData(e) {
    e.preventDefault();

    let valueInputFirstName = document.getElementById("inputFirstName").value
    let valueInputLastName = document.getElementById("inputLastName").value
    let valueInputEmail = document.getElementById("inputEmail").value
    let valueInputPassword = document.getElementById("inputPassword").value

    // localStorage.setItem("user", JSON.stringify({
    //     firstName: valueInputFirstName,
    //     lastName: valueInputLastName,
    //     email: valueInputEmail,
    //     password: valueInputPassword,
    // }))
    localStorage.setItem('inputFirstName',valueInputFirstName)
    localStorage.setItem('inputLastName',valueInputLastName)
    localStorage.setItem('inputEmail',valueInputEmail)
    localStorage.setItem('inputPassword',valueInputPassword)

}

function asignarValores(usuario) {
    if (usuario.firstName != '') {
        document.getElementById("tituloWelcome").innerHTML = `Welcome back ${usuario.firstName}, aqui puedes modificar tus datos`
        document.getElementById("inputFirstName").value = usuario.firstName
        document.getElementById("inputLastName").value = usuario.lastName
        document.getElementById("inputEmail").value = usuario.email
    } else {
        document.getElementById("tituloWelcome").innerHTML = `Welcome! Please fill in this form`
    }
}