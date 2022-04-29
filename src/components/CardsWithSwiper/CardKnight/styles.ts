import styled from 'styled-components';
import { Knight } from '../../../assets/svgr';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 200px;
  border-radius: 20px;
  padding: 10px;
  background: var(--dark);

  > h1 {
    margin-top: 12px;
    font-size: 1rem;
    text-align: center;
    color: var(--white);
  }
`;

export const KnightIcon = styled(Knight)`
  font-size: 60px;
  margin-top: 20px;
`;
