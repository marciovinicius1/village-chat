import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../components/Buttons/Button';
import { Container, FormBox, KingIcon } from './styles';

import { useAuth } from '../../hooks/useAuth';

import { db } from '../../services/firebase';
import { addDoc, collection } from 'firebase/firestore';

const NewRoom: React.FC = () => {
  const { user, setUser, userName, setUserName, signIn } = useAuth();
  const [roomName, setRoomName] = useState<string>('');

  const navigate = useNavigate();

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();

    if (!user) {
      await signIn();
      return;
    }

    if (roomName.trim() === '') {
      return;
    }

    const roomRef = await addDoc(collection(db, 'rooms'), {
      authorId: user.id,
      roomName: roomName,
      amountOfAttack: 0,
    });

    navigate(`/rooms/${roomRef.id}`);
  }

  return (
    <Container>
      <FormBox>
        <KingIcon />
        <form onSubmit={handleCreateRoom}>
          <div>
            <label>Nome da Sala</label>
            <input
              type="text"
              placeholder="Digite o nome da sala"
              onChange={(event) => setRoomName(event.target.value)}
              value={roomName}
              name="roomname"
              required
            />
          </div>
          <div>
            <label>Seu nome </label>
            <input
              type="text"
              placeholder="Digite seu nome a "
              onChange={(event) => setUserName(event.target.value)}
              value={userName}
              name="username"
              required
            />
          </div>
          <Button type="submit">Criar sala</Button>
        </form>
      </FormBox>
    </Container>
  );
};

export default NewRoom;
