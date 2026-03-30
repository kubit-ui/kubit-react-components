import React from "react";

export const tooltipNotes = {
  text: [
    <span key="note-1">
      <strong>Desktop/Tablet</strong>: Opens on hover, closes on mouse leave.{" "}
      <strong>Mobile</strong>: Opens/closes on click.
    </span>,
    <span key="note-2">
      <strong>Popover configuration</strong>: The tooltip uses the{" "}
      <strong>popover</strong> prop for positioning and behavior configuration.
      Automatically closes on <strong>Escape key</strong> or{" "}
      <strong>click outside</strong>. In mobile, trigger element is protected
      from closing on click to enable toggle.
    </span>,
    <span key="note-3">
      • <code>popover.placement</code> (default: &quot;top&quot;): Position
      relative to trigger.
    </span>,
    <span key="note-4">
      • <code>popover.middlewareOptions.hideWhenDetached</code> (default: true):
      Hides tooltip when trigger scrolls out of view
    </span>,
    <span key="note-5">
      • <code>popover.middlewareOptions.enableFlip</code> (default: true):
      Repositions to stay visible in viewport
    </span>,
    <span key="note-6">
      See{" "}
      <a
        href="?path=/docs/components-resources-popover--documentation"
        rel="noopener noreferrer"
        target="_blank"
      >
        Popover documentation
      </a>{" "}
      for more details.
    </span>,
  ],
  theme: "information",
};
