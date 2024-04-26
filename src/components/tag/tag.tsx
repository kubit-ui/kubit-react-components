import * as React from 'react';

import { STYLES_NAME } from '@/constants';
import { useStyles } from '@/hooks/useStyles/useStyles';
import { ErrorBoundary, FallbackComponent } from '@/provider/errorBoundary';

import { TagStandAlone } from './tagStandAlone';
import type { ITag, ITagStandAlone, TagStateKeyOfType, TagStylesOptionPropsType } from './types';

const TagComponent = React.forwardRef(
  <
    V = undefined extends string | unknown ? string | undefined : string | unknown,
    S = undefined extends string | unknown ? string | undefined : string | unknown,
  >(
    { variant, ctv, extraCt, ...props }: ITag<V, S>,
    ref: React.ForwardedRef<HTMLDivElement> | undefined | null
  ): JSX.Element => {
    const optionsStyles = useStyles<TagStylesOptionPropsType, S>(
      STYLES_NAME.TAG,
      props.option,
      extraCt
    );
    const variantStyles: TagStateKeyOfType =
      useStyles<TagStateKeyOfType, V>(STYLES_NAME.TAG, variant, ctv) || {};

    const variantStatusStyles = variantStyles[props.status];

    return (
      <TagStandAlone
        {...props}
        ref={ref}
        optionStyles={optionsStyles}
        variant={variant}
        variantStatusStyles={variantStatusStyles}
      >
        {props.children}
      </TagStandAlone>
    );
  }
);
TagComponent.displayName = 'TagComponent';

const TagBoundary = <
  V = undefined extends string | unknown ? string | undefined : string | unknown,
  S = undefined extends string | unknown ? string | undefined : string | unknown,
>(
  props: ITag<V, S>,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <TagStandAlone {...(props as unknown as ITagStandAlone)} ref={ref} />
      </FallbackComponent>
    }
  >
    <TagComponent {...props} ref={ref} />
  </ErrorBoundary>
);

/**
 * @deprecated Try TagV2 component that will override this component in the next major
 */
const Tag = React.forwardRef(TagBoundary) as <V, S>(
  p: ITag<V, S> & {
    ref?: React.ForwardedRef<HTMLDivElement> | undefined | null;
  }
) => JSX.Element;

/**
 * @description
 * Tag component is used to highlight or categorize important information.
 */
export { Tag };
