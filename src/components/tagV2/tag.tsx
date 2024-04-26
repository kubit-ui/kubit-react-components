import * as React from 'react';

import { STYLES_NAME } from '@/constants';
import { useStyles } from '@/hooks/useStyles/useStyles';
import { ErrorBoundary, FallbackComponent } from '@/provider/errorBoundary';

import { TagStandAlone } from './tagStandAlone';
import type { ITag, ITagStandAlone, TagPropsStylesType } from './types';

const TagComponent = React.forwardRef(
  <V extends string>(
    { variant, ctv, ...props }: ITag<V>,
    ref: React.ForwardedRef<HTMLDivElement> | undefined | null
  ): JSX.Element => {
    const styles: TagPropsStylesType = useStyles<TagPropsStylesType>(
      STYLES_NAME.TAG_V2,
      variant,
      ctv
    );

    return <TagStandAlone {...props} ref={ref} styles={styles} />;
  }
);
TagComponent.displayName = 'TagComponent';

const TagBoundary = <V extends string>(
  props: ITag<V>,
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

const Tag = React.forwardRef(TagBoundary) as <V, S>(
  props: ITag<V> & React.RefAttributes<HTMLDivElement>
) => JSX.Element;

/**
 * @description
 * Tag component is used to highlight or categorize important information.
 */
export { Tag };
