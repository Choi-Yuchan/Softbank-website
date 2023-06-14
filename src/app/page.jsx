"use client";
import Image from "next/image";
import MySoftBankIcon from "/public/images/icon-utility-mysoftbank-01.svg";
import SupportIcon from "/public/images/icon-utility-support-01.svg";
import ShopIcon from "/public/images/icon-utility-shop-01.svg";
import EmblaCarousel from "./slide/Carousel";
import "./css/embla.css";
import "./css/sandbox.css";

const OPTIONS = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <header className="w-full flex flex-col bg-black bg-opacity-90 text-white items-center p-20">
        <div className="mb-16 relative w-[383px] aspect-[500/73]">
          <Image
            src="/images/logo-sb-white.png"
            alt="SoftBank logo"
            fill={true}
          ></Image>
        </div>
        <div className="w-full text-center mb-4 ">
          <p className="mb-8 text-lg">Select a service</p>
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-center">
              <Image
                src="/images/icon-mobile-worldmenu-2x.png"
                width={86}
                height={86}
              ></Image>
              <p>Mobile</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/images/icon-internet-worldmenu-2x.png"
                width={86}
                height={86}
              ></Image>
              <p>Internet</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/images/icon-energy-worldmenu-2x.png"
                width={86}
                height={86}
              ></Image>
              <p>Energy</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/images/icon-robot-worldmenu-2x.png"
                width={86}
                height={86}
              ></Image>
              <p>Robot</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/images/icon-biz-worldmenu-2x.png"
                width={86}
                height={86}
              ></Image>
              <p>Business</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/images/icon-corp-worldmenu-2x.png"
                width={86}
                height={86}
              ></Image>
              <p>About Us</p>
            </div>
          </div>
          <hr className="mt-6" />
        </div>
        <div className="flex items-center justify-around w-3/4">
          <div className="flex items-center">
            <Image src={MySoftBankIcon}></Image>
            My SoftBank
          </div>
          <div className="flex items-center">
            <Image src={SupportIcon}></Image>
            Support
          </div>
          <div className="flex items-center">
            <Image src={ShopIcon}></Image>
            Shop
          </div>
        </div>
      </header>
      <main className="sandbox w-full text-center">
        <h1>TOPICS</h1>
        <section className="sandbox__carousel">
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </section>
        <section>
          <h1>MENU</h1>
          <div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </section>
      </main>
      <footer></footer>
    </main>
  );
}
