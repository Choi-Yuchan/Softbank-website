import Image from "next/image";

const HEADER_SERVICES = [
  {
    src: "/images/icon-mobile-worldmenu-2x.png",
    href: "https://www.softbank.jp/en/mobile",
    service: "Mobile",
  },
  {
    src: "/images/icon-internet-worldmenu-2x.png",
    href: "https://www.softbank.jp/en/internet",
    service: "Internet",
  },
  {
    src: "/images/icon-energy-worldmenu-2x.png",
    href: "https://www.softbank.jp/en/energy",
    service: "Energy",
  },
  {
    src: "/images/icon-robot-worldmenu-2x.png",
    href: "https://www.softbank.jp/en/robot",
    service: "Robot",
  },
  {
    src: "/images/icon-biz-worldmenu-2x.png",
    href: "https://www.softbank.jp/en/biz",
    service: "Business",
  },
  {
    src: "/images/icon-corp-worldmenu-2x.png",
    href: "https://www.softbank.jp/en/corp",
    service: "About Us",
  },
];

export default function HeaderServiceIcon() {
  return (
    <div className="flex items-center justify-between">
      {HEADER_SERVICES.map((item, index) => (
        <div className="flex" key={index}>
          <a href={item.href} className="flex flex-col items-center">
            <div className="relative w-10 h-10 md:w-[86px] md:h-[86px]">
              <Image src={item.src} fill alt="Header Icon"></Image>
            </div>
            <p className="mt-2 text-xs md:text-base">{item.service}</p>
          </a>
        </div>
      ))}
    </div>
  );
}
