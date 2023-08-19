import Head from 'next/head'
import Script from 'next/script'
import Layout from '../../components/layout/layout'
import Alert from '../../components/alert/alert'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={(...args) =>
          console.log(
            `script loaded correctly, window.FB has been populated`,
            args
          )
        }
      />
      <h1>First Post</h1>
      <Alert type="success">Success alert</Alert>
      <Alert type="error">Error alert</Alert>
    </Layout>
  )
}
