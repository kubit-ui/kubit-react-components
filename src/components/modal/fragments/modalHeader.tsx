import { Text } from '@/components/text/text';
import { useActiveBreakpoints } from '@/lib/hooks/useMediaDevice/useActiveBreakpoints';
import { processText } from '@/lib/utils/process/processText/processText';

import type { ModalStandAloneProps } from '../types/modal';

import { Button } from '../../button/button';
import { ElementOrIcon } from '../../elementOrIcon/elementOrIcon';
import { RenderIf } from '../../renderIf/renderIf';

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
      <RenderIf condition={isMobileOrTablet && !blocked && !!dragIcon}>
        <div
          className={cssClasses?.dragiconcontainer}
          data-modal-draggable-icon={true}
        >
          <ElementOrIcon className={cssClasses?.dragicon} {...dragIcon} />
        </div>
      </RenderIf>

      <div className={cssClasses?.headercontentcontainer}>
        <RenderIf condition={!blocked && !!closeIcon?.icon}>
          <div className={cssClasses?.closebuttoncontainer}>
            <ElementOrIcon
              className={cssClasses?.closebuttonicon}
              {...closeIcon}
            />
          </div>
        </RenderIf>
        <RenderIf
          condition={
            !blocked && !!closeButton?.content && !!closeButton?.variant
          }
        >
          <Button {...closeButton} variant={closeButton?.variant}>
            {closeButton?.content}
          </Button>
        </RenderIf>
        <RenderIf condition={title?.visible === undefined || title.visible}>
          <div className={cssClasses?.titlecontainer}>
            <Text
              additionalClasses={{
                text: cssClasses?.title,
              }}
              component="h1"
              id={titleIdFinal}
              {...processText(title)}
            />
          </div>
        </RenderIf>
        <RenderIf condition={title?.visible === false}>
          <span className={cssClasses?.titlehiddencontainer} id={titleIdFinal}>
            {processText(title).children}
          </span>
        </RenderIf>
        <RenderIf condition={!blocked && !!closeIcon?.icon}>
          <div className={cssClasses?.closebuttoncontainer}>
            <span className={cssClasses?.closebuttonicon} />
          </div>
        </RenderIf>
      </div>
    </div>
  );
};
