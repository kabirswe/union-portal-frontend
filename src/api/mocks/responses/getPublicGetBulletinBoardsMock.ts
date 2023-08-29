import { BulletinBoardsListResponse } from 'api/model'
import { commonResponseListResult } from 'api/mocks/responses/_commonResponseListResult';

export const getPublicGetBulletinBoardsMock: () => BulletinBoardsListResponse = () => ({
  ...commonResponseListResult,
  BusinessData: {
    ...commonResponseListResult.BusinessData,
    Bodies: [
      {
        "BulletinBoardId": 0,
        "Title": "POSレジシステム障害についてのお知らせ",
        "SubmissionDatetime": "2021-08-08T18:25:00.000",
        "LeadText": "",
        "Contributor": "杉山 実季",
        "EmployeeCode": "0759317",
        "ImportanceLevel": 0,
        "BulletinCategoryCode": "9999",
        "BulletinCategoryName": "システム障害",
        "NumberOfAccesses": 0
      },
      {
        "BulletinBoardId": 1,
        "Title": "役員から皆様へのショートメッセージ",
        "SubmissionDatetime": "2021-08-04T15:12:00.000",
        "LeadText": "",
        "Contributor": "儀保 智恵",
        "EmployeeCode": "2671643",
        "ImportanceLevel": 0,
        "BulletinCategoryCode": "9999",
        "BulletinCategoryName": "全社メッセージ",
        "NumberOfAccesses": 0
      },
      {
        "BulletinBoardId": 2,
        "Title": "コンプライアンスにおける注意喚起",
        "SubmissionDatetime": "2021-07-15T09:10:00.000",
        "LeadText": "",
        "Contributor": "松田 敏子",
        "EmployeeCode": "2286341",
        "ImportanceLevel": 0,
        "BulletinCategoryCode": "9999",
        "BulletinCategoryName": "全社メッセージ",
        "NumberOfAccesses": 0
      },
      {
        "BulletinBoardId": 3,
        "Title": "イオングループの従業員を騙る不審なメールについてのお知らせ",
        "SubmissionDatetime": "2021-07-02T18:00:00.000",
        "LeadText": "",
        "Contributor": "松田 敏子",
        "EmployeeCode": "2286341",
        "ImportanceLevel": 0,
        "BulletinCategoryCode": "9999",
        "BulletinCategoryName": "全社メッセージ",
        "NumberOfAccesses": 0
      },
      {
        "BulletinBoardId": 4,
        "Title": "勤怠システムのメンテナンスのお知らせ",
        "SubmissionDatetime": "2021-06-23T14:00:00.000",
        "LeadText": "",
        "Contributor": "松田 敏子",
        "EmployeeCode": "2286341",
        "ImportanceLevel": 0,
        "BulletinCategoryCode": "9999",
        "BulletinCategoryName": "システム障害",
        "NumberOfAccesses": 0
      },
      {
        "BulletinBoardId": 5,
        "Title": "商品回収に関するお詫びとお知らせ",
        "SubmissionDatetime": "2021-06-14T16:00:00.000",
        "LeadText": "",
        "Contributor": "松田 敏子",
        "EmployeeCode": "2286341",
        "ImportanceLevel": 0,
        "BulletinCategoryCode": "9999",
        "BulletinCategoryName": "全社メッセージ",
        "NumberOfAccesses": 0
      },
      {
        "BulletinBoardId": 6,
        "Title": "お問い合わせフォームへの社外の第三者によるアクセスについて（継続調査結果）",
        "SubmissionDatetime": "2021-06-10T16:00:00.000",
        "LeadText": "",
        "Contributor": "松田 敏子",
        "EmployeeCode": "2286341",
        "ImportanceLevel": 0,
        "BulletinCategoryCode": "9999",
        "BulletinCategoryName": "全社メッセージ",
        "NumberOfAccesses": 0
      },
      {
        "BulletinBoardId": 7,
        "Title": "株式会社〇〇に対する当社の対応について",
        "SubmissionDatetime": "2021-05-04T16:00:00.000",
        "LeadText": "",
        "Contributor": "松田 敏子",
        "EmployeeCode": "2286341",
        "ImportanceLevel": 0,
        "BulletinCategoryCode": "9999",
        "BulletinCategoryName": "全社メッセージ",
        "NumberOfAccesses": 0
      },
      {
        "BulletinBoardId": 8,
        "Title": "『トップバリュ』のロゴを無断で掲載したサイトにご注意ください",
        "SubmissionDatetime": "2021-04-28T16:00:00.000",
        "LeadText": "",
        "Contributor": "松田 敏子",
        "EmployeeCode": "2286341",
        "ImportanceLevel": 0,
        "BulletinCategoryCode": "9999",
        "BulletinCategoryName": "全社メッセージ",
        "NumberOfAccesses": 0
      },
      {
        "BulletinBoardId": 9,
        "Title": "申請業務システムのメンテナンスのお知らせ",
        "SubmissionDatetime": "2021-04-01T16:00:00.000",
        "LeadText": "",
        "Contributor": "松田 敏子",
        "EmployeeCode": "2286341",
        "ImportanceLevel": 0,
        "BulletinCategoryCode": "9999",
        "BulletinCategoryName": "システム障害",
        "NumberOfAccesses": 0
      }
    ]
  }
})

