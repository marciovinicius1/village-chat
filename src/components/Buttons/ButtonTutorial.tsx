import React from "react";

import mageIcon from "../../assets/svg/mage.svg";

import { motion } from "framer-motion";

const ButtonTutorial: React.FC = () => {
  return (
    <button className="bg-p-dark lg:bg-p-lilac h-12 w-52 lg:h-16 lg:w-58 lg:text-xl shadow-xl text-p-gray rounded-md font-bold border-2 border-transparent hover:border-p-yellow focus:border-p-yellow focus:outline-none hover:text-p-yellow focus:text-p-yellow transition-colors flex items-center justify-center gap-2 group">
      <img
        src={mageIcon}
        className="h-8 md:h-10 w-auto group-hover:h-12 ease-in-out duration-300"
      />
      <span>Tutorial</span>
    </button>
  );
};

export default ButtonTutorial;
