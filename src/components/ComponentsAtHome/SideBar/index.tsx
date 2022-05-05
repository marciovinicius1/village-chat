import React from 'react';
import ButtonTutorial from '../../Buttons/ButtonTutorial';
import ButtonNewRoom from '../../Buttons/ButtonNewRoom';
import ButtonJoinRoom from '../../Buttons/ButtonJoinRoom';

import { Container, Block } from './styles';
import ButtonCredits from '../../Buttons/ButtonCredits';

import { motion } from 'framer-motion';

const SideBar: React.FC = () => {
  return (
    <Container>
      <Block>
        <ButtonNewRoom />
        <ButtonJoinRoom />
        <ButtonTutorial />
        <ButtonCredits />
      </Block>
    </Container>
  );
};

export default SideBar;
