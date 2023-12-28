import React from "react";
import logo from "../../public/assets/Metis Light Background.svg";
import Image from "next/image";
import twi from "../../public/assets/twi.svg";
import tele from "../../public/assets/telegram.svg";
import discord from "../../public/assets/discord.svg";
import youtube from "../../public/assets/you.svg";
import git from "../../public/assets/github.svg";
import med from "../../public/assets/medium.svg";
import Link from "next/link";
const Footer = () => {
  const icons = [
    {
      icon: twi,
      link: "",
    },
    {
      icon: tele,
      link: "",
    },
    {
      icon: med,
      link: "",
    },
    {
      icon: discord,
      link: "",
    },
    {
      icon: git,
      link: "",
    },
    {
      icon: youtube,
      link: "",
    },
  ];
  const list1 = ["Platform", "Knowledge", "Carrers", "Search", "Subscribe"];
  const list2 = [
    "Community",
    "Company",
    "Ecosystem",
    "Terms & conditions",
    "Contact",
  ];
  return (
    <div className="container pt-[54px] pb-[157px]">
      {/* logo & icons */}
      <div className="flex items-center justify-between">
        <Image
          src={logo}
          className="w-[197px] h-10"
          alt="logo"
          width={197}
          height={42}
        />
        {/* icons */}
        <div className="flex items-center gap-2.5">
          {icons.map((item, index) => (
            <Link href={item.link} key={index}>
              <Image
                src={item.icon}
                className="w-12 h-12"
                alt="icon"
                width={50}
                height={50}
              />
            </Link>
          ))}
        </div>
      </div>
      {/* lists */}
      <div className="flex items-center gap-36 text-white text-[13px] font-poppins mt-[47px]">
        <ul className="flex flex-col gap-4">
          {list1.map((item, index) => (
            <li key={index} className="">
              <Link href="">{item}</Link>
            </li>
          ))}
        </ul>
        <ul className="flex flex-col gap-4">
          {list2.map((item, index) => (
            <li key={index} className="">
              <Link href="">{item}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
