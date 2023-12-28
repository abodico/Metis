import React from "react";
import SimpleSlider from "./HeroSlider";
import token2 from "../../public/assets/tokens 2.png";
import token3 from "../../public/assets/tokens 3.png";
import rightArrow from "../../public/assets/Group 33.svg";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="pb-[100px] container">
      <SimpleSlider />
      <div className="text-center">
        <h2 className="font-bold text-[66px] leading-[77px] mt-[114px] text-white ">
          Season One
        </h2>
        <p className="text-white font-inter mt-2 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <button
          className="text-black bg-white rounded-[50px] leading-[18px] py-[15px] px-5 font-semibold mt-[52px] mb-14 "
          type="button"
        >
          Connect your Wallet
        </button>
      </div>
      <div className="bg-[#003A92] w-full h-[100px] rounded-[30px] px-[47px] mt-[57px] py-8 relative">
        <div className="flex gap-5 items-center ">
          <p className="font-semibold text-[30px] text-white">
            Claim your tokens
          </p>
          <Image
            src={rightArrow}
            alt="arrow"
            width={25}
            height={25}
            className=""
          />
        </div>
        <Image
          src={token2}
          className="absolute bottom-0 right-0 w-auto h-[100px]"
          alt="token2"
          width={177}
          height={179}
        />
        <Image
          src={token3}
          className="absolute bottom-0 right-8 w-auto h-[100px]"
          alt="token2"
          width={177}
          height={179}
        />
      </div>
    </div>
  );
};

export default Hero;
