import React from "react";

export const popoverBodyLikeAnchorElementNotes = {
  text: [
    <span key="note-1">
      - Closes via Escape key (unless <strong>disablePressEscapeClose</strong>{" "}
      is true) or by clicking outside the popover content (handled by the{" "}
      <strong>onClose</strong> callback in the controlled component).
    </span>,
    <span key="note-2">
      - Animations can be fully customized using the{" "}
      <strong>animationConfig</strong> prop, which allows configuring duration,
      timing functions, rotation, scaling, distance, and spring effects for
      smooth entrance and exit transitions.
    </span>,
  ],
  theme: "information",
};

export const popoverWithAnchorElementNotes = {
  text: [
    <span key="note-1">
      This example demonstrates the <strong>Popover</strong> component
      positioned relative to a specific element.
    </span>,
    <span key="note-2">
      - Uses an <strong>anchor element</strong> (via the{" "}
      <strong>anchorElement</strong> prop) with various{" "}
      <strong>placement</strong> options to position the popover.
    </span>,
    <span key="note-3">
      - Features a directional <strong>arrow</strong> that points to the anchor
      element, creating a visual connection.
    </span>,
    <span key="note-4">
      - Doesn&apos;t include an overlay/backdrop, allowing interaction with
      elements behind the popover.
    </span>,
    <span key="note-5">
      - Supports custom animations through the <strong>animationConfig</strong>{" "}
      prop for enhanced user experience with configurable entrance and exit
      effects.
    </span>,
    <span key="note-6">
      - <strong>Middleware behavior:</strong> The replacement pattern is
      standard in floating-ui and gives full control: if you provide custom
      middlewares, you are responsible for all of them. Use{" "}
      <strong>middlewareOptions</strong> (offsetDistance, edgePadding,
      hideWhenDetached, enableFlip) to modify built-in middleware behavior
      without losing defaults.
    </span>,
  ],
  theme: "information",
};

export const popoverScrollBehaviorNotes = {
  text: [
    <span key="note-1">
      <strong>Note:</strong> This is a behavioral demonstration and should not
      be used for accessibility testing as it may not meet all accessibility
      requirements.
    </span>,
  ],
  theme: "information",
};

export const popoverAnimationsNotes = {
  text: [
    <span key="note-1">
      <strong>Available Animation Methods:</strong>
    </span>,
    <span key="note-2">
      - <strong>createSpringAnimation(direction, config)</strong>: Physics-based
      animations with realistic spring behavior. Directions: &apos;up&apos;,
      &apos;down&apos;, &apos;left&apos;, &apos;right&apos;
    </span>,
    <span key="note-3">
      - <strong>customKeyframes</strong>: Complete control using custom CSS
      animations for unique brand-specific effects
    </span>,
    <span key="note-4">
      - <strong>Built-in system</strong>: Modify duration, distance, and timing
      without losing automatic entrance/exit handling
    </span>,
  ],
  theme: "information",
};
