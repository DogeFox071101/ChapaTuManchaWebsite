import fs from "fs"

class FilesDAO {
    private filePath = process.env.PATH_FILE_TO_FILESYSTEM!

    public insertarEvidencia(fileName: string, content: Buffer) {
        const path = this.filePath + "evidences/" + fileName
        try {
            return fs.writeFileSync(path, content)
        }
        catch (error) {
            console.log(error)
        }
    }
    public insertarImagen(fileName: string, content: Buffer) {
        const path = this.filePath + "images/" + fileName
        try {
            return fs.writeFileSync(path, content)
        }
        catch (error) {
            console.log(error)
        }
    }
    public seleccionarEvidencia(fileName: string) {
        const path = this.filePath + "evidences/" + fileName
        try {
            return fs.readFileSync(path)
        }
        catch (error) {
            console.log(error)
            return null
        }
    }
    public seleccionarImagen(fileName: string) {
        const path = this.filePath + "images/" + fileName
        try {
            return fs.readFileSync(path)
        }
        catch (error) {
            console.log(error)
            return null
        }
    }
}
export default FilesDAO