import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { FixedControl, FixedControlProps } from './';
import { Button } from 'components/atoms/button';
import { ButtonContainer } from 'components/molecules/button-container';

export default {
  title: 'components/organisms/FixedControl',
  component: FixedControl,
} as Meta;

const Template: Story<FixedControlProps> = args => <FixedControl {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  isVisible: true,
  modifiers: 'single-btn',
  children: (
    <Button type="button" size="huge" modifiers="primary">
      保存
    </Button>
  ),
};
export const NoneDisplay = Template.bind({});
NoneDisplay.args = {
  modifiers: 'single-btn',
  children: (
    <Button type="button" size="huge" modifiers="primary">
      保存
    </Button>
  ),
};

export const BtnContainer = Template.bind({});
BtnContainer.args = {
  isVisible: true,
  modifiers: 'btn-container',
  children: [
    <ButtonContainer>
      <Button type="button" size="huge" modifiers="third">
        キャンセル
      </Button>
      <Button type="button" size="huge" modifiers="primary">
        保存
      </Button>
    </ButtonContainer>,
  ],
};

export const BtnContainerHide = Template.bind({});
BtnContainerHide.args = {
  isVisible: false,
  modifiers: 'btn-container',
  children: [
    <ButtonContainer>
      <Button type="button" size="huge" modifiers="third">
        キャンセル
      </Button>
      <Button type="button" size="huge" modifiers="primary">
        保存
      </Button>
    </ButtonContainer>,
  ],
};
