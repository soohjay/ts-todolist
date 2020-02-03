import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { Todo, useTodosState } from '../Contexts/TodosContext';

const List = styled.ul`
  width: 400px;
  padding: 0px;
`;

function TodoList() {
  const todos: Array<Todo> = useTodosState();
  return(
    <List>
      {todos.map((todo: Todo, idx: number) => (
        <TodoItem key={todo.id} idx={idx} todo={todo}/>
      ))}
    </List>
  )
}

export default TodoList;