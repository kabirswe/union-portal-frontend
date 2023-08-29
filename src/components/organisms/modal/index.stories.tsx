import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Modal, ModalProps } from './';
import { Button } from 'components/atoms/button';
import { FormField } from 'components/molecules/form-field';
import { Heading } from 'components/atoms/heading';
import { Text } from 'components/atoms/text';
import { ModalOpener } from 'components/atoms/modal-opener';
import { TextField } from 'components/atoms/text-field';
import { DateRangeField } from 'components/atoms/date-range-field';

export default {
  title: 'components/organisms/Modal',
  component: Modal,
} as Meta;

const Template: Story<ModalProps> = args => <Modal {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  opened: true,
  title: '絞り込み検索',
  children: [
    <FormField key="1" label="キーワード">
      <TextField type="search" />
    </FormField>,
    <FormField key="2" label="申請日">
      <DateRangeField />
    </FormField>,
  ],
  footer: <Button modifiers="primary">検索</Button>,
};

export const Dialog = Template.bind({});
Dialog.args = {
  opened: true,
  title: '下書きに保存しますか？',
  modifiers: 'dialog',
  children: [
    <Text modifiers="small" align="center">
      終了する前に編集中の内容を保存できます。
    </Text>,
  ],
  footer: (
    <>
      <Button size="large" modifiers="third">
        破棄する
      </Button>
      <Button size="large" modifiers="primary">
        下書き保存
      </Button>
    </>
  ),
};

export const WithHeaderIcon = Template.bind({});
WithHeaderIcon.args = {
  opened: true,
  headerIcon: 'help',
  title: '香料・供花・弔電とは？',
  children: [
    <Heading key="1" tag="h4">
      香料(こうりょう)とは
    </Heading>,
    <Text key="2">「御香料」は葬儀などで故人に対してお供えする金品のことです。</Text>,
    <Heading key="3" tag="h4">
      供花(きょうか、くげ)とは
    </Heading>,
    <Text key="4">
      「供花」とは故人に供える花のことを指します。供花には死者の霊を慰めると同時に祭壇や会場を飾る意味があり、葬儀の際は、親族や親戚一同と書かれ祭壇の両側に置かれていることが一般的です。
    </Text>,
    <Heading key="5" tag="h4">
      弔電とは
    </Heading>,
    <Text key="6">
      弔電についての一般的な説明がここには入ります弔電についての一般的な説明がここには入ります弔電についての一般的な説明がここには入ります弔電についての一般的な説明がここには入ります。
    </Text>,
  ],
};

export const Fullscreen = Template.bind({});
Fullscreen.args = {
  modifiers: 'fullscreen',
  opened: true,
  children: [
    <>
      <Heading tag="h1">弔事の連絡</Heading>
      <Text>
        このたびは逝去の報に接し、心からお悔やみ申し上げます。近親者が亡くなられた方には、慶弔休暇（もしくは特別休暇）の調整他のため、以下に連絡の取れる連絡先・葬儀等についての情報をお聞きしております。
      </Text>
      <ModalOpener>慶弔に関する規定</ModalOpener>
    </>,
  ],
  footer: (
    <>
      <Button modifiers="secondary">下書き保存</Button>
      <Button modifiers="primary">検索</Button>
    </>
  ),
};

export const FullscreenWithBackButton = Template.bind({});
FullscreenWithBackButton.args = {
  modifiers: 'fullscreen',
  opened: true,
  hasBackButton: true,
  children: [
    <>
      <Heading tag="h1">弔事の連絡</Heading>
      <Text>
        このたびは逝去の報に接し、心からお悔やみ申し上げます。近親者が亡くなられた方には、慶弔休暇（もしくは特別休暇）の調整他のため、以下に連絡の取れる連絡先・葬儀等についての情報をお聞きしております。
      </Text>
      <ModalOpener>慶弔に関する規定</ModalOpener>
    </>,
  ],
  footer: (
    <>
      <Button modifiers="secondary">下書き保存</Button>
      <Button modifiers="primary">検索</Button>
    </>
  ),
};

export const ModalMediumSize = Template.bind({});
ModalMediumSize.args = {
  modalSize: 'medium',
  opened: true,
  children: [
    <>
      <Heading tag="h1">弔事の連絡</Heading>
      <Text>
        このたびは逝去の報に接し、心からお悔やみ申し上げます。近親者が亡くなられた方には、慶弔休暇（もしくは特別休暇）の調整他のため、以下に連絡の取れる連絡先・葬儀等についての情報をお聞きしております。
      </Text>
      <ModalOpener>慶弔に関する規定</ModalOpener>
    </>,
  ],
  footer: (
    <>
      <Button modifiers="secondary">下書き保存</Button>
      <Button modifiers="primary">検索</Button>
    </>
  ),
};

export const ModalMaximumSize = Template.bind({});
ModalMaximumSize.args = {
  modalSize: 'maximum',
  opened: true,
  children: [
    <>
      <Heading tag="h1">弔事の連絡</Heading>
      <Text>
        このたびは逝去の報に接し、心からお悔やみ申し上げます。近親者が亡くなられた方には、慶弔休暇（もしくは特別休暇）の調整他のため、以下に連絡の取れる連絡先・葬儀等についての情報をお聞きしております。
      </Text>
      <ModalOpener>慶弔に関する規定</ModalOpener>
    </>,
  ],
  footer: (
    <>
      <Button modifiers="secondary">下書き保存</Button>
      <Button modifiers="primary">検索</Button>
    </>
  ),
};
