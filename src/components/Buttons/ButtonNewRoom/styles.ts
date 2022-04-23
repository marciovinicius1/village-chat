import styled, { css } from 'styled-components';
import { Crown } from '../../../assets/svgr';

export const Button = styled.button`
  height: 3.6em;
  width: 12em;
  background-color: var(--dark);
  color: var(--gray);
  border: none;
  text-decoration: none;
  padding: 16px 20px;
  text-align: center;

  display: flex;
  gap: 10px;
  align-items: center;

  font-size: 1.2rem;
  font-weight: 700;
  margin: 4px 2px;
  border-radius: 10px;
  transition: 0.3s;

  cursor: pointer;

  &:hover {
    color: var(--primary);
  }
`;

export const CrownIcon = styled(Crown)`
  font-size: 2rem;
`;