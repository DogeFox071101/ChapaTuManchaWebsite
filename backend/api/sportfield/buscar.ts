app.post('/api/buscar_cancha_id', async (req: Request, res: Response) => {
    const id = req.body.msg
    const cancha = await new DAOCancha().seleccionarUnoID(id)
    res.json(cancha)
})
app.post('/api/buscar/cancha', async (_req: Request, res: Response) => {
    const cancha = await Cancha.toString()
    console.log("correctamente")
    res.json({ msg : cancha })
})

app.post('/api/buscar_canchas', async (req: Request, res: Response) => {
    const codigoPostal = req.body.msg
    const canchas = await new DAOCancha().seleccionarLista(codigoPostal)
    for (const cancha of canchas) {
        res.json({ msg: cancha }); // no se puede hacer esto
    }
})