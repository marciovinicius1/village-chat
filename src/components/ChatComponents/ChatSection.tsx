import React, { useEffect, useState } from "react";

import MessageForm from "./MessageForm";
import { useParams } from "react-router-dom";
import { useRoom } from "../../hooks/useRoom";

export type CurrentRoomProps = {
  amountOfAtack: number;
  authorId: string;
  roomName: string;
  users: [
    {
      id: string;
      name: string;
      zombie: boolean;
    }
  ];
};

type RoomParams = {
  id: string;
};

const ChatSection: React.FC = () => {
  const params = useParams<RoomParams>();
  const roomId = params.id;
  const { amountOfAttack, authorId, roomName, users } = useRoom(roomId);

  return (
    <div>
      <div></div>
      <MessageForm amountOfAttack={amountOfAttack} roomId={roomId} />
    </div>
  );
};

export default ChatSection;
