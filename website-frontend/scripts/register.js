const form = document.getElementById("password-form");
const message = document.getElementById("message");

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    let req_pw = await fetch("http://localhost:3001/api/helper/hash", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ msg : document.getElementById("password").value })
    })
    const res_pw = await req_pw.json()
    let upload = await fetch("http://localhost:3001/api/usuario/crear", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            last_name: document.getElementById("apellidos").value,
            first_name: document.getElementById("nombres").value,
            email: document.getElementById("email").value,
            passwd: res_pw.msg,
            phone: document.getElementById("celular").value,
            date_birth: document.getElementById("fechaNacimiento").value,
            document_type: document.getElementById("tipoDocumento").value,
            document_num: document.getElementById("numDocumento").value,
            direccion : {
                direccion: document.getElementById("direccion").value,
                codigoPostal: document.getElementById("codigoPostal").value,
                ciudad: document.getElementById("ciudad").value,
                provincia: document.getElementById("provincia").value,
                departamento: document.getElementById("departamento").value,
                pais: document.getElementById("pais").value
            }
        })
    })
    const respuesta = await upload.json()
    
    console.log(respuesta)
    localStorage.setItem("id_user", respuesta.id_user)
    localStorage.setItem("token_session", respuesta.token_session)
    location.href = "./"
});