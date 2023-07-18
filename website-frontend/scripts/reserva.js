const form = document.getElementById("reservation-form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  // Obtener los valores ingresados en el formulario
  const fecha = new Date(document.getElementById("fecha").value);
  const inicio = document.getElementById("inicio").value;
  const fin = document.getElementById("fin").value;
  
  let idCancha = await fetch('http://localhost:3001/api/cancha/getid', {
    method: 'GET',
    headers: {
        "Content-Type": "application/json"
    }
})
    
let idUser = await fetch('http://localhost:3001/api/usuario/getid', {
  method: 'GET',
  headers: {
      "Content-Type": "application/json"
  }
})

  try {
    let response = await fetch("http://localhost:3001/api/cancha/reserva", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        dateBooking:fecha,
        timeStart: inicio,
        timeEnd: fin,
        sportfireldId: idCancha,
        userId: idUser
      })
    });

    const data = await response.json();
    const reservaExitosa = data.reservaExitosa;

    if (reservaExitosa) {
      // Mostrar mensaje de éxito
      alert("¡Reserva realizada con éxito!");


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

