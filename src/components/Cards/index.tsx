import React from 'react';

import CardKing from '../SwiperCards/CardKing';
import CardKnight from '../SwiperCards/CardKnight';
import CardZombie from '../SwiperCards/CardZombie';

import Atropos from 'atropos/react';

import { Container } from './styles';

const Cards: React.FC = () => {
  return (
    <Container>
      <Atropos shadow={false}>
        <CardKnight />
      </Atropos>

      <Atropos shadow={false}>
        <CardKing />
      </Atropos>

      <Atropos shadow={false}>
        <CardZombie />
      </Atropos>
    </Container>
  );
};

export default Cards;
