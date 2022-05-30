import { ShieldWarning } from "phosphor-react";
import React from "react";
import { Fill } from "styled-icons/fa-solid";

import handsIcon from "../../assets/svg/hands.svg";
import swordsIcon from "../../assets/svg/sword.svg";
import vsIcon from "../../assets/svg/vs.svg";

import Menu from "./Menu";

const Header: React.FC = () => {
  return (
    <div className="absolute bg-zinc-800 shadow-xl h-16 w-full flex ">
      <div className=" h-10 w-36 bg-zinc-600 shadow-md rounded-md self-center ml-2 flex items-center justify-center text-xl font-bold text-p-gray">
        <img
          src={swordsIcon}
          alt="Icone espadas representando cavaleiros"
          className="h-6 m-1"
        />
        12
        <img src={vsIcon} className="h-6 mx-2" />
        4
        <img
          src={handsIcon}
          alt="Icone mãos representando de zumbi"
          className="h-6"
        />
      </div>
      <div className=" h-10 w-12 bg-zinc-600 shadow-md rounded-md self-center ml-2 flex items-center justify-center text-xl font-bold text-p-gray">
        <ShieldWarning size={32} weight="bold" />
      </div>

      <div className=" hidden sm:flex items-center ml-2">
        <h1 className="text-lg font-bold text-p-white leading-none truncate">
          <span className="text-sm font-semibold text-zinc-500">
            Nome da sala: <br />
          </span>
          Comedores de esfirra.
        </h1>
      </div>
      <Menu />
    </div>
  );
};

export default Header;
