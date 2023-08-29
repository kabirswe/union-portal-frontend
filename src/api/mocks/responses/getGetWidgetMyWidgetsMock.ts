import { commonResponse } from 'api/mocks/responses/_commonResponse'
import { MyWidgetsListResponse } from 'api/model'
import { getGetWidgetWidgetsMock } from 'api/mocks/responses/getGetWidgetWidgetsMock';


let init = false;

export const getGetWidgetMyWidgetsMock: () => MyWidgetsListResponse = () => {
  /**
   * widgets show at home, after filter getGetWidgetWidgetsMock by widgetid
   */
  const widgetIdsToShowHome = [1, 2, 3, 4, 5];

  let body = getGetWidgetWidgetsMock().BusinessData.Bodies.filter(item => widgetIdsToShowHome.includes(item.WidgetId));
  if (!init) {
    body = []
    init = true;
  }

  return ({
    ...commonResponse,
    BusinessData: {
      ...commonResponse.BusinessData,
      Bodies: body
    }
  })
}

