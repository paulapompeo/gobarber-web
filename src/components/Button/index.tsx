import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

// Type pq é uma interface que nao vamos sobrescrever nada
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

// children -> esta enviando o nome do botao pela pagina de SignIn
const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <Container type="button" {...rest}>
    {children}
  </Container>
);

export default Button;
