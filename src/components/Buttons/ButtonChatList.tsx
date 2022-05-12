import React from "react";
import { ArrowElbowDownRight } from "phosphor-react";
import { useNavigate } from "react-router-dom";

type ChatButtonProps = {
  id: string;
  title: string;
};

const ButtonChatList: React.FC<ChatButtonProps> = (id) => {
  const navigation = useNavigate();

  function handleJoinRoom() {
    navigation(`/rooms/id/${id.id}`);
  }

  return (
    <button
      onClick={handleJoinRoom}
      className="h- my-2 w-11/12 p-2 rounded-md bg-p-white bg-opacity-80 flex justify-between items-center group hover:bg-opacity-100 border-2 border-transparent focus:bg-opacity-100 hover:border-p-lilac focus:border-p-lilac focus:outline-none transition-colors "
    >
      <h1 className="text-lg text-p-dark font-bold">{id.title}</h1>
      <div className="bg-p-lilac transition-colors rounded-md hover:bg-p-yellow">
        <ArrowElbowDownRight className="h-8 w-8 rounded-md" />
      </div>
    </button>
  );
};

export default ButtonChatList;
