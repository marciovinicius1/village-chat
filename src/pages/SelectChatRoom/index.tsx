import React from 'react';

import { Container, ChatList } from './styles';
import Chat from '../../components/Chat';

const SelectChatRoom: React.FC = () => {
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
