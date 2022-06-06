import { SignOut, Chats, ArrowSquareOut } from "phosphor-react";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import logoVillageIcon from "../../assets/svg/logovillage.svg";
import handsIcon from "../../assets/svg/hands.svg";
import swordsIcon from "../../assets/svg/sword.svg";
import vsIcon from "../../assets/svg/vs.svg";
import { useAuth } from "../../hooks/useAuth";
import { useChangeStatusUser } from "../../hooks/useChangeStatusUser";

import Menu from "./Menu";

type RoomParams = {
  id: string;
};

const Header: React.FC = () => {
  const params = useParams<RoomParams>();
  const roomId = params.id;

  const { deleteCurrentUser } = useAuth();
  const navigation = useNavigate();
  const { signOutStatusUser } = useChangeStatusUser(roomId);

  async function handleLogOut() {
    deleteCurrentUser(roomId);
    navigation("/");
    signOutStatusUser();
  }

  return (
    <div className="absolute bg-gradient-to-r from-p-lilac to-p-purple shadow-xl h-16 w-full flex justify-between px-4 ">
      <img src={logoVillageIcon} alt="" className="h-12 self-center " />
      <div className="flex">
        <button className="hidden lg:flex h-10 w-auto p-2 bg-p-lilacDark bg-opacity-60 shadow-md rounded-md self-center ml-2 items-center justify-center text-lg font-bold text-p-white group">
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 truncate text-p-yellow group-hover:mr-2">
            Mudar de sala
          </span>
          <ArrowSquareOut size={32} weight="bold" />
        </button>

        <button className="hidden lg:flex h-10 w-auto p-2 bg-p-lilacDark bg-opacity-60 shadow-md rounded-md self-center ml-2 items-center justify-center text-lg font-bold text-p-white group">
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 text-red-500 opacity-100 group-hover:mr-2">
            Sair
          </span>
          <SignOut size={32} weight="bold" />
        </button>
      </div>

      <Menu />
    </div>
  );
};

export default Header;
