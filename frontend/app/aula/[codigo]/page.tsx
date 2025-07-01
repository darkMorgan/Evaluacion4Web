import AulaClient from './AulaClient';

interface PageParams {
  params: { codigo: string };
}

export default function AulaPage({ params }: PageParams) {
  return <AulaClient codigo={params.codigo} />;
}
