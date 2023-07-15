function mostrarMensaje() {
    var selectElement = document.getElementById("opciones");
    var imagenElement = document.getElementById("imagen");
    var botonElement = document.getElementById("boton");
    var seleccion = selectElement.value;

    if (seleccion === "") {
        imagenElement.style.display = "none";
        botonElement.style.display = "none";
    } else {
        imagenElement.style.display = "block";
        botonElement.style.display = "block";

        if (seleccion === "Yape") {
            imagenElement.src = "https://ruta/imagen_yape.png";
        } else if (seleccion === "Plin") {
            imagenElement.src = "https://ruta/imagen_plin.png";
        }
    }
}

function validarFormulario() {
    var selectElement = document.getElementById("opciones");
    var seleccion = selectElement.value;

    if (seleccion === "") {
        alert("Por favor, seleccione una opción de pago");
        return false;
    }
    return true;
}

function redirigirAIndex() {
    window.location.href = "index.html";
}

document.getElementById("boton").addEventListener("click", redirigirAIndex);


window.addEventListener('load', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const canchaId = urlParams.get("canchaId"); 

    async function obtenerDatosCancha() {
      const mensaje = { msg: canchaId };
  
      let response = await fetch("http://localhost:3001/api/buscar_cancha_id", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(mensaje)
      });
  
      const data = await response.json();
      return data;
    }
  
    const canchaResponse = await obtenerDatosCancha();
  
    if (canchaResponse) {
      const cancha = canchaResponse.msg;
      document.getElementById("nombre_local").textContent = cancha.nombreLocal;
      document.getElementById("direccion").textContent = cancha.direccion;
      document.getElementById("precio").textContent = cancha.precioReserva;
  
      const form = document.getElementById("form-busqueda");
      form.addEventListener("submit", async (event) => {
        event.preventDefault();
  
        // Obtener los valores ingresados en el formulario
        const opcionPago = document.getElementById("opciones").value;
  
        // Lógica adicional para procesar el pago según la opción seleccionada
  
        // Redirigir al index.html
        window.location.href = "index.html";
      });
    }
  });