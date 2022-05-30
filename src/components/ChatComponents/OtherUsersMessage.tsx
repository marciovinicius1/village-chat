import React from "react";

import knightIcon from "../../assets/svg/knight.svg";
import kingIcon from "../../assets/svg/king.svg";
import crownIcon from "../../assets/svg/crown.svg";
import swordsIcon from "../../assets/svg/sword.svg";

import { useAuth } from "../../hooks/useAuth";

type MainMessageProps = {
  message: string;
  date?: Date;
  authorName: string;
  adminId: string | undefined;
};

const OtherUsersMessage: React.FC<MainMessageProps> = (props) => {
  const { message, date, authorName, adminId } = props;
  const { user } = useAuth();

  return (
    <div className="flex content-center items-center gap-4">
      <img
        className="hidden lg:flex w-10 "
        src={user?.id == adminId ? kingIcon : knightIcon}
        alt=""
      />
      <div className="bg-p-white rounded-md my-2 px-2 py-1 w-fit max-w-full mr-2">
        <div className="flex items-center">
          <img
            src={user?.id == adminId ? crownIcon : swordsIcon}
            alt="icone de messagem"
            className="h-6 flex lg:hidden"
          />
          <p className="font-bold text-zinc-600 ml-2">{`${authorName} :`}</p>
        </div>

        <h1 className="font-bold text-p-dark p-2 max-w-full w-full break-words">{`"${message}"`}</h1>
      </div>
    </div>
  );
};

export default OtherUsersMessage;
