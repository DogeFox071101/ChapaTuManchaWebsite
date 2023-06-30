app.post('/api/cancha/registrar', async (req: Request, res: Response) => {
    const id_arrendador = req.body.id
    const direccion: Direccion = req.body.direccion
    const arrendador = await new DAOArrendador().seleccionarUno(id_arrendador, CamposBD.LESSOR_ID_LESSOR)
    if (arrendador) {
        await arrendador.registrarCancha(direccion, req.body.sportfield_name, req.body.capacity)
    }
    const estado = 0
    res.json({status : estado})
})