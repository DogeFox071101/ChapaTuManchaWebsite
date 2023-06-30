app.get('/api/buscar_usuarios', async (req: Request, res: Response) => {
    const nombre = req.body.msg
    const clientes = await new DAOCliente().seleccionarLista(nombre)
    for (const cliente of clientes) 
        res.json({ msg: cliente })
})
app.post('/api/buscar_usuario_id', async (req: Request, res: Response) => {
    const id_user = req.body.msg
    const cliente = await new DAOPersona().seleccionarUno(id_user, CamposBD.A_ID_ALL_USER)
    if (cliente) {
        const respuesta = cliente.verInfo()
        console.log(respuesta)
        res.json(respuesta)
    }
})