import styled from 'styled-components';
import { LogoutBoxR } from '../../../assets/Icons';

export const ButtonLogoutStyle = styled.button`
  height: 50px;
  width: 50px;

  padding: 5px;
  background-color: var(--dark);
  border: none;
  border-radius: 10%;
  position: fixed;
  bottom: 0;
  right: 0;
  margin-bottom: 20px;
  margin-right: 20px;
  z-index: 100;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  @media (min-width: 1200px) {
    height: 62px;
    width: 62px;
  }
`;
export const IconLogOut = styled(LogoutBoxR)`
  height: 30px;
  fill: var(--white);

  @media (min-width: 1200px) {
    height: 40px;
  }
`;
