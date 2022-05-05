import { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

import { ButtonMvStyle, IconMv } from './styles';

export function ButtonCredits(props: ButtonProps) {
  return (
    <ButtonMvStyle className="button" {...props}>
      <IconMv />
      <span>Credits</span>
    </ButtonMvStyle>
  );
}

export default ButtonCredits;
