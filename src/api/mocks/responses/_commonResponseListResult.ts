import faker from 'faker'
import { commonResponse } from 'api/mocks/responses/_commonResponse';

export const commonResponseListResult = {
  ...commonResponse,
  BusinessData: {
    MetaInfos: {
      TotalCount: faker.datatype.number(),
      Offset: faker.datatype.number(),
      Limit: faker.datatype.number()
    }
  }
}
