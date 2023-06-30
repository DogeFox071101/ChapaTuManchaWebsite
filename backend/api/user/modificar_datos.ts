app.post('/api/usuario/info/obtener', async (req: Request, res: Response) => {
    const id_user = req.body.msg
    const persona = await new DAOPersona().seleccionarUno(id_user, CamposBD.A_ID_ALL_USER)
    if (persona) {
        const respuesta = persona.verInfo()
        res.json(respuesta)
    }
})
app.post('/api/usuario/info/modificar', async (req: Request, res: Response) => {
    const data = req.body
    const persona = await new DAOPersona().seleccionarUno(data.id_user, CamposBD.PERSON_ID_PERSON)
    if (persona) {
        await persona.set_first_name(data.first_name)
        await persona.set_last_name(data.last_name)
        res.json({result: 0})
    }
    res.json({result: -1})
})