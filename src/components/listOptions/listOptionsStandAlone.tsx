import {
  type RefObject,
  forwardRef,
  useId,
  useImperativeHandle,
  useMemo,
} from 'react';

import { Text } from '@/components/text/text';
import { useRoveFocus } from '@/lib/hooks/useRoveFocus/useRoveFocus';
import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';
import { processText } from '@/lib/utils/process/processText/processText';

import type { ListOptionsStandAloneProps } from './types/listOptions';

import { CustomComponent } from '../../lib/components/customComponent/customComponent';
import { Option } from '../option/option';
import {
  getOptionVariant,
  isSelected,
  keyDownMove,
  keyUpMove,
} from './utils/listOptions.utils';

/**
 * ListOptionsStandAlone Component
 *
 * @param props - Props for the ListOptionsStandAlone component
 * @param ref - Ref for the ListOptionsStandAlone component
 * @returns JSX.Element
 */
export const ListOptionsStandAlone = forwardRef<
  HTMLDivElement,
  ListOptionsStandAloneProps
>(
  (
    {
      caseSensitive,
      charsHighlighted,
      checkedIcon,
      content,
      cssClasses,
      highlightedOptionVariant,
      id: idProp,
      index = 0,
      listComponent,
      multiSelect,
      onOptionClick,
      options,
      optionsContainerArias,
      roveFocus,
      selectedValue,
      title,
      type = 'selection',
      ...props
    },
    ref,
  ): JSX.Element => {
    const dataTestId = props['data-testid'] ?? 'list-options';
    const customProps = pickCustomAttributes(props);
    const roveFocusProps = useMemo(
      () => ({
        currentFocusSelected: -1,
        keyDownMove: keyDownMove(options),
        keyLeftMove: 0,
        keyRightMove: 0,
        keyTabMove: null,
        keyUpMove,
        size: options.length,
      }),
      [options],
    );
    const [focus, setFocus, listEl] = useRoveFocus(roveFocus ?? roveFocusProps);
    const _id = useId();
    useImperativeHandle(ref, () => listEl.current as HTMLDivElement, [listEl]);
    const id = idProp ?? _id;
    const isSelection = type === 'selection';
    const isNavigation = type === 'navigation';
    const hasOptions = options && options.length > 0;
    return (
      <div
        className={cssClasses?.list_options}
        data-testid={dataTestId}
        {...customProps}
      >
        {!!title && options.length > 0 && (
          <div className={cssClasses?.titlecontainer}>
            <Text
              additionalClasses={{
                text: cssClasses?.title,
              }}
              {...processText(title)}
            />
          </div>
        )}
        {content}
        {hasOptions && (
          <CustomComponent
            ref={listEl as RefObject<HTMLUListElement>}
            aria-label={optionsContainerArias?.['aria-label']}
            aria-labelledby={optionsContainerArias?.['aria-labelledby']}
            className={cssClasses?.optionscontainer}
            component={listComponent ?? 'ul'}
            id={id}
            role={isSelection ? 'listbox' : undefined}
          >
            {options.map((option, indexOption) => {
              const selected = isSelected(
                option,
                selectedValue,
                multiSelect,
                caseSensitive,
              );
              const dataTestIdOption = `${dataTestId}-section-${index}-option-${indexOption}`;
              // When type is 'selection', we wrap Option in <li>, so Option should be 'div'
              // When type is 'navigation', Option renders directly as 'div'
              const optionComponentType = isSelection
                ? 'div'
                : isNavigation
                  ? 'div'
                  : 'li';
              const optionComponent = (
                <Option
                  key={`${id}Option-${index.toString()}-${indexOption.toString()}`}
                  aria-current={isNavigation ? selected : undefined}
                  aria-selected={isSelection ? selected : undefined}
                  checkedIcon={checkedIcon}
                  component={optionComponentType}
                  data-testid={dataTestIdOption}
                  focus={focus === indexOption}
                  labelCharsHighlighted={charsHighlighted}
                  multiSelect={multiSelect}
                  role={isSelection ? 'option' : undefined}
                  selected={selected}
                  tabIndex={isNavigation ? 0 : -1}
                  variant={getOptionVariant(
                    option.highlighted,
                    highlightedOptionVariant,
                    props?.optionVariant,
                  )}
                  {...option}
                  onClick={(e) => {
                    setFocus(indexOption);
                    onOptionClick?.(option.value as string, e);
                    option.onClick?.(e);
                  }}
                  onFocus={(e) => {
                    if (indexOption !== focus) {
                      setFocus(indexOption);
                    }
                    option.onFocus?.(e);
                  }}
                />
              );
              if (type === 'selection') {
                return (
                  <li
                    key={`${id}LiOption-${index.toString()}-${indexOption.toString()}`}
                  >
                    {optionComponent}
                  </li>
                );
              }
              return optionComponent;
            })}
          </CustomComponent>
        )}
      </div>
    );
  },
);
