import { TemplatesResponse } from 'api/model'
import { commonResponseListResult } from 'api/mocks/responses/_commonResponseListResult';

export const getGetTemplatesMock: () => TemplatesResponse = () => ({
  ...commonResponseListResult,
  BusinessData: {
    ...commonResponseListResult.BusinessData,
    Bodies: [
      {
        "TemplateId": 1,
        "TemplateName": "店長・事業部長向け",
        "TemplateExplanatoryNote": "店舗現場管理で必要な情報が優先で表示されます。"
      },
      {
        "TemplateId": 2,
        "TemplateName": "売り場営業スタッフ向け",
        "TemplateExplanatoryNote": "売場の管理で必要な情報が優先で表示されます。"
      },
      {
        "TemplateId": 3,
        "TemplateName": "店舗後方スタッフ向け",
        "TemplateExplanatoryNote": "店舗バックオフィス業務で必要な情報が優先で表示されます。"
      },
      {
        "TemplateId": 4,
        "TemplateName": "商品部スタッフ向け",
        "TemplateExplanatoryNote": "店舗本部業務で必要な情報が優先で表示されます。"
      },
      {
        "TemplateId": 5,
        "TemplateName": "コントロール/経理スタッフ向け",
        "TemplateExplanatoryNote": "経理業務に必要な情報が優先で表示されます。"
      },
      {
        "TemplateId": 6,
        "TemplateName": "人事スタッフ/総務スタッフ向け",
        "TemplateExplanatoryNote": "HR業務に必要な情報が優先で表示されます。"
      },
      {
        "TemplateId": 7,
        "TemplateName": "パートスタッフ向け",
        "TemplateExplanatoryNote": "掲示板の閲覧など、必要なものだけを表示したシンプルな画面です。"
      }
    ]
  }
})

