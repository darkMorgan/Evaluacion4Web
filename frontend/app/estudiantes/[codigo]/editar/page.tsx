'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface Props {
  params: { codigo: string };
}

export default function EditarEstudiantePage({ params }: Props) {
  const router = useRouter();
  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    codigo: '',
    ciclo: '',
    carrera: '',
  });

  useEffect(() => {
    const fetchEstudiante = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/estudiantes/${params.codigo}`);
      const data = await res.json();
      setForm(data);
    };
    fetchEstudiante();
  }, [params.codigo]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/estudiantes/${params.codigo}`, {
  method: 'PUT',
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
        backgroundImage: 'url(https://imgmedia.larepublica.pe/1200x630/larepublica/original/2024/11/07/672d0ccce2dcb85f6f1629c8.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.85)', // fondo negro con opacidad
          padding: '40px',
          borderRadius: '12px',
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.5)',
          width: '100%',
          maxWidth: '500px',
          color: '#ffffff',
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '24px', color: '#10b981' }}>
          Editar Estudiante
        </h2>
        <form
          onSubmit={handleSubmit}
          style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
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
            disabled
            style={{
              ...inputStyle,
              backgroundColor: '#374151',
              color: '#9ca3af',
              cursor: 'not-allowed',
            }}
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
          <button
            type="submit"
            style={{
              padding: '12px',
              backgroundColor: '#10b981',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#059669')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#10b981')}
          >
            ✅ Actualizar
          </button>
        </form>
      </div>
    </main>
  );
}

const inputStyle: React.CSSProperties = {
  padding: '12px',
  border: '1px solid #4b5563',
  borderRadius: '8px',
  fontSize: '16px',
  backgroundColor: '#1f2937',
  color: '#fff',
};
