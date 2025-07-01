// app/aula/[codigo]/page.tsx
import AulaClient from './AulaClient';

interface Props {
  params: { codigo: string };
}

export default function AulaPage({ params }: Props) {
  return <AulaClient codigo={params.codigo} />;
}
