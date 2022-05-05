import React from 'react';

import {
  Container,
  Block1,
  PlanetIcon,
  Block2,
  AlertIcon,
  Block3,
  CastleImg,
} from './styles';

import SwiperCards from '../../CardsWithSwiper';
import Cards from '../../Cards';

import ButtonJoinRoom from '../../Buttons/ButtonJoinRoom';
import ButtonCreateRoom from '../../Buttons/ButtonNewRoom';
import ButtonTutorial from '../../Buttons/ButtonTutorial';
import LogoVillage from '../../LogoVillage';

const Main: React.FC = () => {
  return (
    <Container>
      <CastleImg />
      <LogoVillage />

      <Block1>
        <PlanetIcon />
        <h1>Conversas anônimas de qualquer lugar do mundo.</h1>
      </Block1>

      <Block2>
        <AlertIcon />
        <h2>
          <span>CUIDADO!</span> Uma horda de zumbí pode acabar com o rolê.
        </h2>
      </Block2>

      <SwiperCards />

      <Cards />

      <Block3>
        <ButtonCreateRoom />
        <ButtonJoinRoom />
        <ButtonTutorial />
      </Block3>
    </Container>
  );
};

export default Main;
