import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Icon, IconProps } from './';

export default {
  title: 'components/atoms/Icon',
  component: Icon,
} as Meta;

const Template: Story<IconProps> = args => <Icon {...args} />;

export const AddItem = Template.bind({});
export const DeleteItem = Template.bind({});
export const Home = Template.bind({});
export const HomeSelected = Template.bind({});
export const Attendance = Template.bind({});
export const AttendanceSelected = Template.bind({});
export const Application = Template.bind({});
export const ApplicationSelected = Template.bind({});
export const Bell = Template.bind({});
export const BellSelected = Template.bind({});
export const Communication = Template.bind({});
export const CommunicationSelected = Template.bind({});
export const HelpMenu = Template.bind({});
export const HelpMenuSelected = Template.bind({});
export const SaftyConfirmation = Template.bind({});
export const SaftyConfirmationSelected = Template.bind({});
export const Apps = Template.bind({});
export const ArrowDown = Template.bind({});
export const ArrowDownWhite = Template.bind({});
export const ArrowLeft = Template.bind({});
export const ArrowLeftWhite = Template.bind({});
export const ArrowLeftGray = Template.bind({});
export const ArrowRight = Template.bind({});
export const ArrowRightWhite = Template.bind({});
export const ArrowRightGray = Template.bind({});
export const ArrowUp = Template.bind({});
export const CloseFill = Template.bind({});
export const CloseBold = Template.bind({});
export const CheckPurple = Template.bind({});
export const CheckWhite = Template.bind({});
export const CheckGrey = Template.bind({});
export const Close = Template.bind({});
export const DotAction = Template.bind({});
export const Edit = Template.bind({});
export const Filter = Template.bind({});
export const FilterActive = Template.bind({});
export const Menu = Template.bind({});
export const Navbar = Template.bind({});
export const News = Template.bind({});
export const Waiting = Template.bind({});
export const Remand = Template.bind({});
export const Draft = Template.bind({});
export const Download = Template.bind({});
export const DownloadDisabled = Template.bind({});
export const InProgress = Template.bind({});
export const Approval = Template.bind({});
export const Denial = Template.bind({});
export const Request = Template.bind({});
export const RequestList = Template.bind({});
export const ApprovalList = Template.bind({});
export const LaborMenu = Template.bind({});
export const Settings = Template.bind({});
export const Avatar = Template.bind({});
export const UserAvatar = Template.bind({});
export const RequestListSelected = Template.bind({});
export const ApprovalListSelected = Template.bind({});
export const LaborMenuSelected = Template.bind({});
export const SettingsSelected = Template.bind({});
export const NewsSelected = Template.bind({});
export const AvatarSelected = Template.bind({});
export const Search = Template.bind({});
export const SearchWhite = Template.bind({});
export const Calendar = Template.bind({});
export const CalendarSelected = Template.bind({});
export const Back = Template.bind({});
export const BackWhite = Template.bind({});
export const Link = Template.bind({});
export const LinkNewWindow = Template.bind({});
export const LinkNewWindowGrey = Template.bind({});
export const Help = Template.bind({});
export const StatusA = Template.bind({});
export const StatusB = Template.bind({});
export const Tag = Template.bind({});
export const TagUser = Template.bind({});
export const Outlook = Template.bind({});
export const MicrosoftTeams = Template.bind({});
export const Zoom = Template.bind({});
export const Chatwork = Template.bind({});
export const Slack = Template.bind({});
export const ArrowLeftGrayActive = Template.bind({});
export const ArrowLeftGrayInactive = Template.bind({});
export const ArrowRightGrayActive = Template.bind({});
export const ArrowRightGrayInactive = Template.bind({});
export const PostQuote = Template.bind({});
export const PostEdit = Template.bind({});
export const PostDelete = Template.bind({});
export const PostComment = Template.bind({});

AddItem.args = { name: 'add-item' };
DeleteItem.args = { name: 'delete-item' };
Home.args = { name: 'home' };
HomeSelected.args = { name: 'home-selected' };
Attendance.args = { name: 'attendance' };
AttendanceSelected.args = { name: 'attendance-selected' };
Application.args = { name: 'application' };
ApplicationSelected.args = { name: 'application-selected' };
Bell.args = { name: 'bell' };
BellSelected.args = { name: 'bell-selected' };
Communication.args = { name: 'communication' };
CommunicationSelected.args = { name: 'communication-selected' };
SaftyConfirmation.args = { name: 'safty-confirmation' };
SaftyConfirmationSelected.args = { name: 'safty-confirmation-selected' };
Apps.args = { name: 'apps' };
ArrowDown.args = { name: 'arrow-down' };
ArrowDownWhite.args = { name: 'arrow-down-white' };
ArrowLeft.args = { name: 'arrow-left' };
ArrowLeftWhite.args = { name: 'arrow-left-white' };
ArrowLeftGray.args = { name: 'arrow-left-gray' };
ArrowRight.args = { name: 'arrow-right' };
ArrowRightWhite.args = { name: 'arrow-right-white' };
ArrowRightGray.args = { name: 'arrow-right-gray' };
ArrowUp.args = { name: 'arrow-up' };
CloseFill.args = { name: 'close-fill' };
CloseBold.args = { name: 'close-bold' };
CloseBold.parameters = {
  backgrounds: {
    default: 'black',
  },
};
CheckPurple.args = { name: 'check-purple' };
CheckWhite.args = { name: 'check-white' };
CheckGrey.args = { name: 'check-grey' };
Close.args = { name: 'close' };
DotAction.args = { name: 'dot-action' };
Edit.args = { name: 'edit' };
Filter.args = { name: 'filter' };
FilterActive.args = { name: 'filter-active' };
Menu.args = { name: 'menu' };
Navbar.args = { name: 'navbar' };
News.args = { name: 'news' };
Waiting.args = { name: 'waiting' };
Remand.args = { name: 'remand' };
Draft.args = { name: 'draft' };
Download.args = { name: 'download' };
DownloadDisabled.args = { name: 'download-disabled' };
InProgress.args = { name: 'in-progress' };
Approval.args = { name: 'approval' };
Denial.args = { name: 'denial' };
Request.args = { name: 'request' };
Request.parameters = {
  backgrounds: {
    default: 'black',
  },
};
RequestList.args = { name: 'request-list' };
ApprovalList.args = { name: 'approval-list' };
LaborMenu.args = { name: 'labor-menu' };
Settings.args = { name: 'settings' };
Avatar.args = { name: 'avatar' };
UserAvatar.args = { name: 'user-avatar' };
RequestListSelected.args = { name: 'request-list-selected' };
ApprovalListSelected.args = { name: 'approval-list-selected' };
LaborMenuSelected.args = { name: 'labor-menu-selected' };
SettingsSelected.args = { name: 'settings-selected' };
NewsSelected.args = { name: 'news-selected' };
AvatarSelected.args = { name: 'avatar-selected' };
Search.args = { name: 'search' };
SearchWhite.args = { name: 'search-white' };
SearchWhite.parameters = {
  backgrounds: {
    default: 'black',
  },
};
Calendar.args = { name: 'calendar' };
CalendarSelected.args = { name: 'calendar-selected' };
Back.args = { name: 'back' };
BackWhite.args = { name: 'back-white' };
BackWhite.parameters = {
  backgrounds: {
    default: 'black',
  },
};
Link.args = { name: 'link' };
LinkNewWindow.args = { name: 'link-new-window' };
LinkNewWindowGrey.args = { name: 'link-new-window-grey' };
Help.args = { name: 'help' };
HelpMenu.args = { name: 'help-menu' };
HelpMenuSelected.args = { name: 'help-menu-selected' };
StatusA.args = { name: 'status-a' };
StatusB.args = { name: 'status-b' };
Tag.args = { name: 'tag' };
TagUser.args = { name: 'tag-user' };
Outlook.args = { name: 'outlook' };
MicrosoftTeams.args = { name: 'microsoft-teams' };
Zoom.args = { name: 'zoom' };
Chatwork.args = { name: 'chatwork' };
Slack.args = { name: 'slack' };
ArrowLeftGrayActive.args = { name: 'arrow-left-gray-active' };
ArrowLeftGrayInactive.args = { name: 'arrow-left-gray-inactive' };
ArrowRightGrayActive.args = { name: 'arrow-right-gray-active' };
ArrowRightGrayInactive.args = { name: 'arrow-right-gray-inactive' };
PostQuote.args = { name: 'post-quote' };
PostEdit.args = { name: 'post-edit' };
PostDelete.args = { name: 'post-delete' };
PostComment.args = { name: 'post-comment' };
