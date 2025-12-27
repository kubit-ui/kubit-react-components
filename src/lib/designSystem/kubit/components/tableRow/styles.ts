import type { TableRowVariantStyles } from '@/components/tableRow/types/tableRowTheme';

import { cssVars } from '@/lib/designSystem/kubit/css/cssVars';

import { TableRowVariantType } from './variants';

type TableRowVariants = keyof typeof TableRowVariantType;

export const TABLE_ROW: TableRowVariantStyles<TableRowVariants> = {
  display: 'table-row',
  [TableRowVariantType.BODY_ROW_DEFAULT]: {
    $attributes: {
      'data-active': {
        $advancedSelectors: [
          {
            descendant: {
              $target: 'td',
              background_color: cssVars.colors_secondary_color_bg_100,
              color: 'white',
            },
          },
          {
            descendant: {
              $target: 'th',
              background_color: cssVars.colors_secondary_color_bg_100,
              color: 'white',
            },
          },
        ],
      },
      'data-hoverable': {
        $pseudoClasses: {
          hover: {
            $advancedSelectors: [
              {
                descendant: {
                  $target: 'td',
                  background_color: cssVars.colors_neutral_color_bg_200,
                  color: 'black',
                  cursor: 'pointer',
                },
              },
              {
                descendant: {
                  $target: 'th',
                  background_color: cssVars.colors_neutral_color_bg_200,
                  color: 'black',
                  cursor: 'pointer',
                },
              },
            ],
          },
        },
      },
    },
    border_bottom: `1px solid ${cssVars.colors_secondary_color_border_50}`,
  },
  [TableRowVariantType.HEADER_ROW_DEFAULT]: {},
  [TableRowVariantType.HEADER_ROW_SECONDARY]: {
    border_bottom: `2px solid ${cssVars.colors_secondary_color_border_50}`,
  },
};
