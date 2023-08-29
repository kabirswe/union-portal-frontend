import { useGetBulletinBoards } from 'api/api';
import React from 'react';
import { useSelector } from 'react-redux';
// import { ROUTES } from 'consts/routes';
import { NoticeInfoList } from 'components/molecules/notice-info-list';
import { NoticeInfo } from 'components/atoms/notice-info';
import { Loading } from 'components/atoms/loading';
import { Section } from 'components/molecules/section';
import { TagsFromApiResponse } from 'components/utils/tags-from-api-response';
import { authSelector } from 'redux/auth/authSelector';
import { PageHeading } from 'components/molecules/page-heading';
import { InternalLink } from 'components/atoms/internal-link';
import { Date } from 'components/utils/date';
import { GetBulletinBoardsParams } from 'api/model';

const GroupwideInformation: React.FC = () => {
  const {
    userInfo: { employeeCode },
    noScroll,
  } = useSelector(authSelector);

  const params: GetBulletinBoardsParams = {
    'group-code': '9998',
    'employee-code': employeeCode,
    limit: 3,
    offset: 0,
  };
  const { data, isLoading } = useGetBulletinBoards(params);
  // NOTE: for testing
  const bulletinBoardsData = noScroll ? data?.data.BusinessData.Bodies.slice(0, 3) : data?.data.BusinessData.Bodies;

  return (
    <Section
      modifiers="card"
      className="p-home__groupwide-information"
      head={
        <PageHeading
          title="全社グループ掲示板"
          tag="h5"
          className="m-section__heading"
          actions={
            <InternalLink
              icon="link"
              // NOTE: Comment out for testing
              // href={ROUTES.IMI_01_01}
              href="#"
            >
              一覧
            </InternalLink>
          }
        />
      }
    >
      {isLoading ? (
        <Loading />
      ) : (
        <NoticeInfoList noScroll={noScroll}>
          {bulletinBoardsData?.map(article => (
            <NoticeInfo
              // NOTE: Comment out for testing
              // href={`${ROUTES.IMI_01_01}${article.BulletinBoardId}`}
              href="#"
              key={article.BulletinBoardId}
              date={<Date date={article.SubmissionDatetime} noDay />}
              title={article.Title}
              tags={
                <TagsFromApiResponse
                  BulletinCategoryCode={article.BulletinCategoryCode}
                  BulletinCategoryName={article.BulletinCategoryName}
                  ImportanceLevel={article.ImportanceLevel}
                />
              }
            />
          ))}
        </NoticeInfoList>
      )}
    </Section>
  );
};

export default GroupwideInformation;
