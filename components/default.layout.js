import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Link from 'next/link'

export default function Layout({ children }) {
  let desc = "A personal site by @burhannahm. Built with Next.js."
  let title = "@burhannahm persoanl site"
  let previewImage = "/img/og.png"
  return (
    <div>
      <Head>
        <link rel="icon" href="/img/avatar.png" />
        <meta charSet="utf-8" />
 
        <meta name="description" content={desc}></meta>
 

        {/* Open Graph */}
        <meta property="og:title" content={title} key="ogtitle" />
        <meta property="og:description" content={desc} key="ogdescription" />
        <meta property="og:url" content="https://kusiaga.com" key="ogurl" />
        <meta property="og:image" content={previewImage} key="ogimage" />
        <meta property="og:site_name" content="kusiaga" key="ogsitename" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" key="twcard" />
        <meta name="twitter:creator" content="@burhannahm" key="twhandle" />

        {/* google analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-112771033-3"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'UA-112771033-3');
              `,
          }}
        />

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
