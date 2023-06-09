const form = document.getElementById("password-form");
const message = document.getElementById("message");

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    
    const apellidos = document.getElementById("apellidos").value
    const nombres = document.getElementById("nombres").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const celular = document.getElementById("celular").value
    const tipoDocumento = document.getElementById("tipoDocumento").value
    const numDocumento = document.getElementById("numDocumento").value
    const direccion = document.getElementById("direccion").value
    const codigoPostal = document.getElementById("codigoPostal").value
    const ciudad = document.getElementById("ciudad").value
    const provincia = document.getElementById("provincia").value
    const departamento = document.getElementById("departamento").value
    const pais = document.getElementById("pais").value

    const data = {
        apellidos: apellidos,
        nombres: nombres,
        email: email,
        password: password,
        celular: celular,
        tipoDocumento: tipoDocumento,
        numDocumento: numDocumento,
        direccion: direccion,
        codigoPostal: codigoPostal,
        ciudad: ciudad,
        provincia: provincia,
        departamento: departamento,
        pais: pais
    }

    let response = await fetch("http://localhost:3001/api/crear/cliente", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    const respuesta = await response.json()
    console.log(respuesta)
});