import type {
  ComponentSelected,
  ComponentsTypesComponents,
} from '@/lib/types/cssGenerator/kubit/componentsTypes';
import type { DataAttributes } from '@/lib/types/dataAttributes/dataAttributes';

type NavBarCssClasses = ComponentSelected<ComponentsTypesComponents['NAVBAR']>;

/**
 * Interface for the standalone NavBar component.
 * Includes properties for items, layout direction, focus order, and CSS classes.
 */
export interface NavBarStandAloneProps extends DataAttributes {
  leftItems?: React.ReactNode[];
  centerItems?: React.ReactNode[];
  rightItems?: React.ReactNode[];
  component?: 'header' | 'footer' | 'nav';
  direction?: 'horizontal' | 'vertical';
  focusOrder?: ('left' | 'center' | 'right')[];
  cssClasses?: NavBarCssClasses;
}

/**
 * Interface for the NavBar component with a variant.
 * Extends the NavBarStandAloneProps interface and adds a variant and additional CSS classes.
 *
 * @template Variant - The type of the variant for the NavBar.
 */
export interface NavBarProps<
  Variant = undefined extends string ? unknown : string,
> extends NavBarStandAloneProps {
  variant?: Variant;
  additionalClasses?: Partial<NavBarCssClasses>;
}
