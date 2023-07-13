const form = document.getElementById("reservation-form");
const resultsContainer = document.getElementById("results");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  // Obtener los valores ingresados en el formulario
  const nombreCliente = document.getElementById("nombre").value;
  const fechaHora = new Date(document.getElementById("fecha").value);
  const turno = document.getElementById("turno").value;

  const mensaje = {
    nombreCliente,
    fechaHora,
    turno
  };

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
      
      // Actualizar los datos en el formulario
      document.getElementById("nombre_local").textContent = cancha.nombreLocal;
      document.getElementById("direccion").textContent = cancha.direccion;
      document.getElementById("nombre_Arrendador").textContent = arrendador.nombreArrendador;
      document.getElementById("precio").textContent = cancha.precioReserva;
    }
  } else {
    // Mostrar mensaje de error
    alert("La cancha no está disponible en el horario solicitado. Por favor, elige otro horario.");
  }
});

async function obtenerCanchaPorId(id) {
  const mensaje = { msg: id };

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

async function obtenerUsuarioPorId(id) {
  const mensaje = { msg: id };

  let response = await fetch("http://localhost:3001/api/buscar_usuario_id", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(mensaje)
  });

  const data = await response.json();
  return data;
}
