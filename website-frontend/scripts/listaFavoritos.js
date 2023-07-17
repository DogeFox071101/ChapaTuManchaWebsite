const form = document.getElementById("form_login");

// Obtener datos
async function fetchDataFromDatabase() {
    try {
        const response = await fetch('http://localhost:3001/api/cancha');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al obtener los datos de la base de datos:', error);
        return [];
    }
}

// Generar fila de favoritos
async function generateFavoritesList() {
    const resultsList = document.getElementById("results");

    // Obtener datos de la base de datos
    const databaseData = await fetchDataFromDatabase();

    // Crear fila
    for (const cancha of databaseData) {
        const { imagen, direccion, precio } = cancha;

        const li = document.createElement("li");
        li.className = "cancha";

        const a = document.createElement("a");
        a.href = "canchaProfile.html";

        const img = document.createElement("img");
        img.src = imagen;
        img.alt = "Imagen de la cancha";

        const divNombre = document.createElement("div");
        divNombre.className = "nombre";

        const aNombre = document.createElement("a");
        aNombre.href = "canchaProfile.html";
        aNombre.textContent = cancha.nombre;

        const divDireccion = document.createElement("div");
        divDireccion.className = "direccion";
        divDireccion.textContent = direccion;

        const divPrecio = document.createElement("div");
        divPrecio.className = "precio";
        divPrecio.textContent = precio;

        const divEliminar = document.createElement("div");
        divEliminar.className = "eliminar";

        const buttonEliminar = document.createElement("button");
        buttonEliminar.className = "btn_eliminar";
        buttonEliminar.textContent = "Eliminar";
        buttonEliminar.addEventListener("click", removeFavorite);

        // Agregar fila
        divEliminar.appendChild(buttonEliminar);
        divNombre.appendChild(aNombre);
        a.appendChild(img);
        li.appendChild(a);
        li.appendChild(divNombre);
        li.appendChild(divDireccion);
        li.appendChild(divPrecio);
        li.appendChild(divEliminar);
        resultsList.appendChild(li);
    }
}

// Función para eliminar un favorito
async function removeFavorite(event) {
    const button = event.target;
    const li = button.closest(".cancha");
    const canchaId = li.dataset.id;

    try {
        // Realizar solicitud al servidor para eliminar la cancha
        const response = await fetch(`http://localhost:3001/api/cancha/${canchaId}`, {
            method: "DELETE",
        });

        if (response.ok) {
            // Eliminar el elemento de la lista en el cliente
            li.remove();
        } else {
            console.error("Error al eliminar la cancha de la lista de favoritos");
        }
    } catch (error) {
        console.error("Error en la solicitud para eliminar la cancha:", error);
    }
}

