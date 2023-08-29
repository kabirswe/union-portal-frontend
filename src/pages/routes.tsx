import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ROUTES } from 'consts/routes';
import { Loading } from 'components/atoms/loading';
import { AuthedRoute } from 'libs/authed-route';

const Top = lazy(() => import('pages/top'));
const DndList = lazy(() => import('pages/dnd-list'));
const Form = lazy(() => import('pages/form'));
const Sample = lazy(() => import('pages/sample'));
const Setting = lazy(() => import('pages/setting'));
const Adfs = lazy(() => import('pages/adfs'));

const Signin = lazy(() => import('pages/signin'));
const Home = lazy(() => import('pages/home'));
const Template = lazy(() => import('pages/template'));
const Customize = lazy(() => import('pages/customize'));
const CustomizeAdd = lazy(() => import('pages/customize/add'));
const WorkMenu = lazy(() => import('pages/workmenu'));

export const Routes: React.FC = () => (
  <Suspense fallback={<Loading overlay />}>
    <Switch>
      <Route exact path={ROUTES.TOP} component={Top} />
      <Route exact path={ROUTES.DND_LIST} component={DndList} />
      <Route exact path={ROUTES.FORM} component={Form} />
      <Route exact path={ROUTES.SAMPLE} component={Sample} />
      <Route exact path={ROUTES.SETTING} component={Setting} />

      <Route exact path={ROUTES.SGN_01_01} component={Signin} />
      <Route exact path={ROUTES.ADFS} component={Adfs} />

      <AuthedRoute>
        <Switch>
          <Route exact path={ROUTES.HOM_01_01} component={Home} />
          <Route exact path={ROUTES.TPL_01_01} component={Template} />
          <Route exact path={ROUTES.WDT_01_01} component={Customize} />
          <Route exact path={ROUTES.WDT_02_01} component={CustomizeAdd} />
          <Route exact path={ROUTES.WRK_01_01} component={WorkMenu} />
        </Switch>
      </AuthedRoute>
    </Switch>
  </Suspense>
);
