import styles from '../styles/Main.module.css'

export default function Main() {
  return (
    <div>
      <main>
        <section className={styles.container}>
          <h2>Sobre mim</h2>
          <p>
            Sou programador há pouco mais de 3 anos e tenho experiência em
            desenvolvimeto web,
          </p>
          <p>atuando como desenvolvedor júnior em Back-end/Font-end.</p>
          <p>
            Em busca de conhecimento das melhores tecnologias de desenvolvimento
            web e mobile.
          </p>
          <div className={styles.gridsociais}>
            <a
              className={styles.redesociais}
              href="https://github.com/oseiassaboia"
              target="_blank"
              rel="noopener"
              class="sc-dTGQxN dqYSOI"
            >
              <img src="/github.svg" alt="logo github" />
              <span>GitHub</span>
            </a>
            <a
              className={styles.redesociais}
              href="https://www.linkedin.com/in/oseias-saboia-99ab1ba5/"
              target="_blank"
              rel="noopener"
            >
              <img src="/linkedIn.svg" alt="logo linkedIn" />
              <span>LinkedIn</span>
            </a>
            <a
              className={styles.redesociais}
              href="https://www.instagram.com/oseiassaboia/"
              target="_blank"
              rel="noopener"
            >
              <img src="/instagram.svg" alt="logo Instagram" />
              <span>Instagram</span>
            </a>
          </div>
        </section>        
        <section className={styles.container}>
          <h2>HABILIDADES</h2>
          <label>Visual basic</label>
          <div className={styles.statusSombra}>
            <div className={styles.status}>
              <label>40%</label>
            </div>
          </div>

          <label>ASP .NET</label>
          <div className={styles.statusSombra}>
            <div className={styles.status2}>
              <label>70%</label>
            </div>
          </div>

          <label>SQL Server</label>
          <div className={styles.statusSombra}>
            <div className={styles.status3}>
              <label>55%</label>
            </div>
          </div>

          <label>CSS3</label>
          <div className={styles.statusSombra}>
            <div className={styles.status4}>
              <label>60%</label>
            </div>
          </div>

          <label>HTML5</label>
          <div className={styles.statusSombra}>
            <div className={styles.status2}>
              <label>70%</label>
            </div>
          </div>
        </section>
        <section className={styles.container}>
          <h2>Meus Projetos</h2>
          
        </section>
      </main>
    </div>
  )
}
