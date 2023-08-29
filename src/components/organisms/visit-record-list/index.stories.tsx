import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { VisitRecordList, VisitRecordListProps } from './';
import { FormField } from 'components/molecules/form-field/index';
import { TextField } from 'components/atoms/text-field/index';

export default {
  title: 'components/organisms/VisitRecordList',
  component: VisitRecordList,
  parameters: {
    paddings: {
      default: 'small',
    },
  },
} as Meta;

const Template: Story<VisitRecordListProps> = args => <VisitRecordList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  onAddRequested: action('onAddRequested'),
  onRemoveRequested: action('onRemoveRequested'),
  templateInput: (
    <>
      <FormField label="訪問先">
        <TextField type="text" placeholder="会社名、事務所名、店舗名など" />
      </FormField>
      <FormField label="用件">
        <TextField type="text" placeholder="業務、社外教育、社内教育など" />
      </FormField>
    </>
  ),
  children: [
    <>
      <FormField label="訪問先">
        <TextField type="text" placeholder="会社名、事務所名、店舗名など" />
      </FormField>
      <FormField label="用件">
        <TextField type="text" placeholder="業務、社外教育、社内教育など" />
      </FormField>
    </>,
    <>
      <FormField label="訪問先">
        <TextField type="text" placeholder="会社名、事務所名、店舗名など" />
      </FormField>
      <FormField label="用件">
        <TextField type="text" placeholder="業務、社外教育、社内教育など" />
      </FormField>
    </>,
  ],
};

const TextFieldItem: React.FC = () => (
  <>
    <FormField label="訪問先">
      <TextField type="text" placeholder="会社名、事務所名、店舗名など" />
    </FormField>
    <FormField label="用件">
      <TextField type="text" placeholder="業務、社外教育、社内教育など" />
    </FormField>
  </>
);
const WrapperInputsArray: React.FC = () => {
  const [_children, setChildren] = useState([<TextFieldItem key={1} />, <TextFieldItem key={2} />]);
  return (
    <div>
      <VisitRecordList
        onAddRequested={() => {
          setChildren([..._children, <TextFieldItem key={_children.length + 1} />]);
        }}
        onRemoveRequested={index => {
          setChildren(_children.filter((_child, i) => i !== index));
        }}
      >
        {_children}
      </VisitRecordList>
    </div>
  );
};

export const WrapperStateExample: Story = () => <WrapperInputsArray />;
