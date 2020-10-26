import '../styles/globals.css'
import '../styles/personalCss.css'
import '../styles/markdown-github.css'
import '../styles/nprogress.css'
import "prismjs/themes/prism-tomorrow.css";
import {MDXProvider} from '@mdx-js/react'
import NProgress from 'nprogress'
import Router from 'next/router'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const mdComponents = {
  h1: props => <h1 style={{color: '#52089d'}} {...props} />,
  a: props => <a style={{color: '#52089d'}} {...props} />
}

function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider components={mdComponents}>
      <Component {...pageProps} />
    </MDXProvider>
  )
}

export default MyApp
