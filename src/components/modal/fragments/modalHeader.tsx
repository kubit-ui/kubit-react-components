import { Text } from '@/components/text/text';
import { ElementOrIcon } from '@/lib/components/elementOrIcon/elementOrIcon';
import { useActiveBreakpoints } from '@/lib/hooks/useMediaDevice/useActiveBreakpoints';
import { processTextProp } from '@/lib/utils/process/processCommonProp';

import type { ModalStandAloneProps } from '../types/modal';

import { Button } from '../../button/button';

type PickedProps =
  | 'blocked'
  | 'closeIcon'
  | 'closeButton'
  | 'title'
  | 'dragIcon'
  | 'device'
  | 'cssClasses';

type ModalHeaderProps = Pick<ModalStandAloneProps, PickedProps> & {
  titleIdFinal: string;
};

export const ModalHeader = ({
  blocked,
  closeButton,
  closeIcon,
  cssClasses,
  dragIcon,
  title,
  titleIdFinal,
}: ModalHeaderProps): JSX.Element => {
  const { isMobileOrTablet } = useActiveBreakpoints();

  return (
    <div className={cssClasses?.headercontainer} data-modal-header={true}>
      {isMobileOrTablet && !blocked && !!dragIcon && (
        <div
          className={cssClasses?.dragiconcontainer}
          data-modal-draggable-icon={true}
        >
          <ElementOrIcon className={cssClasses?.dragicon} {...dragIcon} />
        </div>
      )}

      <div className={cssClasses?.headercontentcontainer}>
        {!blocked && !!closeIcon?.icon && (
          <div className={cssClasses?.closebuttoncontainer}>
            <ElementOrIcon
              className={cssClasses?.closebuttonicon}
              {...closeIcon}
            />
          </div>
        )}
        {!blocked && !!closeButton?.content && !!closeButton?.variant && (
          <Button {...closeButton} variant={closeButton?.variant}>
            {closeButton?.content}
          </Button>
        )}
        {(title?.visible === undefined || title.visible) && (
          <div className={cssClasses?.titlecontainer}>
            <Text
              additionalClasses={{
                text: cssClasses?.title,
              }}
              component="h1"
              id={titleIdFinal}
              {...processTextProp(title)}
            />
          </div>
        )}
        {title?.visible === false && (
          <span className={cssClasses?.titlehiddencontainer} id={titleIdFinal}>
            {processTextProp(title).children}
          </span>
        )}
        {!blocked && !!closeIcon?.icon && (
          <div className={cssClasses?.closebuttoncontainer}>
            <span className={cssClasses?.closebuttonicon} />
          </div>
        )}
      </div>
    </div>
  );
};
