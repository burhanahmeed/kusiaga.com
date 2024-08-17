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

           {/* Primary Meta Tags */}
          <meta name="title" content="Brhn. - Software Engineer, Entrepreneur, Product Creator" />
          <meta name="description" content="I am Burhan, a software engineer working on all-things-web, entrepreneur, and product creator. Currently working as a Software Engineer in a Singaporean based company." />
          
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://brhn.my.id//" />
          <meta property="og:title" content="Brhn. - Software Engineer, Entrepreneur, Product Creator" />
          <meta property="og:description" content="I am Burhan, a software engineer working on all-things-web, entrepreneur, and product creator. Currently working as a Software Engineer in a Singaporean based company." />
          
          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://brhn.my.id/" />
          <meta property="twitter:title" content="Brhn. - Software Engineer, Entrepreneur, Product Creator" />
          <meta property="twitter:description" content="I am Burhan, a software engineer working on all-things-web, entrepreneur, and product creator. Currently working as a Software Engineer in a Singaporean based company." />
          
          {/* Additional Meta Tags */}
          <meta name="robots" content="index, follow" />
          <meta name="author" content="Burhan" />
          <meta name="keywords" content="Burhan, Software Engineer, Entrepreneur, Product Creator, Web Development, Singapore, Delivery Hero, Tabsquare" />
          <link rel="canonical" href="https://brhn.my.id//" />
          
          {/* Structured Data */}
          <script type="application/ld+json">
            {`
              {
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Burhan",
                "url": "https://kusiaga.com/",
                "image": "https://kusiaga.com/path-to-your-image.jpg",
                "sameAs": [
                  "https://twitter.com/burhannahm",
                  "https://github.com/initbase",
                  "https://www.linkedin.com/in/burhanahmeed/"
                ],
                "jobTitle": "Software Engineer",
                "worksFor": {
                  "@type": "Organization",
                  "name": "Delivery Hero / Tabsquare"
                }
              }
            `}
          </script>
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
            <span>I write about tech related topics but sometimes non-tech topics. Check my <a href="https://dev.to/burhanahmeed" target="_blank" className="link-border-bottom">DEV.to</a> here.</span>

            <div className="my-8">
              <a href="https://dev.to/burhanahmeed" target="_blank" className="link-border-bottom">
                <img src='./img/devto-img.avif' className="w-full" />
              </a>
            </div>

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
