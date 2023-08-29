import { CaptionList } from 'components/atoms/caption-list';
import { Text } from 'components/atoms/text';
import { Heading } from 'components/atoms/heading';
import { Section } from 'components/molecules/section';
import { SettingHeader } from 'components/molecules/setting-header';
import { Setting } from 'components/templates/setting';
import React from 'react';
import { ButtonContainer } from 'components/molecules/button-container';
import { Button } from 'components/atoms/button';

const SettingSample: React.FC = () => {
  return (
    <Setting
      id="setting"
      className="p-setting"
      header={
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
      }
    >
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
    </Setting>
  );
};

export default SettingSample;
