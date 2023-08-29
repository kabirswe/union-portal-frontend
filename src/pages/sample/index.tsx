import React from 'react';
import { ROUTES } from 'consts/routes';
import { General } from 'components/templates/general';
import { Section } from 'components/molecules/section';
import { Text } from 'components/atoms/text';
import { HistoryBackButton } from 'components/atoms/history-back-button';
import { PageHeading } from 'components/molecules/page-heading';
import { InternalLink } from 'components/atoms/internal-link';
import { UploadField } from 'components/atoms/upload-field';

const Sample: React.FC = () => {
  return (
    <General id="sample" className="p-sample">
      <HistoryBackButton isHistoryBack>戻る</HistoryBackButton>
      <Section noPadding>
        <PageHeading
          title="ホーム画面の編集"
          actions={
            <InternalLink icon="link" href={ROUTES.TPL_01_01}>
              テンプレート変更
            </InternalLink>
          }
        />
        <Text modifiers="small" colors="gray">
          ウィジェットの表示・非表示、並び替えを行うことができます。
        </Text>
      </Section>
      <Section>
        <UploadField description="形式：jpg / png | サイズ：30MBまで" accept="application/pdf">
          ここにファイルをドラッグ
          <br />
          または
        </UploadField>
        <UploadField label="添付ファイルを追加（10MBまで）" isNotDraggable />
      </Section>
    </General>
  );
};

export default Sample;
