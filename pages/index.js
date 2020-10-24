import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Default from '../components/default.layout'
import { getAllPosts } from '../lib/postApi'
import moment from 'moment'
import Link from 'next/link'

export default function Home({allPosts}) {
  return (
    <Default>
      <div className={styles.container}>
        <Head>
          <title>Berhan | Kusiaga</title>
        </Head>

        <main className={styles.main} style={{'marginTop': '60px'}}>
          <div className="container" style={{'maxWidth': '800px'}}>
            <div className="py3 dflex mx2">
              <div className="image-rounded image-xl px3">
                <img src="./img/real.jpg" loading="lazy"/>
              </div>
              <div className="mx2 py2">
                <p className="text-bold text-clear">Burhanuddin Ahmad</p>
                <p className="text-clear text-xs">Software engineer, product creator, entrepreneur</p>
              </div>
            </div>
            <div>
              <p className="text-bold text-xl">{'Recent posts'.toLocaleUpperCase()}</p>
              <span>I write about tech related but sometimes non-tech topics. Written in Bahasa Indonesia, Want to read English version? check my <a href="#" className="link-border-bottom">dev.to</a></span>
              {/* blog wrapper */}
              <div className="mt5">
                {
                  allPosts.map(el => {
                    return (
                      <div className="pointer">
                        {/* blog item */}
                        <div className="my2">
                          <p className="text-clear">{moment(el.date).format('LL')} ({moment(el.date).fromNow()})</p>
                        </div>
                        <p className="blog-title text-clear text-bold text-3xl mb1">
                          <Link href={`/posts/${el.slug}`}>{el.title}</Link>
                        </p>
                        <p className="text-clear text-xl">{el.excerpt}</p>
                        <hr className="gradient-border"/>
                      </div>
                    )
                  })
                }
              </div>
            </div>
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
    'excerpt',
    'previewImage',
    'slug'
  ])

  return {
    props: { allPosts },
  }
}