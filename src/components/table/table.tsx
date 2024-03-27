import React from 'react';

import { LineSeparatorLinePropsStylesType } from '@/components/lineSeparator';
import { useMediaDevice } from '@/hooks';
import { useStyles } from '@/hooks/useStyles/useStyles';
import { ErrorBoundary, FallbackComponent } from '@/provider/errorBoundary';

import { TableStandAlone } from './tableStandAlone';
import { ITable, ITableStandAlone, TableRowHeaderTypes } from './types';

const TABLE_STYLES = 'TABLE_STYLES';
const LINE_SEPARATOR_STYLES = 'LINE_SEPARATOR_STYLES';

const TableComponent = React.forwardRef(
  <V extends string | unknown>(
    props: ITable<V>,
    ref: React.ForwardedRef<HTMLTableElement> | undefined | null
  ): JSX.Element => {
    const styles = useStyles<TableRowHeaderTypes<string, string>, V>(
      TABLE_STYLES,
      props.variant,
      props.ctv
    );
    const lineSeparatorLineStyles = useStyles<LineSeparatorLinePropsStylesType>(
      LINE_SEPARATOR_STYLES,
      props.lineSeparatorLineVariant ?? styles.divider?.lineSeparatorLineVariant
    );
    const device = useMediaDevice();

    // Indicates if there is scrolling behind the table body to add shadow to column headers.
    const [scrollPosition, setScrollPosition] = React.useState(0);
    const refTableBody = React.useRef<HTMLTableSectionElement>(null);

    React.useEffect(() => {
      const updatePosition = () => {
        setScrollPosition(refTableBody?.current?.scrollTop ?? 0);
      };

      refTableBody?.current?.addEventListener('scroll', updatePosition);

      return () => refTableBody?.current?.removeEventListener('scroll', updatePosition);
    }, []);

    return (
      <TableStandAlone
        {...props}
        ref={ref}
        device={device}
        lineSeparatorLineStyles={lineSeparatorLineStyles}
        refTableBody={refTableBody}
        scrolling={scrollPosition > 0}
        styles={styles}
      />
    );
  }
);
TableComponent.displayName = 'TableComponent';

const TableBoundary = <V extends string | unknown>(
  props: ITable<V>,
  ref: React.ForwardedRef<HTMLTableElement> | undefined | null
): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <TableStandAlone {...(props as unknown as ITableStandAlone)} ref={ref} scrolling={false} />
      </FallbackComponent>
    }
  >
    <TableComponent {...props} ref={ref} />
  </ErrorBoundary>
);

/**
 * @description
 * Table component is used to display data in a tabular format.
 * Is the best table component ever, taht you can find in the world.
 */
const Table = React.forwardRef(TableBoundary) as <V extends string | unknown>(
  props: ITable<V> & {
    ref?: React.ForwardedRef<HTMLTableElement> | undefined | null;
  }
) => JSX.Element;

export { Table };
