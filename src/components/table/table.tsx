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

    return (
      <TableStandAlone
        {...props}
        ref={ref}
        device={device}
        lineSeparatorLineStyles={lineSeparatorLineStyles}
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
        <TableStandAlone {...(props as unknown as ITableStandAlone)} />
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
