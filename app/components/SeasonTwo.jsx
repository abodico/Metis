import React from "react";
import rightArrowB from "../../public/assets/Group 33b.svg";
import Image from "next/image";
import twitter from "../../public/assets/Union.svg";
const SeasonTwo = () => {
  return (
    <div className="pt-[117px] pb-[104px] container">
      <div className="bg-white px-[40px] py-8 flex items-center justify-between rounded-[30px] cursor-pointer">
        <div className="flex gap-5 items-center">
          <h4 className="text-black text-[30px] font-semibold">
            Share on Twitter X
          </h4>
          <Image
            src={rightArrowB}
            className="w-6 h-6"
            width={25}
            height={25}
            alt="right-arrow"
          />
        </div>
        <Image
          src={twitter}
          className="w-10 h-9"
          alt="twitter"
          width={40}
          height={37}
        />
      </div>
      <div className="text-center text-white mt-[83px]">
        <h2 className=" opacity-25 font-bold text-[66px] leading-[77px]">
          Season Two
        </h2>
        <h3 className="font-semibold text-[26px]">COMING SOON</h3>
      </div>
    </div>
  );
};

export default SeasonTwo;
