import * as React from 'react';

import { ActionBottomSheetControlled as ActionBottomSheet } from '@/components/actionBottomSheet';
import { Button } from '@/components/button';
import { ListOptions, ListOptionsOptionType, ListOptionsType } from '@/components/listOptions';
import { Tabs } from '@/components/tabs';
import { TextComponentType } from '@/components/text';
import { DeviceBreakpointsType, POSITIONS } from '@/types';

// styles
import {
  ActionBottomSheetContainerStyled,
  ButtonContainerStyled,
  ContentContainerStyled,
  TabsContainerStyled,
} from './functionalitiesModule.styled';
import { IFunctionalitiesModuleStandAlone } from './types';

const FunctionalitiesModuleStandAloneComponent = (
  { hasTitleSection = false, ...props }: IFunctionalitiesModuleStandAlone,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => {
  const mergeList = (): ListOptionsOptionType[] => {
    return (
      props.sections?.reduce((prev: ListOptionsOptionType[], current) => {
        return [...prev, ...current.options];
      }, []) ?? []
    );
  };

  const buildContentMergeList = () => [
    <ContentContainerStyled
      key={0}
      data-testid={`${props.dataTestId}ContentTab`}
      styles={props.styles}
    >
      {props.styles.listOptions?.optionVariant && props.styles.listOptions.variant && (
        <ListOptions
          dataTestId={`${props.dataTestId}ListOptions`}
          optionVariant={props.styles.listOptions.optionVariant}
          options={mergeList()}
          selectedValue={props.selectedValue}
          type={ListOptionsType.NAVIGATION}
          variant={props.styles.listOptions.variant}
          onOptionClick={props.onOptionClick}
        />
      )}
    </ContentContainerStyled>,
  ];

  const buildContentList = () =>
    props.sections?.map((section, index) => {
      return (
        <ContentContainerStyled
          key={index}
          data-testid={`${props.dataTestId}ContentTab${index}`}
          styles={props.styles}
        >
          {props.styles.listOptions?.optionVariant && props.styles.listOptions.variant && (
            <ListOptions
              dataTestId={`${props.dataTestId}ListOptions`}
              optionVariant={props.styles.listOptions.optionVariant}
              options={section.options}
              selectedValue={props.selectedValue}
              title={{ component: TextComponentType.H6, ...section.optionsTitle }}
              type={ListOptionsType.NAVIGATION}
              variant={props.styles.listOptions.variant}
              onOptionClick={props.onOptionClick}
            />
          )}
        </ContentContainerStyled>
      );
    });

  const content =
    hasTitleSection || props.device === DeviceBreakpointsType.DESKTOP
      ? buildContentList()
      : buildContentMergeList();

  const {
    title: actionBottomSheetTitle,
    popover: actionBottomSheetPopover,
    ...actionBottomSheet
  } = props.actionBottomSheet ?? {};

  return (
    <div ref={ref}>
      {props.device === DeviceBreakpointsType.DESKTOP ? (
        <TabsContainerStyled
          ref={ref}
          aria-label={props.tabsContainerAriaLabel}
          data-testid={`${props.dataTestId}Tabs`}
          styles={props.styles}
        >
          <Tabs
            allowFocusTabPanel={false}
            content={content}
            tabs={props.sections?.map(({ tab }) => tab)}
            variant={props.styles.tabsVariant}
            {...props.tabsConfig}
          />
        </TabsContainerStyled>
      ) : (
        <>
          {props.trigger?.content && (
            <ButtonContainerStyled styles={props.styles}>
              <Button dataTestId={`${props.dataTestId}Button`} {...props.trigger}>
                {props.trigger?.content}
              </Button>
            </ButtonContainerStyled>
          )}
          <ActionBottomSheetContainerStyled styles={props.styles}>
            {props.styles.actionBottomSheet?.variant && (
              <ActionBottomSheet
                open={props.open ?? false}
                popover={{
                  preventScrollOnCloseFocus: true,
                  blockBack: true,
                  ...actionBottomSheetPopover,
                }}
                title={{
                  align: props.styles.actionBottomSheet.alignTitle ?? POSITIONS.CENTER,
                  component: TextComponentType.H5,
                  ...actionBottomSheetTitle,
                }}
                variant={props.styles.actionBottomSheet.variant}
                {...actionBottomSheet}
              >
                {content}
              </ActionBottomSheet>
            )}
          </ActionBottomSheetContainerStyled>
        </>
      )}
    </div>
  );
};

export const FunctionalitiesModuleStandAlone = React.forwardRef(
  FunctionalitiesModuleStandAloneComponent
);
