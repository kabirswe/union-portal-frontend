import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ButtonContainer, ButtonContainerProps } from './';
import { Button } from 'components/atoms/button';

export default {
  title: 'components/molecules/ButtonContainer',
  component: ButtonContainer,
} as Meta;

const Template: Story<ButtonContainerProps> = args => <ButtonContainer {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: (
    <>
      <Button modifiers="third">否認</Button>
      <Button modifiers="secondary">差戻し</Button>
      <Button modifiers="primary">承認</Button>
    </>
  ),
};

export const VerticalWithHuge = Template.bind({});
VerticalWithHuge.args = {
  modifiers: 'veritcal',
  children: (
    <>
      <Button size="huge" modifiers="third">
        保存せずに終了
      </Button>
      <Button size="huge" modifiers="secondary">
        保存して終了
      </Button>
      <Button size="huge" modifiers="primary">
        確認
      </Button>
    </>
  ),
};

export const WithBorder = Template.bind({});
WithBorder.args = {
  modifiers: 'border',
  children: (
    <>
      <Button modifiers="text">編集</Button>
      <Button modifiers="text">削除</Button>
    </>
  ),
};

export const WithBorderIconText = Template.bind({});
WithBorderIconText.args = {
  modifiers: 'border',
  children: (
    <>
      <Button modifiers="icon-text" icon="post-quote">
        引用
      </Button>
      <Button modifiers="icon-text" icon="post-edit">
        編集
      </Button>
      <Button modifiers="icon-text" icon="post-delete">
        削除
      </Button>
    </>
  ),
};
