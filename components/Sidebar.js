import styles from '../styles/Sidebar.module.css'

export default function Sidebar() {
  return (
    <>
      <aside>
        <section className={styles.aside}>
          <div className={styles.circle}>
            <span>
              <img
                src="https://avatars0.githubusercontent.com/u/28720307?v=4"
                alt="Oseias Saboia Nascimento"
              />
            </span>
          </div>
          <h2>Oseias Saboia Nascimento</h2>
          <label>
            Analista De Sistemas Desenvolvedor Júnior | LAMPP-IT SOLUTIONS
            <br />
          </label>
          <div className={styles.footer}>
            DESENVOLVEDOR BACK-END / FRONT-END
            {/* Desenvolvedor Full Stack: junho, 2021 */}
          </div>
        </section>
        <section className={styles.aside}>
          {/* <div className={styles.locale}>
            <div>
              <span>
                <img src="/assets/folder.svg" /> Meus Projetos
              </span>
              <span>
                <img src="/assets/briefcase.svg" /> Desenvolvedor
              </span>
              <span>
                <img src="/assets/mail.svg" /> contato@oseiassaboia.com
              </span>
              <span>
                <img src="/assets/map-pin.svg" /> São Luís, MA, Brasil
              </span>
            </div>
          </div> */}
          <h2>Tecnologias</h2>
          <div className={styles.tech}>
            <div className={styles.techposition}>
              <span>Tenho experiência</span>
              <ul>
                <li name="Visual Basic" className={styles.techVisualbasic}></li>
                <li name="ASP .NET" className={styles.techAspnet}></li>
                <li name="SQL Server" className={styles.techSqlserver}></li>
                <li name="JavaScript" className={styles.techJavascript}></li>
                <li name="CSS3" className={styles.techCss3}></li>
                <li name="HTML5" className={styles.techHtml5}></li>
              </ul>
            </div>
            <div className={styles.techposition}>
              <span>Estou estudando</span>
              <ul>
                <li name="Node.JS" className={styles.techNodejs}></li>
                <li name="ReactJS" className={styles.techReactjs}></li>
                <li name="NextJS" className={styles.techNextjs}></li>
              </ul>
            </div>
            <div className={styles.techposition}>
              <span>Tenho interesse</span>
              <ul>
                <li name="Flutter" className={styles.techFlutter}></li>
                <li data-tip="C#" name="C#" className={styles.techCsharp}></li>
                <li
                  data-tip="TypeScript"
                  name="TypeScript"
                  className={styles.techTypescript}
                ></li>
              </ul>
            </div>
          </div>
        </section>
      </aside>
    </>
  )
}
