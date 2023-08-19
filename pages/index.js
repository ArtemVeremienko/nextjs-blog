import Head from 'next/head'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'
import Layout, { siteTitle } from '../components/layout/layout'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, I am Artem. I am a software enginer.</p>
        <p className="mb-1">
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        <ul className="list-disc">
          <li>
            <Link href="/posts/first-post">exmaple of a blog post</Link>
          </li>
        </ul>
      </section>
    </Layout>
  )
}
