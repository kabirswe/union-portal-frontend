/*
 * Generated by orval v5.4.14 🍺
 * Do not edit manually.
 * AIBS Cosmos2 WebAPI
 * AIBS 従業員ポータルサイトのためのWebAPIです。
Webフロントエンドから呼び出します。

参考文献：
https://www.insight-tec.com/tech-blog/20210409_crud/

 * OpenAPI spec version: 1.0
 */
import type { BulletinBoardsDetailResponseAllOfBusinessDataMetaInfosItem } from './bulletinBoardsDetailResponseAllOfBusinessDataMetaInfosItem';
import type { BulletinBoardsListItem } from './bulletinBoardsListItem';

export type BulletinBoardsDetailResponseAllOfBusinessData = {
  MetaInfos: BulletinBoardsDetailResponseAllOfBusinessDataMetaInfosItem[];
  Bodies: BulletinBoardsListItem[];
};
