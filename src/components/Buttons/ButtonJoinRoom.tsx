import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

import swordIcon from "../../assets/svg/sword.svg";

import { motion } from "framer-motion";

const ButtonCreateRoom: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  function handleJoinRoom() {
    if (!user) {
      navigate("/rooms/create-user");
    } else {
      navigate("/rooms/select-chat-room");
    }
  }

  return (
    <button
      onClick={handleJoinRoom}
      className="bg-p-dark lg:bg-p-lilac h-12 w-52 lg:h-16 lg:w-58 lg:text-xl text-p-gray shadow-xl rounded-md font-bold border-2 border-transparent hover:border-p-yellow focus:border-p-yellow focus:outline-none hover:text-p-yellow focus:text-p-yellow transition-colors flex items-center justify-center gap-2 group"
    >
      <img
        src={swordIcon}
        className="h-8 md:h-10 w-auto group-hover:h-12 ease-in-out duration-300"
      />
      <span>Entre na sala</span>
    </button>
  );
};
export default ButtonCreateRoom;
