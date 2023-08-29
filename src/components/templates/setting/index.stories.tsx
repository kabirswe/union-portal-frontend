import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Setting, SettingProps } from '.';
import { Section } from 'components/molecules/section';
import { CaptionList } from 'components/atoms/caption-list';
import { Heading } from 'components/atoms/heading';
import { Text } from 'components/atoms/text';
import { MemoryRouter } from 'react-router-dom';
import { SettingHeader } from 'components/molecules/setting-header';
import { ButtonContainer } from 'components/molecules/button-container';
import { Button } from 'components/atoms/button';

export default {
  title: 'components/templates/Setting',
  component: Setting,
} as Meta;

const Template: Story<SettingProps> = args => (
  <MemoryRouter>
    <Setting {...args} />
  </MemoryRouter>
);

export const Normal = Template.bind({});
Normal.args = {
  header: (
    <SettingHeader
      actions={
        <ButtonContainer>
          <Button modifiers="secondary">下書き保存</Button>
          <Button modifiers="primary">プレビュー</Button>
        </ButtonContainer>
      }
      modifiers="fixed-width"
      title="新規投稿"
    />
  ),
  children: (
    <>
      <Section noPadding={true}>
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
    </>
  ),
};
