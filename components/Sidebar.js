import styles from '../styles/Sidebar.module.css'

export default function Sidebar() {
  return (
    <>
      <aside className={styles.aside}>

        <div className={styles.circle}>
          <span class="c-ePqEHr c-ePqEHr-dJYsls-size-lg c-ePqEHr-ikVSlxC-css">
            <img src="https://avatars0.githubusercontent.com/u/28720307?v=4" alt="Oseias Saboia Nascimento" />
          </span>
        </div>
        <h2>Oseias Saboia Nascimento</h2>        
        <section>
          <label >DESENVOLVEDOR<br/> BACK-END / FRONT-END</label>
          <label>Desenvolvedor na SEDUC  Governo do Maranão<br/></label>
        </section>
        <section className={styles.section}>
        <h4>HABILIDADES</h4>
        <label>Visual basic</label>
        <div className={styles.statusSombra}>
          <div className={styles.status}><label>40%</label></div>
        </div>

        <label>ASP .NET</label>
        <div className={styles.statusSombra}>
          <div className={styles.status2}><label>70%</label></div>
        </div>

        <label>SQL Server</label>
        <div className={styles.statusSombra}>
          <div className={styles.status3}><label>55%</label></div>
        </div>

        <label>CSS3</label>
        <div className={styles.statusSombra}>
          <div className={styles.status4}><label>60%</label></div>
        </div>

        <label>HTML5</label>
        <div className={styles.statusSombra}>
          <div className={styles.status2}><label>70%</label></div>
        </div>
        </section>
        <div className={styles.footer}>Desenvolvedor Full Stack: junho, 2021</div>
      </aside>
    </>
  )
}
