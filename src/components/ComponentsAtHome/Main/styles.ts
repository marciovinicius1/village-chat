import styled from 'styled-components';
import { Planet, Alert, Castle } from '../../../assets/svgr';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;

  max-height: 100%;

  justify-content: center;

  background: none;

  font-weight: 700;

  @media (min-width: 1200px) {
    width: 80vw;
    height: 100vh;
  }
`;

export const Block1 = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  > h1 {
    font-size: 2rem;
    color: var(--white);
    font-weight: bold;
  }
  z-index: 100;

  margin-bottom: 1rem;
`;

export const Block2 = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > h2 {
    font-size: 1.6rem;
    color: var(--white);

    > span {
      color: var(--yellow);
    }
  }
  z-index: 100;
`;

export const Cards = styled.div`
  display: hidden;

  @media (min-width: 1200) {
    margin-top: 2rem;
    margin-bottom: 2rem;

    gap: 40px;
  }
`;

export const Block3 = styled.div`
  display: flex;
  gap: 0.2rem;
  flex-direction: column;
  margin-bottom: 10px;
  z-index: 100;

  @media (min-width: 1200px) {
    display: none;
  }
`;

export const AlertIcon = styled(Alert)`
  font-size: 2rem;
  background: none;
`;

export const PlanetIcon = styled(Planet)`
  font-size: 5rem;
`;

export const CastleImg = styled(Castle)`
  height: 400px;
  width: auto;
  margin: 0;

  background-size: cover;

  position: absolute;
  bottom: 0;
  left: 0;
  @media (max-width: 630px) {
    display: none;
  } ;
`;
