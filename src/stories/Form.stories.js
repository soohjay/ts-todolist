import React from 'react';
import TodoForm from '../Components/TodoForm.tsx';
import { TodosContextProvider } from '../Contexts/TodosContext';

export default {
  title: 'Form',
  component: TodoForm,
};

export const Default = () => 
<TodosContextProvider>
  <TodoForm />
</TodosContextProvider>

Default.story = {
  name: 'Form'
}