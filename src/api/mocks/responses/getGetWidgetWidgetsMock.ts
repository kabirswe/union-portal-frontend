import { commonResponse } from 'api/mocks/responses/_commonResponse'
import { MyWidgetsListResponse } from 'api/model'

export const getGetWidgetWidgetsMock: (templateId?: string | null) => MyWidgetsListResponse = (templateId?: string | null) => {

  const response: MyWidgetsListResponse = {
    ...commonResponse,
    BusinessData: {
      ...commonResponse.BusinessData,
      Bodies: [
        {
          "WidgetId":1,
          "WidgetName": "全社グループ掲示板"
        },
        {
          "WidgetId":2,
          "WidgetName": "イオンリテール掲示板"
        },
        {
          "WidgetId":3,
          "WidgetName": "売上情報"
        },
        {
          "WidgetId":4,
          "WidgetName": "コミュニケーションツール"
        },
        {
          "WidgetId":5,
          "WidgetName": "マイメニュー"
        },
        {
          "WidgetId":6,
          "WidgetName": "月中コントロール"
        },
        {
          "WidgetId":7,
          "WidgetName": "マックスバリュコンテンツ"
        },
        {
          "WidgetId":8,
          "WidgetName": "営業ダッシュボード"
        },
        {
          "WidgetId":9,
          "WidgetName": "エリア速報値情報"
        },
        {
          "WidgetId":10,
          "WidgetName": "イオンアイビス掲示板"
        },
        {
          "WidgetId":11,
          "WidgetName": "イオンアイビスコンテンツ"
        },
        {
          "WidgetId":12,
          "WidgetName": "イオンスマートテクノロジー掲示板"
        },
        {
          "WidgetId":13,
          "WidgetName": "売値ダッシュボード"
        },
        {
          "WidgetId":14,
          "WidgetName": "スケジュール管理"
        }
      ]
    }
  }

  /** show widgets when select template */
  let WidgetIdsToFilterByTemplateId: number[] = []

  if (templateId) {
    switch (templateId) {
      case '1' : { // for store manager
        break
      }
      case '7' : { // for part-time job
        WidgetIdsToFilterByTemplateId = [1, 2, 4, 5]
        break
      }
      default: {
        break
      }
    }
  }
  if (WidgetIdsToFilterByTemplateId.length) {
    response.BusinessData.Bodies = response.BusinessData.Bodies.filter(item => WidgetIdsToFilterByTemplateId.includes(item.WidgetId))
  }

  return response
}

