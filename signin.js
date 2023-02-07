class usuario {
    constructor(username, password) {
        this.username = username
        this.password = password
    }
    setUsername(newUsername) {
        if (usename != '') {
            this.username = newUsername
        }
    }
    setPassword(newPassword) {
        if (password != '') {
            this.password = newPassword
        }
    }
}

let objectLocalStorage = JSON.parse(localStorage.getItem("usuario"))

if (objectLocalStorage) {
    let usu = new usuario(objectLocalStorage.username, objectLocalStorage.password)
    console.log(usu)
    asignarValoresSignIn(usu)

} else {
    let usu = new usuario('','','','')
    asignarValoresSignIn(usu)
}

document.getElementById("formUser").addEventListener("submit", saveDataSignIn);

// let varUsername = localStorage.getItem('inputEmailSignIn',valueInputUsername)
// let varPassword = localStorage.getItem('inputPasswordSignIn',valueInputPassword)
// let varEmail = localStorage.getItem('inputEmail',valueInputEmail)
// let varPass = localStorage.getItem('inputPasswordSignIn',valueInputPass)


//FUNCION GUARDAR
function saveDataSignIn(e) {
    e.preventDefault();

    let valueInputUsername = document.getElementById("inputEmailSignIn").value
    let valueInputPassword = document.getElementById("inputPasswordSignIn").value
    let valueInputEmail = localStorage.getItem('inputEmail')
    let valueInputPass = localStorage.getItem('inputPassword',)
    
    if (valueInputUsername === valueInputEmail){
        console.log(valueInputUsername)
        alert("Usuario valido")
        if (valueInputPass === valueInputPassword){
            console.log(valueInputPass)
            alert("Contraseña valida")
        }
    }

    localStorage.setItem('inputEmailSignIn',valueInputUsername)
    localStorage.setItem('inputPasswordSignIn',valueInputPassword)
}

//FUNCION ASIGNAR VALORES
function asignarValoresSignIn(usu) {
    if (usu.firstName != '') {
        document.getElementById("inputEmailSignIn").value = usu.username
        document.getElementById("inputPasswordSignIn").value = usu.password
    } else {
        document.getElementById("tituloWelcomeBack").innerHTML = `Hola, por favor dinos tus datos`
    }
}