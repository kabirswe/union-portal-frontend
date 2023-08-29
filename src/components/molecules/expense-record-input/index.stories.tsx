import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ExpenseRecordInput, ExpenseRecordInputProps } from './';
import { FormField, FormFieldRow } from 'components/molecules/form-field';
import { Tag } from 'components/atoms/tag';
import { Radio } from 'components/atoms/radio';
import { InternalLink } from 'components/atoms/internal-link';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'components/molecules/ExpenseRecordInput',
  component: ExpenseRecordInput,
  parameters: {
    paddings: {
      default: 'small',
    },
  },
} as Meta;

const Template: Story<ExpenseRecordInputProps> = args => (
  <MemoryRouter>
    <ExpenseRecordInput {...args} />
  </MemoryRouter>
);

export const Normal = Template.bind({});
Normal.args = {
  title: '明細 1',
  handleCloseClick: action('handleCloseClick'),
  children: (
    <FormField label="費用の種類" labelAddons={<Tag>必須</Tag>}>
      <Radio name="cost" defaultChecked={true} value="generalTransportation">
        一般交通機関 <small>(電車・バス・飛行機・船)</small>
      </Radio>
      <FormFieldRow columnSize="6" columnSizePC="6">
        <Radio name="cost" value="taxi">
          タクシー
        </Radio>
        <Radio name="cost" value="privateCar">
          私有車
        </Radio>
        <Radio name="cost" value="companyCar">
          社有車
        </Radio>
        <Radio name="cost" value="lodging">
          宿泊
        </Radio>
      </FormFieldRow>
    </FormField>
  ),
  link: (
    <InternalLink href="#" icon="link">
      「駅すぱあと」で交通費を調べる
    </InternalLink>
  ),
};
