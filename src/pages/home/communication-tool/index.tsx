import React from 'react';
import { Section } from 'components/molecules/section';
import { PageHeading } from 'components/molecules/page-heading';
import { ToolItemList } from 'components/molecules/tool-item-list';
import { ToolItem } from 'components/atoms/tool-item';
import { useGetCommunicationTools } from 'api/api';
import { useSelector } from 'react-redux';
import { authSelector } from 'redux/auth/authSelector';
import { GetCommunicationToolsParams } from 'api/model';
import { Loading } from 'components/atoms/loading';

const CommunicationTool: React.FC = () => {
  const {
    userInfo: { employeeCode },
  } = useSelector(authSelector);

  const params: GetCommunicationToolsParams = {
    'employee-code': employeeCode,
  };
  const {
    // data,
    isLoading,
  } = useGetCommunicationTools(params);

  return (
    <Section
      modifiers="card"
      className="p-home__communication-tool"
      head={<PageHeading title="コミュニケーションツール" tag="h5" className="m-section__heading" />}
    >
      {isLoading ? (
        <Loading />
      ) : (
        <ToolItemList>
          {/* {data?.data.BusinessData.Bodies.map(tool => (
            // TODO: Icon will be replaced later
            <ToolItem key={tool.LinkCode} href={tool.LinkUrl} icon="outlook" label={tool.LinkName} />
          ))} */}
          <ToolItem href="#" icon="outlook" label="Outlook Webside" />
          <ToolItem href="#" icon="microsoft-teams" label="Microsoft Teams" />
          <ToolItem href="#" icon="zoom" label="Zoom" />
          <ToolItem href="#" icon="chatwork" label="Chatwork" />
          <ToolItem href="#" icon="slack" label="Slack" />
        </ToolItemList>
      )}
    </Section>
  );
};

export default CommunicationTool;
