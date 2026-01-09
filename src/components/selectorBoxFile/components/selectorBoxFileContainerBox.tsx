import type { ReactNode } from 'react';

import { Text } from '@/components/text/text';
import { ElementOrIcon } from '@/lib/components/elementOrIcon/elementOrIcon';
import { STATES } from '@/lib/types/states/states';
import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';
import {
  processIconProp,
  processTextProp,
} from '@/lib/utils/process/processCommonProp';

import type {
  SelectorBoxFileContainerBoxStateContentProps,
  SelectorBoxFileCssClasses,
} from '../types/selectorBoxFile';
import type { SelectorBoxFileStateType } from '../types/state';

export interface SelectorBoxFileContainerBoxProps {
  cssClasses?: SelectorBoxFileCssClasses;
  htmlFor: string;
  state: SelectorBoxFileStateType;
  containerBoxStateContent: SelectorBoxFileContainerBoxStateContentProps;
  filename?: string;
  focus: boolean;
  loader?: ReactNode;
}
export const SelectorBoxFileContainerBox = ({
  containerBoxStateContent,
  cssClasses,
  filename,
  focus,
  htmlFor,
  loader,
  state,
}: SelectorBoxFileContainerBoxProps): JSX.Element => {
  const customAttributes = {
    'data-focus': focus,
    'data-state': state,
  };
  return (
    <label
      className={cssClasses?.containerboxcontainer}
      data-focus={focus}
      htmlFor={htmlFor}
      {...pickCustomAttributes(customAttributes)}
    >
      <span>
        {loader}
        <ElementOrIcon
          className={cssClasses?.containerboxicon}
          customAttributes={customAttributes}
          {...processIconProp(containerBoxStateContent[state]?.icon)}
        />
        <ElementOrIcon
          className={cssClasses?.containerboxicon}
          customAttributes={customAttributes}
          {...processIconProp(containerBoxStateContent[state]?.icon)}
        />
      </span>
      <span
        className={cssClasses?.containerboxtextscontainer}
        {...pickCustomAttributes(customAttributes)}
      >
        {!!filename &&
          [STATES.LOADING, STATES.SUCCESS, STATES.ERROR].includes(
            state as Extract<
              SelectorBoxFileStateType,
              'loading' | 'success' | 'error'
            >,
          ) && (
            <Text
              additionalClasses={{
                text: cssClasses?.containerboxfilename,
              }}
              component="span"
              customAttributes={customAttributes}
            >
              {filename}
            </Text>
          )}
        {!!processTextProp(containerBoxStateContent[state]?.actionText)
          .children && (
          <span
            className={cssClasses?.actioniconandactiontextcontainer}
            {...pickCustomAttributes(customAttributes)}
          >
            <ElementOrIcon
              className={cssClasses?.actionicon}
              customAttributes={customAttributes}
              {...processIconProp(containerBoxStateContent[state]?.actionIcon)}
            />
            <Text
              additionalClasses={{
                text: cssClasses?.containerboxactiontext,
              }}
              component="span"
              customAttributes={customAttributes}
              {...processTextProp(containerBoxStateContent[state]?.actionText)}
            >
              {
                processTextProp(containerBoxStateContent[state]?.actionText)
                  .children
              }
            </Text>
          </span>
        )}
        {!!containerBoxStateContent[state]?.description && (
          <Text
            additionalClasses={{
              text: cssClasses?.containerboxdescription,
            }}
            component="span"
            customAttributes={customAttributes}
            {...processTextProp(containerBoxStateContent[state]?.description)}
          >
            {
              processTextProp(containerBoxStateContent[state]?.description)
                .children
            }
          </Text>
        )}
      </span>
      {!!containerBoxStateContent[state]?.iconRight && (
        <span>
          <ElementOrIcon
            className={cssClasses?.containerboxicon}
            customAttributes={customAttributes}
            {...processIconProp(containerBoxStateContent[state]?.iconRight)}
          />
        </span>
      )}
    </label>
  );
};
