import * as React from 'react';

import { ElementOrIcon } from '@/components/elementOrIcon';
import { Text } from '@/components/text';

import {
  IValidationStatusStandAlone,
  ValidationStatusItemType,
  ValidationStatusState,
} from './types';
import { ValidationStatusFrame, ValidationStatusRow } from './validationStatus.styled';

const maxItems = 6;

const ValidationStatusStandAloneComponent = (
  { maxItemsAllowed = maxItems, ...props }: IValidationStatusStandAlone,
  ref: React.ForwardedRef<HTMLUListElement> | undefined | null
): JSX.Element => {
  const itemsLimited: ValidationStatusItemType[] =
    props.items.length > maxItemsAllowed ? props.items.slice(0, maxItemsAllowed) : props.items;

  return (
    <ValidationStatusFrame ref={ref} data-testid={props.dataTestId} styles={props.styles}>
      {itemsLimited.map((item, index) => {
        const checked = item.state === ValidationStatusState.SUCCESS;
        return (
          <ValidationStatusRow
            key={`${item.text.content}--${index}`}
            data-testid={item.dataTestId}
            role={item.role}
            styles={props.styles}
          >
            <ElementOrIcon
              aria-checked={checked}
              customIconStyles={props.styles[item.state]?.icon}
              {...props.stateIcons[item.state]}
            />
            <Text customTypography={props.styles[item.state]?.explainText} {...item.text}>
              {item.text.content}
            </Text>
          </ValidationStatusRow>
        );
      })}
    </ValidationStatusFrame>
  );
};

export const ValidationStatusStandAlone = React.forwardRef(ValidationStatusStandAloneComponent);
