import styled from 'styled-components';
import { Mage } from '../../../assets/svgr';

export const Button = styled.button`
  display: flex;
  gap: 10px;
  align-items: center;

  height: 3.6em;
  width: 12em;
  background-color: var(--dark);
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
    color: var(--purple);
  }
`;

export const MageIcon = styled(Mage)`
  font-size: 2rem;
`;
