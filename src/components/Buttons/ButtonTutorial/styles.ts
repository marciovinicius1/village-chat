import styled from 'styled-components';
import { Mage } from '../../../assets/svgr';

export const Button = styled.button`
  display: flex;
  gap: 10px;
  align-items: center;

  height: 3.6rem;
  width: 13rem;
  background-color: var(--primary);
  color: var(--gray);
  border: none;
  text-decoration: none;
  text-align: center;
  justify-content: center;

  font-size: 1.2rem;
  font-weight: 700;
  margin: 4px 2px;
  border-radius: 10px;
  transition: 0.3s;

  cursor: pointer;

  &:hover {
    color: var(--yellow);
  }

  @media (max-width: 1200px) {
    background-color: var(--dark);
  }
`;

export const MageIcon = styled(Mage)`
  font-size: 2rem;
`;
