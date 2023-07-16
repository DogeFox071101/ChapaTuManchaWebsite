const form = document.getElementById("form_login")

form.addEventListener("submit", async (event) => {
    event.preventDefault()
    const correo = document.getElementById("email").value
    const passwd = document.getElementById("password").value
    let response_token = await fetch('http://localhost:3001/api/security/token', {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        }
    })
    const data_token = await response_token.json()
    const token_session = data_token.msg
    const mensaje = { msg: passwd }
    let response = await fetch('http://localhost:3001/api/security/hash', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(mensaje)
    })
    const data = await response.json()
    const mensaje_login = { id: correo, msg: data.msg, token_session: token_session }
    let response_login = await fetch('http://localhost:3001/api/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(mensaje_login)
    })
    const data_login = await response_login.json()
    if (data_login && data_login.is_allowed) {
        //localStorage.setItem("id_user", data_login.id_user)
        //localStorage.setItem("token_session", data_login.token_session)
        //location.href = "./"
    }
})