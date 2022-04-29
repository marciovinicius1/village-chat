import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../services/firebase';
import { collection, getDocs, query } from 'firebase/firestore';

import { Container, ChatList } from './styles';
import Chat from '../../components/Buttons/ButtonChatList';

type ChatProps = {
  id: string;
  roomName: string;
  authorId: string;
  amountOfAttack: number;
};

type RoomParams = {
  id: string;
};

const SelectChatRoom: React.FC = () => {
  const [chats, setChats] = useState<ChatProps[]>([]);
  const params = useParams<RoomParams>();
  const roomId = params.id;

  async function getChatDocs() {
    const roomRef = query(collection(db, 'rooms'));

    const allRooms = await getDocs(roomRef);

    const parsedRooms = allRooms.docs.map((data) => {
      return { id: data.id, value: data.data() };
    });
    const chatRooms = parsedRooms.map(({ id, value }) => {
      return {
        id: id,
        roomName: value.roomName,
        amountOfAttack: value.amountOfAttack,
        authorId: value.authorId,
      };
    });

    chatRooms.map((room) => {
      room.id, room.roomName;
    });
    console.log(chatRooms);
  }

  getChatDocs();

  return (
    <Container>
      <ChatList>
        <div>
          <Chat />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
        </div>
      </ChatList>
    </Container>
  );
};

export default SelectChatRoom;
