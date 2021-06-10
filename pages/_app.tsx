import Head from 'next/head'
import React from 'react'
import Footer from '../components/Footer/Footer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <div>
    <Head>
      <title>Join the mailing List</title>
      <meta name="description" content="Join The Mailing List" />
        <meta name="author" content="Tech Analogy" />
        <meta property="og:url" content="https://techanalogy.org" />
        <meta property="og:title" content="Get all the latest updates" />
        <meta
          property="og:description"
          content="Get all the latest updates"
        />
        <meta
          property="og:image"
          content="https://billboard.srmkzilla.net/api/blog?title=Mailng%20List&subtitle=Tech%20Analogy&theme=dark"
        />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
    <Footer />
  </div>
}

export default MyApp
