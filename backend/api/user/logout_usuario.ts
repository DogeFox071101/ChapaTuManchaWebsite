app.post('/api/usuario/logout', async (req: Request, res: Response) =>  {
    const id_user = req.body.id_user
    await new DAOPersona().actualizar(id_user, CamposBD.A_ID_PERSON, "", CamposBD.A_TOKEN_SESSION)
    res.json({result: 0})
})