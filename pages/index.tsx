import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
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

      <main className="bkg relative grid h-screen place-content-center font-poppins">
        <h1 className="relative text-5xl font-bold text-gray-300 sm:text-7xl">
          <TypeWriter />
        </h1>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
