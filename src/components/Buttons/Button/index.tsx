import { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

import { ButtonStyle } from './styles';

export function Button(props: ButtonProps) {
  return <ButtonStyle className="button" {...props}></ButtonStyle>;
}
