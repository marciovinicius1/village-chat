import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChatSettings } from 'styled-icons/fluentui-system-filled';

import { Container, ArrowButtonIcon } from './styles';

type ChatButtonProps = {
  id: string;
  title: string;
};

const Chat: React.FC<ChatButtonProps> = (id) => {
  const navigation = useNavigate();

  function handleJoinRoom() {
    navigation(`/rooms/id/${id.id}`);
  }

  return (
    <Container>
      <h1>{id.title}</h1>
      <button onClick={handleJoinRoom}>
        <ArrowButtonIcon />
      </button>
    </Container>
  );
};

export default Chat;
