app.post('/api/usuario/contrasena/cambiar', async (req: Request, res: Response) => {
    const data = req.body
    const persona = await new DAOPersona().seleccionarUno(data.id_user, CamposBD.PERSON_ID_PERSON)
    if (data.mode === "consulta") {
        res.json({ result : (data.msg === persona!.passwd) })
    }
    await persona!.cambiarContrasena(data.msg)
    const status = 0
    res.json({ status : status })
})