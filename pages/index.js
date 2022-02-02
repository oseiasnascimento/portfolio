import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1>Página inicial</h1>
      <Link href="/sobre">
        <a>Acessar page Sobre</a>
      </Link>
      <br />
      Em breve em perfil profissional.
    </>
  )
}

//  { }
