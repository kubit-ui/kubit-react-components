import React, { useEffect, useRef, useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { Tooltip as Story } from "@kubit-ui-web/react-components";

import { TooltipVariant } from "@/lib/designSystem/kubit/components/variants";

import { argtypes } from "./argtypes";
import { tooltipNotes } from "./notes";

const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.innerWidth < breakpoint,
  );
  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    setIsMobile(mql.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [breakpoint]);
  return isMobile;
};

const meta = {
  argTypes: argtypes(),
  component: Story,
  parameters: {
    docs: {
      description: {
        component: `
        Tooltip component for displaying contextual information.

         ## Implementation

          This component uses [Floating UI](https://floating-ui.com/docs/platform) for intelligent positioning,
          ensuring that tooltips are displayed correctly even in space-constrained situations,
          automatically adapting itself to stay within the viewport and providing accurate positioning with respect to the
          reference element.

          ## Features

          - Adaptive positioning (top, bottom, left, right)
          - Overflow detection and automatic repositioning
          - Support for custom content
          - Integrated accessibility
        `,
      },
    },
    figmaUrl:
      "https://www.figma.com/file/EYQkbENTFO5r8muvXlPoOy/Kubit-v.1.0.0?type=design&node-id=3922-25713&mode=dev",
    githubUrl:
      "https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/tooltip",
    layout: "centered",
    note: tooltipNotes,
  },
  tags: ["autodocs"],
  title: "Components/Feedback/Tooltip",
} satisfies Meta<typeof Story>;

export default meta;

type StoryType = StoryObj<typeof meta>;

const StoryWithHooks = (args: React.ComponentProps<typeof Story>) => {
  const [hideWhenDetached, setHideWhenDetached] = useState(true);
  const [enableFlip, setEnableFlip] = useState(true);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  // Handler to toggle hideWhenDetached behavior
  const handleHideWhenDetachedChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setHideWhenDetached(event.target.checked);
  };

  // Handler to toggle flip behavior
  const handleFlipChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnableFlip(event.target.checked);
  };

  return (
    <div
      style={{
        alignItems: "center",
        border: "1px solid #ccc",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        height: isMobile ? "auto" : "600px",
        justifyContent: "center",
        overflow: "auto",
        padding: "20px",
        width: "100%",
      }}
    >
      <div style={{ marginBottom: "2px" }}>
        <label>
          <input
            checked={enableFlip}
            style={{ marginRight: "2px" }}
            type="checkbox"
            onChange={handleFlipChange}
          />
          Enable automatic repositioning (flip)
        </label>
        <p style={{ color: "#666", fontSize: "12px", margin: "4px 0 0 0" }}>
          When disabled, tooltip stays in the selected position even if it
          overflows
        </p>
        <label style={{ display: "block", marginTop: "4px" }}>
          <input
            checked={hideWhenDetached}
            style={{ marginRight: "8px" }}
            type="checkbox"
            onChange={handleHideWhenDetachedChange}
          />
          Hide when anchor is not visible (hideWhenDetached)
        </label>
        <p style={{ color: "#666", fontSize: "12px", margin: "4px 0 0 0" }}>
          When enabled, tooltip hides automatically when its anchor element is
          scrolled out of view
        </p>
      </div>

      {!isMobile && <div style={{ height: "200px" }} />}

      <Story
        ref={tooltipRef}
        {...args}
        arrowStyles={{
          backgroundColor: "#767676",
          border: "1px solid #e0e0e0",
          padding: 8,
          size: 8,
        }}
        mainContent={{
          content: (
            <div
              style={{
                color: isMobile ? "#000" : "white",
                padding: isMobile ? "24px" : "0px",
              }}
            >
              <strong>Tooltip Content</strong>
              <p style={{ fontSize: "14px", margin: "8px 0 0 0" }}>
                This is an example tooltip with helpful information.
              </p>
              {isMobile && (
                <>
                  <p style={{ fontSize: "14px", margin: "16px 0 0 0" }}>
                    <strong>Additional mobile content:</strong> In mobile view,
                    the tooltip appears as a bottom sheet with a light
                    background. This expanded content helps demonstrate the
                    full-screen behavior and improved readability.
                  </p>
                  <ul
                    style={{
                      fontSize: "14px",
                      margin: "8px 0 0 0",
                      paddingLeft: "20px",
                    }}
                  >
                    <li>Tap outside to dismiss</li>
                    <li>Press ESC key to close</li>
                    <li>Click on the trigger button again to toggle</li>
                  </ul>
                </>
              )}
            </div>
          ),
        }}
        popover={{
          middlewareOptions: {
            enableFlip,
            hideWhenDetached,
          },
        }}
      >
        <span
          style={{
            background: "#e0e0e0",
            borderRadius: "4px",
            padding: "8px",
          }}
        >
          {isMobile ? "Tap me" : "Hover me"}
        </span>
      </Story>

      {!isMobile && <div style={{ height: "1500px" }} />}
    </div>
  );
};

export const Tooltip: StoryType = {
  args: {
    children: "",
    mainContent: { content: "" },
    variant: TooltipVariant.REGULAR,
  },
  render: ({ ...args }) => <StoryWithHooks {...args} />,
};
