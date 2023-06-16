const form = document.getElementById("form_login")

form.addEventListener("submit", async (event) => {
    event.preventDefault()
    const correo = document.getElementById("email").value
    const passwd = document.getElementById("password").value

    let response_token = await fetch('http://localhost:3001/api/helper/token', {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        }
    })
    const data_token = await response_token.json()
    const token_session = data_token.msg

    const mensaje = { msg: passwd }
    let response = await fetch('http://localhost:3001/api/helper/hash', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(mensaje)
    })
    const data = await response.json()
    const mensaje2 = { id: correo, msg: data.msg, token_session: token_session }
    let response2 = await fetch('http://localhost:3001/api/usuario/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(mensaje2)
    })
    const data2 = await response2.json()
    if (data2 && data2.is_allowed) {
        localStorage.setItem("id_user", data2.id_user)
        localStorage.setItem("token_session", data2.token_session)
        location.href = "./"
    }
})