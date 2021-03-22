import Link from 'next/link';

function Home()  {
    return (<div>

        <h1>Início</h1> 
        <Link href="/sobre">
            <a>Acessar page Sobre</a>
        </Link> 

        Meu nome é Oseias Saboia, nasci em São Luís no mês de setembro em 1992. 
        
        </div>)
 }

 export default Home
//  { }