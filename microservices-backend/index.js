const express = require('express');
const Usuario = require("./objects/usuario")
const app = express()

app.use(express.json());

app.get('/api/signin', async (req, res) => {
    const data = req.body
    const usuario_nuevo = new Usuario("null", data.nombre, data.correo, data.passwd, data.arrendador, data.documento, data.celular)
    const salida = await usuario_nuevo.crear_cuenta()
    res.json(salida)
})
app.get('/api/register_cancha', (req, res) => {
    const data = req.body
})
app.get('/api/login', (req, res) => {
    const data = req.body
})
app.get('/api/restore_password', (req, res) => {
    const data = req.body
})
app.get('/api/logout', (req, res) => {
    const data = req.body
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})