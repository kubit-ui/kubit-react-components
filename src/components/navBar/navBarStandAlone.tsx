import { type ReactNode, forwardRef } from 'react';

import { classNames } from '@/lib/utils/classNames/classNames';
import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';

import { CustomComponent } from '../../lib/components/customComponent/customComponent';
import type { NavBarStandAloneProps } from './types/navBar';

/**
 * A standalone navigation bar component that can be used as a header, footer, or standalone navigation.
 * It supports custom CSS classes and forwards a ref to the inner navigation container.
 *
 * @param {INavBarStanAlone} props - The props for the navigation bar component.
 * @param {ForwardedRef<HTMLDivElement>} ref - The forwarded ref for the inner navigation container.
 * @returns {JSX.Element} The rendered navigation bar component.
 */
export const NavBarStandAlone = forwardRef<
  HTMLDivElement,
  NavBarStandAloneProps
>(
  (
    {
      centerItems,
      component = 'div',
      cssClasses,
      direction = 'horizontal',
      focusOrder = ['left', 'center', 'right'],
      leftItems,
      rightItems,
      ...props
    },
    ref,
  ): JSX.Element => {
    const renderSection = (
      items?: ReactNode[],
      section?: string,
      index?: number,
    ) => (
      <div
        key={`${section}-${index?.toString()}`}
        className={cssClasses?.itemcontainer}
        data-position={section}
      >
        {items?.map((item, itemIndex) => (
          <div key={`navbar-item-${itemIndex.toString()}`}>{item}</div>
        ))}
      </div>
    );

    const customProps = pickCustomAttributes(props);

    return (
      <CustomComponent
        ref={ref}
        className={classNames('kbt-navbar', direction, cssClasses?.navbar)}
        component={component}
        {...customProps}
      >
        {focusOrder.map((section, index) => {
          if (section === 'left') {
            return renderSection(leftItems, 'left', index);
          }
          if (section === 'center') {
            return renderSection(centerItems, 'center', index);
          }
          if (section === 'right') {
            return renderSection(rightItems, 'right', index);
          }
          return null;
        })}
      </CustomComponent>
    );
  },
);
