import React from 'react';

import {
  DividerContent,
  ITableHeader,
  ITableRowHeader,
  ITableStandAlone,
  IValue,
  TableDividerType,
  ValueConfigType,
} from '../types/table';

interface IUseContent extends Omit<ITableStandAlone, 'values' | 'headerVariant'> {
  hasSomeExpandedContent?: boolean;
  initialExpanded: boolean;
  value: IValue;
}

interface IUseContentResponse {
  divider?: ITableHeader;
  rowHeader?: ITableRowHeader;
  dividerValue: () => null | TableDividerType | unknown;
  getExpandedAria: () => string | undefined;
  getValue: (headerValue: ITableHeader) => string | JSX.Element | DividerContent;
  getCellTokenValue: ({
    headerValue,
    token,
  }: {
    headerValue: ITableHeader;
    token: string;
  }) => string | undefined;
  handleShowExpandedContent: (value: boolean) => void;
  hasExpandedContentRow: boolean;
  hasFooter: boolean;
  showExpandedContent: boolean;
  rowVariant: string;
}

export const useContent = (props: IUseContent): IUseContentResponse => {
  const [showExpandedContent, setShowExpandedContent] = React.useState(props.initialExpanded);
  const divider = props.headers.find(header => header?.config?.hasDivider);
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
      ? (props.value.accordionIconExpandedAriaLabel ?? props.accordionIconExpandedAriaLabel)
      : (props.value.accordionIconCollapsedAriaLabel ?? props.accordionIconCollapsedAriaLabel);

  const getValue = (headerValue: ITableHeader): string | JSX.Element | DividerContent => {
    if (headerValue.value) {
      return headerValue.value(props.value);
    }

    const cellValue = props.value[headerValue.id]
      ? (props.value[headerValue.id] as string | JSX.Element | ValueConfigType)
      : '-';
    if (React.isValidElement(cellValue) || typeof cellValue === 'string') {
      return cellValue;
    }
    return (cellValue as ValueConfigType).value as string | JSX.Element;
  };

  const getCellTokenValue = ({
    headerValue,
    token,
  }: {
    headerValue: ITableHeader;
    token: string;
  }): string | undefined => {
    const cellValue = props.value[headerValue.id]
      ? (props.value[headerValue.id] as string | JSX.Element | ValueConfigType)
      : '-';
    if (React.isValidElement(cellValue) || typeof cellValue === 'string') {
      return;
    }
    return (cellValue as ValueConfigType)[token];
  };

  const hasExpandedContentRow = !!Object.getOwnPropertyDescriptor(props.value, 'expandedContent');

  const rowHeader = props.value.rowHeader;

  return {
    divider,
    rowHeader,
    dividerValue,
    getExpandedAria,
    getValue,
    getCellTokenValue,
    handleShowExpandedContent,
    hasExpandedContentRow,
    hasFooter,
    showExpandedContent,
    rowVariant,
  };
};
