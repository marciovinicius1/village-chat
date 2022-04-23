import styled from 'styled-components';
import { Planet, Alert } from '../../../assets/svgr';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;

  justify-content: center;

  background-color: var(--gray);

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
    font-size: 1.4rem;
    color: var(--dark);
    font-weight: bold;
  }
`;

export const Block2 = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > h2 {
    font-size: 1rem;
    color: var(--dark);

    > span {
      color: var(--dark);
    }
  }
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
  gap: 0.6rem;
  flex-direction: column;
  margin-bottom: 20px;

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
