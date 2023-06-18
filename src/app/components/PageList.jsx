import Image from "next/image";
import MobileIcon from "/public/images/icon-header-category-mobile.svg";
import BuisunessIcon from "/public/images/icon-header-category-biz.svg";
import AboutUsIcon from "public/images/icon-header-category-corp.svg";
import EnergyIcon from "public/images/icon-header-category-energy.svg";
import InternetIcon from "public/images/icon-header-category-internet.svg";
import RobotIcon from "public/images/icon-header-category-robot.svg";

const PAGE_LIST = [
  {
    iconSrc: MobileIcon,
    imgSrc: "/images/img-iphone-14_20230322.jpg",
    menuLink: {
      title: "Mobile Top",
      link: [
        "Products",
        "Price Plans",
        "Campaigns",
        "Networks",
        "Services",
        "Support",
      ],
    },
  },
  {
    iconSrc: AboutUsIcon,
    imgSrc: "/images/img-ouchiwari-20180911.jpg",
    menuLink: {
      title: "About Us",
      link: [
        "News",
        "Company Info",
        "Vision and Strategy",
        "Investor Relations",
        "Sustainability",
        "Careers",
      ],
    },
  },
  {
    iconSrc: InternetIcon,
    imgSrc: "/images/img-sbair-20180911.jpg",
    menuLink: { title: "Internet TOP" },
  },
  {
    iconSrc: EnergyIcon,
    imgSrc: "/images/bnr-netzero-en.jpg",
    menuLink: { title: "Energy TOP" },
  },
  {
    iconSrc: RobotIcon,
    imgSrc: "/images/mv_img_kaigo_en.jpg",
    menuLink: { title: "Robot TOP" },
  },
  {
    iconSrc: BuisunessIcon,
    imgSrc: "/images/img-mainvisual.jpg",
    menuLink: { title: "Buisiness TOP" },
  },
];
export default function PageList() {
  return (
    <div className="lg:w-2/3 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 ">
      {PAGE_LIST.map((list, index) => (
        <div
          className=" bg-slate-50 flex items-center flex-col rounded-lg pb-4"
          key={index}
        >
          <div className="bg-blue-600 text-white text-2xl w-full rounded-t-lg mb-4 pt-4 pb-4 text-left flex items-center px-4">
            <Image src={list.iconSrc} className="mr-4" alt="ListIcon"></Image>
            Mobile
          </div>
          <div className="w-60 h-60 relative shadow-md">
            <Image
              src={list.imgSrc}
              className="rounded-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100%"
              fill
              alt="ListImage"
            />
          </div>
          {!list.menuLink?.link ? (
            <div className="w-full pr-5 pl-5">
              <div className="menu-link my-3">{list.menuLink.title}</div>
            </div>
          ) : (
            <div className="w-full pr-5 pl-5">
              <div className="menu-link my-3">{list.menuLink.title}</div>
              <hr />
              <div className="grid grid-cols-2 gap-y-4 p-5 ">
                {list.menuLink.link.map((link, index) => (
                  <div className="menu-link text-xs md:text-base" key={index}>
                    {link}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
