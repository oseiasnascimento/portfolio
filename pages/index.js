import Sidebar from '../components/Sidebar'
import Main from '../components/Main'
import styles from '../styles/Home.module.css'
import Head from 'next/head'

export default function Home() {
  return (
    <>
    <Head>
      <title>Oseias Saboia | Desenvolvedor</title>
      <meta name="keywords" content="Oseias Saboia | Desenvolvedor"/>
      <mate name="description" content="Desenvolvedor banck-end e front-end"/>
    </Head>
      <div className={styles.app}>
        <Sidebar />
        <Main />
      </div>
    </>
  )
}

//  { }
