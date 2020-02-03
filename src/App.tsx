import React from 'react';
import styled from 'styled-components';
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';
import { TodosContextProvider } from './Contexts/TodosContext';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

const App = () => {
  return (
    <TodosContextProvider>
      <Container>
        <TodoForm />
        <TodoList />
      </Container>
    </TodosContextProvider>
  );
}

export default App;
