const form = document.getElementById("formulario")
const message = document.getElementById("message");

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const tipo = document.getElementById("tipoCancha").value;
    const aforo = document.getElementById("capacidad").value;
    const precio = document.getElementById("price").value;
    const nombre = document.getElementById("name").value;

    const direc = document.getElementById("direccion").value;
    const ciudad = document.getElementById("ciudad").value;
    const provincia = document.getElementById("provincia").value;
    const departamento = document.getElementById("departamento").value;
    const pais = document.getElementById("pais").value;
    const codpostal = document.getElementById("codpostal").value;
    const numero = document.getElementById("numero").value;

    let req_direc = await fetch("http://localhost:3001/api/direccion/register", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            address_line: direc,
            city: ciudad,
            doorNumber: numero,
            district: provincia,
            state: departamento,
            country: pais,
            zip_code: codpostal
        })
    })

    const res_direc = await req_direc.json()

    let upload = await fetch("http://localhost:3001/api/cancha/register", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        
        body: JSON.stringify({
            name: nombre,
            description: tipo,
            capacity: aforo,
            address: res_direc,
            price: precio
        })
    })

});

