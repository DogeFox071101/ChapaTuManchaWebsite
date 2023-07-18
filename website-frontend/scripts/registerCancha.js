const form = document.getElementById("formulario")
const country = document.getElementById("country")
const state = document.getElementById("state")
const city = document.getElementById("city")
const district = document.getElementById("district")

var result_geodata = null

function resetOptions(selectElement) {
    var i, L = selectElement.options.length - 1;
    for (i = L; i >= 0; i--) {
        selectElement.remove(i);
    }
    const optNull = document.createElement("option")
    optNull.text = "Seleccionar"
    optNull.value = null
    selectElement.appendChild(optNull)
}

window.addEventListener("load", async (event) => {
    const response_geoData = await fetch('http://localhost:3001/api/json/listGeoData', {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        },
    })
    result_geodata = await response_geoData.json()
    if (result_geodata) {
        for (let pais of result_geodata.paises) {
            const optPais = document.createElement("option")
            optPais.text = pais.nombre
            optPais.value = pais.codigo
            country.appendChild(optPais)
        }
    }
})

country.addEventListener("change", (event) => {
    resetOptions(state)
    state.disabled = true
    resetOptions(city)
    city.disabled = true
    resetOptions(district)
    district.disabled = true
    if (country.value != "null") {
        const list_states = []
        for (pais of result_geodata.paises) {
            if (pais.codigo == country.value) {
                for (departamento of pais.regiones) {
                    if (!list_states.includes(departamento.departamento)) {
                        list_states.push(departamento.departamento)
                    }
                }
            }
        }
        for (departamento of list_states) {
            const optDepartamento = document.createElement("option")
            optDepartamento.text = departamento
            optDepartamento.value = departamento
            state.appendChild(optDepartamento)
        }
        state.disabled = false
    }
    else {
        state.disabled = true
    }
})
state.addEventListener("change", (event) => {
    resetOptions(city)
    city.disabled = true
    resetOptions(district)
    district.disabled = true
    if (state.value != "null") {
        const list_cities = []
        for (pais of result_geodata.paises) {
            if (pais.codigo == country.value) {
                for (unidad of pais.regiones) {
                    if (unidad.departamento == state.value && !list_cities.includes(unidad.provincia)) {
                        list_cities.push(unidad.provincia)
                    }
                }
            }
        }
        for (provincia of list_cities) {
            const optProvincia = document.createElement("option")
            optProvincia.text = provincia
            optProvincia.value = provincia
            city.appendChild(optProvincia)
        }
        city.disabled = false
    }
    else {
        city.disabled = true
    }
})
city.addEventListener("change", (event) => {
    resetOptions(district)
    if (city.value != "null") {
        const list_districts = []
        for (pais of result_geodata.paises) {
            if (pais.codigo == country.value) {
                for (unidad of pais.regiones) {
                    if (unidad.departamento == state.value && unidad.provincia == city.value && !list_districts.includes(unidad.distrito)) {
                        list_districts.push(unidad.distrito)
                    }
                }
            }
        }
        for (distrito of list_districts) {
            const optDistrito = document.createElement("option")
            optDistrito.text = distrito
            optDistrito.value = distrito
            district.appendChild(optDistrito)
        }
        district.disabled = false
    }
    else {
        district.disabled = true
    }
})

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const tipo = document.getElementById("tipoCancha").value;
    const aforo = document.getElementById("capacity").value;
    const precio = document.getElementById("price").value;
    const nombre = document.getElementById("name").value;

    const direc = document.getElementById("direccion").value;
    const codpostal = document.getElementById("codpostal").value;
    const numero = document.getElementById("numero").value;

    const mensaje = {
        name: nombre,
        description: tipo,
        capacity: aforo,
        price: precio,
        address_line: direc,
        city: city.options[country.selectedIndex].text,
        doorNumber: numero,
        district: district.options[country.selectedIndex].text,
        state: state.options[country.selectedIndex].text,
        country: country.options[country.selectedIndex].text,
        zip_code: codpostal
    }
    console.log(mensaje)
    let upload = await fetch("http://localhost:3001/api/sportfield/create", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(mensaje)
    })
    const response = await upload.json()
});

