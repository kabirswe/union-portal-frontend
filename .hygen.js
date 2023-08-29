const changeCase = require('change-case');
const path = require('path');
// const { API_PATHES } = require('./src/constants/api-pathes.ts');

module.exports = {
  helpers: {
    toPascalCase(text) {
      return changeCase.pascalCase(text);
    },
    createBaseClassName(level, name) {
      const atomicPrefix = `${level.slice(0, 1)}-`;
      return `${atomicPrefix}${name}`;
    },
    normalizePath(url) {
      return path.normalize(url);
    },
    // toSnakeCaseWithId(id) {
    //   const basePaths = ['msapi/v1/', 'cmsapi/v1/'];
    //   let { uri } = API_PATHES[id] || { uri: '' };
    //   for (const basePath of basePaths) {
    //     uri = uri.replace(basePath, '');
    //   }
    //   return uri.replace(/[-]+/, '').replace(/\/+/g, '_');
    // },
  },
};
