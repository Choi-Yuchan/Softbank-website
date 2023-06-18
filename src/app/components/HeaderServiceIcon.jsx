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
        <div className="flex flex-col items-center" key={index}>
          <a href={item.href}>
            <Image
              src={item.src}
              width={86}
              height={86}
              alt="Header Icon"
            ></Image>
            <p className="mt-2">{item.service}</p>
          </a>
        </div>
      ))}
    </div>
  );
}
