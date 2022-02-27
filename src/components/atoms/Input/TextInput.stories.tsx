import React, { useState } from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { TextInput, TextInputProps } from './TextInput';
import styled from 'styled-components';


export default {
  title: 'Atoms/TextInput',
  component: TextInput,
} as Meta;

const Template: Story<TextInputProps> = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: '250px'
}

export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: 'Placeholder',
  width: '250px'
}

export const WithError = Template.bind({});
WithError.args = {
  placeholder: 'Wrong input',
  width: '250px',
  error: true
}

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: 'Disabled',
  width: '250px',
  disabled: true,
}

const Row = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
  & > * {
    margin-right: 10px;
  }
`;

export const Sizes = () => {
  return (
    <>
      <Row>
        <TextInput placeholder='large' inputSize='large' />
        <TextInput placeholder='medium' inputSize='medium' />
        <TextInput placeholder='small' inputSize='small' />
      </Row>
    </>
  );
};