window.addEventListener("load", async () => {
    const selectDocumentos = document.getElementById("tipoDocumento")
    let response = await fetch('http://localhost:3001/api/json/listOfDocuments', {
        method : 'GET',
        headers : {
            "Content-Type" : "application/json"
        },
    })
    const result = await response.json()
    if (result) {
        for (let tipo_documento of result.tipoDocumentos) {
            const optDocumento = document.createElement("option")
            optDocumento.value = tipo_documento.nombreCorto
            optDocumento.text = tipo_documento.nombre
            selectDocumentos.appendChild(optDocumento)
        }
    }
})