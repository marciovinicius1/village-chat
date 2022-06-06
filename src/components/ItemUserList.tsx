import React from "react";

import zombieIcon from "../assets/svg/zombie.svg";
import knightIcon from "../assets/svg/knight.svg";
import kingIcon from "../assets/svg/king.svg";

type ItemUserListProps = {
  name: string;
  status: string;
  zombie: boolean;
  uid: string;
  authorRoomId: string | undefined;
};

const ItemUserList: React.FC<ItemUserListProps> = (props) => {
  const { name, status, zombie, uid, authorRoomId } = props;

  return (
    <div className="px-2.5 py-1 my-1 bg-p-darkV-500 flex gap-4 rounded-md items-center">
      {uid == authorRoomId ? (
        <img src={kingIcon} alt="user icon" className="h-10 w-auto" />
      ) : (
        <img
          src={zombie == true ? zombieIcon : knightIcon}
          alt="user icon"
          className="h-10 w-auto"
        />
      )}
      <span className="text-lg font-bold text-p-white border-b-2 border-p-yellow">
        {name}
      </span>
    </div>
  );
};

export default ItemUserList;
