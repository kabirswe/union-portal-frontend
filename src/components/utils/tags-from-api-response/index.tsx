import { BulletinBoardsListResponse } from 'api/model';
import { Tag } from 'components/atoms/tag';
import React from 'react';

type BulletinBoardsListItem = BulletinBoardsListResponse['BusinessData']['Bodies'][number];

export interface TagsFromApiResponseProps {
  BulletinCategoryCode: BulletinBoardsListItem['BulletinCategoryCode'];
  BulletinCategoryName: BulletinBoardsListItem['BulletinCategoryName'];
  ImportanceLevel?: BulletinBoardsListItem['ImportanceLevel'];
}

export const TagsFromApiResponse: React.FC<TagsFromApiResponseProps> = ({ BulletinCategoryName, ImportanceLevel }) => {
  const categoryTag = (
    <Tag modifiers={['filled']} color={BulletinCategoryName === 'システム障害' ? 'red' : 'blue'}>
      {BulletinCategoryName}
    </Tag>
  );
  const importanceLevelTag = ImportanceLevel ? (
    <Tag modifiers={['filled']} color={ImportanceLevel === 1 ? 'yellow' : 'red'}>
      {ImportanceLevel === 1 ? '重要' : '緊急'}
    </Tag>
  ) : null;
  return (
    <>
      {importanceLevelTag}
      {categoryTag}
    </>
  );
};
