import React from 'react';

import { Text } from '@/components/text/text';
import { pickAriaProps } from '@/utils/aria/aria';

import { ElementOrIcon } from '../elementOrIcon/elementOrIcon';
import { TextComponentType } from '../text/types/component';
import { TagContainerStyled } from './tag.styled';
import { ITagStandAlone } from './types/tag';

const TagStandAloneComponent = (
  { dataTestId = 'tag', ...props }: ITagStandAlone,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => {
  const ariaProps = pickAriaProps(props);
  return (
    <TagContainerStyled
      ref={ref}
      as={props.component}
      data-testid={dataTestId}
      styles={props.styles}
      {...ariaProps}
    >
      <ElementOrIcon customIconStyles={props.styles.icon} {...props.icon} />
      <Text
        component={TextComponentType.SPAN}
        customTypography={props.styles.label}
        {...props.label}
      >
        {props.label?.content}
      </Text>
    </TagContainerStyled>
  );
};

/**
 * @description
 * Tag component is used to highlight or categorize important information.
 */
export const TagStandAlone = React.forwardRef(TagStandAloneComponent);
