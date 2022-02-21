import styles from '../styles/Sidebar.module.css'

export default function Sidebar() {
  return (
    <>
      <aside className={styles.aside}>
        <div className={styles.circle}>
          <span>
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
            Analista De Sistemas Desenvolvedor Júnior | LAMPP-IT SOLUTIONS
            <br />
          </label>
        </section>
        <section>
          <div className={styles.locale}>
            <label>
              <img src="/assets/map-pin.svg" />
              São Luís, MA, Brasil
            </label>
          </div>
        </section>
        <div className={styles.footer}>
          Desenvolvedor Full Stack: junho, 2021
        </div>
      </aside>
    </>
  )
}
