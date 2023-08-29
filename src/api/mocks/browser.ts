// https://github.com/mswjs/examples/blob/master/examples/rest-react/src/mocks/browser.js

import { getAIBSCosmos2WebAPIMSW } from 'api/api.msw'
import { setupWorker } from 'msw'
import faker from 'faker'

require('faker/locale/ja');

faker.locale = "ja";

export const worker = setupWorker(...getAIBSCosmos2WebAPIMSW())
