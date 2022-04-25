import type { NextPage } from "next";
import Head from "next/head";
import Card from "../components/card";
import TypeWriter from "../components/typewriter";
// import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>sahildmk.dev</title>
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <main className="bkg relative flex h-screen flex-col items-center font-poppins text-gray-300">
        <section className=" mt-44">
          <h1 className="relative text-4xl font-bold sm:text-7xl">
            {/* <TypeWriter text="Sahil Deshmukh" /> */}
            Sahil Deshmukh
          </h1>
        </section>
        <section>
          <Card />
        </section>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
