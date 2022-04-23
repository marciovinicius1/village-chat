import React from 'react';
import ButtonTutorial from '../../Buttons/ButtonTutorial';
import ButtonCreateRoom from '../../Buttons/ButtonNewRoom';
import ButtonJoinRoom from '../../Buttons/ButtonJoinRoom';

import { Container, Block } from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <Block>
        <ButtonCreateRoom />
        <ButtonJoinRoom />
        <ButtonTutorial />
      </Block>
    </Container>
  );
};

export default SideBar;
