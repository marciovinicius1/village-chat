import React from 'react';
import { Button, SwordIcon } from './styles';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';

const ButtonCreateRoom: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  function handleJoinRoom() {
    if (user) {
      navigate('/rooms/select-chat-room');
    } else {
      navigate('/rooms/create-user');
    }
  }

  return (
    <Button onClick={handleJoinRoom}>
      <SwordIcon />
      Entre na Sala
    </Button>
  );
};
export default ButtonCreateRoom;
