import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { getAllPosts } from '@/lib/postApi'
import { formatDate } from '@/lib/date'

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

        <div>
          <div className="flex items-center space-x-4 py-8 mx-4">
            <div>
              <img
                className="w-16 h-16 rounded-full object-cover"
                src="./img/real.jpg"
                loading="lazy"
              />
            </div>
            <div>
              <p className="text-xl font-bold">Burhanuddin Ahmad</p>
              <p className="text-xs text-gray-600">Software engineer, product creator, entrepreneur</p>
            </div>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="mx-4"
          >
            <p className="font-bold text-xl">{'Recent posts'.toLocaleUpperCase()}</p>
            <span>I write about tech related topics but sometimes non-tech topics. Check my <a href="https://dev.to/burhanahmeed" target="_blank" className="link-border-bottom">DEV.to</a></span>
            {/* blog wrapper */}
            <div className="my-8">
              {
                allPosts.map((el, idx) => {
                  return (
                    <motion.div
                      key={idx}
                      variants={item}
                    >
                      {/* blog item */}
                      <div className="p-2">
                        <div className="flex items-center space-x-4">
                          <p className="text-xs text-gray-600">{formatDate(el.date)}</p>
                          {el.lang &&  <span style={{ fontSize: '0.6rem' }} className="bg-gray-300 rounded-md px-3 py-1">{el.lang}</span>}
                        </div>
                        <p className="text-2xl font-bold hover:text-blue-600">
                          <Link href={`/posts/${el.slug}`}>{el.title}</Link>
                        </p>
                        <p className="text-gray-800">{el.excerpt}</p>
                      </div>
                      <hr className="gradient-border" />
                    </motion.div>
                  )
                })
              }
            </div>
          </motion.div>
        </div>
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
    'slug',
    'lang'
  ])

  return {
    props: { allPosts },
  }
}
