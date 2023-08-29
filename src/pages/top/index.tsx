import React, { useRef } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'react-toastify';
import { SaveToast } from 'components/atoms/save-toast';
import { ApplyButton } from 'components/atoms/apply-button';
import { TextField } from 'components/atoms/text-field';
import { Button } from 'components/atoms/button';
import { Text } from 'components/atoms/text';
import { WysiwygEditor } from 'components/molecules/wysiwyg-editor';
import { Omitpipe } from 'components/utils/omitpipe';
import { Date } from 'components/utils/date';
import { FixedControl } from 'components/organisms/fixed-control';
import { ButtonContainer } from 'components/molecules/button-container';
import { ROUTES } from 'consts/routes';
import { Checkbox } from 'components/atoms/checkbox';
import { InternalLink } from 'components/atoms/internal-link';
import { NoticeInfo } from 'components/atoms/notice-info';
import { TextLink } from 'components/atoms/text-link';

type demoInputs = {
  firstName: string;
  lastName: string;
};

const Top: React.FC = () => {
  const { register, handleSubmit } = useForm<demoInputs>();
  const toastId = useRef<string | number | null>(null);
  const notify = () => {
    //Check if a toast is displayed or not
    if (toastId.current && toast.isActive(toastId.current)) {
      toast.dismiss(toastId.current);
    }
    toastId.current = toast('保存しました');
  };
  // eslint-disable-next-line no-console
  const onSubmit: SubmitHandler<demoInputs> = data => console.log(data);

  return (
    <main id="top" className="p-top">
      <Button onClick={notify} modifiers="primary">
        Notify !
      </Button>
      <SaveToast />

      <Button href={ROUTES.HOM_01_01}>HOME</Button>
      <Checkbox modifiers="link" linkProps={{ href: ROUTES.HOM_01_01 }}>
        HOME
      </Checkbox>
      <InternalLink href={ROUTES.HOM_01_01} icon="link">
        HOME
      </InternalLink>
      <NoticeInfo title="役員ショートメッセージ" date="2021.06.20 14:00" href={ROUTES.HOM_01_01}>
        エスカレーターでの危険行為におけるお詫びと対応について
      </NoticeInfo>
      <TextLink href={ROUTES.HOM_01_01}>HOME</TextLink>
      <h1>Top page</h1>
      <h4>Contents are coming soon...</h4>
      <Text>
        <Omitpipe linesPC={2} linesSP={3} endMargin={300}>
          {'文字列の切り捨ての例'.repeat(200)}
        </Omitpipe>
      </Text>
      <ApplyButton>Test</ApplyButton>

      {/* 

      * react-hook-form sample codes 
      * todo
      This is a demo sample form just for check this plugin is properly wroking. 
      please remove all sample code when do a final visual design 
      */}
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit"  */}
      <form className="p-top__demo-form" onSubmit={handleSubmit(onSubmit)}>
        <TextField type="text" placeholder="First Name" {...register('firstName')} />
        <TextField type="text" placeholder="Last Name" {...register('lastName')} />
        <Button type="submit">Submit</Button>
      </form>
      <br />
      <Date date="2019-08-24T14:15:22.000" />
      <br />
      <Date date="2019-08-24T14:15:22.000" noDay={true} />
      <br />
      <WysiwygEditor />
      <FixedControl modifiers="btn-container" isVisible={true}>
        <ButtonContainer>
          <Button type="button" size="huge" modifiers="third">
            キャンセル
          </Button>
          <Button type="button" size="huge" modifiers="primary">
            保存
          </Button>
        </ButtonContainer>
      </FixedControl>
    </main>
  );
};
export default Top;
