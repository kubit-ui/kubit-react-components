import type { ReactNode } from 'react';

import { RenderIf } from '@/components/renderIf/renderIf';
import { Text } from '@/components/text/text';
import { STATES } from '@/lib/types/states/states';
import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';
import { processText } from '@/lib/utils/process/processText/processText';

import type {
  SelectorBoxFileContainerBoxStateContentProps,
  SelectorBoxFileCssClasses,
} from '../types/selectorBoxFile';
import type { SelectorBoxFileStateType } from '../types/state';

import { ElementOrIcon } from '../../elementOrIcon/elementOrIcon';

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
          {...containerBoxStateContent[state]?.icon}
        />
        <ElementOrIcon
          className={cssClasses?.containerboxicon}
          customAttributes={customAttributes}
          {...containerBoxStateContent[state]?.icon}
        />
      </span>
      <span
        className={cssClasses?.containerboxtextscontainer}
        {...pickCustomAttributes(customAttributes)}
      >
        <RenderIf
          condition={
            !!filename &&
            [STATES.LOADING, STATES.SUCCESS, STATES.ERROR].includes(
              state as Extract<
                SelectorBoxFileStateType,
                'loading' | 'success' | 'error'
              >,
            )
          }
        >
          <Text
            additionalClasses={{
              text: cssClasses?.containerboxfilename,
            }}
            component="span"
            customAttributes={customAttributes}
          >
            {filename}
          </Text>
        </RenderIf>
        <span className={cssClasses?.actiondescriptioncontainer}>
          <RenderIf
            condition={
              !!processText(containerBoxStateContent[state]?.actionText)
                .children
            }
          >
            <span
              className={cssClasses?.actioniconandactiontextcontainer}
              {...pickCustomAttributes(customAttributes)}
            >
              <ElementOrIcon
                className={cssClasses?.actionicon}
                customAttributes={customAttributes}
                {...containerBoxStateContent[state]?.actionIcon}
              />
              <Text
                additionalClasses={{
                  text: cssClasses?.containerboxactiontext,
                }}
                component="span"
                customAttributes={customAttributes}
                {...processText(containerBoxStateContent[state]?.actionText)}
              >
                {
                  processText(containerBoxStateContent[state]?.actionText)
                    .children
                }
              </Text>
            </span>
          </RenderIf>
          <RenderIf condition={!!containerBoxStateContent[state]?.description}>
            <Text
              additionalClasses={{
                text: cssClasses?.containerboxdescription,
              }}
              component="span"
              customAttributes={customAttributes}
              {...processText(containerBoxStateContent[state]?.description)}
            >
              {
                processText(containerBoxStateContent[state]?.description)
                  .children
              }
            </Text>
          </RenderIf>
        </span>
      </span>
      <RenderIf condition={!!containerBoxStateContent[state]?.iconRight}>
        <span>
          <ElementOrIcon
            className={cssClasses?.containerboxicon}
            customAttributes={customAttributes}
            {...containerBoxStateContent[state]?.iconRight}
          />
        </span>
      </RenderIf>
    </label>
  );
};
