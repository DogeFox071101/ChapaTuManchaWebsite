import React, { useState } from 'react';

const PasswordRecovery = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Enviar solicitud al backend para recuperar contraseña
    try {
      const response = await fetch('/api/password-recovery', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });

      if (response.ok) {
        const data = await response.json();
        setMessage(data.message);
      } else {
        setMessage('Ocurrió un error al recuperar la contraseña. Por favor, intenta nuevamente.');
      }
    } catch (error) {
      console.error(error);
      setMessage('Ocurrió un error al recuperar la contraseña. Por favor, intenta nuevamente.');
    }
  };

  return (
    <div style={{ backgroundColor: '#c2e6d8', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ maxWidth: '400px', padding: '24px', backgroundColor: 'white', borderRadius: '8px' }}>
        <h2 style={{ textAlign: 'center' }}>Recuperar contraseña</h2>
        <form onSubmit={handleFormSubmit}>
          <label style={{ display: 'block', marginBottom: '16px' }}>
            Correo electrónico:
            <input type="email" value={email} onChange={handleInputChange} style={{ width: '100%', marginTop: '8px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
          </label>
          <button type="submit" style={{ backgroundColor: '#007bff', color: 'white', padding: '12px 24px', borderRadius: '4px', border: 'none', cursor: 'pointer', width: '100%' }}>Enviar</button>
        </form>
        {message && <p style={{ marginTop: '16px', textAlign: 'center' }}>{message}</p>}
      </div>
    </div>
  );
};

export default PasswordRecovery;
