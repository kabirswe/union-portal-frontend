import { useGetEmployeesEmployeeCode, useGetWidgetMyWidgets } from 'api/api';
import { ROUTES } from 'consts/routes';
import { isInitialTemplateSettingFinished } from 'libs/utils';
import React, { ReactNode, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelector } from 'redux/auth/authSelector';

interface AuthedRoute {
  children: ReactNode;
}

export const AuthedRoute: React.FC<AuthedRoute> = ({ children }) => {
  const location = useLocation();
  const history = useHistory();
  // TODO: Get employee-code
  const {
    userInfo: { employeeCode },
  } = useSelector(authSelector);

  // TODO: authentication check

  useGetEmployeesEmployeeCode(employeeCode);

  const getMywidgets = useGetWidgetMyWidgets({
    'employee-code': employeeCode,
  });

  useEffect(() => {
    // getMyWidgetsが取得・再取得終わった時だけに実行
    if (!getMywidgets.isLoading) {
      if (location.pathname !== ROUTES.TPL_01_01 && !isInitialTemplateSettingFinished(getMywidgets.data)) {
        history.push(ROUTES.TPL_01_01);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getMywidgets.data]);

  return <>{children}</>;
};
