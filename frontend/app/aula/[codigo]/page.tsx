// app/aula/[codigo]/page.tsx
import AulaClient from './AulaClient';

interface Props {
  params: { codigo: string };
}

// 👇 importante: hacer esta función async aunque no hagas await
export default async function AulaPage({ params }: Props) {
  return <AulaClient codigo={params.codigo} />;
}
