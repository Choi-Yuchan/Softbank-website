"use client";
import Image from "next/image";
import FooterLogo from "public/images/logo-sb.svg";
import EmblaCarousel from "./slide/Carousel";
import "./css/embla.css";
import "./css/sandbox.css";
import "./css/base.css";
import HeaderServiceIcon from "./components/HeaderServiceIcon";
import UtilityIcon from "./components/UtilityIcon";
import PageList from "./components/PageList";
import { useEffect, useState } from "react";

const OPTIONS = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Home() {
  const [isMoved, setMoved] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY > 300) {
        setMoved(true);
      } else {
        setMoved(false);
      }
    };

    window.addEventListener("scroll", handleShowButton);
    return () => {
      window.removeEventListener("scroll", handleShowButton);
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <header className="w-full flex flex-col bg-black bg-opacity-90 text-white items-center py-40 px-16">
        <div className="mb-16 relative w-[383px] aspect-[500/73]">
          <Image
            src="/images/logo-sb-white.png"
            alt="SoftBank logo"
            fill={true}
          />
        </div>
        <div className="w-full text-center mb-4 lg:w-1/2 ">
          <p className="mb-8 text-lg">Select a service</p>
          <HeaderServiceIcon />
          <hr className="mt-6" />
        </div>
        <UtilityIcon />
      </header>
      <main className="sandbox w-full text-center">
        <h1 className="text-4xl font-bold mt-10">TOPICS</h1>
        <section className="sandbox__carousel">
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </section>
        <section className="bg-[#ecf0f4] py-20 px-10 h-full">
          <h1 className="text-4xl font-bold mt-10 mb-8">MENU</h1>
          <PageList />
        </section>
      </main>
      <footer className="flex flex-col items-center bg-[#e1e1e6] text-[#333] w-full py-10">
        <div>
          <Image src={FooterLogo} width={192} height={28} alt="footer-logo" />
        </div>
        <div className="w-1/2 text-xs text-center pb-4">
          <span className="pr-1">| Information Security</span>
          <span className="pr-1">| Privacy Center</span>
          <span className="pr-1">| Site Policy</span>
          <span>| Site Map |</span>
        </div>
        <div className="text-xs pb-4">
          Registration number(Telecommunications carrier):No.72
        </div>
        <div>
          <small>© SoftBank Corp. All Rights Reserved.</small>
        </div>
      </footer>
      {isMoved && (
        <div
          onClick={scrollToTop}
          className="fixed bottom-3 right-3 cursor-pointer animate-fadeIn"
          id="toTopBtn"
        >
          <div className=" relative rounded-full w-16 h-16 bg-slate-800 up-btn"></div>
        </div>
      )}
    </main>
  );
}
