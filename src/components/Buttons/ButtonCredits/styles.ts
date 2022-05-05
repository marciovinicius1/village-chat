import styled from 'styled-components';
import { Mv } from '../../../assets/svgr';

export const ButtonMvStyle = styled.button`
  height: 60px;
  width: 160px;
  border-radius: 10px;

  border: none;
  background: var(--primary);

  font-size: 1.2rem;
  font-weight: 700;
  color: var(--gray);

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  position: fixed;
  bottom: 0;
  right: 0;

  margin-right: 40px;
  margin-bottom: 40px;

  cursor: pointer;

  &:hover {
    color: var(--yellow);
  }
`;

export const IconMv = styled(Mv)`
  height: 30px;
`;
