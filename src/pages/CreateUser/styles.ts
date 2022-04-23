import styled from 'styled-components';
import { Knight, Zombie } from '../../assets/svgr';

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
    :first-child {
      display: flex;
      flex-direction: column;

      font-size: 1.5rem;
      font-weight: 700;
      color: var(--white);

      margin-bottom: 12px;
    }
    & + div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  label {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 10px;
    color: var(--white);

    margin-bottom: 10px;
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

export const Toggle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  margin-top: 10px;
  /* The switch - the box around the slider */
  .switch {
    font-size: 17px;
    position: relative;
    display: inline-block;
    width: 3.5em;
    height: 2em;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--purple);
    transition: 0.4s;
    border-radius: 30px;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 1.4em;
    width: 1.4em;
    border-radius: 20px;
    left: 0.3em;
    bottom: 0.3em;
    background-color: white;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: var(--green);
  }

  input:focus + .slider {
    box-shadow: 0 0 1px var(--green);
  }

  input:checked + .slider:before {
    transform: translateX(1.5em);
  }
`;

export const KnightIcon = styled(Knight)`
  font-size: 40px;
`;
export const ZombieIcon = styled(Zombie)`
  font-size: 40px;
`;
