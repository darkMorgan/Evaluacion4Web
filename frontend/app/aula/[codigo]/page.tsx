// app/aula/[codigo]/page.tsx

import AulaClient from './AulaClient';

type PageProps = {
  params: { codigo: string };
};

export default async function AulaPage({ params }: PageProps) {
  return <AulaClient codigo={params.codigo} />;
}
