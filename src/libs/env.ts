import { detect as detectBrowser } from 'detect-browser';

const browser = detectBrowser();

/**
 * ENV provides values related to NODE_ENV, user-agent, etc...
 */
export const ENV = (() => ({
  IS_PRODUCTION: process.env.NODE_ENV === 'production',
  // `window.navigator.userAgent` will be replaced by "WEBPACK_SSR" when `webpack.config.vanilla-examples.ts` is used.
  // But `window` itself is still `undefined` so please don't check `typeof window !== 'undefined'`.
  IS_WEBPACK_SSR: window.navigator.userAgent === 'WEBPACK_SSR',
  IS_SAFARI: browser?.name === 'safari',
  IS_WINDOWS: browser?.os?.match(/Windows/),
}))();
