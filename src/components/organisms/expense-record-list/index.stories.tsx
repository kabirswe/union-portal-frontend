import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ExpenseRecordList, ExpenseRecordListProps } from './';
import { FormField, FormFieldRow } from 'components/molecules/form-field';
import { Radio } from 'components/atoms/radio';
import { InternalLink } from 'components/atoms/internal-link';
import { Tag } from 'components/atoms/tag';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'components/organisms/ExpenseRecordList',
  component: ExpenseRecordList,
  parameters: {
    paddings: {
      default: 'small',
    },
  },
} as Meta;

const Template: Story<ExpenseRecordListProps> = args => (
  <MemoryRouter>
    <ExpenseRecordList {...args} />
  </MemoryRouter>
);

export const Normal = Template.bind({});
Normal.args = {
  onAddRequested: action('onAddRequested'),
  onRemoveRequested: action('onRemoveRequested'),
  templateInput: (
    <FormField label="費用の種類" labelAddons={<Tag>必須</Tag>}>
      <Radio defaultChecked={true} value="generalTransportation">
        一般交通機関 <small>(電車・バス・飛行機・船)</small>
      </Radio>
      <FormFieldRow columnSize="6" columnSizePC="6">
        <Radio value="taxi">タクシー</Radio>
        <Radio value="privateCar">私有車</Radio>
        <Radio value="companyCar">社有車</Radio>
        <Radio value="lodging">宿泊</Radio>
      </FormFieldRow>
    </FormField>
  ),
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

const TextFieldItem: React.FC<{ name: string }> = ({ name }) => (
  <FormField label="費用の種類" labelAddons={<Tag>必須</Tag>}>
    <Radio name={name} defaultChecked={true} value="generalTransportation">
      一般交通機関 <small>(電車・バス・飛行機・船)</small>
    </Radio>
    <FormFieldRow columnSize="6" columnSizePC="6">
      <Radio name={name} value="taxi">
        タクシー
      </Radio>
      <Radio name={name} value="privateCar">
        私有車
      </Radio>
      <Radio name={name} value="companyCar">
        社有車
      </Radio>
      <Radio name={name} value="lodging">
        宿泊
      </Radio>
    </FormFieldRow>
  </FormField>
);
const WrapperInputsArray: React.FC = () => {
  const [_children, setChildren] = useState([<TextFieldItem key={1} name={'cost'} />]);
  return (
    <div>
      <ExpenseRecordList
        onAddRequested={() => {
          setChildren([
            ..._children,
            <TextFieldItem key={_children.length + 1} name={`cost${_children.length + 1}`} />,
          ]);
        }}
        onRemoveRequested={index => {
          setChildren(_children.filter((_child, i) => i !== index));
        }}
        link={
          <InternalLink href="#" icon="link">
            「駅すぱあと」で交通費を調べる
          </InternalLink>
        }
      >
        {_children}
      </ExpenseRecordList>
    </div>
  );
};

export const WrapperStateExample: Story = () => (
  <MemoryRouter>
    <WrapperInputsArray />
  </MemoryRouter>
);
