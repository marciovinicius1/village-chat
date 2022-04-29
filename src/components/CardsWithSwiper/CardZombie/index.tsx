import React from 'react';

import { Container, Card, ZombieIcon } from './styles';

const CardZombie: React.FC = () => {
  return (
    <Container>
      <Card>
        <ZombieIcon />
        <h1>Junte-se a horda e ataque a sala.</h1>
      </Card>
    </Container>
  );
};

export default CardZombie;
