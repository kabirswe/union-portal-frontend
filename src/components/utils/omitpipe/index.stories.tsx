import React from 'react';
import { storiesOf } from '@storybook/react';
import { Omitpipe } from './';

storiesOf('utils/omitpipe', module)
  .add('short text', () => <Omitpipe linesPC={2}>文字列の切り捨ての例</Omitpipe>)
  .add('linesPC without linesSP', () => <Omitpipe linesPC={2}>{'文字列の切り捨ての例'.repeat(200)}</Omitpipe>)
  .add('linesPC vs linesSP', () => (
    <Omitpipe linesPC={2} linesSP={3}>
      {'文字列の切り捨ての例'.repeat(200)}
    </Omitpipe>
  ))
  .add('endMargin', () => (
    <Omitpipe linesPC={2} linesSP={3} endMargin={70}>
      {'文字列の切り捨ての例'.repeat(200)}
    </Omitpipe>
  ));
