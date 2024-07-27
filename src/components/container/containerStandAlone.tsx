import * as React from 'react';

import { Text } from '@/components/text/text';
import { TextComponentType } from '@/components/text/types/component';

import { ContainerStyled, HeaderStyled, ParentContainerStyled } from './container.styled';
import { IContainerStandAlone } from './types';

const ContainerStandAloneComponent = (
  props: React.PropsWithChildren<IContainerStandAlone>,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => {
  return (
    <ParentContainerStyled styles={props.styles}>
      <HeaderStyled styles={props.styles}>
        <Text
          component={TextComponentType.H4}
          customTypography={props.styles.title}
          {...props.title}
        >
          {props.title?.content}
        </Text>
      </HeaderStyled>
      <ContainerStyled ref={ref} data-testid={props.dataTestId} styles={props.styles}>
        {props.children}
      </ContainerStyled>
    </ParentContainerStyled>
  );
};

/**
 * Represents the standalone container component.
 * @see {@link https://kubit.es/standalone-components/container/container-standalone/}
 *
 * @function ContainerStandAloneComponent
 * @category StandAlone Components
 * @param {React.PropsWithChildren<IContainerStandAlone>} props - The props for the component.
 * @param {React.ForwardedRef<HTMLDivElement>} ref - The ref for the component.
 * @returns {JSX.Element} - The JSX element representing the container component.
 */
export const ContainerStandAlone = React.forwardRef(ContainerStandAloneComponent);
