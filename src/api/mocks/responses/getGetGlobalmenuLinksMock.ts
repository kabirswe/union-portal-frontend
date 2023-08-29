import { commonResponse } from 'api/mocks/responses/_commonResponse'
import { GlobalMenuLinksResponse } from 'api/model'
import { ROUTES } from 'consts/routes';

export const getGetGlobalmenuLinksMock: () => GlobalMenuLinksResponse = () => ({
  ...commonResponse,
  BusinessData: {
    ...commonResponse.BusinessData,
    Bodies: [
      {
        "LinkType": 2,
        "WidgetId": 0,
        "LinkUrl": ROUTES.TOP,
        "IconUrl": "assets/images/icons/home.svg"
      },
      {
        "LinkType": 2,
        "WidgetId": 0,
        "LinkUrl": "dummy",
        "IconUrl": "assets/images/icons/attendance.svg"
      },
      {
        "LinkType": 2,
        "WidgetId": 0,
        "LinkUrl": "dummy",
        "IconUrl": "assets/images/icons/application.svg"
      },
      {
        "LinkType": 1,
        "WidgetId": 5,
        "LinkUrl": "",
        "IconUrl": "assets/images/icons/communication.svg"
      },
      {
        "LinkType": 2,
        "WidgetId": 0,
        "LinkUrl": "dummy",
        "IconUrl": "assets/images/icons/help-menu.svg"
      },
      {
        "LinkType": 2,
        "WidgetId": 0,
        "LinkUrl": "dummy",
        "IconUrl": "assets/images/icons/safty-confirmation.svg"
      }
    ]
  }
})

