import React from 'react';

import { Container, Card, KingIcon } from './styles';

const CardKing: React.FC = () => {
  return (
    <Container>
      <Card>
        <KingIcon />
        <h1>Sacrifique os cavaleiros para manter a sala protegida.</h1>
      </Card>
    </Container>
  );
};

export default CardKing;
