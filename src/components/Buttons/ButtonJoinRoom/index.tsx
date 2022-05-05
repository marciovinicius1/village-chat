import React from 'react';
import { Button, SwordIcon } from './styles';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';

import { motion } from 'framer-motion';

const ButtonCreateRoom: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  function handleJoinRoom() {
    if (!user) {
      navigate('/rooms/create-user');
    } else {
      navigate('/rooms/select-chat-room');
    }
  }

  return (
    <Button
      onClick={handleJoinRoom}
      as={motion.div}
      whileHover={{ scale: 1.1 }}
    >
      <SwordIcon />
      Entre na Sala
    </Button>
  );
};
export default ButtonCreateRoom;
