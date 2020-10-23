import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Berhan | Kusiaga</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <header>
          <ul style={{'padding': '0', 'listStyle': 'none'}}>
            <li className={styles['nav-menu']}>Home</li>
            <li className={styles['nav-menu']}>Creations</li>
            <li className={styles['nav-menu']}>About</li>
            <li className={styles['nav-menu']}>Blogs</li>
          </ul>
        </header>
        <div className="container">
          <div className="py3 dflex mx2">
            <div className="image-rounded image-xl p3">
              <img src="./img/real.jpg" loading="lazy"/>
            </div>
            <div className="mx2">
              <p>Burhanuddin Ahmad</p>
              <p>Software engineer, product creator, entrepreneur</p>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://twitter.com/burhannahm"
          target="_blank"
          rel="noopener noreferrer"
        >
          A personal site by @burhannahm
        </a>
      </footer>
    </div>
  )
}
