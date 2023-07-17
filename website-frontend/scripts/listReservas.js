// Función para obtener datos de la base de datos
async function fetchDataFromDatabase() {
    try {
        const response = await fetch('http://localhost:3001/dao/bookings');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al obtener los datos de la base de datos:', error);
        return [];
    }
}

// Cancelar una reserva
async function removeReserva(event) {
    const button = event.target;
    const li = button.closest(".cancha");
    const reservaId = li.dataset.id; 

    try {
        // Realizar solicitud al servidor para cancelar la reserva
        const response = await fetch(`http://localhost:3001/dao/bookings/${reservaId}`, {
            method: "DELETE",
        });

        if (response.ok) {
            // Eliminar el elemento de la lista en el cliente
            li.remove();
        } else {
            console.error("Error al cancelar la reserva");
        }
    } catch (error) {
        console.error("Error en la solicitud para cancelar la reserva:", error);
    }
}

// Generar filas de la lista reservas
async function generateReservasList() {
    const resultsList = document.getElementById("results");

    // Obtener datos 
    const databaseData = await fetchDataFromDatabase();

    // Crear fila
    for (const reserva of databaseData) {
        const { imagen, nombre, direccion, fecha, hora } = reserva;

        const li = document.createElement("li");
        li.className = "cancha";
        li.dataset.id = reserva.id; 

        const a = document.createElement("a");
        a.href = "canchaProfile.html";

        const img = document.createElement("img");
        img.src = imagen;
        img.alt = "Imagen de la cancha";

        const divNombre = document.createElement("div");
        divNombre.className = "nombre";

        const aNombre = document.createElement("a");
        aNombre.href = "canchaProfile.html";
        aNombre.textContent = nombre;

        const divDireccion = document.createElement("div");
        divDireccion.className = "direccion";
        divDireccion.textContent = direccion;

        const divFechaHora = document.createElement("div");
        divFechaHora.className = "fecha_hora";
        divFechaHora.textContent = `${fecha} - ${hora}`;

        const divEliminar = document.createElement("div");
        divEliminar.className = "eliminar";

        const buttonEliminar = document.createElement("button");
        buttonEliminar.className = "btn_eliminar";
        buttonEliminar.textContent = "Cancelar";
        buttonEliminar.addEventListener("click", removeReserva);

        // Agregar fila
        divEliminar.appendChild(buttonEliminar);
        divNombre.appendChild(aNombre);
        a.appendChild(img);
        li.appendChild(a);
        li.appendChild(divNombre);
        li.appendChild(divDireccion);
        li.appendChild(divFechaHora);
        li.appendChild(divEliminar);
        resultsList.appendChild(li);
    }
}
