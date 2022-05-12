import React from "react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Atropos from "atropos/react";

import kingIcon from "../assets/svg/king.svg";
import zombieIcon from "../assets/svg/zombie.svg";
import knightIcon from "../assets/svg/knight.svg";

const cardsTypes = {
  knight: {
    img: knightIcon,
    text: "Proteja sua sala servindo de sacrifício.",
  },
  king: {
    img: kingIcon,
    text: "Sacrifique os cavaleiros para manter sua sala protegida.",
  },
  zombie: {
    img: zombieIcon,
    text: "Junte-se a horda e ataque a sala.",
  },
};

const SwiperCards: React.FC = () => {
  return (
    <>
      <div className=" md:hidden w-full h-auto mt-5 mb-8">
        <Swiper
          modules={[EffectFade, Autoplay, Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          centeredSlides
          effect={"fade"}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={true}
        >
          {Object.entries(cardsTypes).map(([key, value]) => {
            return (
              <SwiperSlide key={key} className="flex justify-center">
                <div className="w-56 h-56 rounded-md bg-p-dark flex flex-col items-center p-4 justify-center">
                  <img src={value.img} className="h-14 w-auto" />
                  <h1 className="mt-4 text-base font-bold text-center text-p-white">
                    {value.text}
                  </h1>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className="hidden md:flex mt-5 mb-8 gap-10">
        {Object.entries(cardsTypes).map(([key, value]) => {
          return (
            <Atropos key={key} shadow={false}>
              <div className="w-56 h-56 rounded-md shadow-2xl bg-p-dark flex flex-col items-center p-4 justify-center">
                <img src={value.img} className="h-14 w-auto" />
                <h1 className="mt-4 text-base font-bold text-center text-p-white">
                  {value.text}
                </h1>
              </div>
            </Atropos>
          );
        })}
      </div>
    </>
  );
};

export default SwiperCards;
