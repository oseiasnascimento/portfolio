import styles from '../styles/Section.module.css'

export default function Section() {
    return (
        <>
            <section className={styles.section}>
                <h2>Sobre mim</h2>
                <p>
                    Sou programador há pouco mais de 3 anos e tenho experiência em desenvolvimeto web,
                </p>
                <p>
                    atuando como desenvolvedor júnior em Back-end/Font-end.
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
                        href="https://pt-br.facebook.com/oseias.saboia.5"
                        target="_blank"
                        rel="noopener"
                    >
                        <img src="/facebook.svg" alt="logo facebook" />
                        <span>Facebook</span>
                    </a>
                </div>
            </section>
        </>
    )
}