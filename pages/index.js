import Sidebar from '../components/Sidebar'
import Main from '../components/Main'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <div className={styles.app}>
        <Sidebar />
        <Main />
      </div>
    </>
  )
}

//  { }
