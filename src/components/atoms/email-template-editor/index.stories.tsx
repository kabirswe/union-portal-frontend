import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { EmailTemplateEditor, EmailTemplateEditorProps, PlaceholderListItem } from './';
import { action } from '@storybook/addon-actions';
import { TextPlaceholder } from 'components/atoms/text-placeholder';

export default {
  title: 'components/atoms/EmailTemplateEditor',
  component: EmailTemplateEditor,
  parameters: {
    paddings: {
      default: 'small',
    },
  },
} as Meta;

const codeList: PlaceholderListItem[] = [
  {
    id: 1,
    value: '申請者名',
    code: '%%7890%%',
  },
  {
    id: 2,
    value: '申請者 氏名（姓）',
    code: '%%7891%%',
  },
  {
    id: 3,
    value: '申請者 氏名（名）',
    code: '%%7892%%',
  },
  {
    id: 4,
    value: '亡くなられた方の氏名（姓）',
    code: '%%7893%%',
  },
  {
    id: 5,
    value: '亡くなられた方の氏名（名）',
    code: '%%7893%%',
  },
];

const Template: Story<EmailTemplateEditorProps> = args => <EmailTemplateEditor {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  onResolvePlaceholder: searchTerm => {
    action(`search: ${searchTerm}`);
    return codeList;
  },
  children: (
    <>
      <p>
        <TextPlaceholder dataId={2} code="%%7892%%">
          申請者 氏名（姓）
        </TextPlaceholder>
        <TextPlaceholder dataId={3} code="%%7892%%">
          申請者 氏名（名）
        </TextPlaceholder>
        &nbsp;様
      </p>
      <p>
        <br />
      </p>
      <p>この度はお悔やみを申し上げます。</p>
      <p>下記内容で弔事連絡を受け付けました。</p>
      <p>申請内容について確認をさせていただく場合は、ご入力いただいた電話番号にご連絡を差し上げます。</p>
      <p>供花・弔電を受け取られる方に対しては、ご手配の状況についてご連絡を差し上げますのでしばらくお待ちください。</p>
      <p>
        <br />
      </p>
      <p>この度はお悔やみを申し上げます。</p>
      <p>下記内容で弔事連絡を受け付けました。</p>
      <p>申請内容について確認をさせていただく場合は、ご入力いただいた電話番号にご連絡を差し上げます。</p>
      <p>供花・弔電を受け取られる方に対しては、ご手配の状況についてご連絡を差し上げますのでしばらくお待ちください。</p>
      <p>
        <br />
      </p>
      <p>【申請内容】</p>
      <p>亡くなられた方の情報</p>
      <p>
        <br />
      </p>
      <p>
        お名前：
        <TextPlaceholder dataId={4} code="%%7892%%">
          亡くなられた方の氏名（姓）
        </TextPlaceholder>
        <TextPlaceholder dataId={5} code="%%7892%%">
          亡くなられた方の氏名（名）
        </TextPlaceholder>
      </p>
      <p>
        <br />
      </p>
      <p>・</p>
      <p>・</p>
      <p>・</p>
      <p>・</p>
      <p>
        <br />
      </p>
      <p>お問い合わせはこちらまでご連絡ください。</p>
      <p>00-0000-0000</p>
      <p>
        <br />
      </p>
      <p>——</p>
      <p>
        <br />
      </p>
      <p>署名</p>
    </>
  ),
};
