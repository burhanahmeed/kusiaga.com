import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/img/avatar.png" />
      </Head>
      <header className={styles.header}>
        <ul style={{'padding': '0', 'margin': '0', 'listStyle': 'none'}}>
          <li className={styles['nav-menu']}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles['nav-menu']}>
            <Link href="/creations">Creations</Link>
          </li>
          <li className={styles['nav-menu']}>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </header>
      <div>
        {children}
      </div>
      <footer className={styles.footer}>
        <a
          href="https://twitter.com/burhannahm"
          target="_blank"
          rel="noopener noreferrer"
        >
          A personal site by @burhannahm from GMT+7
        </a>
      </footer>
    </div>
  )
}
