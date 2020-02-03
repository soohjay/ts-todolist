import React from 'react';
import { action } from '@storybook/addon-actions';
import Input from '../Components/Input.tsx';

export default {
  title: 'Input',
  component: Input,
};

export const Default = () => 
  <Input
    value=''
    placeholder='what will you do?'
    onChange={action('change text')}
  />

export const DefaultWithValue = () => 
  <Input
    value='cleaning'
    placeholder='what will you do?'
    onChange={action('change text')}
  />

Default.story = {
  name: 'Input'
}
DefaultWithValue.story = {
  name: 'Input with value'
}