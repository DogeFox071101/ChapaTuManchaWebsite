const form_update_usuario = document.getElementById("form_update_usuario")
const dateBirth = document.getElementById("date_birth")
const document_type = document.getElementById("document_type")
const document_num = document.getElementById("document_num")
const address_line = document.getElementById("address_line")
const address_ext = document.getElementById("address_ext")
const door_number = document.getElementById("door_number")
const zip_code = document.getElementById("zip_code")
const country = document.getElementById("country")
const state = document.getElementById("state")
const city = document.getElementById("city")
const district = document.getElementById("district")
const prefix = document.getElementById("prefix")
const phone_number = document.getElementById("phone_number")
const is_fixed = document.getElementById("is_fixed")

const yapePlin = document.getElementById("yapePlin")
const transfer = document.getElementById("transfer")
const cash = document.getElementById("cash")
const paypal = document.getElementById("paypal")

var result = null
var result_geodata = null


function resetOptions(selectElement) {
    var i, L = selectElement.options.length - 1;
    for(i = L; i >= 0; i--) {
       selectElement.remove(i);
    }
    const optNull = document.createElement("option")
    optNull.text = "Seleccionar"
    optNull.value = null
    selectElement.appendChild(optNull)
 }

window.addEventListener("load", async (event) => {
    const response = await fetch('http://localhost:3001/api/json/listOfDocuments', {
        method : 'GET',
        headers : {
            "Content-Type" : "application/json"
        },
    })
    result = await response.json()
    if (result) {
        for (let tipo_documento of result.tipoDocumentos) {
            const optDocumento = document.createElement("option")
            optDocumento.value = tipo_documento.nombreCorto
            optDocumento.text = tipo_documento.nombre
            document_type.appendChild(optDocumento)
        }
    }
    const response_geoData = await fetch('http://localhost:3001/api/json/listGeoData', {
        method : 'GET',
        headers : {
            "Content-Type" : "application/json"
        },
    })
    result_geodata = await response_geoData.json()
    if (result_geodata) {
        for (let pais of result_geodata.paises) {
            const optPrefix = document.createElement("option")
            optPrefix.text = pais.prefijoTel
            optPrefix.value = pais.codigo
            prefix.appendChild(optPrefix)
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
        prefix.value = country.value
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
form_update_usuario.addEventListener("submit", async (event) => {
    event.preventDefault()
    const payment_methods = () => {
        const array = []
        if (yapePlin.checked){
            array.push("Yape / Plin")
        }
        if(transfer.checked){
            array.push("Transferencia")
        }
        if(cash.checked) {
            array.push("Efectivo")
        }
        if(paypal.checked){
            array.push("PayPal")
        }
        return array
    }
    const id_user = localStorage.getItem("id_user")
    const mensaje = {
        id_user : id_user,
        date_birth : dateBirth.value,
        document_type : document_type.value,
        document_num : parseInt(document_num.value),
        payment_methods : payment_methods(),
        address_line : address_line.value,
        address_ext : address_ext.value,
        door_number : parseInt(door_number.value),
        zip_code : parseInt(zip_code.value),
        country : country.options[country.selectedIndex].text,
        state : state.value,
        city : city.value,
        district : district.value,
        prefix : prefix.options[prefix.selectedIndex].text,
        phone_number : parseInt(phone_number.value),
        is_fixed : is_fixed.checked
    }
    let response = await fetch('http://localhost:3001/api/user/completeData', {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(mensaje)
    })
    const data = await response.json()
    if (data.result) {
        location.href = "./registerCancha.html"
    }
})
