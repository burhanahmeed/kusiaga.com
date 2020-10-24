import Head from 'next/head'
import Default from '../components/default.layout'
import styles from '../styles/Home.module.css'
import AboutMd from '../components/about.mdx'

export default function about () {
  return (
    <Default>
      <div className={styles.container}>
        <Head>
          <title>About | Kusiaga</title>
        </Head>

        <main className={styles.main} style={{'marginTop': '60px', 'maxWidth': '700px'}}>
          <div style={{'width': '100%', 'textAlign': 'left'}}>
            <AboutMd />
          </div>
        </main>

      </div>
    </Default>
  )
}