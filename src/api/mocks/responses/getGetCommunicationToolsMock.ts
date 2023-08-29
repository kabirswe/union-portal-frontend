import { CommunicationToolsListResponse } from 'api/model'
import { commonResponseListResult } from 'api/mocks/responses/_commonResponseListResult';

export const getGetCommunicationToolsMock: () => CommunicationToolsListResponse = () => ({
  ...commonResponseListResult,
  BusinessData: {
    ...commonResponseListResult.BusinessData,
    Bodies: [
      {
        "LinkCode": "dummy",
        "LinkCategoryCode": "dummy",
        "LinkName": "Zoom",
        "LinkUrl": "http://example.com",
        "IconUrl": "http://example.com"
      },
      {
        "LinkCode": "dummy",
        "LinkCategoryCode": "dummy",
        "LinkName": "Teams",
        "LinkUrl": "http://example.com",
        "IconUrl": "http://example.com"
      },
      {
        "LinkCode": "dummy",
        "LinkCategoryCode": "dummy",
        "LinkName": "Webex",
        "LinkUrl": "http://example.com",
        "IconUrl": "http://example.com"
      },
      {
        "LinkCode": "dummy",
        "LinkCategoryCode": "dummy",
        "LinkName": "Communication Tool",
        "LinkUrl": "http://example.com",
        "IconUrl": "http://example.com"
      },
      {
        "LinkCode": "dummy",
        "LinkCategoryCode": "dummy",
        "LinkName": "Communication Tool",
        "LinkUrl": "http://example.com",
        "IconUrl": "http://example.com"
      },
      {
        "LinkCode": "dummy",
        "LinkCategoryCode": "dummy",
        "LinkName": "Communication Tool",
        "LinkUrl": "http://example.com",
        "IconUrl": "http://example.com"
      },
      {
        "LinkCode": "dummy",
        "LinkCategoryCode": "dummy",
        "LinkName": "Communication Tool",
        "LinkUrl": "http://example.com",
        "IconUrl": "http://example.com"
      }
    ]
  }
})

