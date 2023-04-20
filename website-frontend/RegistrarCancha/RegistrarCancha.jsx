import React from "react";
const pagina =  {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh"
}

const square = {
    backgroundColor: "#f0f0f0",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
    height: "50%",
    width: "50%"

}

const titulo = {
    textAlign: "center",
    fontFamily: "Arial, Helvetica, sans-serif",
    fontSize: "300%"
}

const formulario = {
    display: "flex",
    flexDirection: "row",
    paddingTop: "25px",
}

const colum1 = {
    flex: 1,
    marginRight: "10px",
}
const colum2 = {
    flex: 1,
}
const botons = {
    textAlign: "center",
    marginTop: "100px"
}
function RegistrarCancha() {
    return (
        <div style={pagina}>
            <div style={square}>
                <h2 style={titulo}>Registrar Cancha</h2>
                <form style={formulario}>
                    <div style={colum1}>
                        <label htmlFor="tipo">Tipo:</label>
                        <br />
                        <input type="text" id="tipo" name="tipo" required />
                        <br />
                        <label htmlFor="aforo">Aforo:</label>
                        <br />
                        <input type="text" id="aforo" name="aforo" required />
                    </div>
                    <div style={colum2}>
                        <label htmlFor="direccion">Dirección:</label>
                        <br />
                        <input type="text" id="direccion" name="direccion" required />
                        <br />
                        <label htmlFor="precio">Precio:</label>
                        <br />
                        <input type="text" id="precio" name="precio" required />
                    </div>
                </form>
                <div style={botons}>
                    <button type="submit">Enviar</button>
                </div>
            </div>
        </div>
    );
}

export default RegistrarCancha;