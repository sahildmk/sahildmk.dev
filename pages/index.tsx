import type { NextPage } from 'next'
import Head from 'next/head'
// import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>sahildmk.dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid h-screen place-content-center">
        <h1 className="title relative text-5xl font-bold before:animate-typewritter sm:text-7xl">
          Sahil Deshmukh
        </h1>
      </main>

      <footer></footer>
    </div>
  )
}

export default Home
