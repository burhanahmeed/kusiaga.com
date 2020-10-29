import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Default from '../components/default.layout'
import { getAllPosts } from '../lib/postApi'
import moment from 'moment'
import Link from 'next/link'
import Image from 'next/image'

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
                {/* <img src="./img/real.jpg" loading="lazy"/> */}
                <Image
                  src="/img/real.jpg"
                  alt="Picture of the author"
                  width={64}
                  height={64}
                />
              </div>
              <div className="mx2 py2">
                <p className="text-bold text-clear">Burhanuddin Ahmad</p>
                <p className="text-clear text-xs">Software engineer, product creator, entrepreneur</p>
              </div>
            </div>
            <div 
              style={{ 
                borderLeft: '2px orange solid', 
                padding: '10px',
                backgroundColor: 'white'
              }}
            >
              <p className="text-clear">Available as a freelancer/consultant for small gig or less than 8 hrs per week.</p>
              <a className="link-border-bottom" href="mailto:brhn@kusiaga.com">📧 Business inquiries</a>
            </div>
            <div>
              <p className="text-bold text-xl">{'Recent posts'.toLocaleUpperCase()}</p>
              <span>I write about tech related but sometimes non-tech topics. Written in Bahasa Indonesia, Want to read English version? check my <a href="https://dev.to/burhanahmeed" target="_blank" className="link-border-bottom">dev.to</a></span>
              {/* blog wrapper */}
              <div className="mt5">
                {
                  allPosts.map((el, idx) => {
                    return (
                      <div className={styles['post-item']} key={idx}>
                        {/* blog item */}
                        <div className="my2">
                          <p className="text-clear text-2xs" style={{ color: 'gray' }}>{moment(el.date).format('LL')} ({moment(el.date).fromNow()})</p>
                        </div>
                        <p className="pointer blog-title text-clear text-bold text-3xl mb1">
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