const form = document.getElementById("password-form");
const message = document.getElementById("message");

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    let req_pw = await fetch("http://localhost:3001/api/security/hash", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ msg : document.getElementById("password").value })
    })
    const res_pw = await req_pw.json()
    let upload = await fetch("http://localhost:3001/api/user/create", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            first_name: document.getElementById("nombres").value,
            last_name: document.getElementById("apellidos").value,
            email: document.getElementById("email").value,
            password: res_pw.msg
        })
    })
    const respuesta = await upload.json()
    
    console.log(respuesta)
    localStorage.setItem("id_user", respuesta.id_user)
    localStorage.setItem("token_session", respuesta.token_session)
    location.href = "./"
});