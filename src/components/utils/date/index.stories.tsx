import React from 'react';
import { storiesOf } from '@storybook/react';
import { Date } from '.';

storiesOf('utils/Date', module)
  .add('normal', () => <Date date="2019-08-24T14:15:22.000" />)
  .add('noDay', () => <Date date="2019-08-24T14:15:22.000" noDay />);
