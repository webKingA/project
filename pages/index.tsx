import Head from 'next/head'
import Image from 'next/image'

// import Component Start

import Header from './../Components/home/Header/Header';
import PartOne from './../Components/home/PartOne/PartOne';
import BestTour from './../Components/home/BestTour/BestTour';

// import Component End

export default function Home() {
  return (
    <div>
      <Head>
        <title>Shahrzadbaal</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{width : "100%"}}>
        <Header />
        <PartOne />
        <BestTour />
      </main>
    </div>
  )
}