import * as React from 'react';

import { useId } from '@/hooks';
import { useStyles } from '@/hooks/useStyles/useStyles';
import { ErrorBoundary, FallbackComponent } from '@/provider/errorBoundary';

import { PillSelectorStandAlone } from './pillSelectorStandAlone';
import type { IPillSelectorControlled, IPillSelectorStandAlone } from './types/pillSelector';
import { PillSelectorStyles } from './types/pillSelectorTheme';

const PILL_SELECTOR_STYLES = 'PILL_SELECTOR_STYLES';

const PillSelectorControlledComponent = React.forwardRef(
  <V extends string | unknown>(
    { ctv, ...props }: IPillSelectorControlled<V>,
    ref: React.ForwardedRef<HTMLDivElement> | undefined | null
  ): JSX.Element => {
    const styles = useStyles<PillSelectorStyles, V>(PILL_SELECTOR_STYLES, props.variant, ctv);
    const id = useId('name');
    const measuredRef = React.useRef<HTMLDivElement | null>(null);

    // update measurements of the thumb
    const updateMeasurements = () => {
      // get the index of the selected pill
      const index =
        props.pills.findIndex(
          pill => pill.value.toString() === props.pillSelected?.[0].toString()
        ) + 1;

      // get the size and the position of the thumb from the selected pill
      if (measuredRef.current) {
        const thumb = measuredRef.current.childNodes[0] as HTMLElement;
        const selectedPill = measuredRef.current.childNodes[index] as HTMLElement;

        thumb.style.width = `${selectedPill?.clientWidth}px`;
        thumb.style.height = `${selectedPill?.getBoundingClientRect().height}px`;
        thumb.style.left = `${selectedPill.offsetLeft}px`;
      }
    };

    React.useImperativeHandle(ref, () => {
      return measuredRef.current as HTMLDivElement;
    }, []);

    React.useEffect(() => {
      let resizeObserver: ResizeObserver;
      if (!props.multiSelect && measuredRef?.current && props.pillSelected?.[0] && styles?.thumb) {
        updateMeasurements();
        resizeObserver = new ResizeObserver(() => {
          updateMeasurements();
        });
        // Start observing the element
        resizeObserver.observe(measuredRef.current);
      }
      return () => {
        resizeObserver?.disconnect();
      };
    }, [props.multiSelect, measuredRef, props.pills, props.pillSelected?.[0]]);

    return (
      <PillSelectorStandAlone
        ref={measuredRef}
        name={`pillSelector${id}`}
        styles={styles}
        {...props}
      />
    );
  }
);
PillSelectorControlledComponent.displayName = 'PillSelectorControlledComponent';

const PillSelectorBoundary = <V extends string | unknown>(
  props: IPillSelectorControlled<V>,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <PillSelectorStandAlone {...(props as unknown as IPillSelectorStandAlone)} ref={ref} />
      </FallbackComponent>
    }
  >
    <PillSelectorControlledComponent {...props} ref={ref} />
  </ErrorBoundary>
);

const PillSelectorControlled = React.forwardRef(PillSelectorBoundary) as <
  V extends string | unknown,
>(
  props: React.PropsWithChildren<IPillSelectorControlled<V>> & {
    ref?: React.ForwardedRef<HTMLDivElement> | undefined | null;
  }
) => ReturnType<typeof PillSelectorBoundary>;

export { PillSelectorControlled };
