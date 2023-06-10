const form = document.getElementById("password-form");
const message = document.getElementById("message");

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    let req_pw = await fetch("http://localhost:3001/api/hash", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ msg : document.getElementById("password").value })
    })
    const res_pw = await req_pw.json()
    let upload = await fetch("http://localhost:3001/api/crear/cliente", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            apellidos: document.getElementById("apellidos").value,
            nombres: document.getElementById("nombres").value,
            email: document.getElementById("email").value,
            password: res_pw.msg,
            celular: document.getElementById("celular").value,
            fechaNacimiento: document.getElementById("fechaNacimiento").value,
            tipoDocumento: document.getElementById("tipoDocumento").value,
            numDocumento: document.getElementById("numDocumento").value,
            direccion: document.getElementById("direccion").value,
            codigoPostal: document.getElementById("codigoPostal").value,
            ciudad: document.getElementById("ciudad").value,
            provincia: document.getElementById("provincia").value,
            departamento: document.getElementById("departamento").value,
            pais: document.getElementById("pais").value
        })
    })
    const respuesta = await upload.json()
    console.log(respuesta)
    localStorage.setItem("id", respuesta.id, "a")
    localStorage.setItem("tokenSession", respuesta.tokenSession)
    location.href = "./"
});