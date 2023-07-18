import express, {Request, Response} from "express"
import cors from "cors"
import JsonDAO from "../dao/JsonDAO"

const router = express.Router()
router.use(cors())

router.get('/listOfDocuments', async (req: Request, res: Response) => {
    const list_document = new JsonDAO().seleccionarTiposDeDocumentos()
    res.json(list_document)
})
router.get('/listGeoData', async (req: Request, res: Response) => {
    const list_geodata = new JsonDAO().seleccionarInfoPaises()
    res.json(list_geodata)
})

export default router