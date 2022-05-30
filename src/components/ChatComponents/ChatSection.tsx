import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { useRoom } from "../../hooks/useRoom";
import { useChat } from "../../hooks/useChat";

import ChatFeed from "./ChatFeed";
import MessageForm from "./MessageForm";

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

  const { snapshotMessages } = useChat(roomId);
  const { amountOfAttack, authorId, roomName, users } = useRoom(roomId);

  return (
    <div className="max-h-100% p-2 w-full absolute bottom-0">
      <ChatFeed adminId={authorId} roomId={roomId} />
      <MessageForm amountOfAttack={amountOfAttack} roomId={roomId} />
    </div>
  );
};

export default ChatSection;
