import React, { lazy, Suspense } from 'react';
import { General } from 'components/templates/general';
import { useGetWidgetMyWidgets } from 'api/api';
import { useSelector } from 'react-redux';
import { Loading } from 'components/atoms/loading';
import { GetWidgetMyWidgetsParams } from 'api/model';
import { authSelector } from 'redux/auth/authSelector';
import { MasonryContainer } from 'components/organisms/masonry-container';
import { MasonryItem } from 'components/molecules/masonry-item';
import { WIDGETS } from 'consts/widgets';

const ImportantNoticeWidget = lazy(() => import('./important-notice'));

const Home: React.FC = () => {
  const {
    userInfo: { employeeCode },
  } = useSelector(authSelector);

  const myWidgetsParams: GetWidgetMyWidgetsParams = {
    'employee-code': employeeCode,
  };
  const getMyWidgets = useGetWidgetMyWidgets(myWidgetsParams);

  const myWidgets: JSX.Element[] = [];
  if (!getMyWidgets.isLoading) {
    getMyWidgets.data?.data.BusinessData.Bodies.map(widget => {
      const wdg = WIDGETS.find(w => w.id === widget.WidgetId);
      if (wdg) {
        const LazyComponent = lazy(() => import(`./${wdg.name}`));
        myWidgets.push(
          <MasonryItem key={wdg.id} col={wdg.col as '1' | 'auto'}>
            <Suspense fallback={<Loading />}>
              <LazyComponent />
            </Suspense>
          </MasonryItem>
        );
      }
    });
  }

  const widgets = [
    <MasonryItem key="important-notice" col="1">
      <Suspense fallback={<Loading />}>
        <ImportantNoticeWidget />
      </Suspense>
    </MasonryItem>,
    myWidgets,
  ];

  return (
    <>
      <General id="home" className="p-home">
        <MasonryContainer>{widgets}</MasonryContainer>
      </General>
    </>
  );
};

export default Home;
