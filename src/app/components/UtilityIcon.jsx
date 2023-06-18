import MySoftBankIcon from "/public/images/icon-utility-mysoftbank-01.svg";
import SupportIcon from "/public/images/icon-utility-support-01.svg";
import ShopIcon from "/public/images/icon-utility-shop-01.svg";
import Image from "next/image";

const UTILITY_ICONS = [
  {
    src: MySoftBankIcon,
    href: "https://www.softbank.jp/mysoftbank",
    title: "My SoftBank",
  },
  {
    src: SupportIcon,
    href: "https://www.softbank.jp/support",
    title: "Support",
  },
  {
    src: ShopIcon,
    href: "https://www.softbank.jp/shop",
    title: "Shop",
  },
];
export default function UtilityIcon() {
  return (
    <div className="flex items-center justify-around w-full md:w-3/4 lg:w-2/5">
      {UTILITY_ICONS.map((item, index) => (
        <div className="flex items-center" key={index}>
          <a href={item.href} className="flex items-center">
            <Image src={item.src} className="mr-2" alt="utility icon" />
            <p className="text-sm md:text-base">{item.title}</p>
          </a>
        </div>
      ))}
    </div>
  );
}
