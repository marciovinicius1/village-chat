import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { db } from '../../services/firebase';
import { collection, onSnapshot } from 'firebase/firestore';

import { Container, ChatList } from './styles';
import Chat from '../../components/Buttons/ButtonChatList';
import ButtonLogOut from '../../components/Buttons/ButtonLogOut';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../../hooks/useAuth';

type ChatProps = {
  id: string;
  roomName: string;
};

type RoomParams = {
  id: string;
};

const SelectChatRoom: React.FC = () => {
  const { user } = useAuth();
  const navigation = useNavigate();
  const [chats, setChats] = useState<ChatProps[]>([]);
  const params = useParams<RoomParams>();
  const roomId = params.id;

  if (!user) {
    navigation('/');
  }

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

  return (
    <>
      <Container>
        <h1 className="title">Selecione uma sala: </h1>
        <ChatList>
          <div>
            {chats.map((chat) => {
              return <Chat key={chat.id} title={chat.roomName} id={chat.id} />;
            })}
          </div>
        </ChatList>
      </Container>
      <ButtonLogOut />
    </>
  );
};

export default SelectChatRoom;
