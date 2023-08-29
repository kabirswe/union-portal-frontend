import { useGetEmployeesEmployeeCode, usePublicGetBulletinBoards } from 'api/api';
import { GetBulletinBoardsParams } from 'api/model';
import { InternalLink } from 'components/atoms/internal-link';
import { Loading } from 'components/atoms/loading';
import { NoticeInfo } from 'components/atoms/notice-info';
import { LoggedInContain } from 'components/molecules/logged-in-contain';
import { NoticeInfoList } from 'components/molecules/notice-info-list';
import { PageHeading } from 'components/molecules/page-heading';
import { Section } from 'components/molecules/section';
import { SimplePage } from 'components/templates/sinple-page';
import { Date } from 'components/utils/date';
import { TagsFromApiResponse } from 'components/utils/tags-from-api-response';
// import { ROUTES } from 'consts/routes';
import logo from 'images/common/AeonLogo.svg';
import { useUrlQueryParameter } from 'libs/utils';
import React from 'react';
import { useSelector } from 'react-redux';
import { authSelector } from 'redux/auth/authSelector';

const Signin: React.FC = () => {
  const {
    userInfo: { employeeCode },
    noScroll,
  } = useSelector(authSelector);

  // NOTE: for testing
  const isLoggedIn = useUrlQueryParameter().get('isLoggedIn');

  const params: GetBulletinBoardsParams = {
    'group-code': '9999',
    'employee-code': employeeCode,
    limit: 10,
    offset: 0,
  };
  const getBulletinBoards = usePublicGetBulletinBoards(params);
  // NOTE: for testing
  const bulletinBoardsData = noScroll
    ? getBulletinBoards.data?.data.BusinessData.Bodies.slice(0, 3)
    : getBulletinBoards.data?.data.BusinessData.Bodies;

  const getEmployees = useGetEmployeesEmployeeCode(employeeCode);
  const employeesData = getEmployees.data?.data.BusinessData.Bodies;
  return (
    <SimplePage id="signin" className="p-signin" verticalCenter>
      <Section noPadding>
        <div className="p-signin__logo">
          <img src={logo} alt="AEON" />
        </div>

        <Section
          modifiers={['card', 'small']}
          head={
            <PageHeading
              title="重要なお知らせ"
              tag="h5"
              icon="safty-confirmation-selected"
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
          {getBulletinBoards.isLoading ? (
            <Loading />
          ) : (
            <NoticeInfoList noScroll={noScroll}>
              {bulletinBoardsData?.map(article => (
                <NoticeInfo
                  //TODO: transition to detail of important href: /important-info/:id/
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

        {/* Logged-in layout */}
        <Section modifiers={['v-padding', 'small']}>
          {getEmployees.isLoading ? (
            <Loading />
          ) : (
            <LoggedInContain isSignedIn={isLoggedIn === '1'} employeesData={employeesData} />
          )}
        </Section>
      </Section>
    </SimplePage>
  );
};

export default Signin;
