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

let cancha = await fetch('http://localhost:3001/api/cancha/getinfo', {
  method: 'POST',
  headers: {
      "Content-Type": "application/json"
  },
  body: JSON.stringify(idCancha)
})
    
let idUser = await fetch('http://localhost:3001/api/usuario/getid', {
  method: 'GET',
  headers: {
      "Content-Type": "application/json"
  }
})
document.getElementById("nombre_local").value = cancha.address;
document.getElementById("direccion").value = cancha.name;
document.getElementById("precio").value = cancha.price;

await fetch("http://localhost:3001/api/cancha/reserva", {
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
});

