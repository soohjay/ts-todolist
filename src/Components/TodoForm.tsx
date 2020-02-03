import React, { useState } from 'react';
import styled from 'styled-components';
import { useTodosDispatch } from '../Contexts/TodosContext';

import Button from './Button';
import Input from './Input';

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 400px;
`;

function TodoForm() {
  const [value, setValue] = useState('');
  const dispatch = useTodosDispatch();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(value) {
      dispatch({
        type: 'CREATE',
        text: value
      })
      setValue('');
    } else {
      alert('Please, enter text.');
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <Input
        value={value}
        placeholder="무엇을 하실 건가요"
        onChange={onChange}
      />
      <Button>등록</Button>
    </Form>
  );
}

export default TodoForm;
