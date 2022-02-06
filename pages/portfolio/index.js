import Head from 'next/head'
import Container from '@/components/layouts/Container'
import Button from '@/components/Button'
import { getContents } from '@/lib/fetchContent'

export default function Portfolio({ contents }) {
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
            [1,2,4,2].map(portofolio => (
              <div className="md:flex bg-gray-100 rounded-md md:space-x-4 border border-gray-200">
                <div className="md:w-1/4">
                  <img
                    className="object-cover w-full h-full"
                    loading="lazy"
                    src="https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&w=1000&q=80"
                  />
                </div>
                <div className="p-2 md:w-3/4 space-y-2">
                  <div>
                    <h1 className="md:text-base font-bold">You can also use variant modifiers</h1>
                    <span className="text-xs text-blue-500 pointer hover:underline font-bold">Read more</span>
                  </div>
                  <p className="text-xs">You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use md:object-scale-down to apply the object-scale-down utility at only medium screen sizes and above.</p>
                  <div className="space-x-2 inline-block">
                    {
                      [1,2,3,4].map(el => (
                        <span className="text-xs border border-blue-300 bg-blue-200 text-blue-500 p-1 rounded">Nuxt</span>
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

  console.log(contents);

  return {
    props: { contents }
  }
}