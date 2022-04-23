import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../components/Buttons/Button';
import { Container, FormBox, KingIcon } from './styles';

import { useAuth } from '../../hooks/useAuth';

const NewRoom: React.FC = () => {
  const { user, setUser, userName, setUserName, signIn } = useAuth();
  const [roomName, setRoomName] = useState<string>('');

  const navigate = useNavigate;

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();
    // criar o usuário adicionando nome e uid no state user - setstate({..., username:userName})
    if (!user) {
      await signIn();
    } else {
      console.log(user);
    }
    //navigate(sala de chat)
  }

  console.log(userName);

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
              placeholder="Digite seu nome "
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
