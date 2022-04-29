import React from 'react';

import { Container, ArrowButtonIcon } from './styles';

const Chat: React.FC = () => {
  return (
    <Container>
      <h1>Titulo da sala</h1>
      <button>
        <ArrowButtonIcon />
      </button>
    </Container>
  );
};

export default Chat;
