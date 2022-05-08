import { collection, getDocs, query, where } from "firebase/firestore";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { db } from "../../services/firebase";

import kingIcon from "../../assets/svg/king.svg";

import { motion } from "framer-motion";

const ButtonCreateRoom: React.FC = () => {
  const navigate = useNavigate();
  const { user, deleteCurrentUser } = useAuth();

  async function handleNewRoom() {
    if (!user) {
      navigate("/rooms/new");
    } else {
      // if user are logged
      const roomRef = query(
        collection(db, "rooms"),
        where("authorId", "==", user.id)
      );

      const userRoom = await getDocs(roomRef);
      const parsedRoom = userRoom.docs.map((key) => key.id);
      const idUserRoom = parsedRoom[0];

      if (idUserRoom == undefined) {
        deleteCurrentUser();
        navigate("/rooms/new");
      } else {
        navigate(`/rooms/id/${idUserRoom}`);
      }
    }
  }

  return (
    <button
      onClick={handleNewRoom}
      className="bg-p-dark lg:bg-p-lilac h-12 w-52 lg:h-16 lg:w-58 lg:text-xl shadow-xl text-p-gray rounded-md font-bold border-2 border-transparent hover:border-p-yellow focus:border-p-yellow focus:outline-none hover:text-p-yellow focus:text-p-yellow transition-colors flex items-center justify-center gap-2 group"
    >
      <img
        src={kingIcon}
        className="h-8 md:h-10 w-auto group-hover:h-12 ease-in-out duration-300"
      />
      <span>Crie sua sala</span>
    </button>
  );
};

export default ButtonCreateRoom;
