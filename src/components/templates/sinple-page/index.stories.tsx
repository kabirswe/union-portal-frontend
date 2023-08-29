import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SimplePage, SimplePageProps } from '.';
import { Section } from 'components/molecules/section';
import { CaptionList } from 'components/atoms/caption-list';
import { Heading } from 'components/atoms/heading';
import { Text } from 'components/atoms/text';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'components/templates/SimplePage',
  component: SimplePage,
} as Meta;

const Template: Story<SimplePageProps> = args => (
  <MemoryRouter>
    <SimplePage {...args} />
  </MemoryRouter>
);

export const Normal = Template.bind({});
Normal.args = {
  children: (
    <Section noPadding>
      <Heading>弔事の連絡</Heading>
      <Section modifiers="fill-white">
        <Text>
          香料・供花・弔電について、辞退やキャンセル等の理由で未手配の場合、ご逝去日から1年以内に申請いただければご手配いたします。
        </Text>
        <CaptionList>
          <li>
            供花・弔電はまとめてのご手配となるため、一方のみを手配された後にもう一方を申請することはできません。予めご了承ください。
          </li>
        </CaptionList>
      </Section>
    </Section>
  ),
};
