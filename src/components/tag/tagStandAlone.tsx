import React from 'react';

import { Text } from '@/components/text/text';
import { pickAriaProps } from '@/utils/aria/aria';

import { ElementOrIcon } from '../elementOrIcon/elementOrIcon';
import { TextComponentType } from '../text/types/component';
import { ArrowShape } from './component/ArrowShape';
import { RibbonShape } from './component/RibbonShape';
// styles
import { TagStyled, TagWrapperStyled } from './tag.styled';
import { ITagStandAlone } from './types/tag';
import { TAG_VARIANT_TYPE } from './types/variants';

const TagStandAloneComponent = (
  { dataTestId = 'tag', ...props }: ITagStandAlone,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => {
  const ariaProps = pickAriaProps(props);
  const tagRef = React.useRef<HTMLDivElement>(null);
  const [height, setHeight] = React.useState<number>(0);

  React.useLayoutEffect(() => {
    if (tagRef?.current?.offsetHeight !== undefined) {
      setHeight(tagRef?.current?.offsetHeight);
    }
  }, []);

  const wrapper = { ...props.variantStatusStyles?.wrapper, ...props.optionStyles.wrapper };
  const text = { ...props.variantStatusStyles?.text, ...props.optionStyles.text };
  const icon = props.variantStatusStyles?.icon;
  const withBorders = Boolean(
    wrapper.border_width && wrapper.border_width !== '0' && wrapper.border_width !== 'transparent'
  );
  const withTransparency = wrapper.background_color === 'transparent';

  const IS_ARROW_STYLE =
    props.variant === TAG_VARIANT_TYPE.ARROW || props.variant === TAG_VARIANT_TYPE.RIBBON;

  return (
    <TagWrapperStyled ref={ref}>
      {props.variant === TAG_VARIANT_TYPE.RIBBON && (
        <RibbonShape
          dataTestId={dataTestId}
          height={height}
          optionStyles={props.optionStyles}
          variant={props.variant}
          withBorders={withBorders}
          withTransparency={withTransparency}
        />
      )}
      <TagStyled
        ref={tagRef}
        data-testid={dataTestId}
        isArrowStyle={IS_ARROW_STYLE}
        optionStyles={props.optionStyles}
        styles={wrapper}
        {...ariaProps}
      >
        {props.icon?.icon && (
          <ElementOrIcon
            color={icon?.color}
            height={icon?.height}
            width={icon?.width}
            {...props.icon}
          />
        )}
        <Text
          component={TextComponentType.SPAN}
          customTypography={props.truncateText ? props.variantStatusStyles?.truncateText : text}
        >
          {props.children}
        </Text>
      </TagStyled>

      {props.variant === TAG_VARIANT_TYPE.ARROW && (
        <ArrowShape
          dataTestId={dataTestId}
          height={height}
          optionStyles={props.optionStyles}
          variant={props.variant}
          withBorders={withBorders}
          withTransparency={withTransparency}
        />
      )}
    </TagWrapperStyled>
  );
};

/**
 * @description
 * Tag component is used to highlight or categorize important information.
 */
export const TagStandAlone = React.forwardRef(TagStandAloneComponent);
