import React, { ForwardedRef, forwardRef, useMemo } from 'react';

import { PopoverControlled } from '@/components/popover/popoverControlled';
import { Text } from '@/components/text/text';
import { useId } from '@/hooks/useId/useId';
import { AriaLiveOptionType } from '@/types/ariaLiveOption/ariaLiveOption';
import { ROLES } from '@/types/role/role';

import { ActionBottomSheetControlledStructure as ActionBottomSheet } from '../../actionBottomSheet/actionBottomSheetControlled';
import { InputUnControlled as Input } from '../../input/inputUnControlled';
//  components
import { PopoverComponentType } from '../../popover/types/component';
import { ScreenReaderOnly } from '../../screenReaderOnly/screenReaderOnly';
// helpers
import { getLength } from '../helpers/options';
// styles
import {
  InputSearchListStyled,
  ListContainerStyled,
  NoResultsTextWrapper,
} from '../inputSearch.styled';
import { IOptionGroup, IPopoverSearchList, InputSearchOptionType } from '../types/inputSearch';
import { LoadingIcon } from './loadingIcon';
import { OptionsList } from './optionsList';

interface MultipleRef {
  refInput?: React.MutableRefObject<HTMLInputElement | undefined>;
  refList: ForwardedRef<unknown> | (({ ref, index }) => void);
  refIcon: React.MutableRefObject<HTMLSpanElement | undefined>;
  refActionBottomSheet: React.ForwardedRef<HTMLDivElement> | undefined | null;
}

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
      hightlightedOption={showTextWritten || showHighlightedOption}
      index={index}
      initialOptionsLength={props.initialOptionsLength}
      loader={props.loader}
      loading={props.loading}
      loadingText={props.loadingText}
      optionCheckedIcon={props.optionCheckedIcon}
      optionVariant={section?.optionVariant}
      options={section?.options || []}
      optionsScreenReaderText={props.optionsScreenReaderText}
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
          <ScreenReaderOnly ariaLive={AriaLiveOptionType.ASSERTIVE}>
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
      data-input-search-list
      $height={getLength(props.optionList) ? props.listOptionsHeight : ''}
      data-testid={`${props.dataTestId}-list`}
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
    <PopoverControlled
      hasBackDrop
      aria-modal={useActionBottomSheet ? true : undefined}
      blockBack={props.blockBackPopover}
      component={PopoverComponentType.DIV}
      focusFirstDescendantAutomatically={false}
      focusLastElementFocusedAfterClose={false}
      open={props.open}
      preventCloseOnClickElements={props.preventCloseOnClickElements}
      role={useActionBottomSheet ? ROLES.DIALOG : undefined}
      trapFocusInsideModal={useActionBottomSheet}
      variant={props.styles?.[props.state]?.popoverVariant?.[props.device]}
      onCloseInternally={() => {
        props.onOpenOptions(false);
        refInput?.current?.focus();
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
          dragIcon={props.dragIcon}
          headerContent={
            <Input
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
    </PopoverControlled>
  );
};

export const PopoverSearchList = forwardRef(PopoverSearchListComponent);
