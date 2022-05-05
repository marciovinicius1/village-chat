import { collection, getDocs, query, where } from 'firebase/firestore';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import { db } from '../../../services/firebase';
import { Button, CrownIcon } from './styles';

import { motion } from 'framer-motion';

const ButtonCreateRoom: React.FC = () => {
  const navigate = useNavigate();
  const { user, deleteCurrentUser } = useAuth();

  async function handleNewRoom() {
    if (!user) {
      navigate('/rooms/new');
    } else {
      // if user are logged
      const roomRef = query(
        collection(db, 'rooms'),
        where('authorId', '==', user.id)
      );

      const userRoom = await getDocs(roomRef);
      const parsedRoom = userRoom.docs.map((key) => key.id);
      const idUserRoom = parsedRoom[0];

      if (idUserRoom == undefined) {
        deleteCurrentUser();
        navigate('/rooms/new');
      } else {
        navigate(`/rooms/id/${idUserRoom}`);
      }
    }
  }

  return (
    <Button
      as={motion.div}
      whileHover={{ scale: 1.1 }}
      onClick={() => handleNewRoom()}
    >
      <CrownIcon />
      Crie sua sala
    </Button>
  );
};

export default ButtonCreateRoom;
