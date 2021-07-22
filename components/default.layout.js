import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Layout({ children }) {
  let desc = "A personal site by @burhannahm. Built with Next.js."
  let title = "@burhannahm persoanl site"
  let previewImage = "/img/og.png"

  const router = useRouter();
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

        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600&display=swap" rel="stylesheet"/> 

        <script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="zokt07a" data-description="Support me on Buy me a coffee!" data-message="" data-color="#5F7FFF" data-position="Right" data-x_margin="18" data-y_margin="18"></script>

        <script>
          var txt = "by TinyJar"; //text to show on widget like by YourName
          var style = 2; //1 for button rectangle, 2 for floating circle
          var position = 1;//1 for right, 2 for left
          var kofi = 1; //1 to show 0 to hide
          var kofi_url = "https://ko-fi.com/burhanahmeed"; //Ko-Fi profile url
          var bmc = 1; //1 to show 0 to hide
          var bmc_url = "https://www.buymeacoffee.com/zOkT07A"; //BuyMeACoffee profile url
          var patreon = 1; //1 to show 0 to hide
          var pat_url = "https://patreon.com/burhannahm"; //Patreon profile url
          var paypal = 0; //1 to show 0 to hide
          var pp_url = "";//PayPal URL
        </script>
        <link rel="stylesheet" href="https://free-tiny.b-cdn.net/tinyjar.css"/>
        <script src="https://free-tiny.b-cdn.net/tinyjar-script.js"></script>
      </Head>
      <header className={styles.header}>
        <ul style={{'padding': '0', 'margin': '0', 'listStyle': 'none'}}>
          <li className={`${styles['nav-menu']} ${router.pathname == '/' ? styles['nav-active']: ''}`}>
            <Link href="/">Home</Link>
          </li>
          <li className={`${styles['nav-menu']} ${router.pathname == '/projects' ? styles['nav-active']: ''}`}>
            <Link href="/projects">Projects</Link>
          </li>
          <li className={`${styles['nav-menu']} ${router.pathname == '/about' ? styles['nav-active']: ''}`}>
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
