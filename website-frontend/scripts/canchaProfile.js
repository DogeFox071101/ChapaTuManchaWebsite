const form = document.getElementById("form_login")

form.addEventListener("submit", async (event) => {
    event.preventDefault()
    const id_field = document.getElementById("id_field").value

    const mensaje = { msg : id_field}
    let response = await fetch('http://localhost:3001/api/buscar_cancha', {
        method : 'POST',
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(mensaje)
    })
    const data = await response.json()
    const cancha = data.cliente;

    document.getElementById("nombre_cancha").textContent = cancha.nombreLocal;
    document.getElementById("aforo").textContent = cancha.aforo;
    document.getElementById("direccion").textContent = cancha.direccion;
    document.getElementById("precio").textContent = cancha.precio;
    document.getElementById("tipo").textContent = cancha.deportesDisponibles;
})