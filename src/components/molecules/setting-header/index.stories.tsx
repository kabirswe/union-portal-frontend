import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SettingHeader, SettingHeaderProps } from './';
import { action } from '@storybook/addon-actions';
import { Button } from 'components/atoms/button';
import { ButtonContainer } from 'components/molecules/button-container';

export default {
  title: 'components/molecules/SettingHeader',
  component: SettingHeader,
} as Meta;

const Template: Story<SettingHeaderProps> = args => <SettingHeader {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  title: '新規投稿',
  onClick: action('back clicked'),
};
export const WithActions = Template.bind({});
WithActions.args = {
  title: '新規投稿',
  actions: (
    <>
      <ButtonContainer>
        <Button modifiers="secondary">下書き保存</Button>
        <Button modifiers="primary">プレビュー</Button>
      </ButtonContainer>
    </>
  ),
};
export const ActionsWithFixContainer = Template.bind({});
ActionsWithFixContainer.args = {
  modifiers: 'fixed-width',
  title: '新規投稿',
  actions: (
    <>
      <ButtonContainer>
        <Button modifiers="secondary">下書き保存</Button>
        <Button modifiers="primary">プレビュー</Button>
      </ButtonContainer>
    </>
  ),
};
