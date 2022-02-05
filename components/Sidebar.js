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

        <form>

          <label >
            DESENVOLVERDOR BACK-END
            </label>

          <label>
            Desenvolvedor na SEDUC Governo do Maranão
          </label>

        </form>
        <div className={styles.cUVeUs}>Servidor Público desde: junho, 2021</div>
      </aside>
    </>
  )
}
