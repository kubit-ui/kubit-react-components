import React, { useImperativeHandle } from 'react';

import { LineSeparatorLinePropsStylesType } from '@/components/lineSeparator';
import { useMediaDevice } from '@/hooks';
import { useStyles } from '@/hooks/useStyles/useStyles';
import { ErrorBoundary, FallbackComponent } from '@/provider/errorBoundary';
import { hasScroll as checkHasScroll } from '@/utils';

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

    const innerRef = React.useRef<HTMLTableElement>(null);
    useImperativeHandle(ref, () => innerRef.current as HTMLTableElement, []);

    // Indicates if there is scrolling behind the table body to add shadow to column headers.
    const [scrollPosition, setScrollPosition] = React.useState(0);
    React.useEffect(() => {
      const tBody = innerRef.current?.querySelector('tbody');
      const updatePosition = () => {
        setScrollPosition(tBody?.scrollTop ?? 0);
      };
      tBody?.addEventListener('scroll', updatePosition);
      return () => tBody?.removeEventListener('scroll', updatePosition);
    }, []);

    // Indicates if tBody has scroll in order to add accesibility aria props
    const [hasScroll, setHasScroll] = React.useState(false);
    React.useEffect(() => {
      const tBody = innerRef.current?.querySelector('tbody');
      let resizeObserver: ResizeObserver;
      if (tBody) {
        const handleTBodyResize = (tBody: HTMLTableSectionElement) => {
          setHasScroll(checkHasScroll(tBody));
        };
        handleTBodyResize(tBody);
        resizeObserver = new ResizeObserver(() => {
          handleTBodyResize(tBody);
        });
        resizeObserver.observe(tBody);
      }
      return () => {
        resizeObserver?.disconnect();
      };
    }, []);

    return (
      <TableStandAlone
        {...props}
        ref={innerRef}
        device={device}
        hasScroll={hasScroll}
        lineSeparatorLineStyles={lineSeparatorLineStyles}
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
 *
 * @deprecated This component is deprecated. Please use our new DataTable component to display data in a table format. Alternatively, you can create a table manually using the new table-related components: TableV2, TableHead, TableBody, TableRow, TableCell, TableDivider, and TableCaption. This component will be removed in the next major release.
 */
const Table = React.forwardRef(TableBoundary) as <V extends string | unknown>(
  props: ITable<V> & {
    ref?: React.ForwardedRef<HTMLTableElement> | undefined | null;
  }
) => JSX.Element;

export { Table };
