import { CSSProp, css } from 'styled-components';

export const truncateMixin = css`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const maxTruncatedLinesMixin = (maxLines: number): CSSProp => css`
  display: -webkit-box;
  -webkit-line-clamp: ${maxLines};
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
