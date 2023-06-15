const form = document.getElementById("form_login")

form.addEventListener("submit", async (event) => {
    event.preventDefault()
    const id_customer = document.getElementById("id_field").value

    const mensaje = { msg : id_field}
    let response = await fetch('http://localhost:3001/api/BuscarCancha', {
        method : 'POST',
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(mensaje)
    })
    const data = await response.json()
    
})