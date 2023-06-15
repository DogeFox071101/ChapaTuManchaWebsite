const form = document.getElementById("form_login")

form.addEventListener("submit", async (event) => {
    event.preventDefault()
    const id_customer = document.getElementById("id_customer").value

    const mensaje = { msg : id_customer}
    let response = await fetch('http://localhost:3001/api/buscar_usuario_id', {
        method : 'POST',
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(mensaje)
    })
    const data = await response.json()
    const cliente = data.cliente;

    document.getElementById("nombre").textContent = cliente.first_name;
    document.getElementById("apellido").textContent = cliente.last_name;
    document.getElementById("direccion").textContent = cliente.address;
    document.getElementById("celular").textContent = cliente.phone;
    document.getElementById("fecha-nacimiento").textContent = cliente.date_birth;
    document.getElementById("correo").textContent = cliente.email;
})