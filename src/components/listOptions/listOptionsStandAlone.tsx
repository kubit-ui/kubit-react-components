/* eslint-disable complexity */
import React from 'react';

import { Text } from '@/components/text/text';
import { useId } from '@/hooks/useId/useId';
import { useRoveFocus } from '@/hooks/useRoveFocus/useRoveFocus';

import { ROLES } from '../../types/role/role';
import { Option } from '../option/option';
import {
  ListOptionsWrapperStyled,
  OptionsWrapperStyled,
  TitleWrapperStyled,
} from './listOptions.styled';
import { IListOptionsStandAlone } from './types/listOptions';
import { ListOptionsType } from './types/type';
import { getOptionVariant, isSelected, keyDownMove, keyUpMove } from './utils/listOptions.utils';

// eslint-disable-next-line react/display-name
export const ListOptionsStandAlone = React.forwardRef(
  (
    {
      type = ListOptionsType.SELECTION,
      dataTestId = 'list-options',
      ...props
    }: IListOptionsStandAlone,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const roveFocusProps = React.useMemo(
      () => ({
        size: props.options.length,
        keyDownMove: keyDownMove(props.options),
        keyUpMove,
        currentFocusSelected: -1,
        keyRightMove: 0,
        keyLeftMove: 0,
        keyTabMove: null,
      }),
      [props.options]
    );
    const [focus, setFocus, listEl] = useRoveFocus(props.roveFocus ?? roveFocusProps);
    const _id = useId();

    React.useImperativeHandle(ref, () => {
      return listEl.current as HTMLDivElement;
    }, []);

    const id = props.id ?? _id;
    const isSelection = type === ListOptionsType.SELECTION;
    const isNavigation = type === ListOptionsType.NAVIGATION;
    const hasOptions = props.options && props.options.length > 0;

    return (
      <ListOptionsWrapperStyled data-testid={dataTestId} styles={props.styles}>
        {props.title?.content && props.options.length > 0 && (
          <TitleWrapperStyled styles={props.styles}>
            <Text customTypography={props.styles.title} {...props.title}>
              {props.title.content}
            </Text>
          </TitleWrapperStyled>
        )}
        {props.content}
        {hasOptions && (
          <OptionsWrapperStyled
            ref={listEl as React.RefObject<HTMLUListElement>}
            aria-label={props.optionsContainerArias?.['aria-label']}
            aria-labelledby={props.optionsContainerArias?.['aria-labelledby']}
            as={'ul'}
            id={id}
            role={isSelection ? ROLES.LISTBOX : undefined}
            styles={props.styles}
          >
            {props.options.map((option, index) => {
              const selected = isSelected(
                option,
                props.selectedValue,
                props.multiSelect,
                props.caseSensitive
              );
              const title = props.title?.content ? `-${props.title.content}` : '';
              const dataTestIdOption = `${dataTestId}${title}-option-${index}-${option.value || ''}`;

              const optionComponent = (
                <Option
                  key={`${id}Option${index}`}
                  aria-selected={isSelection ? selected : undefined}
                  as={isNavigation ? 'div' : 'li'}
                  checkedIcon={props.checkedIcon}
                  dataTestId={dataTestIdOption}
                  focus={focus === index}
                  labelCharsHighlighted={props.charsHighlighted}
                  multiSelect={props.multiSelect}
                  role={isSelection ? ROLES.OPTION : undefined}
                  selected={selected}
                  tabIndex={isNavigation ? 0 : -1}
                  variant={getOptionVariant(
                    option.highlighted,
                    props.hightlightedOptionVariant,
                    props.optionVariant
                  )}
                  {...option}
                  onClick={e => {
                    setFocus(index);
                    props.onOptionClick?.(option.value, e);
                    option.onClick?.(e);
                  }}
                  onFocus={e => {
                    if (index !== focus) {
                      setFocus(index);
                    }
                    option.onFocus?.(e);
                  }}
                />
              );
              if (type === ListOptionsType.NAVIGATION) {
                return <li key={`${id}LiOption${index}`}>{optionComponent}</li>;
              }
              return optionComponent;
            })}
          </OptionsWrapperStyled>
        )}
      </ListOptionsWrapperStyled>
    );
  }
);
