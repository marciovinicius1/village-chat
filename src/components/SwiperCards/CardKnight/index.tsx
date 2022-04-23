import React from 'react';

import { Container, Card, KnightIcon } from './styles';

const CardKnight: React.FC = () => {
  return (
    <Container>
      <Card>
        <KnightIcon />
        <h1>Proteja a sala servindo de sacrifício.</h1>
      </Card>
    </Container>
  );
};

export default CardKnight;
