/* eslint-disable complexity */
import * as React from 'react';

import { DividerContent, ITableHeader, ITableStandAlone, IValue, TableDividerType } from '../types';

interface IUseContent extends Omit<ITableStandAlone, 'values' | 'headerVariant'> {
  hasSomeExpandedContent?: boolean;
  initialExpanded: boolean;
  value: IValue;
  index: number;
}

interface IUseContentResponse {
  divider?: ITableHeader;
  dividerValue: () => null | TableDividerType | unknown;
  getExpandedAria: () => string | undefined;
  getValue: (headerValue: ITableHeader) => string | JSX.Element | DividerContent;
  handleShowExpandedContent: (value: boolean) => void;
  hasExpandedContentRow: boolean;
  hasFooter: boolean;
  showExpandedContent: boolean;
  rowVariant: string;
}

export const useContent = (props: IUseContent): IUseContentResponse => {
  const [showExpandedContent, setShowExpandedContent] = React.useState(props.initialExpanded);
  const divider = props.headers.find(header => header.config.hasDivider);
  const rowVariant = props.value.rowVariant || 'DEFAULT';

  const handleShowExpandedContent = (value: boolean) => {
    setShowExpandedContent(value);
  };

  const getValueDividerContent = (value, divider) => {
    if (value.dividerContent || divider?.value?.dividerContent || divider?.value) {
      if (divider?.value instanceof Function) {
        const { dividerContent } = divider.value(value);

        return dividerContent;
      }
      return divider?.value?.dividerContent || value.dividerContent;
    }
    return null;
  };

  const getValueDivider = (value, divider) => {
    if (divider?.value instanceof Function) {
      return divider?.value(value);
    }

    return divider?.value ?? value[divider.id];
  };

  const dividerValue = (): null | TableDividerType | unknown => {
    if (!divider?.id) {
      return null;
    }

    const hasDividerContent = getValueDividerContent(props.value, divider);
    const hasDivider = getValueDivider(props.value, divider);

    return hasDividerContent || hasDivider;
  };

  const hasFooter = !!props.footer;
  const getExpandedAria = () =>
    showExpandedContent
      ? props.value.accordionIconExpandedAriaLabel ?? props.accordionIconExpandedAriaLabel
      : props.value.accordionIconCollapsedAriaLabel ?? props.accordionIconCollapsedAriaLabel;

  const getValue = (headerValue: ITableHeader): string | JSX.Element | DividerContent => {
    if (headerValue.value) {
      return headerValue.value(props.value);
    }

    return props.value[headerValue.id]
      ? (props.value[headerValue.id] as string | JSX.Element)
      : '-';
  };

  const hasExpandedContentRow = !!Object.getOwnPropertyDescriptor(props.value, 'expandedContent');

  return {
    divider,
    dividerValue,
    getExpandedAria,
    getValue,
    handleShowExpandedContent,
    hasExpandedContentRow,
    hasFooter,
    showExpandedContent,
    rowVariant,
  };
};
