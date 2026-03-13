import { Text } from '@/components/text/text';
import { ElementOrIcon } from '@/lib/components/elementOrIcon/elementOrIcon';
import { useActiveBreakpoints } from '@/lib/hooks/useMediaDevice/useActiveBreakpoints';
import {
  processIconProp,
  processTextProp,
} from '@/lib/utils/process/processCommonProp';

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
    <div data-modal-header className={cssClasses?.headercontainer}>
      {isMobileOrTablet && !blocked && !!dragIcon && (
        <div
          data-modal-draggable-icon
          className={cssClasses?.dragiconcontainer}
        >
          <ElementOrIcon
            className={cssClasses?.dragicon}
            {...processIconProp(dragIcon)}
          />
        </div>
      )}

      <div className={cssClasses?.headercontentcontainer}>
        {!blocked && !!closeIcon && (
          <div className={cssClasses?.closebuttoncontainer}>
            <ElementOrIcon
              className={cssClasses?.closebuttonicon}
              {...processIconProp(closeIcon)}
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
        {!blocked && !!closeIcon && (
          <div className={cssClasses?.closebuttoncontainer}>
            <span className={cssClasses?.closebuttonicon} />
          </div>
        )}
      </div>
    </div>
  );
};
