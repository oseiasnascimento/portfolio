import styles from '../styles/Sidebar.module.css'

export default function Sidebar() {
  return (
    <>
      <aside className={styles.aside}>
        <img src="https://avatars.githubusercontent.com/u/28720307?v=4" alt='Oseias Saboia' />
        <strong>Oseias Saboia</strong>
        <span>NextJS, ReactJS, Node.js</span>
        <form>
          <div class="input-block">
            <label htmlFor="github_username">github_username</label>
            <label htmlFor="github_username">DESENVOLVERDOR BACK-END.</label>
          </div>
        </form>
      </aside>
    </>
  )
}
