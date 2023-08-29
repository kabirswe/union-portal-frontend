import { CommonRequestBody, MyWidgetsListResponse } from 'api/model';
import { AxiosResponse } from 'axios';
import { useLocation } from 'react-router-dom';

export const bytesToSize = (bytes: number) => {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes == 0) return '0 Byte';
  const i = Number(Math.floor(Math.log(bytes) / Math.log(1024)));
  const sizeNum = bytes / Math.pow(1024, i);
  return `${sizeNum.toFixed(2)} ${sizes[i]}`;
};

export const isInitialTemplateSettingFinished = (
  getMyWidgetsData: AxiosResponse<MyWidgetsListResponse> | undefined
) => {
  return getMyWidgetsData && getMyWidgetsData.data.BusinessData.Bodies.length > 0;
};

interface ReqGen<T> extends CommonRequestBody {
  BusinessData: {
    MetaInfos: unknown;
    Bodies: T;
  };
}
export const generateRequestBodyWithCommonRequest = <T>(bodies: T): ReqGen<T> => {
  return {
    SrcSystem: {
      SystemId: 'Computer',
      TranDateTime: 'maroon',
      TranToken: 'navigate',
    },
    BusinessData: {
      MetaInfos: {},
      Bodies: bodies,
    },
  };
};

// based on example of https://reactrouter.com/web/example/query-parameters
export const useUrlQueryParameter = () => {
  return new URLSearchParams(useLocation().search);
};
