// Express (u otra librería de backend)
const express = require('express');
const app = express();

// Middleware para parsear el body de las solicitudes
app.use(express.json());

// Ruta para la recuperación de contraseña
app.post('/api/password-recovery', (req, res) => {
  const { email } = req.body;

  // Validar correo electrónico (puedes agregar más validaciones según tus necesidades)
  if (!email) {
    return res.status(400).json({ message: 'Debes proporcionar un correo electrónico válido.' });
  }

  // Lógica de recuperación de contraseña
  // Generar contraseña temporal y enviarla por correo, etc.

  // Ejemplo de respuesta exitosa
  return res.json({ message: 'Se ha enviado una contraseña temporal a tu correo electrónico.' });
});

// Iniciar servidor en puerto 3001 (o el puerto que prefieras)
app.listen(3001, () => {
  console.log('Servidor backend iniciado en http://localhost:3001');
});
