import React from 'react';

import { Button, MageIcon } from './styles';

import { motion } from 'framer-motion';

const ButtonTutorial: React.FC = () => {
  return (
    <Button as={motion.div} whileHover={{ scale: 1.1 }}>
      <MageIcon />
      Tutorial
    </Button>
  );
};

export default ButtonTutorial;
