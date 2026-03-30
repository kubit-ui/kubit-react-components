import { cssVars } from "@/designSystem/kubit/css/cssVars";

import { TooltipVariant } from "./variants";

export const TOOLTIP = {
  _popover: {
    z_index: cssVars.z_index_popup,
    $mediaQueries: {
      mobile: {
        z_index: cssVars.z_index_modal,
      },
    },
  },
  _overlay: {
    position: "fixed",
    top: "0",
    left: "0",
    width: cssVars.spacings_spacing_100_percent,
    height: cssVars.spacings_spacing_100_percent,
    opacity: "0.7",
    background_color: "#D9D9D9",
  },
  _hoverBridgeContainer: {
    padding: cssVars.spacings_spacing_150,
    pointer_events: "auto",
  },
  [TooltipVariant.REGULAR]: {
    _mainContent: {
      padding: cssVars.spacings_spacing_300,
      border_radius: "16px",
      background: cssVars.colors_neutral_color_bg_150,
      border: `${cssVars.borders_border_00} solid ${cssVars.colors_neutral_color_border_50}`,
      box_shadow: cssVars.shadow_10,
      $mediaQueries: {
        mobile: {
          padding: cssVars.spacings_spacing_0,
          border_radius: "16px 16px 0 0",
          background: cssVars.colors_neutral_color_bg_250,
          border: "none",
          box_shadow: "none",
          width: "var(--100dvw, 100vw)",
        },
      },
    },
    _arrowElement: {
      size: 8,
      backgroundColor: cssVars.colors_neutral_color_bg_150,
      border: `${cssVars.borders_border_00} solid ${cssVars.colors_neutral_color_border_50}`,
      // Must match with hoverBridgeContainer padding to create the visual gap and capture hover events
      padding: 8,
    },
  },
};
