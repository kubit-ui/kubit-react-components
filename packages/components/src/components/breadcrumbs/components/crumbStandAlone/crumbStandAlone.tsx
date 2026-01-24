import type { RefObject } from 'react';

import { Link } from '@/components/link/link';
import { Text } from '@/components/text/text';
import { ElementOrIcon } from '@/lib/components/elementOrIcon/elementOrIcon';
import { useManageState } from '@/lib/hooks/useManageState/useManageState';
import { STATES } from '@/lib/types/states/states';
import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';
import { processIconProp } from '@/lib/utils/process/processCommonProp';

import type { BreadcrumbStandAloneProps } from '../../types/breadcrumbs';

/**
 * Standalone breadcrumb item component for navigation bars.
 *
 * This component renders a single breadcrumb item, handling both the last (current page)
 * and intermediate crumbs. It supports custom rendering for the last crumb, icons as dividers,
 * and navigation links. Used internally by the breadcrumbs navigation.
 *
 * @example
 * ```tsx
 * <CrumbStandAlone
 *   crumb={{ name: "Home", url: "/" }}
 *   lastCrumb={false}
 * />
 * ```
 */
export const CrumbStandAlone = ({
  crumb,
  cssClasses,
  dividerIcon,
  lastCrumb,
  lastOneCrumbComponent = 'span',
  link,
  ...props
}: BreadcrumbStandAloneProps): JSX.Element => {
  const { setRef } = useManageState({
    active: lastCrumb,
    states: Object.values(STATES),
  });
  const customProps = pickCustomAttributes(props);
  return (
    <li
      ref={setRef as RefObject<HTMLLIElement> | null | undefined}
      aria-current={lastCrumb ? 'page' : undefined}
      className={cssClasses?.crumb}
      data-testid={props['data-testid']}
    >
      {!!lastCrumb && (
        <Text
          additionalClasses={{
            text: cssClasses?.lastonecrumb,
          }}
          component={lastOneCrumbComponent}
          data-testid="last-breadcrumb"
          id={crumb.id}
        >
          {crumb.name}
        </Text>
      )}
      {!lastCrumb && (
        <>
          {!!link && (
            <div className={cssClasses?.linkcontainer}>
              <Link
                {...customProps}
                action="navigation"
                additionalTextClasses={{
                  text: cssClasses?.link,
                }}
                aria-label={crumb.ariaLabel}
                data-testid="breadcrumb-link"
                disabled={lastCrumb}
                id={crumb.id}
                url={crumb.url}
                {...link}
                onClick={(event) => crumb.onClick?.(crumb.url, event)}
              >
                {crumb.name}
              </Link>
            </div>
          )}
          <div className={cssClasses?.icondividercontainer}>
            <ElementOrIcon
              className={cssClasses?.icondivider}
              {...processIconProp(dividerIcon)}
            />
          </div>
        </>
      )}
    </li>
  );
};
