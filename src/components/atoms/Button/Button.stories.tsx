import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps }  from './Button';
import { action } from '@storybook/addon-actions';

const meta: Meta = {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    text: {
      defaultValue: 'Default text',
    },
    variant: {
      defaultValue: 'primary',
    },
  },
};

export default meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
//export const Default = () => <Button variant='primary'>Click Me</Button>

export const Secondary = Template.bind({});
//export const Secondary = () => <Button variant='secondary'>I am secondary</Button>
Secondary.args = {
  variant: 'secondary',
  text: 'I am secondary',
  onClick: action('secondary click'),
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: 'Disabled',
  disabled: true,
  onClick: action('disabled click'),
};

export const Danger = Template.bind({});
Danger.args = {
  text: 'Danger',
  variant: 'danger',
  onClick: action('danger click'),
};