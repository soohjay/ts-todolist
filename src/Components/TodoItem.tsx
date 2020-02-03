import React from 'react';
import styled from 'styled-components';
import { useTodosDispatch, Todo } from '../Contexts/TodosContext';

type TodoItemProps = {
  todo: Todo,
  idx: number
};

const List = styled.li`
  height: 35px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  justify-content: space-between;
  &:not(:first-child) {
    border-top: 1px solid #e0dfe0;
  }
`;

const Text = styled.div(({ done }: {done: boolean}) => ({
  cursor: 'Pointer',
  color: `${done ? '#999999' : '#4e4e4e'}`,
  textDecoration: `${done ? 'line-through' : 'none'}`,
}));

const Removed = styled.div`
  color: red;
  margin-left: 4px;
  cursor: Pointer;
`;

function TodoItem({ todo, idx }: TodoItemProps) {
  const dispatch = useTodosDispatch();

  const onToggle = () => {
    dispatch({
      type: 'TOGGLE',
      id: todo.id
    });
  };

  const onRemove = () => {
    dispatch({
      type: 'REMOVE',
      id: todo.id
    });
  };


  return (
    <List>
      <Text done={todo.done} onClick={onToggle}>{idx+1}. {todo.text}</Text>
      <Removed onClick={onRemove}>(X)</Removed>
    </List>
  );
}

export default TodoItem;
