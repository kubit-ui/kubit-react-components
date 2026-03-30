import type { ArgTypes } from "storybook/internal/types";

import { KUBIT_VARIANTS } from "@kubit-ui-web/design-system";

import { configArgTypes } from "@/stories/argtypes/argtypes";
import { getBooleanArgTypes } from "@/stories/argtypes/booleanArgTypes";
import { getDisabledArgTypes } from "@/stories/argtypes/disabledArgTypes";
import { getVariantArgTypes } from "@/stories/argtypes/variantArgtypes";
import { CATEGORY_CONTROL } from "@/stories/constants/categoryControl";

const { TooltipVariantType } = KUBIT_VARIANTS;

export const argtypes = (): ArgTypes => {
  return {
    ...configArgTypes,
    ...getDisabledArgTypes([
      "additionalClasses",
      "arrowStyles",
      "triggerHandlers",
    ]),
    asButton: getBooleanArgTypes({
      descriptionName: "tooltip",
      name: "asButton",
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),
    children: {
      description:
        "The trigger element that activates the tooltip on hover/focus",
      type: { name: "other", value: "ReactNode", required: true },
      control: false,
      table: {
        type: { summary: "ReactNode" },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    mainContent: {
      description:
        "Main content configuration for the tooltip, including the content to display",
      type: { name: "object", value: {}, required: true },
      control: { type: "object" },
      table: {
        type: { summary: "TooltipMainContentType" },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    onToggle: {
      description: "Callback fired when the tooltip open state changes",
      type: { name: "function" },
      control: false,
      table: {
        type: { summary: "(open: boolean) => void" },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    popover: {
      description: "Configuration object for the underlying Popover component",
      type: { name: "object", value: {} },
      control: { type: "object" },
      table: {
        type: { summary: "TooltipPopover" },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    variant: {
      ...getVariantArgTypes({
        name: "tooltip",
        variants: { ...TooltipVariantType },
      }),
      table: {
        ...getVariantArgTypes({
          name: "tooltip",
          variants: { ...TooltipVariantType },
        }).table,
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
  };
};
