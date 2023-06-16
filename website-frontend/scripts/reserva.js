
document.addEventListener('DOMContentLoaded', function() {
    // Obtener el formulario de reserva
    const reservationForm = document.getElementById('reservation-form');
  
    // Manejar el evento de envío del formulario
    reservationForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Evitar que se envíe el formulario
  
      // Obtener los valores del formulario
      const fecha = document.getElementById('fecha').value;
      const turno = document.getElementById('turno').value;
  
      // Realizar la lógica de verificación de disponibilidad del turno
      const isTurnoDisponible = verificarDisponibilidadTurno(turno); // Función para verificar la disponibilidad del turno
  
      if (isTurnoDisponible) {
        // Realizar la lógica de reserva aquí
        realizarReserva(fecha, turno); // Función para realizar la reserva
  
        // Mostrar un mensaje de éxito
        const message = document.getElementById('message');
        message.textContent = 'Reserva creada exitosamente';
        message.style.color = 'green';
      } else {
        // Mostrar un mensaje de error si el turno no está disponible
        const message = document.getElementById('message');
        message.textContent = 'El turno seleccionado no está disponible';
        message.style.color = 'red';
      }
    });
  
    // Función para verificar la disponibilidad del turno
    function verificarDisponibilidadTurno(turno) {
      // Lógica para verificar la disponibilidad del turno ,se completara en el sprint 3 

      // Devolver true si el turno está disponible, false en caso contrario

      return true;
    }
  
    // Función para realizar la reserva se completara en el sprint 3 
    function realizarReserva(fecha, turno) {
      // Lógica para realizar la reserva
      // ...

    }
  });
  