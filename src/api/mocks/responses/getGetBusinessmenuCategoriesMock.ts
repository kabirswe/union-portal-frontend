import { MenuListCategoryResponse } from 'api/model'
import { commonResponse } from 'api/mocks/responses/_commonResponse';

export const getGetBusinessmenuCategoriesMock: () => MenuListCategoryResponse = () => ({
  ...commonResponse,
  BusinessData: {
    ...commonResponse.BusinessData,
    Bodies: [
      {
        "LinkCategoryCode": '101',
        "LinkCategoryName": "共通メニュー"
      },
      {
        "LinkCategoryCode": '401',
        "LinkCategoryName": "売場メニュー"
      },
      {
        "LinkCategoryCode": '402',
        "LinkCategoryName": "教育メニュー"
      },
      {
        "LinkCategoryCode": '403',
        "LinkCategoryName": "後方メニュー"
      },
      {
        "LinkCategoryCode": '900',
        "LinkCategoryName": "システム管理"
      },
      {
        "LinkCategoryCode": '999',
        "LinkCategoryName": "テスト・開発G"
      }
    ]
  }
})

