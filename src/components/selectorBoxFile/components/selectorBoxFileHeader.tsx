import type { ElementOrIconProps } from '@/lib/components/elementOrIcon/types/elementOrIcon';
import type { CommonTextProps } from '@/lib/types/commons/text';

import { Button } from '@/components/button/button';
import { Text } from '@/components/text/text';
import { processTextProp } from '@/lib/utils/process/processCommonProp';

import type {
  SelectorBoxFileButtonProps,
  SelectorBoxFileCssClasses,
  SelectorBoxFileTooltipProps,
} from '../types/selectorBoxFile';

import { SelectorBoxFileTooltip } from './selectorBoxFileTooltip';

interface SelectorBoxHeaderProps {
  title?: CommonTextProps;
  subtitle?: CommonTextProps;
  description?: CommonTextProps;
  headerId: string;
  button?: SelectorBoxFileButtonProps;
  tooltip?: SelectorBoxFileTooltipProps;
  tooltipIcon?: ElementOrIconProps;
  cssClasses?: SelectorBoxFileCssClasses;
}
export const SelectorBoxFileHeader = ({
  button,
  cssClasses,
  description,
  headerId,
  subtitle,
  title,
  tooltip,
  tooltipIcon,
}: SelectorBoxHeaderProps): JSX.Element | null => {
  return (
    <>
      <div className={cssClasses?.titlesubtitlecontainer} id={headerId}>
        {!!title && (
          <Text
            additionalClasses={{
              text: cssClasses?.title,
            }}
            component="h5"
            {...processTextProp(title)}
          />
        )}
        {!!subtitle && (
          <div className={cssClasses?.actiondescriptioncontainer}>
            <Text
              additionalClasses={{
                text: cssClasses?.subtitle,
              }}
              {...processTextProp(subtitle)}
            />
            <SelectorBoxFileTooltip
              cssClasses={cssClasses}
              tooltip={tooltip}
              tooltipIcon={tooltipIcon}
            />
          </div>
        )}
      </div>
      {!!(description || button) && (
        <div className={cssClasses?.descriptioncontainer}>
          <Text
            additionalClasses={{
              text: cssClasses?.description,
            }}
            {...processTextProp(description)}
          />

          {(!!cssClasses?.button_variant || !!button?.size) &&
            (!!cssClasses?.button_size || !!button?.variant) && (
              <Button
                additionalSizeClasses={
                  button?.variant ? undefined : cssClasses?.button_size
                }
                additionalVariantClasses={
                  button?.size ? undefined : cssClasses?.button_variant
                }
                size={button?.size}
                variant={button?.variant}
                {...button}
              >
                {button?.content}
              </Button>
            )}
        </div>
      )}
    </>
  );
};
