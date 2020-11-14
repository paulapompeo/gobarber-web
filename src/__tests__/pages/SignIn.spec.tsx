import React from 'react';
import { render } from '@testing-library/react';
import SignIn from '../../pages/SignIn';

// modulos
jest.mock('react-router-dom', () => {
  return {
    useHistory: jest.fn(), // fn -> funcao vazia
    Link: ({ children }: { children: React.ReactNode }) => children,
    // ReactNode-> qualquer conteudo que um componente react poderia receber
  };
});

describe('SignIn Page', () => {
  it('should be able to sign in', () => {
    const { debug } = render(<SignIn />);

    debug();
  });
});
