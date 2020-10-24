import { getPostBySlug, getAllPosts } from '../../lib/postApi'
import Head from 'next/head'
import markdownToHtml from '../../lib/markdownToHtml'
import Default from '../../components/default.layout'
import PostBody from '../../components/posts/postBody'
import styles from '../../styles/Home.module.css'
import {useState, useEffect} from 'react'
import PostHeader from '../../components/posts/postHeading'

export default function dynamicCreation ({ post, morePosts, preview  }) {
  let width = useWidth()
  return (
    <Default>
      <div className={styles.container}>
        <Head>
          <title>Berhan | Kusiaga</title>
        </Head>

        <main className={styles.main} style={{'marginTop': '60px', 'maxWidth': `${width}px`}}>
          <PostHeader
            title={post.title}
            date={post.date}
            content={post.content}
          />
          <PostBody content={post.content} />
        </main>
      </div>
    </Default>
  )
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'excerpt',
    'slug',
    'content',
    'previewImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
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