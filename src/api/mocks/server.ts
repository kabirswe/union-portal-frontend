// https://github.com/mswjs/examples/blob/master/examples/rest-react/src/mocks/server.js

import { getAIBSCosmos2WebAPIMSW } from 'api/api.msw'
import { setupServer } from 'msw/node'

// Setup requests interception using the given handlers.
export const server = setupServer(...getAIBSCosmos2WebAPIMSW())
