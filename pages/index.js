import Head from 'next/head'
import Link from 'next/link'
import moment from 'moment'
import { motion } from 'framer-motion'

import { getAllPosts } from '../lib/postApi'

import Default from '@/components/default.layout'
import Container from '@/components/layouts/Container';

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
      <Container>
        <Head>
          <title>Brhn.</title>
        </Head>

        <main>
          <div>
            <div>
              <div>
                <img
                  className="w-16 h-16"
                  src="./img/real.jpg"
                  loading="lazy"
                />
              </div>
              <div>
                <p>Burhanuddin Ahmad</p>
                <p>Software engineer, product creator, entrepreneur</p>
              </div>
            </div>

            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
            >
              <p className="text-bold text-xl">{'Recent posts'.toLocaleUpperCase()}</p>
              <span>I write about tech related topics but sometimes non-tech topics. Check my <a href="https://dev.to/burhanahmeed" target="_blank" className="link-border-bottom">DEV.to</a></span>
              {/* blog wrapper */}
              <div>
                {
                  allPosts.map((el, idx) => {
                    return (
                      <motion.div
                        key={idx}
                        variants={item}
                      >
                        {/* blog item */}
                        <div>
                          <p>{moment(el.date).format('LL')} ({moment(el.date).fromNow()})</p>
                        </div>
                        <p>
                          <Link href={`/posts/${el.slug}`}>{el.title}</Link>
                        </p>
                        <p>{el.excerpt}</p>
                        <hr/>
                      </motion.div>
                    )
                  })
                }
              </div>
            </motion.div>
          </div>
        </main>
      </Container>
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
