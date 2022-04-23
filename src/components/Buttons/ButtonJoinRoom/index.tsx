import React from 'react';
import { Button, SwordIcon } from './styles';
import { useNavigate } from 'react-router-dom';

const ButtonCreateRoom: React.FC = () => {
  const navigate = useNavigate();

  function handleJoinRoom() {
    navigate('/rooms/create-user');
  }

  return (
    <Button onClick={handleJoinRoom}>
      <SwordIcon />
      Entre na Sala
    </Button>
  );
};
export default ButtonCreateRoom;
