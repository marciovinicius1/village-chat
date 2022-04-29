import React from 'react';

import CardKing from '../CardsWithSwiper/CardKing';
import CardKnight from '../CardsWithSwiper/CardKnight';
import CardZombie from '../CardsWithSwiper/CardZombie';

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
