import { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import Container from '@/components/layouts/Container'
import Button from '@/components/Button'
import { getContents } from '@/lib/fetchContent'
import { IMAGE } from '@/constants'

export default function Portfolio({ contents }) {
  const [portfolios, setPortfolios] = useState([])

  useEffect(() => {
    const sortedPortfolio = contents.sort((a, b) => new Date(b.date) - new Date(a.date))
    setPortfolios(sortedPortfolio)
  }, [])

  return (
    <Container>
      <Head>
        <title>Brhn. Portfolio</title>
      </Head>

      <div className="m-4">
        <div className="mb-4">
          <Button>
            <span>←</span>
            <span>Main Site</span>
          </Button>
        </div>
        <div className="my-4">
          <h1 className="text-3xl font-bold">Some of the most notable projects I have involved in.</h1>
        </div>

        <div className="space-y-4">
          {
            portfolios.map(portofolio => (
              <div className="md:flex bg-gray-100 rounded-md md:space-x-4 border border-gray-200">
                <div className="md:w-1/4">
                  <img
                    className="object-cover w-full h-full"
                    loading="lazy"
                    src={
                      portofolio.thumbnail
                        ? portofolio.thumbnail
                        : IMAGE
                    }
                  />
                </div>
                <div className="p-2 md:w-3/4 space-y-2">
                  <div>
                    <h1 className="md:text-base font-bold">{ portofolio.name }</h1>
                    <Link href={'/portfolio/' + portofolio.slug}>
                      <span className="text-xs text-blue-500 pointer hover:underline font-bold">Read more</span>
                    </Link>
                  </div>
                  <p className="text-xs">{ portofolio.description }</p>
                  <div className="space-x-2 inline-block">
                    {
                      portofolio.tag.map(el => (
                        <span className="text-xs border border-blue-300 bg-blue-200 text-blue-500 p-1 rounded">
                          { el }
                        </span>
                      ))
                    }
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </Container>
  )
}

export async function getStaticProps() {
  const contents = getContents('contents/portfolios', [
    'slug',
    'name',
    'thumbnail',
    'description',
    'tag',
    'date'
  ])

  return {
    props: { contents }
  }
}