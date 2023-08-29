import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { DndListContainer, DndListContainerProps } from './';
import { DndListItem } from 'components/molecules/dnd-list-item';

export default {
  title: 'components/organisms/DndListContainer',
  component: DndListContainer,
} as Meta;

const Template: Story<DndListContainerProps> = args => <DndListContainer {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: [
    <DndListItem key={1} id="1" index={1}>
      aaa
    </DndListItem>,
    <DndListItem key={2} id="2" index={2}>
      bbb
    </DndListItem>,
    <DndListItem key={3} id="3" index={3}>
      ccc
    </DndListItem>,
  ],
};
