import * as React from 'react';

import { ButtonType } from '@/components/button';
import { ElementOrIcon } from '@/components/elementOrIcon';
import { Text } from '@/components/text/text';
import { TextComponentType } from '@/components/text/types/component';
import { useId } from '@/hooks';

import {
  AccordionContainerStyled,
  AccordionContentStyled,
  AccordionDecorativeBackgroundStyled,
  AccordionFooterStyled,
  AccordionHeaderExternalContainerStyled,
  AccordionHeaderInternalContainerStyled,
  AccordionHeaderMainContainerStyled,
  AccordionHeaderRightContentStyled,
  AccordionHeaderTitleHeadlineStyled,
  AccordionPanelStyled,
  AccordionSubHeaderContainerStyled,
  AccordionTitleIconWrapper,
  AccordionTitleStyled,
  AccordionTriggerIconContainerStyled,
  AccordionTriggerStyled,
  LineSeparatorContainerStyled,
} from './accordion.styled';
import type { IAccordionStandAlone } from './types';

const ACCORDION_BASE_ID = 'AccordionComponent';

const AccordionStandAloneComponent = (
  {
    hasHeaderLineSeparator = true,
    open = false,
    ...props
  }: React.PropsWithChildren<IAccordionStandAlone>,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => {
  const BASE_ID = useId(ACCORDION_BASE_ID);
  const TRIGGER_ID = `${BASE_ID}-trigger`;
  const HEADER_ID = `${BASE_ID}-header`;
  const PANEL_ID = `${BASE_ID}-panel`;

  const getDataTestId = (uniqueId = ''): string => `${props.dataTestId}${uniqueId}`;

  return (
    <AccordionContainerStyled
      ref={ref}
      data-testid={getDataTestId()}
      id={BASE_ID}
      styles={props.styles.container}
    >
      <AccordionDecorativeBackgroundStyled styles={props.styles.decorative} />
      <AccordionHeaderExternalContainerStyled styles={props.styles.headerExternalContainer}>
        <AccordionHeaderInternalContainerStyled
          data-testid={getDataTestId('Header')}
          id={HEADER_ID}
          styles={props.styles.headerInternalContainer}
        >
          <AccordionHeaderMainContainerStyled styles={props.styles.headerMainContainer}>
            <AccordionHeaderTitleHeadlineStyled
              as={props.triggerComponent}
              styles={props.styles.titleHeaderMainContainer}
            >
              <AccordionTriggerStyled
                aria-controls={PANEL_ID}
                aria-expanded={open}
                data-testid={getDataTestId('TriggerButton')}
                id={TRIGGER_ID}
                styles={props.styles[typeof props.title?.content !== 'string' ? 'link' : 'trigger']}
                type={ButtonType.BUTTON}
                {...props.triggerButton}
              >
                <AccordionTriggerIconContainerStyled
                  $rotate={open}
                  data-testid={`${props.dataTestId}TriggerIconWrapper`}
                  styles={props.styles.triggerIconContainer}
                >
                  <ElementOrIcon
                    customIconStyles={props.styles.triggerIcon}
                    dataTestId={getDataTestId('TriggerIcon')}
                    {...props.triggerIcon}
                  />
                </AccordionTriggerIconContainerStyled>
                <AccordionTitleStyled styles={props.styles.titleContainer}>
                  {props.titleIcon && (
                    <AccordionTitleIconWrapper styles={props.styles.titleIconContainer}>
                      <ElementOrIcon
                        customIconStyles={props.styles.titleIcon}
                        dataTestId={getDataTestId('TitleIcon')}
                        {...props.titleIcon}
                      />
                    </AccordionTitleIconWrapper>
                  )}
                  <Text
                    component={TextComponentType.SPAN}
                    customTypography={props.styles.title}
                    dataTestId={getDataTestId('TriggerText')}
                    {...props.title}
                  >
                    {props.title?.content}
                  </Text>
                </AccordionTitleStyled>
              </AccordionTriggerStyled>
            </AccordionHeaderTitleHeadlineStyled>
            {props.headerRightContent && (
              <AccordionHeaderRightContentStyled
                data-testid={`${props.dataTestId}RightContent`}
                styles={props.styles.headerRightContentContainer}
              >
                {props.headerRightContent}
              </AccordionHeaderRightContentStyled>
            )}
          </AccordionHeaderMainContainerStyled>
          {props.subHeaderContent && (
            <AccordionSubHeaderContainerStyled
              data-testid={`${props.dataTestId}SubHeader`}
              styles={props.styles.subHeader}
            >
              {props.subHeaderContent}
            </AccordionSubHeaderContainerStyled>
          )}
        </AccordionHeaderInternalContainerStyled>
      </AccordionHeaderExternalContainerStyled>
      <AccordionContentStyled
        aria-labelledby={TRIGGER_ID}
        displayOption={!open ? 'none' : 'block'}
        id={PANEL_ID}
        styles={props.styles.content}
      >
        {hasHeaderLineSeparator && props.styles.lineSeparatorContainer && (
          <LineSeparatorContainerStyled
            lineSeparatorLineStyles={props.lineSeparatorLineStyles}
            styles={props.styles.lineSeparatorContainer}
          />
        )}
        <AccordionPanelStyled data-testid={getDataTestId('Panel')} styles={props.styles.panel}>
          {props.children}
        </AccordionPanelStyled>
        {props.footerContent && (
          <AccordionFooterStyled data-testid={getDataTestId('Footer')} styles={props.styles.footer}>
            {props.footerContent}
          </AccordionFooterStyled>
        )}
      </AccordionContentStyled>
    </AccordionContainerStyled>
  );
};

export const AccordionStandAlone = React.forwardRef(AccordionStandAloneComponent);
