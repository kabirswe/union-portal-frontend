import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Pulldown, PulldownProps } from './';

export default {
  title: 'components/atoms/Pulldown',
  component: Pulldown,
  parameters: {
    backgrounds: {
      default: 'gray',
    },
    paddings: {
      default: 'small',
    },
  },
} as Meta;

const Template: Story<PulldownProps> = args => <Pulldown {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  placeholder: '選択してください。',
  name: 'something',
  children: (
    <>
      <option value="create_new">新規作成</option>
      <option value="reapply">修正後再申請</option>
      <option value="arrangement_completed">手配完了</option>
      <option value="unable_to_arrange">手配不能</option>
      <option value="pull_back">引き戻し</option>
      <option value="remand">差し戻し</option>
      <option value="cancel">取り消し</option>
      <option value="approval">承認</option>
      <option value="denial">否認</option>
    </>
  ),
};

export const WithDisabled = Template.bind({});
WithDisabled.args = {
  placeholder: '選択してください。',
  name: 'something',
  disabled: true,
  children: (
    <>
      <option value="create_new">新規作成</option>
      <option value="reapply">修正後再申請</option>
      <option value="arrangement_completed">手配完了</option>
    </>
  ),
};

export const WithInvalid = Template.bind({});
WithInvalid.args = {
  placeholder: '選択してください。',
  name: 'something',
  modifiers: 'invalid',
  children: (
    <>
      <option value="create_new">新規作成</option>
      <option value="reapply">修正後再申請</option>
      <option value="arrangement_completed">手配完了</option>
    </>
  ),
};
