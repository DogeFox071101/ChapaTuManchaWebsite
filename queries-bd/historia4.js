// Obtener los elementos del formulario
const oldPasswordInput = document.getElementById('old-password');
const newPasswordInput = document.getElementById('new-password');
const confirmPasswordInput = document.getElementById('confirm-password');
const submitButton = document.getElementById('submit-button');

// Agregar un listener al botón de enviar
submitButton.addEventListener('click', (event) => {
  event.preventDefault();

  // Obtener los valores de los campos de contraseña
  const oldPassword = oldPasswordInput.value;
  const newPassword = newPasswordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  // Validar que las contraseñas sean iguales
  if (newPassword !== confirmPassword) {
    alert('Las contraseñas no coinciden');
    return;
  }

  // Enviar la solicitud de cambio de contraseña al backend
  fetch('/cambiar-contraseña', {
    method: 'POST',
    body: JSON.stringify({ oldPassword, newPassword }),
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
});
