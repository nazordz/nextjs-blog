import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h2 className="heading">
        <h1>First Post</h1>
        <Link href="/">
          Back to home
        </Link>
      </h2>
      <style jsx>{`
        .heading {
          font-family: sans-serif;
        }
      `}</style>
    </Layout>
  )
}