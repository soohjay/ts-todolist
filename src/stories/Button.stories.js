import React from 'react';
import Button from '../Components/Button.tsx';

export default {
  title: 'Button',
  component: Button,
};

export const Default = () => <Button>CLICK ME</Button>

Default.story = {
  name: 'Buttons'
}