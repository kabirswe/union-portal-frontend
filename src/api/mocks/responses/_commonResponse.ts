import faker from 'faker'


export const commonResponse = {
  SrcSystem: {
    SystemId: faker.random.word(),
    TranToken: faker.random.word(), TranDateTime: faker.random.word()
  },
  ApiVersion: { ApiName: faker.random.word(), Version: '1.0.0' },
  DestSystem: {
    SystemId: faker.random.word(), ReceptToken: faker.random.word(),
    ReceptDatetime: faker.random.word(), Result: {
      Code: faker.random.word(),
      Message: faker.helpers.randomize([faker.random.word(), undefined])
    }
  },
  BusinessData: {
    MetaInfos: {}, Bodies: null
  }
}
