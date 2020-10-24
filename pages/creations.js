import Head from 'next/head'
import Default from '../components/default.layout'
import styles from '../styles/Home.module.css'
import { getAllPosts } from '../lib/creationApi'

const CreationItem = ({ data }) => {
  let coverImg = data.coverImage
  return (
    <div style={{ display: 'flex' }} className={styles['creation-item']}>
      <div>
        <div className={styles['creation-image']} style={{ 'backgroundImage': 'url('+coverImg+')' }} />
      </div>
      <div className="px4 py2">
        <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', height: data.url ? '89%' : '100%' }}>
          <p className="text-clear blog-title pointer text-4xl text-bold">{data.title}</p>
          <p className="text-clear text-2xs mt1">Stacks: {data.stacks}</p>
          <p className="text-clear mt2" style={{ color: '#3c3c3c' }} title={data.excerpt}>{data.excerpt}</p>
        </div>
        {
          data.url ? (
            <a href={data.url} target="_blank" style={{ backgroundColor: '#52089d', color: 'white' }}>👉 here</a>
          ) : ''
        }
      </div>
    </div>
  )
}

export default function Creations({ allPosts }) {
  return (
    <Default>
      <div className={styles.container}>
        <Head>
          <title>Creations | Kusiaga</title>
        </Head>

        <main className={styles.main} style={{'marginTop': '60px', 'maxWidth': '700px'}}>
          <div style={{'width': '100%', 'textAlign': 'left'}}>
            <p className="text-clear text-bold text-3xl my2">Creations</p>
            <p className="text-clear text-xl">The list of stuffs I have created or maintained that I can publish openly.</p>
            <p className="text-clear text-md">(Check my <a className="link-border-bottom" target="_blank" href="https://github.com/burhanahmeed">Github</a> for more.)</p>
          </div>
          <div className="py3 my5">
            {
              allPosts.map(el => {
                return <CreationItem data={el} />
              })
            }
          </div>
        </main>

      </div>
    </Default>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'excerpt',
    'stacks',
    'coverImage',
    'url'
  ])

  return {
    props: { allPosts },
  }
}