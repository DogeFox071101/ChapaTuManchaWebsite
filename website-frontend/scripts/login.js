const iniciar_sesion = async () => {
    const correo = document.getElementById("email").value
    const passwd = document.getElementById("password").value

    const mensaje = { msg : passwd }
    let response = await fetch('http://localhost:3001/api/hash', {
        method : 'POST',
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(mensaje)
    })
    const data = await response.json()
    const mensaje2 = { id : correo, msg : data.msg }
    let response2 = await fetch('http://localhost:3001/api/login',{
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(mensaje2)  
    })
    const data2 = await response2.json()
    if(data2 != -1) {
        localStorage.setItem("lastDataLogin", JSON.stringify(data2))
        location.href = "./inicio.html"
    }
}