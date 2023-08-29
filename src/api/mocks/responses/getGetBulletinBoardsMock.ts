import { BulletinBoardsListResponse } from 'api/model'
import { commonResponseListResult } from 'api/mocks/responses/_commonResponseListResult';

export const getGetBulletinBoardsMock: (groupCode: string | null) => BulletinBoardsListResponse = (groupCode: string | null) => {

  const response: BulletinBoardsListResponse = {
    ...commonResponseListResult,
    BusinessData: {
      ...commonResponseListResult.BusinessData,
      Bodies: [
        {
          "BulletinBoardId": 0,
          "Title": "役員ショートメッセージ",
          "SubmissionDatetime": "2021-08-08T18:25:00.000",
          "LeadText": "",
          "Contributor": "儀保 智恵",
          "EmployeeCode": "2671643",
          "ImportanceLevel": 2,
          "BulletinCategoryCode": "9998",
          "BulletinCategoryName": "経営",
          "NumberOfAccesses": 0
        },
        {
          "BulletinBoardId": 1,
          "Title": "イオン 新型コロナウイルス医療従事者支援金を寄付",
          "SubmissionDatetime": "2021-08-04T15:12:00.000",
          "LeadText": "",
          "Contributor": "儀保 智恵",
          "EmployeeCode": "2671643",
          "ImportanceLevel": 0,
          "BulletinCategoryCode": "9998",
          "BulletinCategoryName": "総務",
          "NumberOfAccesses": 0
        },
        {
          "BulletinBoardId": 2,
          "Title": "グループ会社代表者の異動について",
          "SubmissionDatetime": "2021-07-15T09:10:00.000",
          "LeadText": "",
          "Contributor": "儀保 智恵",
          "EmployeeCode": "2671643",
          "ImportanceLevel": 1,
          "BulletinCategoryCode": "9998",
          "BulletinCategoryName": "人事",
          "NumberOfAccesses": 0
        },
        {
          "BulletinBoardId": 3,
          "Title": "イオンカードの「ときめきポイント」を「WAON POINT」に変更",
          "SubmissionDatetime": "2021-07-02T18:00:00.000",
          "LeadText": "",
          "Contributor": "儀保 智恵",
          "EmployeeCode": "2671643",
          "ImportanceLevel": 0,
          "BulletinCategoryCode": "9998",
          "BulletinCategoryName": "プロモーション",
          "NumberOfAccesses": 0
        },
        {
          "BulletinBoardId": 4,
          "Title": "「トップバリュ セレクト ＧＬＡＭＡＴＩＣＡＬ ヒアルロン酸マイクロニードルパッチ」新発売",
          "SubmissionDatetime": "2021-06-23T14:00:00.000",
          "LeadText": "",
          "Contributor": "儀保 智恵",
          "EmployeeCode": "2671643",
          "ImportanceLevel": 0,
          "BulletinCategoryCode": "9998",
          "BulletinCategoryName": "商品関連",
          "NumberOfAccesses": 0
        },
        {
          "BulletinBoardId": 5,
          "Title": "「イオンモール白山」グランドオープン！",
          "SubmissionDatetime": "2021-06-14T16:00:00.000",
          "LeadText": "",
          "Contributor": "儀保 智恵",
          "EmployeeCode": "2671643",
          "ImportanceLevel": 0,
          "BulletinCategoryCode": "9998",
          "BulletinCategoryName": "総務",
          "NumberOfAccesses": 0
        },
        {
          "BulletinBoardId": 6,
          "Title": "世界環境デーに「幕張の浜 ビーチクリーン活動」を実施しました",
          "SubmissionDatetime": "2021-06-10T16:00:00.000",
          "LeadText": "",
          "Contributor": "儀保 智恵",
          "EmployeeCode": "2671643",
          "ImportanceLevel": 0,
          "BulletinCategoryCode": "9998",
          "BulletinCategoryName": "総務",
          "NumberOfAccesses": 0
        },
        {
          "BulletinBoardId": 7,
          "Title": "イオンネクスト　顧客フルフィルメントセンターを千葉市誉田に起工",
          "SubmissionDatetime": "2021-05-04T16:00:00.000",
          "LeadText": "",
          "Contributor": "儀保 智恵",
          "EmployeeCode": "2671643",
          "ImportanceLevel": 0,
          "BulletinCategoryCode": "9998",
          "BulletinCategoryName": "総務",
          "NumberOfAccesses": 0
        },
        {
          "BulletinBoardId": 8,
          "Title": "感染症拡大防止への対応について",
          "SubmissionDatetime": "2021-04-28T16:00:00.000",
          "LeadText": "",
          "Contributor": "儀保 智恵",
          "EmployeeCode": "2671643",
          "ImportanceLevel": 0,
          "BulletinCategoryCode": "9998",
          "BulletinCategoryName": "総務",
          "NumberOfAccesses": 0
        },
        {
          "BulletinBoardId": 9,
          "Title": "機構改革及び人事異動について",
          "SubmissionDatetime": "2021-04-01T16:00:00.000",
          "LeadText": "",
          "Contributor": "儀保 智恵",
          "EmployeeCode": "2671643",
          "ImportanceLevel": 1,
          "BulletinCategoryCode": "9998",
          "BulletinCategoryName": "人事",
          "NumberOfAccesses": 0
        },
        {
          "BulletinBoardId": 10,
          "Title": "野菜一斉値下げセールについて",
          "SubmissionDatetime": "2021-08-08T18:25:00.000",
          "LeadText": "",
          "Contributor": "儀保 智恵",
          "EmployeeCode": "2671643",
          "ImportanceLevel": 2,
          "BulletinCategoryCode": "1",
          "BulletinCategoryName": "商品関連",
          "NumberOfAccesses": 0
        },
        {
          "BulletinBoardId": 11,
          "Title": "第2次中期経営計画についてのお知らせ",
          "SubmissionDatetime": "2021-08-04T15:12:00.000",
          "LeadText": "",
          "Contributor": "儀保 智恵",
          "EmployeeCode": "2671643",
          "ImportanceLevel": 0,
          "BulletinCategoryCode": "1",
          "BulletinCategoryName": "経営",
          "NumberOfAccesses": 0
        },
        {
          "BulletinBoardId": 12,
          "Title": "恒例セールス企画の再開と変更について",
          "SubmissionDatetime": "2021-07-15T09:10:00.000",
          "LeadText": "",
          "Contributor": "儀保 智恵",
          "EmployeeCode": "2671643",
          "ImportanceLevel": 1,
          "BulletinCategoryCode": "1",
          "BulletinCategoryName": "総務",
          "NumberOfAccesses": 0
        },
        {
          "BulletinBoardId": 13,
          "Title": "代表取締役の異動、組織変更及び人事異動に関するお知らせ",
          "SubmissionDatetime": "2021-07-02T18:00:00.000",
          "LeadText": "",
          "Contributor": "儀保 智恵",
          "EmployeeCode": "2671643",
          "ImportanceLevel": 0,
          "BulletinCategoryCode": "1",
          "BulletinCategoryName": "人事",
          "NumberOfAccesses": 0
        },
        {
          "BulletinBoardId": 14,
          "Title": "決算短信等関連資料掲載のお知らせ",
          "SubmissionDatetime": "2021-06-23T14:00:00.000",
          "LeadText": "",
          "Contributor": "儀保 智恵",
          "EmployeeCode": "2671643",
          "ImportanceLevel": 0,
          "BulletinCategoryCode": "1",
          "BulletinCategoryName": "財務・経理",
          "NumberOfAccesses": 0
        },
        {
          "BulletinBoardId": 15,
          "Title": "食品宅配アプリに非接触の店頭受取サービス導入のお知らせ",
          "SubmissionDatetime": "2021-06-14T16:00:00.000",
          "LeadText": "",
          "Contributor": "儀保 智恵",
          "EmployeeCode": "2671643",
          "ImportanceLevel": 0,
          "BulletinCategoryCode": "1",
          "BulletinCategoryName": "総務",
          "NumberOfAccesses": 0
        },
        {
          "BulletinBoardId": 16,
          "Title": "スマートフォン決済の利用店舗拡大のお知らせ",
          "SubmissionDatetime": "2021-06-10T16:00:00.000",
          "LeadText": "",
          "Contributor": "儀保 智恵",
          "EmployeeCode": "2671643",
          "ImportanceLevel": 0,
          "BulletinCategoryCode": "1",
          "BulletinCategoryName": "総務",
          "NumberOfAccesses": 0
        },
        {
          "BulletinBoardId": 17,
          "Title": "組織改正および人事異動について",
          "SubmissionDatetime": "2021-05-04T16:00:00.000",
          "LeadText": "",
          "Contributor": "儀保 智恵",
          "EmployeeCode": "2671643",
          "ImportanceLevel": 1,
          "BulletinCategoryCode": "1",
          "BulletinCategoryName": "人事",
          "NumberOfAccesses": 0
        },
        {
          "BulletinBoardId": 18,
          "Title": "「有機ほうじ茶（ティーバッグ）」新発売のお知らせ",
          "SubmissionDatetime": "2021-04-28T16:00:00.000",
          "LeadText": "",
          "Contributor": "儀保 智恵",
          "EmployeeCode": "2671643",
          "ImportanceLevel": 0,
          "BulletinCategoryCode": "1",
          "BulletinCategoryName": "商品関連",
          "NumberOfAccesses": 0
        },
        {
          "BulletinBoardId": 19,
          "Title": "「新型コロナウイルス 医療従事者支援募金」寄付のお知らせ",
          "SubmissionDatetime": "2021-04-01T16:00:00.000",
          "LeadText": "",
          "Contributor": "儀保 智恵",
          "EmployeeCode": "2671643",
          "ImportanceLevel": 0,
          "BulletinCategoryCode": "1",
          "BulletinCategoryName": "総務",
          "NumberOfAccesses": 0
        }
      ]
    }
  }

  if (groupCode) {
    response.BusinessData.Bodies = response.BusinessData.Bodies.filter(item => item.BulletinCategoryCode === groupCode)
  }

  return response
}

