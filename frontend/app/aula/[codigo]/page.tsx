import AulaClient from './AulaClient';

interface Params {
  params: { codigo: string };
}

// 👇 ¡Esto debe ser async aunque no uses await!
export default async function AulaPage({ params }: Params) {
  return <AulaClient codigo={params.codigo} />;
}
