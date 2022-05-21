import React from "react";
import logovillageIcon from "../../assets/svg/logovillage.svg";
import planetIcon from "../../assets/svg/planet.svg";
import alertIcon from "../../assets/svg/alert.svg";
import castleIcon from "../../assets/svg/castle.svg";
import handsBgIcon from "../../assets/svg/handsBg.svg";

import ButtonJoinRoom from "../../components/Buttons/ButtonJoinRoom";
import ButtonNewRoom from "../../components/Buttons/ButtonNewRoom";
import ButtonTutorial from "../../components/Buttons/ButtonTutorial";
import { ButtonCredits } from "../../components/Buttons/ButtonCredits";
import Cards from "../../components/Cards";

const Home: React.FC = () => {
  return (
    <div className="flex">
      <div
        id="Main-section"
        className="w-screen h-full min-h-screen
       lg:w-3/4 lg:h-screen bg-gradient-to-tr relative from-p-lilac to-p-purple flex flex-col items-center content-center lg:justify-center py-5 px-4"
      >
        <div id="Background-images" className="hidden lg:flex z-0">
          <img
            src={castleIcon}
            className=" flex w-auto h-[16rem] absolute bottom-0 left-0"
          />
          <img
            src={handsBgIcon}
            className=" flex w-auto h-[16rem] absolute bottom-0 right-0"
          />
        </div>
        <img
          src={logovillageIcon}
          alt="Logo village chat"
          className="w-auto h-60 drop-shadow-2xl"
        />

        <section className="flex gap-4 items-center mb-4">
          <img src={planetIcon} className="w-auto h-20" />
          <h1 className="font-bold text-2xl text-p-white">
            Conversas anônimas e qualquer lugar do mundo.
          </h1>
        </section>
        <section className="flex gap-4 items-center">
          <img src={alertIcon} className="w-auto h-12" />
          <h1 className="font-bold text-2xl text-p-white">
            <span className="text-p-yellow mr-2">Cuidado!</span>Uma horda zumbi
            pode acabar com o rolê.
          </h1>
        </section>

        <Cards />

        <div id="Buttons-mobile" className="flex flex-col gap-2.5 lg:hidden">
          <ButtonNewRoom />
          <ButtonJoinRoom />
          <ButtonTutorial />
        </div>
      </div>

      <div
        id="Sidebar-section"
        className="hidden lg:flex lg:h-screen bg-bg-pattern drop-shadow-2xl bg-p-dark bg-center bg-[length:140px] lg:w-1/4 items-center justify-center relative"
      >
        <section id="Buttons-desktop" className=" flex flex-col gap-5">
          <ButtonNewRoom />
          <ButtonJoinRoom />
          <ButtonTutorial />
        </section>
      </div>

      <ButtonCredits />
    </div>
  );
};

export default Home;
