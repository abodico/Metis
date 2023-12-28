import React from "react";
import unidex from "../../public/assets/unidex.svg";
import league from "../../public/assets/vector.svg";
import maia from "../../public/assets/MaiaDao2.svg";
import hummus from "../../public/assets/Group31.svg";
import midas from "../../public/assets/midas.svg";
import tethys from "../../public/assets/Tethys.svg";
import netswap from "../../public/assets/netswap.svg";
import rightArrow from "../../public/assets/Group 33.svg";
import check from "../../public/assets/check.svg";
import Image from "next/image";
const Ecosystem = () => {
  const cards = [
    {
      image: tethys,
      title: "Tethys",
      gradient: "bg-gradient-tethys",
      completed: false,
    },
    {
      image: unidex,
      title: "Unidex",
      gradient: "bg-gradient-unidex",
      completed: true,
    },
    {
      image: maia,
      title: "Maia",
      gradient: "bg-gradient-maia",
      completed: false,
    },
    {
      image: netswap,
      title: "Netswap",
      gradient: "bg-gradient-netswap",
      completed: false,
    },
    {
      image: hummus,
      title: "Hummus",
      gradient: "bg-gradient-hummus",
      completed: false,
    },
    {
      image: midas,
      title: "Midas",
      gradient: "bg-gradient-midas",
      completed: false,
    },
    {
      image: league,
      title: "League Tech",
      gradient: "bg-gradient-league",
      completed: false,
    },
  ];
  return (
    <div className="container pb-[105px] ">
      <h2 className="text-white text-[46px] font-bold text-center pt-[111px]">
        Ecosystem dApps
      </h2>
      <div className="flex flex-wrap gap-5 mt-[87px]">
        {cards.map((item, index) => (
          <div
            key={index}
            className={`${item.gradient} overflow-hidden w-[calc(50%-10px)] h-[140px] rounded-[30px] flex items-center relative`}
          >
            <div className="ml-[40px]">
              <h3 className="text-white text-[30px] font-semibold">
                {item.title}
              </h3>
              <Image
                src={rightArrow}
                className="w-[25px] h-[25px]"
                alt="right-arrow"
              />
            </div>
            <Image
              src={item.image}
              alt={item.title}
              className="absolute bottom-0 right-0"
            />
            <div
              className={`${
                !item.completed && "hidden"
              } w-full h-full bg-[rgba(0,0,0,0.8)] absolute top-0 left-0 z-10 `}
            >
              <div className="px-4 py-2 bg-[#00FFA3] w-fit absolute top-5 right-5 rounded-[50px] flex items-center, gap-1.5">
                <p className="text-sm font-semibold ">COMPLETED</p>
                <Image
                  src={check}
                  alt="check"
                  className="w-4 "
                  width={16}
                  height={16}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ecosystem;
