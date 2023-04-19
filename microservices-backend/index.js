const express = require('express');
const Usuario = require("./objects/usuario")
const app = express()

app.use(express.json());

app.get('/api/signin', (req, res) => {
    const data = req.body
    const usuario_nuevo = new Usuario("null", data.nombre, data.correo, data.passwd, data.documento, data.celular)
    usuario_nuevo.crear_cuenta()
    res.json(data)
})


const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})