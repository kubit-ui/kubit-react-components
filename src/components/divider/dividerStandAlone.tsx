import * as React from 'react';

import { ElementOrIcon } from '@/components/elementOrIcon';
import { Text, TextComponentType } from '@/components/text';

import { Tooltip, TooltipAlignType } from '../tooltip';
import { DividerRowLabelIconGroupStyled, DividerRowStyled, DividerStyled } from './divider.styled';
import { IDividerStandAlone } from './types';

const DividerStandAloneComponent = (
  { styles, dataTestId, customComponent, embebed, ...props }: IDividerStandAlone,
  ref: React.ForwardedRef<HTMLDivElement> | null
): JSX.Element => {
  return (
    <DividerStyled ref={ref} data-testid={dataTestId} embebed={embebed} styles={styles}>
      <DividerRowStyled styles={styles}>
        <DividerRowLabelIconGroupStyled styles={styles}>
          {props.leftIcon?.icon && (
            <ElementOrIcon customIconStyles={styles.icon} {...props.leftIcon} />
          )}
          {customComponent}
          <Text
            color={styles.label?.color}
            component={TextComponentType.PARAGRAPH}
            variant={styles.label?.font_variant}
            weight={styles.label?.font_weight}
            {...props.leftLabel}
          >
            {props.leftLabel?.content}
          </Text>
          {props.icon?.icon && (
            <Tooltip
              align={TooltipAlignType.RIGHT}
              variant={styles.tooltipVariant}
              {...props.iconTooltip}
            >
              <ElementOrIcon
                color={styles.icon?.color}
                height={styles.icon?.height}
                width={styles.icon?.width}
                {...props.icon}
              />
            </Tooltip>
          )}
        </DividerRowLabelIconGroupStyled>
        <Text
          color={styles.label?.color}
          component={TextComponentType.PARAGRAPH}
          variant={styles.label?.font_variant}
          weight={styles.label?.font_weight}
          {...props.rightLabel}
        >
          {props.rightLabel?.content}
        </Text>
      </DividerRowStyled>
      {!props.leftSublabel?.content && !props.rightSublabel?.content ? null : (
        <DividerRowStyled styles={styles}>
          <Text
            color={styles.sublabel?.color}
            component={TextComponentType.PARAGRAPH}
            variant={styles.sublabel?.font_variant}
            weight={styles.sublabel?.font_weight}
            {...props.leftSublabel}
          >
            {props.leftSublabel?.content}
          </Text>
          <Text
            color={styles.sublabel?.color}
            component={TextComponentType.PARAGRAPH}
            variant={styles.sublabel?.font_variant}
            weight={styles.sublabel?.font_weight}
            {...props.rightSublabel}
          >
            {props.rightSublabel?.content}
          </Text>
        </DividerRowStyled>
      )}
    </DividerStyled>
  );
};

/**
 * @description
 * DividerStandAlone component is a wrapper component that can be used to wrap other components.
 * @param {IDividerStandAlone} props
 * @returns {JSX.Element}
 * @constructor
 */
export const DividerStandAlone = React.forwardRef(DividerStandAloneComponent);
