import React, { useState, useRef } from 'react';

function CambiarContrasenaForm() {
  const oldPasswordInput = useRef(null);
  const newPasswordInput = useRef(null);
  const confirmPasswordInput = useRef(null);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Obtener los valores de los campos de contraseña
    const oldPasswordValue = oldPasswordInput.current.value;
    const newPasswordValue = newPasswordInput.current.value;
    const confirmPasswordValue = confirmPasswordInput.current.value;

    // Validar que las contraseñas sean iguales
    if (newPasswordValue !== confirmPasswordValue) {
      alert('Las contraseñas no coinciden');
      return;
    }

    // Enviar la solicitud de cambio de contraseña al backend
    fetch('/cambiar-contraseña', {
      method: 'POST',
      body: JSON.stringify({ oldPassword: oldPasswordValue, newPassword: newPasswordValue }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('No se pudo cambiar la contraseña');
      }
      alert('Contraseña cambiada exitosamente');
    })
    .catch((error) => {
      console.error(error);
      alert(error.message);
    });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Contraseña actual:
        <input type="password" ref={oldPasswordInput} value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} />
      </label>
      <label>
        Nueva contraseña:
        <input type="password" ref={newPasswordInput} value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
      </label>
      <label>
        Confirmar nueva contraseña:
        <input type="password" ref={confirmPasswordInput} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      </label>
      <button type="submit">Cambiar contraseña</button>
    </form>
  );
}
