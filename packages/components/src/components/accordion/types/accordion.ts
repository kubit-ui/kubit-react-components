import type {
  ComponentSelected,
  ComponentsTypesComponents,
} from '@/lib/types/cssGenerator/kubit/componentsTypes';

type AccordionCssClasses = ComponentSelected<
  ComponentsTypesComponents['ACCORDION']
>;
/**
 * Base interface for Accordion component
 */
export interface IAccordionStandAlone {
  /** Content to be displayed when the accordion is expanded */
  children: React.ReactNode;
  /** Header content for the accordion */
  header: React.ReactNode;
  /** Handler to control clicking on the header, only available for Controlled version */
  onHeaderClick?: React.MouseEventHandler<HTMLButtonElement>;
  /** Optional styles to apply to the component */
  cssClasses?: AccordionCssClasses;
  /** Custom test ID for testing */
  dataTestId?: string;
  /** Component type for the accordion container, defaults to 'div' */
  component?: React.ElementType;
  /** Component type for header, defaults to 'button' */
  headerComponent?: React.ElementType;
  expanded: boolean;
}

/**
 * Interface for controlled Accordion component
 */
export interface IAccordionControlled<
  V = undefined extends string ? unknown : string,
> extends IAccordionStandAlone {
  variant: V;
  additionalClasses?: Partial<AccordionCssClasses>;
  /** Whether the accordion is expanded or collapsed */
  expanded: boolean;
  /** Callback fired when the header is clicked */
  onHeaderClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /** Unique ID for the content section, used for accessibility */
  contentId?: string;
}

/**
 * Interface for uncontrolled Accordion component
 */
export interface IAccordionUnControlled<
  V = undefined extends string ? unknown : string,
> extends Omit<
  IAccordionControlled<V>,
  'expanded' | 'onHeaderClick' | 'contentId'
> {
  /** Default expanded state when component mounts */
  defaultExpanded?: boolean;
  /** Callback fired when accordion state changes */
  onExpandCollapse?: (
    expanded: boolean,
    event: React.MouseEvent<HTMLButtonElement>,
  ) => void;
}
