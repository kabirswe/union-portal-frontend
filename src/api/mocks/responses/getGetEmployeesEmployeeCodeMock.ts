import { commonResponse } from 'api/mocks/responses/_commonResponse'
import { EmployeeResponse } from 'api/model'

export const getGetEmployeesEmployeeCodeMock: () => EmployeeResponse = () => ({
  ...commonResponse,
  BusinessData: {
    ...commonResponse.BusinessData,
    Bodies: {
      "FirstNameKanji": "太郎",
      "LastNameKanji": "伊音",
      "EmployeeCode": "759317",
      "FinancialCompanyCode": "0063",
      "FinancialCompanyNameKanji": "イオンリテール(株)",
      "SecondLevelCode": "63",
      "SecondLevelName": "＊",
      "ThirdLevelCode": "570000",
      "ThirdLevelName": "イオンベーカリー",
      "PersonnelAffiliationCode": "38249",
      "PositionNameKanji": "店担当",
      "PositionCode": "008"
    }
  }
})

