/*
 see 
 https://orval.dev/guides/react-query
 https://orval.dev/reference/configuration/output
 */

const faker = require('faker');
const dayjs = require('dayjs');

module.exports = {
  cosmos2Api: {
    input: {
      target: './docs/api/aeon-aibs-portal-openapi-spec/reference/cosmos2.yaml',
    },
    output: {
      mode: 'split',
      target: './src/api/api.ts',
      schemas: './src/api/model',
      client: 'react-query',
      mock: true,
      override: {
        // see example of https://orval.dev/reference/configuration/full-example
        mock: {
          properties: {
            '/^[Dd]ate.*/': () => dayjs(faker.date.past()).format('YYYY-MM-DDTHH:mm:ss.SSS'),
          },
        },
      },
    },
  },
};
