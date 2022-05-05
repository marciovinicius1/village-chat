import { ButtonHTMLAttributes } from 'react';

import { useAuth } from '../../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

import { ButtonLogoutStyle, IconLogOut } from './styles';

export function ButtonLogOut(props: ButtonProps) {
  const { deleteCurrentUser } = useAuth();
  const navigation = useNavigate();

  async function handleLogOut() {
    deleteCurrentUser();
    navigation('/');
  }

  return (
    <ButtonLogoutStyle className="button" onClick={handleLogOut} {...props}>
      <IconLogOut />
    </ButtonLogoutStyle>
  );
}

export default ButtonLogOut;
