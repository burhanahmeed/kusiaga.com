import Head from 'next/head'
import dayjs from 'dayjs'

import Container from '@/components/layouts/Container'
import Button from '@/components/Button'

import { getSingleContent, getContents } from '@/lib/fetchContent'
import MarkdownToHtml from '@/lib/markdownToHtml'
import markdownStyles from '@/styles/Markdown.module.css'

const FilePath = 'contents/portfolios'

export default function Portfolio({ content }) {
  return (
    <Container>
      <Head>
        <title>{ content.name } | Brhn.</title>
      </Head>
      <div className="my-4">
        <Button to="/portfolio">
          <span>←</span>
          <span>Portfolio</span>
        </Button>
      </div>

      <div className="mt-10">
        <h1 className="text-4xl font-bold">{ content.name }</h1>
        <span className="text-gray-500">{ dayjs(content.date).format('MMMM DD, YYYY') }</span>
        <p className="mt-4 text-gray-600 text-sm">
          { content.description }
        </p>
      </div>

      <article>
        <div
          className={ markdownStyles['markdown'] }
          dangerouslySetInnerHTML={{ __html: content.c }}
        />
      </article>
    </Container>
  )
}

export async function getStaticPaths() {
  const posts = getContents(FilePath, ['slug'])

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
  const content = getSingleContent(FilePath, params.slug, [
    'slug',
    'name',
    'thumbnail',
    'description',
    'tag',
    'date',
    'content'
  ])

  return {
    props: { content: { ...content, c: await MarkdownToHtml(content.content || '') } }
  }
}