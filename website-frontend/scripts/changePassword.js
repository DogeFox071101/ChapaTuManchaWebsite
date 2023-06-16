const form = document.getElementById("password-form");
const message = document.getElementById("message");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const id_user = localStorage.getItem("id_user")
    const newPassword = document.getElementById("current-password-input").value;
    const mensaje_1 = { msg: newPassword }
    let response = await fetch('http://localhost:3001/api/hash', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(mensaje_1)
    })
    const data_1 = await response.json()
    const mensaje2 = { id: id_user, msg: data_1.msg }
    let response2 = await fetch('http://localhost:3001/api/cambiar/contrasena', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(mensaje2)
    })
    const data_2 = await response2.json()
    if (data_2.result === 0) {
        // Confirmar cambio de contraseña
        message.textContent = "¡Contraseña cambiada exitosamente!";
        location.href = "./"
    }



});