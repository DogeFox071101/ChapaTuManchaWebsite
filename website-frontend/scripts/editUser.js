const id_user = localStorage.getItem("id_user")

const input_nombre = document.getElementById("nombre");
const input_apellido = document.getElementById("apellido");
//const input_celular = document.getElementById("celular").value = data.phone;
//const input_fecha_nacimiento = document.getElementById("fecha-nacimiento").value = data.date_birth;
const input_correo = document.getElementById("correo");

window.addEventListener("load", async () => {
    const mensaje = { msg : id_user }
    let response = await fetch('http://localhost:3001/api/usuario/info/obtener', {
        method : 'POST',
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(mensaje)
    })
    const data = await response.json()

    input_nombre.value = data.first_name;
    input_apellido.value = data.last_name;
    input_correo.value = data.email;
    //document.getElementById("celular").value = data.phone;
    //document.getElementById("fecha-nacimiento").value = data.date_birth;
})

const form = document.getElementById("form_update_usuario")
form.addEventListener("submit", async () => {
    const mensaje = {
        id_user : id_user,
        first_name : input_nombre.value,
        last_name : input_apellido.value
    }
    let response = await fetch('http://localhost:3001/api/usuario/info/modificar', {
        method : 'POST',
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(mensaje)
    })
    const data = await response.json()
    if (data.result === 0) {
        console.log("success")
        location.href = "./usuarioProfile.html"
    }
})