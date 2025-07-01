'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import withAuth from '../components/withAuth';

interface Estudiante {
  nombre: string;
  apellido: string;
  codigo: string;
  ciclo: string;
  carrera: string;
}

function HomePage() {
  const [estudiantes, setEstudiantes] = useState<Estudiante[]>([]);
  const router = useRouter();

  const cargarEstudiantes = async () => {
    const res = await fetch('http://localhost:3001/api/estudiantes');
    const data = await res.json();
    setEstudiantes(data);
  };

  useEffect(() => {
    cargarEstudiantes();
  }, []);

  const eliminarEstudiante = async (codigo: string) => {
    if (!confirm('¿Estás seguro de eliminar este estudiante?')) return;

    await fetch(`http://localhost:3001/api/estudiantes/${codigo}`, {
      method: 'DELETE',
    });

    await cargarEstudiantes();
  };

  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundImage: 'url(https://imgmedia.larepublica.pe/1200x630/larepublica/original/2024/11/07/672d0ccce2dcb85f6f1629c8.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          padding: '30px',
          borderRadius: '12px',
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
          maxWidth: '1000px',
          width: '100%',
        }}
      >
        <h1 style={{ textAlign: 'center', marginBottom: '20px', color: '#1e3a8a' }}>
          Lista de Estudiantes TECSUP
        </h1>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <button
            onClick={() => {
              localStorage.removeItem('token');
              router.push('/login');
            }}
            style={{
              ...buttonStyle,
              backgroundColor: '#dc2626',
            }}
          >
            Cerrar Sesión
          </button>

          <button
            style={{
              ...buttonStyle,
              backgroundColor: '#10b981',
            }}
            onClick={() => router.push('/estudiantes/crear')}
          >
            + Crear Estudiante
          </button>
        </div>


        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#1e3a8a', color: 'white' }}>
              <th style={thStyle}>Nombre</th>
              <th style={thStyle}>Apellido</th>
              <th style={thStyle}>Código</th>
              <th style={thStyle}>Ciclo</th>
              <th style={thStyle}>Carrera</th>
              <th style={thStyle}>Ir</th>
              <th style={thStyle}>Editar</th>
              <th style={thStyle}>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {estudiantes.map((e) => (
              <tr key={e.codigo} style={{ textAlign: 'center', backgroundColor: '#ffffff' }}>
                <td style={tdStyle}>{e.nombre}</td>
                <td style={tdStyle}>{e.apellido}</td>
                <td style={tdStyle}>{e.codigo}</td>
                <td style={tdStyle}>{e.ciclo}</td>
                <td style={tdStyle}>{e.carrera}</td>
                <td style={tdStyle}>
                  <button style={buttonStyle} onClick={() => router.push(`/aula/${e.codigo}`)}>
                    Ir
                  </button>
                </td>
                <td style={tdStyle}>
                  <button
                    style={editButtonStyle}
                    onClick={() => router.push(`/estudiantes/${e.codigo}/editar`)}
                  >
                    Editar
                  </button>
                </td>
                <td style={tdStyle}>
                  <button
                    style={deleteButtonStyle}
                    onClick={() => eliminarEstudiante(e.codigo)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

// Estilos
const thStyle: React.CSSProperties = {
  padding: '12px',
  border: '1px solid #ccc',
};

const tdStyle: React.CSSProperties = {
  padding: '10px',
  border: '1px solid #ddd',
  color: '#000',
  backgroundColor: '#fff',
};

const buttonStyle: React.CSSProperties = {
  padding: '6px 12px',
  backgroundColor: '#2563eb',
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
};

const editButtonStyle: React.CSSProperties = {
  ...buttonStyle,
  backgroundColor: '#f59e0b',
};

const deleteButtonStyle: React.CSSProperties = {
  ...buttonStyle,
  backgroundColor: '#dc2626',
};

// Exportamos la página protegida
export default withAuth(HomePage);
