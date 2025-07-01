'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CrearEstudiantePage() {
  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    codigo: '',
    ciclo: '',
    carrera: '',
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch('http://localhost:3001/api/estudiantes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });

    router.push('/');
  };

  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundImage:
          'url(https://imgmedia.larepublica.pe/1200x630/larepublica/original/2024/11/07/672d0ccce2dcb85f6f1629c8.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.98)',
          padding: '40px',
          borderRadius: '12px',
          boxShadow: '0 6px 20px rgba(0,0,0,0.4)',
          width: '100%',
          maxWidth: '500px',
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '25px', color: '#111827' /* casi negro */ }}>
          Crear Estudiante
        </h2>

        <form
          onSubmit={handleSubmit}
          style={{ display: 'flex', flexDirection: 'column', gap: '15px', color: '#111' }}
        >
          <input
            name="nombre"
            placeholder="Nombre"
            value={form.nombre}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            name="apellido"
            placeholder="Apellido"
            value={form.apellido}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            name="codigo"
            placeholder="Código"
            value={form.codigo}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            name="ciclo"
            placeholder="Ciclo"
            value={form.ciclo}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            name="carrera"
            placeholder="Carrera"
            value={form.carrera}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <button type="submit" style={submitButtonStyle}>
            Crear
          </button>
        </form>
      </div>
    </main>
  );
}

const inputStyle: React.CSSProperties = {
  padding: '12px',
  border: '1px solid #94a3b8', // azul-gris suave
  borderRadius: '8px',
  fontSize: '16px',
  color: '#111827', // texto casi negro
  backgroundColor: '#f9fafb', // fondo claro para contraste
  outline: 'none',
};

const submitButtonStyle: React.CSSProperties = {
  background: '#1d4ed8',
  color: '#fff',
  padding: '12px',
  border: 'none',
  borderRadius: '8px',
  fontSize: '16px',
  cursor: 'pointer',
  transition: 'background 0.3s',
};
