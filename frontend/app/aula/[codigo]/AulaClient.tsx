'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface Estudiante {
  nombre: string;
  apellido: string;
  codigo: string;
  ciclo: string;
  carrera: string;
}

export default function AulaClient({ codigo }: { codigo: string }) {
  const router = useRouter();
  const [estudiante, setEstudiante] = useState<Estudiante | null>(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/estudiantes/${codigo}`)
      .then((res) => res.json())
      .then((data) => setEstudiante(data));
  }, [codigo]);

  if (!estudiante) {
    return <p style={{ textAlign: 'center', paddingTop: '40px' }}>Cargando datos del estudiante...</p>;
  }

  const direccion = 'TECSUP - Lima, Edificio C, Segundo Piso, Aula Asignada';
  const mapaUrl = 'https://www.google.com/maps?q=-12.0444722,-76.9528056&hl=es&z=18&output=embed';

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f5f7fa', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '40px' }}>
      <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', maxWidth: '800px', width: '100%', textAlign: 'center' }}>
        <h2 style={{ color: '#222' }}>
          Aula asignada para {estudiante.nombre} {estudiante.apellido}
        </h2>
        <p style={{ fontSize: '18px', color: '#444' }}>
          Carrera: <strong>{estudiante.carrera}</strong> — Ciclo: <strong>{estudiante.ciclo}</strong>
        </p>
        <p style={{ fontSize: '16px', marginTop: '10px', marginBottom: '20px', color: '#333' }}>
          Ubicación: {direccion}
        </p>
        <img
          src="/aulas/aula-general.jpg"
          alt="Aula asignada"
          style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', borderRadius: '8px', border: '2px solid #ddd', marginBottom: '20px' }}
        />
        <iframe
          src={mapaUrl}
          width="100%"
          height="300"
          style={{ border: 0, borderRadius: '8px' }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <button
          onClick={() => router.push('/')}
          style={{ marginTop: '20px', padding: '12px 24px', backgroundColor: '#10b981', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '16px' }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#059669')}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#10b981')}
        >
          ← Volver al menú principal
        </button>
      </div>
    </main>
  );
}
