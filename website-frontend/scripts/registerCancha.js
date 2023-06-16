const form = document.getElementById("formulario")

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const tipo = document.getElementById("tipoCancha").value;
    const aforo = document.getElementById("capacidad").value;
    const direccion = document.getElementById("address").value;
    const precio = document.getElementById("price").value;

    message.textContent = "Registro exitoso!!!";
})