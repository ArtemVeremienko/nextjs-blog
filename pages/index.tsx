import Head from 'next/head'
import Link from 'next/link'
import Layout, { SITE_TITLE } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import utilStyles from '../styles/utils.module.css'
import Date from '../components/date'
import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()

  return {
    props: {
      allPostsData,
    },
  }
}

interface PostsData {
  date: string
  title: string
  id: string
}

interface HomeProps {
  allPostsData: PostsData[]
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{SITE_TITLE}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I'm Artem. I'm a software engineer. You can contact me on
          LinkedIn.
        </p>
        <p>
          See an example of Post <Link href="posts/first-post">here</Link>.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
