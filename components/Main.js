import styles from '../styles/Main.module.css'

export default function Main() {
  return (
    <div className={styles.main}>
      <main className={styles.container}>
        <h2>Sobre mim</h2>
        <p>
        Sou programador há pouco mais de 3 anos e tenho experiência em desenvolvimeto web, 
        </p>
        <p>
        atuando com desenvolvedor back-end.
        </p>
        <p>
          Em busca de conhecimento das melhores tecnologias de desenvolvimento
          web e mobile.
        </p>
        <div className={styles.gridbutton}>
          <a className={styles.redesociais}
            href="https://github.com/oseiassaboia"
            target="_blank"
            rel="noopener"
            class="sc-dTGQxN dqYSOI"
          >
            <img src="/github.svg" alt="logo github" />
            <span>GitHub</span>
          </a>
          <a className={styles.redesociais}
            href="https://www.linkedin.com/in/oseias-saboia-99ab1ba5/"
            target="_blank"
            rel="noopener"
          >
            <img src="/linkedIn.svg" alt="logo linkedIn" />
            <span>LinkedIn</span>
          </a>

          <a className={styles.redesociais}
            href="https://www.instagram.com/oseiassaboia/"
            target="_blank"
            rel="noopener"
          >
            <img src="/instagram.svg" alt="logo Instagram" />
            <span>Instagram</span>
          </a>
          <a className={styles.redesociais}
            href="https://www.instagram.com/oseiassaboia/"
            target="_blank"
            rel="noopener"
          >
            <img src="/facebook.svg" alt="logo facebook" />
            <span>Facebook</span>
          </a>
        </div>
      </main>
      <main className={styles.container}>
        <h2>Tecnologias</h2>
        <div className={styles.gridbutton}>
          <div className={styles.tech} >
            <div className={styles.techposition}>
              <span>Tenho experiência</span>
              <ul>              
                <li data-tip="CSS3" name="CSS3" className={styles.techCss3} currentitem="true"></li>
                <li data-tip="HTML5" name="HTML5" className={styles.techHtml5} ></li>
                <li data-tip="ASP .NET" name="ASP .NET" className={styles.techAspnet} ></li>
                <li data-tip="SQL Server" name="SQL Server" className={styles.techSqlserver} ></li>
              </ul>
            </div>
            <div className={styles.techposition}>
              <span>Estou estudando</span>
              <ul>
                <li data-tip=".NET" name=".NET" className={styles.techAspnet}></li>
                <li data-tip="Node.JS" name="Node.JS" className={styles.techNodejs}></li>
                <li data-tip="JavaScript" name="JavaScript" className={styles.techJavascript}></li>
                <li data-tip="Visual Basic" name="Visual Basic" className={styles.techVisualbasic}></li>
              </ul>
            </div>
            <div className={styles.techposition}>
              <span>Tenho interesse</span>
              <ul>
                <li data-tip="NextJS" name="NextJS" className={styles.techNextjs}></li>
                <li data-tip="ReactJS" name="ReactJS" className={styles.techReactjs}></li>
                <li data-tip="Flutter" name="Flutter" className={styles.techFlutter}></li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
