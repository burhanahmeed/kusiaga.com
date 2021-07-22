import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Default from '../components/default.layout'
import { getAllPosts } from '../lib/postApi'
import moment from 'moment'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from "framer-motion"

export default function Home({allPosts}) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.4
      }
    }
  }
  
  const item = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  }

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
                  placeholder="blur"
                  width={64}
                  height={64}
                />
              </div>
              <div className="mx2 py2">
                <p className="text-bold text-clear">Burhanuddin Ahmed</p>
                <p className="text-clear text-xs">Software engineer, product creator, entrepreneur</p>
              </div>
            </div>
            <div 
              style={{ 
                borderLeft: '2px orange solid', 
                padding: '10px',
                backgroundColor: '#fff'
              }}
              className="shadow"
            >
              <p className="text-clear">Available as a freelancer/consultant for small gig or less than 3 hrs per week.</p>
              <a className="link-border-bottom" href="mailto:burhanahmeed@gmail.com">📧 Business inquiries</a>
            </div>
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
            >
              <p className="text-bold text-xl">{'Recent posts'.toLocaleUpperCase()}</p>
              <span>I write about tech related but sometimes non-tech topics. Written in Bahasa Indonesia, Want to read English version? check my <a href="https://dev.to/burhanahmeed" target="_blank" className="link-border-bottom">DEV.to</a></span>
              {/* blog wrapper */}
              <div className="mt5">
                {
                  allPosts.map((el, idx) => {
                    return (
                      <motion.div
                        className={styles['post-item']} key={idx}
                        variants={item}
                      >
                        {/* blog item */}
                        <div className="my2">
                          <p className="text-clear text-2xs" style={{ color: 'gray' }}>{moment(el.date).format('LL')} ({moment(el.date).fromNow()})</p>
                        </div>
                        <p className="pointer blog-title text-clear text-bold text-3xl mb1">
                          <Link href={`/posts/${el.slug}`}>{el.title}</Link>
                        </p>
                        <p className="text-clear text-xl">{el.excerpt}</p>
                        <hr className="gradient-border"/>
                      </motion.div>
                    )
                  })
                }
              </div>
            </motion.div>
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
