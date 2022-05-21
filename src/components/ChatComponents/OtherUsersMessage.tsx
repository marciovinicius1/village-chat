import React from "react";

import knightIcon from "../../assets/svg/knight.svg";
import zombieIcon from "../../assets/svg/zombie.svg";
import kingIcon from "../../assets/svg/king.svg";

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
    <div className="w-fit flex content-center align-">
      <img
        className="h-10 w-auto"
        src={user?.id == adminId ? kingIcon : knightIcon}
        alt=""
      />
      <p>{authorName}</p>
      <div className="bg-p-white rounded-md mx-4 px-2 py-1 w-fit">
        <h1 className="font-bold text-p-dark p-2">{`"${message}"`}</h1>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default OtherUsersMessage;
