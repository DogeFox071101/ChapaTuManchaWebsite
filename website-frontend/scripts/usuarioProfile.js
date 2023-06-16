const id_user = localStorage.getItem("id_user")
console.log(id_user)
window.addEventListener("load", async() => {
    const mensaje = { msg : id_user }
    let response = await fetch('http://localhost:3001/api/buscar_usuario_id', {
        method : 'POST',
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(mensaje)
    })
    const data = await response.json()

    document.getElementById("nombre").innerHTML = data.first_name;
    document.getElementById("apellido").innerHTML = data.last_name;
    document.getElementById("direccion").innerHTML = data.direccion.direccion + ", " + data.direccion.ciudad + ", " + data.direccion.pais, + ".";
    document.getElementById("celular").innerHTML = data.phone;
    document.getElementById("fecha-nacimiento").innerHTML = data.date_birth;
    document.getElementById("correo").innerHTML = data.email;
})