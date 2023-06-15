function mostrarMensaje() {
    var selectElement = document.getElementById("opciones");
    var inputElement = document.getElementById("campo-entrada");
    var mensajeElement = document.getElementById("mensaje");
    var mensajeAntesElement = document.getElementById("mensaje-antes");
    var botonElement = document.getElementById("boton");
    var seleccion = selectElement.value;

    if (seleccion === "") {
        inputElement.style.display = "none";
        mensajeElement.style.display = "none";
        mensajeAntesElement.style.display = "none";
        botonElement.style.display = "none";
    } else {
        inputElement.style.display = "block";
        mensajeElement.style.display = "block";
        mensajeAntesElement.style.display = "block";
        botonElement.style.display = "block";

        if (seleccion === "cancha") {
            inputElement.placeholder = "Código postal";
            mensajeElement.innerHTML = "Si no sabes tu código postal puedes entrar a <a href='http://www.codigopostal.gob.pe/pages/invitado/consulta.jsf'>CÓDIGO POSTAL NACIONAL</a>";
            mensajeAntesElement.innerHTML = "Ingresa Código postal";
            inputElement.pattern = "\\d+";
        } else if (seleccion === "usuario") {
            inputElement.placeholder = "Nombre de usuario";
            mensajeElement.innerHTML = "Asegúrate de ingresar correctamente el nombre de usuario";
            mensajeAntesElement.innerHTML = "Ingresa el nombre de usuario";
            inputElement.pattern = "[A-Za-z0-9]+";
        }
    }
}

function validarFormulario() {
    var inputElement = document.getElementById("campo-entrada");
    if (!inputElement.checkValidity()) {
        return false;
    }
    var formElement = document.getElementById("form-busqueda");
    var seleccion = document.getElementById("opciones").value;
    if (seleccion === "cancha") {
        formElement.action = "resultsCancha.html?codigo=" + inputElement.value;
    } else if (seleccion === "usuario") {
        formElement.action = "resultsUser.html?usuario=" + inputElement.value;
    }
    return true;
}