import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { useRoom } from "../../hooks/useRoom";
import { useChat } from "../../hooks/useChat";

import ChatFeed from "./ChatFeed";
import MessageForm from "./MessageForm";

// criar um hook com retorno do chat [X]
// criar uma pagina de chat de admin [ ]
// funcionalidade de likes na menságem [ ]

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
    <div>
      <ChatFeed adminId={authorId} roomId={roomId} />
      <MessageForm amountOfAttack={amountOfAttack} roomId={roomId} />
    </div>
  );
};

export default ChatSection;
