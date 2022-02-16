import styles from '../styles/Main.module.css'

export default function Main() {
  return (
    <div>
      <main >
        <div className={styles.container}>
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
          <a className={styles.redesociais}
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
        </div>
        <div className={styles.container}>
        <h2>Tecnologias</h2>
          <div className={styles.tech} >
            <div className={styles.techposition}>
              <span>Tenho experiência</span>
              <ul>              
                <li name="CSS3" className={styles.techCss3} currentitem="true"></li>
                <li name="HTML5" className={styles.techHtml5} ></li>
                <li name="ASP .NET" className={styles.techAspnet} ></li>
                <li name="SQL Server" className={styles.techSqlserver} ></li>
              </ul>
            </div>
            <div className={styles.techposition}>
              <span>Estou estudando</span>
              <ul>
                <li name=".NET" className={styles.techAspnet}></li>
                <li name="Node.JS" className={styles.techNodejs}></li>
                <li name="JavaScript" className={styles.techJavascript}></li>
                <li name="Visual Basic" className={styles.techVisualbasic}></li>
            </ul>
            </div>
            <div className={styles.techposition}>
              <span>Tenho interesse</span>
              <ul>
                <li name="NextJS" className={styles.techNextjs}></li>
                <li name="ReactJS" className={styles.techReactjs}></li>
                <li name="Flutter" className={styles.techFlutter}></li>

                <li
                  data-tip="Flutter"
                  name="Flutter"
                  className={styles.techFlutter}
                ></li>
                <li data-tip="C#" name="C#" className={styles.techCsharp}></li>
                <li
                  data-tip="TypeScript"
                  name="TypeScript"
                  className={styles.techTypescript}
                ></li>

              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
