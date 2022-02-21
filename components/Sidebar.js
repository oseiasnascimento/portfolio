import styles from '../styles/Sidebar.module.css'

export default function Sidebar() {
  return (
    <>
      <aside className={styles.aside}>
        <div className={styles.circle}>
          <span class="c-ePqEHr c-ePqEHr-dJYsls-size-lg c-ePqEHr-ikVSlxC-css">
            <img
              src="https://avatars0.githubusercontent.com/u/28720307?v=4"
              alt="Oseias Saboia Nascimento"
            />
          </span>
        </div>
        <h2>Oseias Saboia Nascimento</h2>
        <section>
          <label>
            DESENVOLVEDOR
            <br /> BACK-END / FRONT-END
          </label>
          <label>
            Desenvolvedor na SEDUC Secretaria da Educação do Maranhão
            <br />
          </label>
        </section>
        <div className={styles.footer}>
          Desenvolvedor Full Stack: junho, 2021
        </div>
      </aside>
    </>
  )
}
