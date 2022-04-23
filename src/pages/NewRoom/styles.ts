import styled from 'styled-components';
import { King } from '../../assets/svgr';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--gray);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FormBox = styled.div`
  height: 400px;
  width: 300px;
  background-color: var(--dark);
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;

    font-size: 1.5rem;
    font-weight: 700;
    color: var(--white);
    gap: 10px;

    margin-bottom: 12px;
  }

  input {
    width: 200px;
    height: 40px;
    font-size: 0.8rem;
    font-weight: bold;
    border-radius: 6px;
    border: none;
    padding: 4px;
  }

  button {
    margin-top: 20px;
  }
`;
export const KingIcon = styled(King)`
  font-size: 80px;
  margin-bottom: 20px;
`;
