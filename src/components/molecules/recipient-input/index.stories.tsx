import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react/types-6-0';
import { RecipientInput, RecipientInputProps } from './';
import { TextField } from 'components/atoms/text-field';

export default {
  title: 'components/molecules/RecipientInput',
  component: RecipientInput,
} as Meta;

const Template: Story<RecipientInputProps> = args => <RecipientInput {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  onAddRequested: action('onAddRequested'),
  onRemoveRequested: action('onRemoveRequested'),
  templateInput: <TextField type="email" defaultValue="dummy@aeon.co.jp" />,
  children: [
    <TextField key="1" type="email" defaultValue="dummy@aeon.co.jp" />,
    <TextField key="2" type="email" defaultValue="dummy@aeon.co.jp" />,
  ],
};

const TextFieldItem: React.FC = () => <TextField type="email" />;
const WrapperInputsArray: React.FC = () => {
  const [_children, setChildren] = useState([
    <TextField key="1" type="email" defaultValue="dummy@aeon.co.jp" />,
    <TextField key="2" type="email" defaultValue="dummy@aeon.co.jp" />,
  ]);
  const [_disableButtonClose, setDisableButtonClose] = useState(false);

  return (
    <div>
      <RecipientInput
        isDisableButtonClose={_disableButtonClose}
        onAddRequested={() => {
          setChildren([..._children, <TextFieldItem key={_children.length + 1} />]);
          setDisableButtonClose(false);
        }}
        onRemoveRequested={index => {
          setChildren(_children.filter((_child, i) => i !== index));
          if (_children.filter((_child, i) => i !== index).length === 1) {
            setDisableButtonClose(true);
          }
        }}
      >
        {_children}
      </RecipientInput>
    </div>
  );
};

export const WrapperStateExample: Story = () => <WrapperInputsArray />;
