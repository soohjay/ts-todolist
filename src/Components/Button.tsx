import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
  children: string
};

const Container = styled.button`
  height: 42px;
  margin-left: 5px;
  padding: 0 25px;
  outline: none;
  border: 0;
  cursor: pointer;
  background-color: #e0dfe0;
`;

function Button({children}: ButtonProps) {
  return <Container> {children} </Container>
}

export default Button;
