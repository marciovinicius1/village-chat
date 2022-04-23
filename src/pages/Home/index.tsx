import React from 'react';
import Main from '../../components/ComponentsAtHome/Main';
import SideBar from '../../components/ComponentsAtHome/SideBar';
import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Main />
      <SideBar />
    </Container>
  );
};

export default Home;
