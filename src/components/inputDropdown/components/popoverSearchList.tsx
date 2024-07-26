import * as React from 'react';
import { ForwardedRef, forwardRef } from 'react';

import { Input } from '@/components/input';
//  components
import { PopoverControlled as Popover, PopoverComponentType } from '@/components/popover';
import { Text } from '@/components/text/text';
import { TextComponentType } from '@/components/text/types/component';
import { useId } from '@/hooks';

import { ActionBottomSheetControlledStructure as ActionBottomSheet } from '../../actionBottomSheet/actionBottomSheetControlled';
import { MultipleRef } from '../hooks/useInputDropdown';
// styles
import {
  InputDropdownListStyled,
  ListContainerStyled,
  NoResultsTextWrapper,
} from '../inputDropdown.styled';
import { IPopoverDropdownList } from '../types/inputDropdown';
import { LoadingIcon } from './loadingIcon';
import { OptionsList } from './optionsList';

export const PopoverSearchListComponent = (
  props: IPopoverDropdownList,
  ref: ForwardedRef<unknown>
): JSX.Element => {
  const inputPopoverId = useId('inputPopoverId');
  const useActionBottomSheet = props.styles?.[props.state]?.useActionBottomSheet?.[props.device];
  const labelInResultTextWrittenByUser = useActionBottomSheet
    ? props.inputPopoverValue
    : props.searchText;
  const { refInput, refActionBottomSheet } = ref as unknown as MultipleRef;

  const renderIconOrMessage = () => {
    if (!props.loading && props.noResultsText?.content) {
      return (
        <NoResultsTextWrapper styles={props.styles?.[props.state]}>
          <Text
            customTypography={props.styles?.[props.state]?.noResultsText}
            dataTestId={`${props.dataTestId}noResultsText`}
          >
            {props.noResultsText?.content}
          </Text>
        </NoResultsTextWrapper>
      );
    }
    return (
      <LoadingIcon
        loader={props.loader}
        loading={props.loading}
        loadingText={props.loadingText}
        stateStyles={props.styles?.[props.state]}
      />
    );
  };

  const renderSearchList = () => (
    <ListContainerStyled
      $height={props.optionList.options.length ? props.listOptionsHeight : ''}
      styles={props.styles?.[props.state]}
      useActionBottomSheet={useActionBottomSheet}
    >
      <InputDropdownListStyled
        $height={props.optionList.options.length ? props.listOptionsHeight : ''}
        styles={props.styles?.[props.state]}
        useActionBottomSheet={useActionBottomSheet}
      >
        {props.optionList.options.length === 0 ? (
          renderIconOrMessage()
        ) : (
          <OptionsList
            ref={ref}
            aria-controls={props['aria-controls']}
            dataTestId={`${props.dataTestId}OptionsList`}
            loader={props.loader}
            loading={props.loading}
            loadingText={props.loadingText}
            optionList={props.optionList}
            searchText={labelInResultTextWrittenByUser}
            stylesListOption={props.styles.listOptions}
            stylesState={props.styles?.[props.state]}
            value={props.value}
            onOpenOptions={props.onOpenOptions}
            onValueSelected={props.onValueSelected}
          />
        )}
      </InputDropdownListStyled>
    </ListContainerStyled>
  );

  const showHeaderInput = props.hasInputInSearchList && props.styles?.[props.state]?.allowSearch;

  return (
    <Popover
      hasBackDrop
      component={PopoverComponentType.DIV}
      dataTestId={`${props.dataTestId}Popover`}
      focusFirstDescendantAutomatically={false}
      focusLastElementFocusedAfterClose={false}
      open={props.open}
      preventCloseOnClickElements={props.preventCloseOnClickElements}
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
            onClick: e => {
              props.onOpenOptions(false);
              props.onCloseIconTabletMobileClick?.(e);
              props.closeIcon?.onClick?.(e);
            },
          }}
          dataTestId={`${props.dataTestId}ActionBottomSheet`}
          headerContent={
            showHeaderInput && (
              <Input
                dataTestId={`${props.dataTestId}HeaderContentInput`}
                icon={{
                  ...props.inputPopoverIcon,
                  onClick: event => {
                    props.onInputPopoverIconClick();
                    props.inputPopoverIcon?.onClick?.(event);
                  },
                }}
                id={inputPopoverId}
                rightIcon={{
                  ...props.inputPopoverRightIcon,
                  onClick: event => {
                    props.onInputPopoverIconClick();
                    props.inputPopoverRightIcon?.onClick?.(event);
                  },
                }}
                value={props.inputPopoverValue}
                // The variant is the same for all the states
                variant={props.styles?.[props.state]?.inputVariant as string}
                onChange={props.onInputPopoverChange}
                onKeyDown={props.onInputPopoverKeyDown}
              />
            )
          }
          height={showHeaderInput ? '100vh' : undefined}
          title={{
            ...props.label,
            component: props.hasInputInSearchList
              ? TextComponentType.LABEL
              : props.label?.component,
          }}
          variant={
            props.inputPopoverVariant ?? props.styles?.[props.state]?.actionBottomSheetVariant
          }
          // The variant is the same for all the states
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
