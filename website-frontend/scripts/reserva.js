const form = document.getElementById("reservation-form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  // Obtener los valores ingresados en el formulario
  const nombreCliente = document.getElementById("nombre").value;
  const fechaHora = new Date(document.getElementById("fecha").value);
  const turno = document.getElementById("Horario").value;

  const mensaje = {
    nombreCliente,
    fechaHora,
    turno
  };

  try {
    let response = await fetch("http://localhost:3001/api/reservar_cancha", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(mensaje)
    });

    const data = await response.json();
    const reservaExitosa = data.reservaExitosa;

    if (reservaExitosa) {
      // Mostrar mensaje de éxito
      alert("¡Reserva realizada con éxito!");

      // Obtener datos adicionales de la cancha desde el backend
      const idCancha = data.idCancha;
      const canchaResponse = await obtenerCanchaPorId(idCancha);

      // Obtener datos adicionales del arrendador desde el backend
      const idArrendador = canchaResponse.msg.idArrendador;
      const arrendadorResponse = await obtenerUsuarioPorId(idArrendador);

      if (canchaResponse && arrendadorResponse) {
        const cancha = canchaResponse.msg;
        const arrendador = arrendadorResponse.msg;

        // Actualizar la información de la cancha en el contenedor
        document.getElementById("cancha-info").style.display = "block";
        document.getElementById("nombre_local").textContent = cancha.nombreLocal;
        document.getElementById("direccion").textContent = cancha.direccion;
        document.getElementById("nombre_Arrendador").textContent = arrendador.nombreArrendador;
        document.getElementById("precio").textContent = cancha.precioReserva;
      }
    } else {
      // Mostrar mensaje de error
      alert("La cancha no está disponible en el horario solicitado. Por favor, elige otro horario.");
    }
  } catch (error) {
    // Mostrar mensaje de error en caso de fallo de la solicitud
    alert("Error al procesar la reserva. Por favor, inténtalo de nuevo más tarde.");
    console.error("Error al realizar la reserva:", error);
  }
});

async function obtenerCanchaPorId(id) {
  const mensaje = { msg: id };

  try {
    let response = await fetch("http://localhost:3001/api/buscar_cancha_id", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(mensaje)
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener la información de la cancha:", error);
    return null;
  }
}

async function obtenerUsuarioPorId(id) {
  const mensaje = { msg: id };

  try {
    let response = await fetch("http://localhost:3001/api/buscar_usuario_id", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(mensaje)
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener la información del arrendador:", error);
    return null;
  }
}
