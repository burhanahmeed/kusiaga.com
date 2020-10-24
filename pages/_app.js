import '../styles/globals.css'
import '../styles/personalCss.css'
import {MDXProvider} from '@mdx-js/react'

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
