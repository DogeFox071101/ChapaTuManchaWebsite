const iniciar_sesión = () => {
    const correo = document.getElementById("email").value
    const passwd = document.getElementById("password").value
    fetch('localhost:3001/api/login',{
        method : 'GET',
        body : JSON.stringify({
            id : correo,
            msg : passwd
        }),
        headers : {
            'Content-Type' : 'application/json'
        }
    }).then(response => response.text()
    ).then(data => {
        console.log(data)
    })
}