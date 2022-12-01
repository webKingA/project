import Head from "next/head";
import Image from "next/image";

// import Component Start

import Header from "./../Components/home/Header/Header";
import PartOne from "./../Components/home/PartOne/PartOne";
import BestTour from "./../Components/home/BestTour/BestTour";
import { Slider } from "../Components/home/Slider";
import TourismMagazine from "../Components/home/TourismMagazine";
import ShahrZardDes from "../Components/home/shahrZardDes";
import FrequentlyAsked from "../Components/home/frequentlyAsked";
import Footer from "../Components/home/Footer";

// import Component End

export default function Home() {
  return (
    <div>
      <Head>
        <title>Shahrzadbaal</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <PartOne />
        <div style={{ width: "80%", margin: "0 auto" }}>
          <BestTour />
          <Slider/>
          <TourismMagazine />
          <ShahrZardDes />
          <FrequentlyAsked />
        </div>
      </main>
      <Footer />
    </div>
  );
}
