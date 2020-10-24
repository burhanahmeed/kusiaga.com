import { getPostBySlug, getAllPosts } from '../../lib/postApi'
import Head from 'next/head'
import markdownToHtml from '../../lib/markdownToHtml'
import Default from '../../components/default.layout'
import PostBody from '../../components/posts/postBody'
import styles from '../../styles/Home.module.css'
import {useState, useEffect} from 'react'
import PostHeader from '../../components/posts/postHeading'
import Disqus from "disqus-react"

export default function dynamicCreation ({ post, morePosts, preview  }) {
  let width = useWidth()
  let desc = post.excerpt
  let title = post.title
  let previewImage = post.previewImage

  const disqusShortname = "kusiaga"
  const disqusConfig = {
    url: `https://kusiaga.com/posts/${post.slug}`,
    identifier: post.slug,
    title: post.title
  }


  return (
    <Default>
      <div className={styles.container}>
        <Head>
          <title>{post.title} | Kusiaga</title>
          <meta name="description" content={desc}></meta>
 
          {/* Open Graph */}
          <meta property="og:title" content={title} key="ogtitle" />
          <meta property="og:description" content={desc} key="ogdescription" />
          <meta property="og:url" content="https://kusiaga.com" key="ogurl" />
          <meta property="og:image" content={previewImage} key="ogimage" />
          <meta property="og:site_name" content="kusiaga" key="ogsitename" />
          
          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" key="twcard" />
          <meta name="twitter:creator" content="@burhannahm" key="twhandle" />
          <meta name="twitter:image" content={previewImage} key="twimage"/>
          <meta name="twitter:url" content={`https://kusiaga.com/posts/${post.slug}`} key="twurl"/>
        </Head>

        <main className={styles.main} style={{'marginTop': '60px', 'maxWidth': `${width}px`}}>
          <PostHeader
            title={post.title}
            date={post.date}
            content={post.content}
          />
          <PostBody content={post.content} />
          <div style={{ width: '100%' }} className="my4">
            <Disqus.DiscussionEmbed
              shortname={disqusShortname}
              config={disqusConfig}
            />
          </div>
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