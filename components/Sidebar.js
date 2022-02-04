import styles from '../styles/Sidebar.module.css'

export default function Sidebar() {
  return (
    <>
      <aside className={styles.aside}>
        <circle r="88" cx="90" cy="90" stroke="url(#gradient)"></circle>

        <img
          src="https://avatars.githubusercontent.com/u/28720307?v=4"
          alt="Oseias Saboia"
        />
        <strong>Oseias Saboia Nascimento</strong>
        <span>NextJS, ReactJS, Node.js</span>
        <form>
          <div class="input-block">
            <label htmlFor="github_username">DESENVOLVERDOR BACK-END.</label>
          </div>
        </form>
      </aside>
    </>
  )
}
