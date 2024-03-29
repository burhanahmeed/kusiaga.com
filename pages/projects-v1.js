import Head from 'next/head'
import Default from '../components/default.layout'
import styles from '../styles/Home.module.css'
import { getAllPosts } from '../lib/creationApi'
import { useEffect, useState } from 'react'
import { motion } from "framer-motion"

const CreationItem = ({ data }) => {
  let coverImg = data.coverImage
  let width = useWidth()
  return (
    <div style={{ display: width < 600 ? 'block' : 'flex' }} className={styles['creation-item']}>
      <div>
        <div className={styles['creation-image']} style={{ 'backgroundImage': 'url('+coverImg+')' }} />
      </div>
      <div className="px4 py2">
        <div style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
          <a 
            href={data.url?data.url:'javascript:;'} 
            target={data.url?"_blank":''} 
            className="text-clear blog-title pointer text-4xl text-bold"
          >{data.title}</a>
          <p className="text-clear text-2xs mt1">tags: {data.stacks}</p>
          <p className="text-clear mt2" style={{ color: '#3c3c3c' }} title={data.excerpt}>{data.excerpt}</p>
        </div>
      </div>
    </div>
  )
}

export default function Creations({ allPosts }) {
  let width = useWidth()
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
          <title>Projects | Kusiaga</title>
        </Head>

        <main className={styles.main} style={{'marginTop': '60px', 'maxWidth': `${width}px`}}>
          <div style={{'width': '100%', 'textAlign': 'left'}}>
            <p className="text-clear text-bold text-3xl my2">Creations</p>
            <p className="text-clear text-xl">The list of stuffs I have created or maintained that I can publish openly.</p>
            <p className="text-clear text-md">(Check my <a className="link-border-bottom" target="_blank" href="https://github.com/burhanahmeed">Github</a> for more.)</p>
          </div>
          <motion.div
            className="py3 my5"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {
              allPosts.map(el => {
                return (
                  <motion.div variants={item}>
                    <CreationItem data={el} />
                  </motion.div>
                )
              })
            }
          </motion.div>
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

const useWidth = () => {
  let [width, setWidth] = useState(700)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      let xwidth = window.innerWidth
      if (xwidth < 700) {
        setWidth(xwidth - 30)
      }
    }
  }, [])
  return width
}