import Image from "next/image";
import React from "react";
import Metis from "../../public/assets/Metis Light Background.svg";
import hover from "../../public/assets/hover.svg";
import img176 from "../../public/assets/image 176.png";
import upArrow from "../../public/assets/vector 96.svg";
import arrow from "../../public/assets/Vector 94.svg";
const Header = () => {
  const list = "Developer Ecosystem Governance Company Bridge More".split(" ");

  return (
    <div className="flex items-center justify-between px-[45px] py-5 ">
      {/* logo */}
      <div className="w-[123px] h-[44px] flex items-center">
        <Image
          src={Metis}
          width={200}
          height={200}
          alt="Metis-Light-Background"
          className=" max-w-full max-h-full"
        />
      </div>
      {/* list */}
      <div className="flex items-center gap-4">
        <ul className="text-white flex text-[15px] gap-4">
          {list.map((item, index) => (
            <li key={index} className="cursor-pointer font-medium">
              {item}
            </li>
          ))}
        </ul>
        <div className="w-[400px] h-[50px] bg-transparent relative rounded-[40px] overflow-hidden bg-light ">
          <div className="w-1/2 h-[50px] bg-[#00D2FF] text-black flex items-center font-medium gap-2 px-4">
            <Image
              src={arrow}
              width={200}
              height={200}
              alt="arrow"
              className=" scale-125 w-[9px] h-1 "
            />
            <p className="font-poppins "> 36 Metis</p>
          </div>
          <div className="w-1/3 h-[50px] left-[30%] bg-white text-black flex items-center font-medium gap-2 px-2 rounded-[40px] absolute top-0 ">
            <div className=" w-[34px] h-[34px] rounded-full border-[3px] box-border border-r-[#00d2ff] border-y-black border-l-black flex items-center text-center -rotate-[45deg]">
              <div className="font-poppins text-[13px] relative w-[34px] rotate-[45deg] ">
                XP
              </div>
              <div className="bg-black absolute top-[6px] left-[24px] w-[14px] h-[14px] flex items-center justify-center rounded-full rotate-[45deg]">
                <Image
                  src={upArrow}
                  width={200}
                  height={200}
                  alt="arrow"
                  className=" text w-[12px] h-[4px] "
                />
              </div>
            </div>
            <p className="font-poppins">142</p>
          </div>
          <div className="w-full h-[50px] left-[52%] bg-light text-white flex items-center font-medium gap-2 px-2 rounded-[40px] absolute top-0 ">
            <Image
              src={img176}
              width={200}
              height={200}
              alt="arrow"
              className=" text w-[38px] h-[38px] "
            />
            <p className="font-poppins">0x8e...c06c</p>
          </div>
        </div>
        <div className="w-9 h-9 flex items-center">
          <Image
            src={hover}
            width={200}
            height={200}
            alt="hover"
            className=" max-w-full max-h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
