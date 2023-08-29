export const HOST = 'https://www.xyz.jp/';

const CONFIG_DEV = {
  API_URL: 'http://localhost:8080',
  CMS_API_KEY: 'xxxx',
};

const CONFIG_PRD = {
  API_URL: 'https://test.com/posts?',
  CMS_API_KEY: 'xxxx',
};

export const CONFIG =
  process.env.NODE_ENV !== 'production' || (process.env.NODE_STAGE === 'dev' && process.env.NODE_ENV === 'production')
    ? CONFIG_DEV
    : CONFIG_PRD;

export const IS_WEB = navigator.userAgent !== 'ReactSnap';
