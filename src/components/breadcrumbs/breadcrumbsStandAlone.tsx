import { forwardRef } from 'react';

import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';

import { CrumbStandAlone } from './components/crumbStandAlone/crumbStandAlone';
import { useIsOverflow } from './hooks/useIsOverflow/useIsOverflow';
import type { BreadcrumbsStandAloneProps } from './types/breadcrumbs';
import { crumbMaxCharName } from './utils/crumbMaxCharName/crumbMaxCharName';

/**
 * Standalone breadcrumbs component for displaying navigation paths.
 *
 * This component renders a navigation bar with a list of breadcrumb items, allowing users
 * to understand and navigate the hierarchy of the current page. It automatically handles
 * overflow and truncates breadcrumb names when necessary, improving usability in complex
 * navigation structures.
 *
 * This component is presentational and does not manage navigation state. It is typically
 * used internally by the {@link BreadCrumbs} component.
 *
 * @example
 * ```tsx
 * <BreadcrumbsStandAlone
 *   crumbs={[{ name: "Home" }, { name: "Section" }]}
 * />
 * ```
 */
export const BreadcrumbsStandAlone = forwardRef<
  HTMLDivElement,
  BreadcrumbsStandAloneProps
>(
  (
    {
      crumbs,
      cssClasses,
      dividerIcon,
      id,
      lastOneCrumbComponent,
      link,
      minCharLimit = 20,
      ...props
    },
    ref,
  ): JSX.Element => {
    const { innerRef, isOverflow } = useIsOverflow();
    const customProps = pickCustomAttributes(props);
    const dataTestId = props['data-testid'] || 'breadcrumbs';

    return (
      <div
        {...customProps}
        ref={ref}
        aria-label={undefined}
        data-testid={dataTestId}
        id={id}
      >
        <nav ref={innerRef} aria-label={props['aria-label']}>
          <ol className={cssClasses?.breadcrumbs}>
            {crumbs?.map((crumb, index) => {
              const lastCrumb = index + 1 === crumbs.length;
              return (
                <CrumbStandAlone
                  key={crumb.name}
                  crumb={crumbMaxCharName(
                    crumb,
                    minCharLimit,
                    isOverflow,
                    lastCrumb,
                  )}
                  cssClasses={cssClasses}
                  data-testid={`${dataTestId}-${index}`}
                  dividerIcon={dividerIcon}
                  lastCrumb={lastCrumb}
                  lastOneCrumbComponent={lastOneCrumbComponent}
                  link={link}
                />
              );
            })}
          </ol>
        </nav>
      </div>
    );
  },
);
