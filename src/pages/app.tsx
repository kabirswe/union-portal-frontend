import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from 'pages/routes';
import { useUrlQueryParameter } from 'libs/utils';
import { useDispatch } from 'react-redux';
import { setNoScroll } from 'redux/auth/authSlice';

const RoutedContent: React.FC = () => {
  const dispatch = useDispatch();
  const isNoScroll = useUrlQueryParameter().get('isNoScroll');
  if (isNoScroll === '0') {
    dispatch(setNoScroll({ noScroll: false }));
  } else if (isNoScroll === '1') {
    dispatch(setNoScroll({ noScroll: true }));
  }
  return (
    <>
      <Routes />
    </>
  );
};

export const App: React.FC = () => {
  return (
    <Router basename={process.env.BASE_PATH}>
      <RoutedContent />
    </Router>
  );
};
