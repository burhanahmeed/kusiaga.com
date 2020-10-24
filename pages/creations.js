import Head from 'next/head'
import Default from '../components/default.layout'
import styles from '../styles/Home.module.css'

export default function Creations() {
  return (
    <Default>
      <div className={styles.container}>
        <Head>
          <title>Creations | Kusiaga</title>
        </Head>

        <main className={styles.main} style={{'marginTop': '60px', 'maxWidth': '700px'}}>
          <div style={{'width': '100%', 'textAlign': 'left'}}>
            <p className="text-clear text-bold text-3xl my2">Creations</p>
            <p className="text-clear text-xl">The list of stuffs I have created or maintained.</p>
          </div>
        </main>

      </div>
    </Default>
  )
}