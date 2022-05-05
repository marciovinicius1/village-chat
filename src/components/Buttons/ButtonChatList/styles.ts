import styled from 'styled-components';
import { ArrowRightSquareFill } from '../../../assets/Icons';

export const Container = styled.div`
  height: 40px;
  width: 260px;
  padding: 8px;
  border-radius: 5px;
  background-color: var(--gray);

  display: flex;
  justify-content: space-between;
  align-items: center;
  & + & {
    margin-top: 4px;
  }

  h1 {
    font-size: 1.2rem;
    color: var(--dark);
  }

  button {
    background: none;
    border: none;
    color: var(--primary);
    transition: 0.3s;

    :hover {
      color: var(--green);
    }
  }
`;

export const ArrowButtonIcon = styled(ArrowRightSquareFill)`
  height: 30px;
`;
