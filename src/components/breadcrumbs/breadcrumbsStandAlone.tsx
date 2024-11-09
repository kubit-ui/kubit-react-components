import React from 'react';

// styles
import { BreadcrumbsNavStyled, BreadcrumbsStyled } from './breadcrumbs.styled';
import { CrumbStandAlone } from './components/crumbStandAlone';
import { IBreadcrumbsStandAlone } from './types/breadcrumbs';
import { crumbMaxCharName } from './utils/crumbMaxCharName';
import useIsOverflow from './utils/useIsOverflow';

const BreadcrumbsStandAloneComponent = (
  {
    id,
    dataTestId = 'breadcrumbs',
    crumbs,
    styles,
    minCharLimit = 20,
    lastOneCrumbComponent,
    ...props
  }: IBreadcrumbsStandAlone,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => {
  const { innerRef, isOverflow } = useIsOverflow();

  return (
    <BreadcrumbsStyled ref={ref} data-testid={dataTestId} id={id}>
      <BreadcrumbsNavStyled ref={innerRef} aria-label={props['aria-label']}>
        <ol>
          {crumbs?.length &&
            crumbs.map((crumb, index: number) => {
              const lastCrumb: boolean = index + 1 === crumbs.length;
              return (
                <CrumbStandAlone
                  key={crumb.name}
                  crumb={crumbMaxCharName(crumb, minCharLimit, isOverflow, lastCrumb)}
                  dataTestId={`${dataTestId}-${index}`}
                  dividerIcon={props.dividerIcon}
                  lastCrumb={lastCrumb}
                  lastOneCrumbComponent={lastOneCrumbComponent}
                  link={props.link}
                  styles={styles}
                />
              );
            })}
        </ol>
      </BreadcrumbsNavStyled>
    </BreadcrumbsStyled>
  );
};

export const BreadcrumbsStandAlone = React.forwardRef(BreadcrumbsStandAloneComponent);
