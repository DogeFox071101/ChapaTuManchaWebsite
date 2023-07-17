import fs from "fs"

class JsonDAO {
    protected filePath = process.env.PATH_JSON!

    public seleccionarInfoPaises() {
        const path = this.filePath + "paises.json"
        try {
            const data = fs.readFileSync(path, "utf-8")
            return JSON.parse(data)
        }
        catch (error) {
            console.error(error)
            return null
        }
    }
    public seleccionarDeportes() {
        const path = this.filePath + "deportes.json"
        try {
            const data = fs.readFileSync(path, "utf-8")
            return JSON.parse(data)
        }
        catch (error) {
            console.error(error)
            return null
        }
    }
    public seleccionarTiposDeDocumentos() {
        // 
        const path = this.filePath + "tipo_documentos.json"
        try {
            const data = fs.readFileSync(path, {encoding: 'utf-8', flag: 'r'})
            return JSON.parse(data)
        }
        catch (error) {
            console.error(error)
            return null
        }
    }
}
export default JsonDAO