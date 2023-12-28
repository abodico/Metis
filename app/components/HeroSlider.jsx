"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import frame from "../../public/assets/Frame 6258-2.png";
import Image from "next/image";
import ellipse from "../../public/assets/Ellipse 51.png";
const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    pauseOnHover: false,
    infinite: true,
  };
  const imgs = [frame, frame, frame, frame];
  return (
    <div className="relative mt-[54px]">
      <Slider {...settings} className=" w-[1060px] h-[440px]">
        {imgs.map((item, index) => (
          <div
            key={index}
            className="rounded-[40px] overflow-hidden w-[1060px] h-[440px]"
          >
            <Image
              src={item}
              alt="frame"
              className="h-full w-full"
              width={1060}
              height={440}
            />
          </div>
        ))}
      </Slider>
      <Image
        src={ellipse}
        className="w-[1127px] scale-[1.15] h-[259px] absolute -bottom-24"
        alt="ellipse"
        width={1127}
        height={259}
      />
    </div>
  );
};

export default HeroSlider;
