import { Button } from '@/components/button/button';
import { RenderIf } from '@/components/renderIf/renderIf';
import { Text } from '@/components/text/text';
import type { CommonTextProps } from '@/lib/types/commons/text';
import { processText } from '@/lib/utils/process/processText/processText';

import type { ElementOrIconProps } from '../../elementOrIcon/types/elementOrIcon';
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
        <RenderIf condition={!!title}>
          <Text
            additionalClasses={{
              text: cssClasses?.title,
            }}
            component="h5"
            {...processText(title)}
          />
        </RenderIf>
        <RenderIf condition={!!subtitle}>
          <div className={cssClasses?.actiondescriptioncontainer}>
            <Text
              additionalClasses={{
                text: cssClasses?.subtitle,
              }}
              {...processText(subtitle)}
            />
            <SelectorBoxFileTooltip
              cssClasses={cssClasses}
              tooltip={tooltip}
              tooltipIcon={tooltipIcon}
            />
          </div>
        </RenderIf>
      </div>
      <RenderIf condition={!!(description || button)}>
        <div className={cssClasses?.descriptioncontainer}>
          <Text
            additionalClasses={{
              text: cssClasses?.description,
            }}
            {...processText(description)}
          />

          <RenderIf
            condition={
              (!!cssClasses?.button_variant || !!button?.size) &&
              (!!cssClasses?.button_size || !!button?.variant)
            }
          >
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
          </RenderIf>
        </div>
      </RenderIf>
    </>
  );
};
