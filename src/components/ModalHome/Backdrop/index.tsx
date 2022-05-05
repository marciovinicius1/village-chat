import React, { ReactNode } from 'react';

// import { Container } from './styles';

import { motion } from 'framer-motion';
import styled from 'styled-components';

type BackdropProps = {
  children: ReactNode;
  onClick: () => <void>;
};

const StyledBackDrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: #000000e1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop: React.FC<BackdropProps> = ({ children, onClick }) => {
  return (
    <StyledBackDrop>
      <motion.div
        className="backdrop"
        onClick={onClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {children}
      </motion.div>
    </StyledBackDrop>
  );
};

export default Backdrop;
