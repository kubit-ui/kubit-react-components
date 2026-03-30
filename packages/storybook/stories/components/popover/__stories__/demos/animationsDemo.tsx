import "./animationsDemo.css";

import React, { useCallback, useEffect, useRef, useState } from "react";

import {
  Button,
  Popover,
  createSpringAnimation,
} from "@kubit-ui-web/react-components";

import { KUBIT_VARIANTS } from "@kubit-ui-web/design-system";

const { ButtonVariantType, ButtonSizeType } = KUBIT_VARIANTS;

// Common styles for popover content
const POPOVER_BASE_STYLES = {
  background: "white",
  borderRadius: "4px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15), 0 2px 6px rgba(0, 0, 0, 0.1)",
  padding: "1rem",
} as const;

const POPOVER_CONTENT_STYLES = {
  extra: {
    ...POPOVER_BASE_STYLES,
    maxWidth: "350px",
    minWidth: "250px",
  },
  modal: {
    ...POPOVER_BASE_STYLES,
    borderRadius: "8px",
    maxWidth: "500px",
    minWidth: "300px",
    padding: "2rem",
  },
  standard: {
    ...POPOVER_BASE_STYLES,
    minWidth: "200px",
  },
  wide: {
    ...POPOVER_BASE_STYLES,
    maxWidth: "350px",
    minWidth: "200px",
  },
} as const;

// Built-in animation popovers configuration
const BUILTIN_POPOVERS = [
  {
    content: {
      description:
        "Slides from bottom to top (down → up animation). Automatically positioned above the trigger.",
      title: "🎯 Top Animation",
    },
    id: "default-top",
    placement: "top" as const,
    styleType: "standard" as const,
  },
  {
    content: {
      description:
        "Same animation as 'top' but aligned to the left edge. Animation maintains vertical slide behavior.",
      title: "🎯 Top Start Animation",
    },
    id: "default-top-start",
    placement: "top-start" as const,
    styleType: "standard" as const,
  },
  {
    content: {
      description:
        "Same animation as 'top' but aligned to the right edge. Animation maintains vertical slide behavior.",
      title: "🎯 Top End Animation",
    },
    id: "default-top-end",
    placement: "top-end" as const,
    styleType: "standard" as const,
  },
  {
    content: {
      description:
        "Slides from top to bottom (up → down animation). Automatically positioned below the trigger.",
      title: "🎯 Bottom Animation",
    },
    id: "default-bottom",
    placement: "bottom" as const,
    styleType: "standard" as const,
  },
  {
    content: {
      description:
        "Same animation as 'bottom' but aligned to the left edge. Animation maintains vertical slide behavior.",
      title: "🎯 Bottom Start Animation",
    },
    id: "default-bottom-start",
    placement: "bottom-start" as const,
    styleType: "standard" as const,
  },
  {
    content: {
      description:
        "Same animation as 'bottom' but aligned to the right edge. Animation maintains vertical slide behavior.",
      title: "🎯 Bottom End Animation",
    },
    id: "default-bottom-end",
    placement: "bottom-end" as const,
    styleType: "standard" as const,
  },
  {
    content: {
      description:
        "Slides from right to left (right → left animation). Positioned to the left of the trigger.",
      title: "🎯 Left Animation",
    },
    id: "default-left",
    placement: "left" as const,
    styleType: "wide" as const,
  },
  {
    content: {
      description:
        "Same animation as 'left' but aligned to the top edge. Animation maintains horizontal slide behavior.",
      title: "🎯 Left Start Animation",
    },
    id: "default-left-start",
    placement: "left-start" as const,
    styleType: "wide" as const,
  },
  {
    content: {
      description:
        "Same animation as 'left' but aligned to the bottom edge. Animation maintains horizontal slide behavior.",
      title: "🎯 Left End Animation",
    },
    id: "default-left-end",
    placement: "left-end" as const,
    styleType: "wide" as const,
  },
  {
    content: {
      description:
        "Slides from left to right (left → right animation). Positioned to the right of the trigger.",
      title: "🎯 Right Animation",
    },
    id: "default-right",
    placement: "right" as const,
    styleType: "wide" as const,
  },
  {
    content: {
      description:
        "Same animation as 'right' but aligned to the top edge. Animation maintains horizontal slide behavior.",
      title: "🎯 Right Start Animation",
    },
    id: "default-right-start",
    placement: "right-start" as const,
    styleType: "wide" as const,
  },
  {
    content: {
      description:
        "Same animation as 'right' but aligned to the bottom edge. Animation maintains horizontal slide behavior.",
      title: "🎯 Right End Animation",
    },
    id: "default-right-end",
    placement: "right-end" as const,
    styleType: "wide" as const,
  },
  {
    content: {
      description:
        "Fade animation for centered modal behavior. Perfect for dialogs and important content.",
      title: "🎯 Center Animation (Modal Style)",
    },
    id: "default-center",
    placement: undefined,
    styleType: "modal" as const,
  },
] as const;

// Spring physics popovers configuration
const SPRING_POPOVERS = [
  {
    config: {
      damping: 8,
      duration: "1200ms",
      initialDisplacement: 35,
      keyframeCount: 24,
      mass: 1,
      stiffness: 150,
    },
    content: {
      description:
        "Low damping creates multiple oscillations for a playful, bouncy effect. Perfect for fun interactions and attention-grabbing animations.",
      params: "stiffness: 150, damping: 8",
      title: "🎾 Bouncy Spring Physics",
    },
    exitDuration: 1200,
    id: "spring-bouncy",
  },
  {
    config: {
      damping: 25,
      duration: "800ms",
      initialDisplacement: 30,
      keyframeCount: 20,
      mass: 1,
      stiffness: 300,
    },
    content: {
      description:
        "Balanced damping provides natural movement with minimal overshoot. Ideal for professional interfaces and subtle interactions.",
      params: "stiffness: 300, damping: 25",
      title: "🌊 Smooth Spring Physics",
    },
    exitDuration: 800,
    id: "spring-smooth",
  },
  {
    config: {
      damping: 20,
      duration: "600ms",
      initialDisplacement: 25,
      keyframeCount: 16,
      mass: 0.8,
      stiffness: 500,
    },
    content: {
      description:
        "High stiffness with lower mass creates snappy, responsive animations. Perfect for buttons and quick feedback interactions.",
      params: "stiffness: 500, mass: 0.8",
      title: "⚡ Quick Spring Physics",
    },
    exitDuration: 600,
    id: "spring-quick",
  },
  {
    config: {
      damping: 40,
      duration: "1000ms",
      initialDisplacement: 40,
      keyframeCount: 20,
      mass: 1.2,
      stiffness: 200,
    },
    content: {
      description:
        "High damping prevents oscillation, creating smooth, gradual movement. Great for elegant, calm interfaces and accessibility-friendly animations.",
      params: "damping: 40, mass: 1.2",
      title: "🐌 Overdamped Spring Physics",
    },
    exitDuration: 1000,
    id: "spring-overdamped",
  },
] as const;

// Helper components
interface PopoverContentProps {
  content: {
    description: string;
    params?: string;
    title: string;
  };
}

const PopoverContent: React.FC<PopoverContentProps> = ({ content }) => (
  <>
    <strong>{content.title}</strong>
    <p>{content.description}</p>
    {content.params && (
      <div style={{ color: "#666", fontSize: "0.9em", marginTop: "0.5rem" }}>
        <code>{content.params}</code>
      </div>
    )}
  </>
);

interface DemoButtonProps {
  id: string;
  label: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>, id: string) => void;
}

const DemoButton: React.FC<DemoButtonProps> = ({ id, label, onClick }) => (
  <Button
    size={ButtonSizeType.SMALL}
    variant={ButtonVariantType.PRIMARY}
    onClick={(e) => onClick(e, id)}
  >
    {label}
  </Button>
);

/**
 * Helper: inject a @keyframes rule into the document <head>.
 * Reuses existing <style> elements to avoid duplicates.
 */
const injectKeyframes = (id: string, keyframesCSS: string): string => {
  const keyframeName = `spring-${id}-kf`;
  const styleId = `spring-style-${id}`;
  if (!document.getElementById(styleId)) {
    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = `@keyframes ${keyframeName} { ${keyframesCSS} }`;
    document.head.appendChild(style);
  }
  return keyframeName;
};

/**
 * SpringPopover – wraps <Popover> and applies spring physics animation
 * via CSS custom properties (--animation-name, --animation-duration,
 * --animation-timing-function) that popover.css reads via var().
 */
interface SpringPopoverProps {
  children: React.ReactNode;
  config: {
    damping: number;
    duration: string;
    initialDisplacement: number;
    keyframeCount: number;
    mass: number;
    stiffness: number;
  };
  exitDuration: number;
  id: string;
  onClose: () => void;
  open: boolean;
}

const SpringPopover: React.FC<SpringPopoverProps> = ({
  children,
  config,
  exitDuration,
  id,
  onClose,
  open,
}) => {
  // Generate and inject keyframes synchronously (before first paint)
  const keyframeName = useRef<string>("");
  if (!keyframeName.current) {
    const animation = createSpringAnimation("down", {
      ...config,
      placement: "bottom",
    });
    keyframeName.current = injectKeyframes(id, animation.keyframesCSS);
  }

  // Cleanup injected <style> on unmount
  useEffect(() => {
    return () => {
      const style = document.getElementById(`spring-style-${id}`);
      if (style) style.remove();
    };
  }, [id]);

  // Set CSS custom properties on the popover container element.
  // popover.css reads these via var(--animation-name, <default>), etc.
  const popoverContainerRef = useCallback(
    (node: HTMLElement | null) => {
      if (!node || !keyframeName.current) return;
      node.style.setProperty("--animation-name", keyframeName.current);
      node.style.setProperty("--animation-duration", config.duration);
      node.style.setProperty("--animation-timing-function", "linear");
    },
    [config.duration],
  );

  return (
    <Popover
      animationExitDuration={exitDuration}
      open={open}
      overlay={
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.4)",
          }}
        />
      }
      placement="bottom"
      popoverContainerRef={popoverContainerRef}
      onClose={onClose}
    >
      {children}
    </Popover>
  );
};

export const AnimationsDemo: React.FC = () => {
  const [openPopover, setOpenPopover] = useState<string | null>(null);

  const handleButtonClick = (
    _event: React.MouseEvent<HTMLButtonElement>,
    popoverId: string,
  ) => {
    setOpenPopover(popoverId);
  };

  const handleClose = () => {
    setOpenPopover(null);
  };

  return (
    <div className="demo-container">
      {/* Section 1: Default Built-in Animations */}
      <div className="demo-section">
        <h3 className="demo-section-title">🎯 Built-in CSS Animations</h3>
        <p className="demo-section-description">
          Popover uses pure CSS animations that automatically adapt to
          placement. The animations are optimized for performance and work
          consistently across all placements.
        </p>
        <pre className="demo-code-block">
          {`// No animation configuration needed - Popover handles everything
<Popover
  placement="bottom"  // Animation direction determined automatically
  open={isOpen}
  onClose={handleClose}
>
  Content here
</Popover>
`}
        </pre>
        <div className="demo-button-grid">
          {BUILTIN_POPOVERS.map((popover) => {
            const label = popover.content.title
              .replace("🎯 ", "")
              .replace(" Animation", "");
            return (
              <DemoButton
                key={popover.id}
                id={popover.id}
                label={label}
                onClick={handleButtonClick}
              />
            );
          })}
        </div>
      </div>

      {/* Section 2: Spring Physics Custom Animations */}
      <div className="demo-section">
        <h3 className="demo-section-title">
          🌀 Spring Physics Custom Animations
        </h3>
        <p className="demo-section-description">
          Advanced physics-based animations using spring-damper calculations.
          These produce natural, realistic movements with customizable physics
          parameters. Applied via CSS custom properties that popover.css reads
          via var().
        </p>
        <pre className="demo-code-block">
          {`// Spring physics animations with realistic movement
import { createSpringAnimation } from '@/components/popover/animations/spring.animations';

// Create spring animation
const springAnimation = createSpringAnimation('down', {
  stiffness: 300,         // Spring stiffness (higher = faster)
  damping: 15,            // Damping ratio (lower = more bounce)
  mass: 1,                // Object mass (higher = slower)
  duration: '1200ms',     // Total animation duration
  initialDisplacement: 35, // Starting offset distance
  keyframeCount: 30,      // Animation smoothness (more = smoother)
});

// Inject keyframes into the document
const styleEl = document.createElement('style');
styleEl.textContent = \`@keyframes my-spring { \${springAnimation.keyframesCSS} }\`;
document.head.appendChild(styleEl);

// Override animation via popoverContainerRef + CSS custom properties
<Popover
  placement="bottom"
  animationExitDuration={1200}
  popoverContainerRef={(node) => {
    if (node) {
      node.style.setProperty('--animation-name', 'my-spring');
      node.style.setProperty('--animation-duration', '1200ms');
      node.style.setProperty('--animation-timing-function', 'linear');
    }
  }}
/>`}
        </pre>
        <div className="demo-button-grid">
          {SPRING_POPOVERS.map((popover) => {
            const label = popover.content.title.replace(" Physics", "");
            return (
              <DemoButton
                key={popover.id}
                id={popover.id}
                label={label}
                onClick={handleButtonClick}
              />
            );
          })}
        </div>
      </div>

      {/* Built-in Animation Popovers */}
      {BUILTIN_POPOVERS.map((popover) => (
        <Popover
          key={popover.id}
          open={openPopover === popover.id}
          overlay={
            <div
              style={{
                position: "fixed",
                inset: 0,
                backgroundColor: "rgba(0,0,0,0.4)",
              }}
            />
          }
          placement={popover.placement}
          onClose={handleClose}
        >
          <div style={POPOVER_CONTENT_STYLES[popover.styleType]}>
            <PopoverContent content={popover.content} />
          </div>
        </Popover>
      ))}

      {/* Spring Physics Animation Popovers */}
      {SPRING_POPOVERS.map((popover) => (
        <SpringPopover
          key={popover.id}
          config={popover.config}
          exitDuration={popover.exitDuration}
          id={popover.id}
          open={openPopover === popover.id}
          onClose={handleClose}
        >
          <div style={POPOVER_CONTENT_STYLES.extra}>
            <PopoverContent content={popover.content} />
          </div>
        </SpringPopover>
      ))}
    </div>
  );
};
