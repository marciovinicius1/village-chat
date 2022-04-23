import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, CrownIcon } from './styles';

const ButtonCreateRoom: React.FC = () => {
  const navigate = useNavigate();

  function handleNewRoom() {
    navigate('/rooms/new');
  }

  return (
    <Button onClick={() => handleNewRoom()}>
      <CrownIcon />
      Crie sua sala
    </Button>
  );
};

export default ButtonCreateRoom;
