import * as React from 'react';
import { ForwardedRef, forwardRef, useMemo } from 'react';

import { Input } from '@/components/input';
//  components
import { PopoverControlled as Popover } from '@/components/popover';
import { ScreenReaderOnly } from '@/components/screenReaderOnly';
import { Text } from '@/components/text';
import { useId } from '@/hooks';
import { AriaLiveOptionType } from '@/types';

import { ActionBottomSheetControlledStructure as ActionBottomSheet } from '../../actionBottomSheet/actionBottomSheetControlled';
// helpers
import { getLength } from '../helpers';
import { MultipleRef } from '../hooks/useInputSearch';
// styles
import {
  InputSearchListStyled,
  ListContainerStyled,
  NoResultsTextWrapper,
} from '../inputSearch.styled';
import { IOptionGroup, IPopoverSearchList, InputSearchOptionType } from '../types/inputSearch';
import { LoadingIcon } from './loadingIcon';
import { OptionsList } from './optionsList';

export const PopoverSearchListComponent = (
  { sublabel = { content: 'Use this' }, ...props }: IPopoverSearchList,
  ref: ForwardedRef<unknown>
): JSX.Element => {
  const { refInput, refActionBottomSheet } = ref as unknown as MultipleRef;
  const inputPopoverId = useId('inputPopoverId');
  const useActionBottomSheet = props.styles?.[props.state]?.useActionBottomSheet?.[props.device];
  const labelInResultTextWrittenByUser = useActionBottomSheet
    ? props.inputConfiguration?.value?.toString()
    : props.searchText?.toString();
  // Behavior with "use this" option
  const showTextWritten: InputSearchOptionType | undefined = useMemo(
    () =>
      !props.highlightedOption && props.hasResultTextWrittenByUser && labelInResultTextWrittenByUser
        ? ({
            label: labelInResultTextWrittenByUser,
            sublabel: sublabel,
            highlighted: true,
            value: labelInResultTextWrittenByUser,
          } as InputSearchOptionType)
        : undefined,
    [props.hasResultTextWrittenByUser, labelInResultTextWrittenByUser]
  );
  // Behavior Highlighted option
  const showHighlightedOption: InputSearchOptionType | undefined = useMemo(
    () =>
      props.highlightedOption && props.hasHighlightedOption
        ? ({
            label: props.highlightedOption,
            sublabel: sublabel,
            highlighted: true,
            value: props.highlightedOption,
          } as InputSearchOptionType)
        : undefined,
    [props.highlightedOption, props.hasHighlightedOption]
  );

  const getOptionsList = (section?: IOptionGroup, index = 0) => (
    <OptionsList
      key={index}
      ref={ref}
      aria-controls={props['aria-controls']}
      aria-label={section?.['aria-label'] ?? props.optionsListDefaultArias?.['aria-label']}
      aria-labelledby={
        section?.['aria-labelledby'] ?? props.optionsListDefaultArias?.['aria-labelledby']
      }
      caseSensitive={props.caseSensitive}
      dataTestId={`${props.dataTestId}OptionsList${index}`}
      hightlightedOption={showTextWritten || showHighlightedOption}
      index={index}
      loader={props.loader}
      loading={props.loading}
      loadingText={props.loadingText}
      optionVariant={section?.optionVariant}
      options={section?.options || []}
      searchText={labelInResultTextWrittenByUser}
      stylesListOption={props.styles.listOptions}
      stylesState={props.styles?.[props.state]}
      title={section?.title}
      value={props.value}
      onOpenOptions={props.onOpenOptions}
      onValueSelected={props.onValueSelected}
    />
  );

  const renderIconOrMessage = () => {
    if (!props.loading && props.noResultsText?.content) {
      if (typeof props.noResultsText.content === 'string') {
        return (
          <div>
            {showTextWritten && getOptionsList()}
            <NoResultsTextWrapper styles={props.styles?.[props.state]}>
              <Text
                customTypography={props.styles?.[props.state]?.noResultsText}
                dataTestId={`${props.dataTestId}noResultsText`}
                {...props.noResultsText}
              >
                {props.noResultsText.content}
              </Text>
            </NoResultsTextWrapper>
          </div>
        );
      }
      return (
        <div>
          {showTextWritten && getOptionsList()}
          {props.noResultsText.content}
          <ScreenReaderOnly
            ariaLive={AriaLiveOptionType.ASSERTIVE}
            data-testid={`${props.dataTestId}ScreenReaderOnly`}
          >
            {props.loadingText?.content}
          </ScreenReaderOnly>
        </div>
      );
    }
    return (
      <LoadingIcon
        expanded={true}
        loader={props.loader}
        loading={props.loading}
        loadingText={props.loadingText}
        stateStyles={props.styles?.[props.state]}
      />
    );
  };

  const renderSearchList = () => (
    <ListContainerStyled
      $height={getLength(props.optionList) ? props.listOptionsHeight : ''}
      data-testid={`${props.dataTestId}InputSearchList`}
      styles={props.styles?.[props.state]}
      useActionBottomSheet={useActionBottomSheet}
    >
      <InputSearchListStyled
        $height={getLength(props.optionList) ? props.listOptionsHeight : ''}
        styles={props.styles?.[props.state]}
        useActionBottomSheet={useActionBottomSheet}
        onKeyDown={event => {
          props.onOptionsListKeyDown?.(event);
        }}
      >
        {!showHighlightedOption && getLength(props.optionList) === 0
          ? renderIconOrMessage()
          : props.optionList.map((section, index) => getOptionsList(section, index))}
      </InputSearchListStyled>
    </ListContainerStyled>
  );

  return (
    <Popover
      hasBackDrop
      blockBack={props.blockBackPopover}
      dataTestId={`${props.dataTestId}Popover`}
      focusFirstDescendantAutomatically={false}
      focusLastElementFocusedAfterClose={false}
      open={props.open}
      preventCloseOnClickElements={props.preventCloseOnClickElements}
      trapFocusInsideModal={useActionBottomSheet}
      variant={props.styles?.[props.state]?.popoverVariant?.[props.device]}
      onCloseInternally={() => {
        props.onOpenOptions(false);
      }}
    >
      {useActionBottomSheet ? (
        <ActionBottomSheet
          ref={refActionBottomSheet}
          closeIcon={{
            ...props.closeIcon,
            onClick: event => {
              props.onOpenOptions(false);
              props.closeIcon?.onClick?.(event);
              refInput?.current?.focus();
            },
          }}
          dataTestId={`${props.dataTestId}ActionBottomSheet`}
          headerContent={
            <Input
              dataTestId={`${props.dataTestId}HeaderContentInput`}
              id={inputPopoverId}
              variant={props.inputConfiguration?.variant}
              {...props.inputConfiguration}
              icon={{
                ...props.inputConfiguration?.icon,
                onClick: event => {
                  props.inputConfiguration?.onIconClick;
                  props.inputConfiguration?.icon?.onClick?.(event);
                },
              }}
              regex={props.regex}
              rightIcon={{
                ...props.inputConfiguration?.rightIcon,
                onClick: event => {
                  props.inputConfiguration?.onIconClick?.(event);
                  props.inputConfiguration?.rightIcon?.onClick?.(event);
                },
              }}
              // It is necessary for the variation of the help message position
              // The variant is the same for all the states
              onChange={props.inputConfiguration?.onChange}
              onKeyDown={props.inputConfiguration?.onKeyDown}
            />
          }
          height="100vh"
          title={{ content: props.titleActionBottomSheet }}
          // The variant is the same for all the states
          variant={props.styles?.[props.state]?.actionBottomSheetVariant}
        >
          {renderSearchList()}
        </ActionBottomSheet>
      ) : (
        renderSearchList()
      )}
    </Popover>
  );
};

export const PopoverSearchList = forwardRef(PopoverSearchListComponent);
