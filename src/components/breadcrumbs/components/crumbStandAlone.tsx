import React from 'react';

import { ElementOrIcon } from '@/components/elementOrIcon/elementOrIcon';
import { Link } from '@/components/link/link';
import { LinkActionType } from '@/components/link/types/action';
import { Text } from '@/components/text/text';
import { TextComponentType } from '@/components/text/types/component';
import { States, useManageState } from '@/hooks';

import {
  BreadcrumbLiStyled,
  IconContainerStyled,
  LinkContainerStyled,
} from '../breadcrumbs.styled';
import { BreadcrumbsStateType } from '../types';
import { IBreadcrumbStandAlone } from '../types/breadcrumbs';

/**
 * @description
 * CrumbStandAlone component is a component that shows a crumb with a link.
 * @param {IBreadcrumbStandAlone} props
 * @returns {JSX.Element}
 * @example
 * <CrumbStandAlone />
 * <CrumbStandAlone variant="primary" />
 */
export const CrumbStandAlone = ({
  crumb,
  styles,
  dataTestId,
  lastOneCrumbComponent = TextComponentType.SPAN,
  ...props
}: IBreadcrumbStandAlone): JSX.Element => {
  const { state, setRef } = useManageState({
    states: Object.values(BreadcrumbsStateType) as States,
    active: props.lastCrumb,
  });

  return (
    <>
      <BreadcrumbLiStyled
        ref={setRef as React.RefObject<HTMLLIElement> | null | undefined}
        aria-current={props.lastCrumb ? 'page' : undefined}
        data-testid={dataTestId}
      >
        {props.lastCrumb ? (
          <Text component={lastOneCrumbComponent} customTypography={styles[state].lastOneCrumb}>
            {crumb.name}
          </Text>
        ) : (
          <>
            {props.link && (
              <LinkContainerStyled styles={styles}>
                <Link
                  action={LinkActionType.NAVIGATION}
                  aria-label={crumb.ariaLabel}
                  disabled={props.lastCrumb}
                  url={crumb.url}
                  {...props.link}
                  onClick={event => crumb.onClick?.(crumb.url, event)}
                >
                  {crumb.name}
                </Link>
              </LinkContainerStyled>
            )}
            <IconContainerStyled state={state} styles={styles}>
              <ElementOrIcon customIconStyles={styles[state].iconDivider} {...props.dividerIcon} />
            </IconContainerStyled>
          </>
        )}
      </BreadcrumbLiStyled>
    </>
  );
};
