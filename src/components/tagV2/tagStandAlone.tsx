import * as React from 'react';

import { ElementOrIcon } from '@/components/elementOrIcon';
import { Text } from '@/components/text';
import { TextComponentType } from '@/components/text/types';
import { pickAriaProps } from '@/utils/aria/aria';

import { TagContainerStyled } from './tag.styled';
import { ITagStandAlone } from './types';

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
