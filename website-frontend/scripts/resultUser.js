const form = document.getElementById("form_login");
const resultsContainer = document.getElementById("results");

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const nombreInput = document.getElementById("campo-entrada");
    const nombre = nombreInput.value;

    const mensaje = { msg: nombre };
    let response = await fetch('http://localhost:3001/api/buscar_usuarios', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(mensaje)
    });

    const data = await response.json();
    const usuarios = data.msg;

    resultsContainer.innerHTML = ''; // Limpiar los resultados anteriores

    usuarios.forEach(usuario => {
        const usuarioElement = createUsuarioElement(usuario);
        resultsContainer.appendChild(usuarioElement);
    });
});

function createUsuarioElement(usuario) {
    const usuarioContainer = document.createElement("div");
    usuarioContainer.classList.add("usuario");

    const infoContainer = document.createElement("div");
    infoContainer.classList.add("info");
    infoContainer.onclick = function() {
        window.location.href = 'userProfile.html';
    };

    const nombreUsuario = document.createElement("div");
    nombreUsuario.classList.add("nombre");
    const nombreLink = document.createElement("a");
    nombreLink.href = 'UsuarioProfile.html';
    nombreLink.textContent = usuario.nombreLocal;
    nombreUsuario.appendChild(nombreLink);
    infoContainer.appendChild(nombreUsuario);

    const nombre = document.createElement("div");
    nombre.classList.add("nombre");
    nombre.textContent = "nombre: " + usuario.nombre;
    infoContainer.appendChild(nombre);

    usuarioContainer.appendChild(infoContainer);

    return usuarioContainer;
}
