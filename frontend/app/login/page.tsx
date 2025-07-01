'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginPage() {
  const router = useRouter();
  const [usuario, setUsuario] = useState('');
  const [clave, setClave] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (usuario === 'admin' && clave === '1234') {
      localStorage.setItem('isLoggedIn', 'true');
      router.push('/');
    } else {
      setError('Credenciales incorrectas');
    }
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #e2e8f0, #cbd5e1)',
      }}
    >
      <form
        onSubmit={handleLogin}
        style={{
          backgroundColor: '#ffffff',
          padding: '40px',
          borderRadius: '16px',
          boxShadow: '0 12px 30px rgba(0, 0, 0, 0.2)',
          width: '100%',
          maxWidth: '400px',
          fontFamily: 'Arial, sans-serif',
          color: '#111827',
        }}
      >
        <h2 style={{ marginBottom: '20px', textAlign: 'center', fontSize: '24px' }}>
          Ingreso Administrativo
        </h2>

        <label style={labelStyle}>Usuario</label>
        <input
          type="text"
          placeholder="Ingrese su usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          style={inputStyle}
        />

        <label style={labelStyle}>Contraseña</label>
        <input
          type="password"
          placeholder="Ingrese su contraseña"
          value={clave}
          onChange={(e) => setClave(e.target.value)}
          style={inputStyle}
        />

        {error && (
          <p style={{ color: '#b91c1c', textAlign: 'center', marginTop: '10px' }}>
            {error}
          </p>
        )}

        <button type="submit" style={buttonStyle}>
          Ingresar
        </button>
      </form>
    </div>
  );
}

// Estilos
const labelStyle: React.CSSProperties = {
  display: 'block',
  marginBottom: '6px',
  fontWeight: 'bold',
  color: '#111827',
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '12px',
  marginBottom: '16px',
  borderRadius: '8px',
  border: '1px solid #cbd5e1',
  backgroundColor: '#f9fafb',
  fontSize: '14px',
  color: '#111827',
};

const buttonStyle: React.CSSProperties = {
  width: '100%',
  padding: '12px',
  backgroundColor: '#1e40af',
  color: '#ffffff',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '16px',
  fontWeight: 'bold',
  marginTop: '10px',
};
