import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';

import type {
  PageControlControlProps,
  PageControlCssClasses,
  PageControlStandAloneProps,
} from '../types/pageControl';

import { isElementOrIconProps } from '../helper/controlType';
import { ArrowControlStandAlone } from './arrowControlStandAlone';
import { ButtonControlStandAlone } from './buttonControlStandAlone';

interface ControlProps extends PageControlStandAloneProps {
  control?: PageControlControlProps;
  cssArrowControlClasses?: PageControlCssClasses;
  cssPageControlClasses?: PageControlCssClasses;
  position?: 'left' | 'right';
}
export const Controls = ({
  control,
  cssArrowControlClasses,
  cssPageControlClasses,
  position,
  ...props
}: ControlProps): JSX.Element => {
  const customProps = pickCustomAttributes(props);
  const buttonCssClasses =
    position === 'left'
      ? cssArrowControlClasses?.leftbuttoncontrol
      : cssArrowControlClasses?.rightbuttoncontrol;
  const arrowCssClasses =
    position === 'left'
      ? cssArrowControlClasses?.leftarrowcontrolcontainer
      : cssArrowControlClasses?.rightarrowcontrolcontainer;
  return (
    <>
      {control && !isElementOrIconProps(control) && (
        <ButtonControlStandAlone
          {...control}
          cssPageControlClasses={buttonCssClasses}
          position={position}
          {...customProps}
        />
      )}
      {isElementOrIconProps(control) && (
        <div className={arrowCssClasses}>
          <ArrowControlStandAlone
            cssArrowControlClasses={cssArrowControlClasses}
            {...control}
          />
        </div>
      )}
    </>
  );
};
