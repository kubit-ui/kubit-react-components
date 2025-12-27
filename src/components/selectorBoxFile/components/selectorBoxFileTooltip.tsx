import { TooltipUnControlled as Tooltip } from '@/components/tooltip/tooltipUnControlled';

import type { ElementOrIconProps } from '../../elementOrIcon/types/elementOrIcon';
import type {
  SelectorBoxFileCssClasses,
  SelectorBoxFileTooltipProps,
} from '../types/selectorBoxFile';

import { ElementOrIcon } from '../../elementOrIcon/elementOrIcon';

export const SelectorBoxFileTooltip = ({
  cssClasses,
  tooltip,
  tooltipIcon,
}: {
  tooltipIcon?: ElementOrIconProps;
  tooltip?: SelectorBoxFileTooltipProps;
  cssClasses?: SelectorBoxFileCssClasses;
}): JSX.Element | null => {
  if (!tooltipIcon?.icon) {
    return null;
  }
  const icon = (
    <ElementOrIcon className={cssClasses?.tooltipicon} {...tooltipIcon} />
  );
  if (!tooltip) {
    return <div className={cssClasses?.tooltipiconcontainer}>{icon}</div>;
  }
  return (
    <div className={cssClasses?.tooltipiconcontainer}>
      <Tooltip additionalClasses={cssClasses?.tooltip} {...tooltip}>
        {icon}
      </Tooltip>
    </div>
  );
};
