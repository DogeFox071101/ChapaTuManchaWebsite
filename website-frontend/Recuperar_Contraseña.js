const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Password recovery route
app.post('/api/password-recovery', (req, res) => {
  const { email } = req.body;

  // Validar que el correo electrónico sea válido

  // Enviar correo electrónico con la contraseña temporal

  res.json({ message: 'Se ha enviado un correo electrónico con la contraseña temporal.' });
});

// Iniciar el servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}.`);
});
