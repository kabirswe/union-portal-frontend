import React from 'react';
import { ROUTES } from 'consts/routes';
import { Section } from 'components/molecules/section';
import { NavList } from 'components/molecules/nav-list';
import { NavItem } from 'components/atoms/nav-item';
import { useGetBusinessmenuCategories, useGetBusinessmenuMymenuLinks } from 'api/api';
import { Loading } from 'components/atoms/loading';
import { PageHeading } from 'components/molecules/page-heading';
import { InternalLink } from 'components/atoms/internal-link';
import { GetBusinessmenuCategoriesParams, GetBusinessmenuMymenuLinksParams } from 'api/model';
import { useSelector } from 'react-redux';
import { authSelector } from 'redux/auth/authSelector';
import { Button } from 'components/atoms/button';

const MyMenu: React.FC = () => {
  const {
    userInfo: { employeeCode },
  } = useSelector(authSelector);

  const categoriesParams: GetBusinessmenuCategoriesParams = {
    'employee-code': employeeCode,
  };
  const myMenuLinksParams: GetBusinessmenuMymenuLinksParams = {
    'employee-code': employeeCode,
  };
  const getBusinessCategories = useGetBusinessmenuCategories(categoriesParams);
  const getBusinessMenuLinks = useGetBusinessmenuMymenuLinks(myMenuLinksParams);
  const businessCategoriesData = getBusinessCategories.data?.data.BusinessData.Bodies;
  const businessMenuLinksData = getBusinessMenuLinks.data?.data.BusinessData.Bodies;

  const filterdNavItem = (code: string) => {
    const navItem = businessMenuLinksData?.reduce((acc: JSX.Element[], cur) => {
      if (cur.LinkCategoryCode === code) {
        acc.push(
          <NavItem
            key={cur.LinkCode}
            modifiers="side-by-side"
            subnav={true}
            label={cur.LinkName}
            // NOTE: Comment out for testing
            // href={`${ROUTES.BML_01_01}#${cur.LinkUrl}`}
            href="#"
          />
        );
      }
      return acc;
    }, []);
    return navItem;
  };

  return (
    <Section
      modifiers="card"
      className="p-home__my-menu"
      head={
        <>
          <PageHeading
            title="マイメニュー"
            tag="h5"
            className="m-section__heading"
            actions={
              <InternalLink icon="link" href={ROUTES.WRK_01_01}>
                業務メニュー
              </InternalLink>
            }
          />
          <Button modifiers="unread-count" unreadCount={2} href="#">
            システム稼働情報
          </Button>
        </>
      }
    >
      {getBusinessCategories.isLoading || getBusinessMenuLinks.isLoading ? (
        <Loading />
      ) : (
        <Section>
          <NavList modifiers="side-by-side-layout">
            {businessCategoriesData?.map((category, i) => {
              const elements = filterdNavItem(category.LinkCategoryCode);
              return (
                elements &&
                elements.length > 0 && (
                  <NavItem key={i} modifiers="side-by-side" label={category.LinkCategoryName}>
                    {elements}
                  </NavItem>
                )
              );
            })}
          </NavList>
        </Section>
      )}
    </Section>
  );
};

export default MyMenu;
