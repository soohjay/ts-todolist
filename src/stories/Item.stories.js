import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import TodoItem from '../Components/TodoItem.tsx';
import { TodosContextProvider } from '../Contexts/TodosContext';

export default {
  title: 'Item',
  component: TodoItem,
  decorators: [withKnobs],
};

export const Default = () => {
  const done = boolean('done', false, 'Group1');
  const todo = {
    id: 1,
    text: 'my todo list',
    done
  };
  
  return (
    <TodosContextProvider>
      <TodoItem key={todo.id} idx={todo.id} todo={todo}/>
    </TodosContextProvider>
  )
}

Default.story = {
  name: 'Item'
}