import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Backdrop from '../Backdrop';

import styled from 'styled-components';
//estilizar a classe modal
const Modal: React.FC = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dropIn = {
    hidden: {
      y: '-100vh',
      opacity: 0,
    },
    visible: {
      y: '0',
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 100,
        sfiffness: 500,
      },
    },
    exit: {
      y: '100vh',
      opacity: 0,
    },
  };

  function toggleModalVisibility() {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <Backdrop onClick={toggleModalVisibility}>
      {isModalOpen && (
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className="modal"
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {children}
        </motion.div>
      )}
    </Backdrop>
  );
};

export default Modal;
