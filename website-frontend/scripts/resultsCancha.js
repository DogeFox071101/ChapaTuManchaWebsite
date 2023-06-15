const form = document.getElementById("form_login");
const resultsContainer = document.getElementById("results");

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const codigoPostal = document.getElementById("id_field").value;

    const mensaje = { msg: codigoPostal };
    let response = await fetch('http://localhost:3001/api/buscar_canchas', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(mensaje)
    });

    const data = await response.json();
    const canchas = data.msg;

    resultsContainer.innerHTML = ''; // Limpiar los resultados anteriores

    canchas.forEach(cancha => {
        const canchaElement = createCanchaElement(cancha);
        resultsContainer.appendChild(canchaElement);
    });
});

function createCanchaElement(cancha) {
    const canchaContainer = document.createElement("div");
    canchaContainer.classList.add("cancha");

    const imagenCancha = document.createElement("img");
    imagenCancha.src = "../images/logo.png"; // Reemplaza "imagen" con la URL de la imagen real de la cancha
    canchaContainer.appendChild(imagenCancha);

    const infoContainer = document.createElement("div");
    infoContainer.classList.add("info");
    infoContainer.onclick = function() {
        window.location.href = 'canchaProfile.html';
    };

    const nombreCancha = document.createElement("div");
    nombreCancha.classList.add("nombre");
    const nombreLink = document.createElement("a");
    nombreLink.href = 'canchaProfile.html';
    nombreLink.textContent = cancha.nombreLocal;
    nombreCancha.appendChild(nombreLink);
    infoContainer.appendChild(nombreCancha);

    const codigoPostal = document.createElement("div");
    codigoPostal.classList.add("codigo-postal");
    codigoPostal.textContent = "Código Postal: " + cancha.codigoPostal;
    infoContainer.appendChild(codigoPostal);

    canchaContainer.appendChild(infoContainer);

    return canchaContainer;
}
