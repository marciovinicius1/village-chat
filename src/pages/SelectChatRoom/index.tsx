import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { database, db } from '../../services/firebase';
import {
  collection,
  getDocs,
  query,
  onSnapshot,
  doc,
} from 'firebase/firestore';

import { Container, ChatList } from './styles';
import Chat from '../../components/Buttons/ButtonChatList';
import { DockBottom } from 'styled-icons/boxicons-regular';

type ChatProps = {
  id: string;
  roomName: string;
};

type RoomParams = {
  id: string;
};

const SelectChatRoom: React.FC = () => {
  const [chats, setChats] = useState<ChatProps[]>([]);
  const params = useParams<RoomParams>();
  const roomId = params.id;

  useEffect(() => {
    onSnapshot(collection(db, 'rooms'), (snapshot) => {
      const changes = snapshot.docChanges();

      const allRooms = changes.map((data) => {
        return { id: data.doc.id, value: data.doc.data() };
      });

      const parsedRooms = allRooms.map(({ id, value }) => {
        return {
          id: id,
          roomName: value.roomName,
        };
      });

      setChats(parsedRooms);
    });
  }, [roomId]);

  console.log(chats);

  return (
    <Container>
      <ChatList>
        <div>
          {chats.map((chat) => {
            return <Chat key={chat.id} title={chat.roomName} id={chat.id} />;
          })}
        </div>
      </ChatList>
    </Container>
  );
};

export default SelectChatRoom;
