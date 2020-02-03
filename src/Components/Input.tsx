import React from 'react';
import styled from 'styled-components';

type InputProps = {
  value: string,
  placeholder?: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
};

const Container = styled.input`
  outline: none;
  width: 300px;
  height: 40px;
  padding: 0 10px;
`;

function Input({value, placeholder, onChange}: InputProps) {
  return (
    <Container
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  )
}

export default Input;
