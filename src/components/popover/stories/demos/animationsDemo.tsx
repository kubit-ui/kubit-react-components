import './animationsDemo.css';

import { useEffect, useState } from 'react';

import { Button } from '@/components/button/button';
import { Overlay } from '@/lib/components/overlay/overlay';

import { createSpringAnimation } from '../../animations/spring.animations';
import { Popover } from '../../popover';

// Common styles for popover content
const POPOVER_BASE_STYLES = {
  background: 'white',
  borderRadius: '4px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15), 0 2px 6px rgba(0, 0, 0, 0.1)',
  padding: '1rem',
} as const;

const POPOVER_CONTENT_STYLES = {
  extra: {
    ...POPOVER_BASE_STYLES,
    maxWidth: '350px',
    minWidth: '250px',
  },
  modal: {
    ...POPOVER_BASE_STYLES,
    borderRadius: '8px',
    maxWidth: '500px',
    minWidth: '300px',
    padding: '2rem',
  },
  standard: {
    ...POPOVER_BASE_STYLES,
    minWidth: '200px',
  },
  wide: {
    ...POPOVER_BASE_STYLES,
    maxWidth: '350px',
    minWidth: '200px',
  },
} as const;

// Built-in animation popovers configuration
const BUILTIN_POPOVERS = [
  {
    content: {
      description:
        'Slides from bottom to top (down → up animation). Automatically positioned above the trigger.',
      title: '🎯 Top Animation',
    },
    id: 'default-top',
    placement: 'top' as const,
    styleType: 'standard' as const,
  },
  {
    content: {
      description:
        "Same animation as 'top' but aligned to the left edge. Animation maintains vertical slide behavior.",
      title: '🎯 Top Start Animation',
    },
    id: 'default-top-start',
    placement: 'top-start' as const,
    styleType: 'standard' as const,
  },
  {
    content: {
      description:
        "Same animation as 'top' but aligned to the right edge. Animation maintains vertical slide behavior.",
      title: '🎯 Top End Animation',
    },
    id: 'default-top-end',
    placement: 'top-end' as const,
    styleType: 'standard' as const,
  },
  {
    content: {
      description:
        'Slides from top to bottom (up → down animation). Automatically positioned below the trigger.',
      title: '🎯 Bottom Animation',
    },
    id: 'default-bottom',
    placement: 'bottom' as const,
    styleType: 'standard' as const,
  },
  {
    content: {
      description:
        "Same animation as 'bottom' but aligned to the left edge. Animation maintains vertical slide behavior.",
      title: '🎯 Bottom Start Animation',
    },
    id: 'default-bottom-start',
    placement: 'bottom-start' as const,
    styleType: 'standard' as const,
  },
  {
    content: {
      description:
        "Same animation as 'bottom' but aligned to the right edge. Animation maintains vertical slide behavior.",
      title: '🎯 Bottom End Animation',
    },
    id: 'default-bottom-end',
    placement: 'bottom-end' as const,
    styleType: 'standard' as const,
  },
  {
    content: {
      description:
        'Slides from right to left (right → left animation). Positioned to the left of the trigger.',
      title: '🎯 Left Animation',
    },
    id: 'default-left',
    placement: 'left' as const,
    styleType: 'wide' as const,
  },
  {
    content: {
      description:
        "Same animation as 'left' but aligned to the top edge. Animation maintains horizontal slide behavior.",
      title: '🎯 Left Start Animation',
    },
    id: 'default-left-start',
    placement: 'left-start' as const,
    styleType: 'wide' as const,
  },
  {
    content: {
      description:
        "Same animation as 'left' but aligned to the bottom edge. Animation maintains horizontal slide behavior.",
      title: '🎯 Left End Animation',
    },
    id: 'default-left-end',
    placement: 'left-end' as const,
    styleType: 'wide' as const,
  },
  {
    content: {
      description:
        'Slides from left to right (left → right animation). Positioned to the right of the trigger.',
      title: '🎯 Right Animation',
    },
    id: 'default-right',
    placement: 'right' as const,
    styleType: 'wide' as const,
  },
  {
    content: {
      description:
        "Same animation as 'right' but aligned to the top edge. Animation maintains horizontal slide behavior.",
      title: '🎯 Right Start Animation',
    },
    id: 'default-right-start',
    placement: 'right-start' as const,
    styleType: 'wide' as const,
  },
  {
    content: {
      description:
        "Same animation as 'right' but aligned to the bottom edge. Animation maintains horizontal slide behavior.",
      title: '🎯 Right End Animation',
    },
    id: 'default-right-end',
    placement: 'right-end' as const,
    styleType: 'wide' as const,
  },
  {
    content: {
      description:
        'Fade animation for centered modal behavior. Perfect for dialogs and important content.',
      title: '🎯 Center Animation (Modal Style)',
    },
    id: 'default-center',
    placement: undefined,
    styleType: 'modal' as const,
  },
] as const;

// Spring physics popovers configuration
const SPRING_POPOVERS = [
  {
    additionalClasses: { container: 'spring-bouncy-animation' },
    content: {
      description:
        'Low damping creates multiple oscillations for a playful, bouncy effect. Perfect for fun interactions and attention-grabbing animations.',
      params: 'stiffness: 150, damping: 8',
      title: '🎾 Bouncy Spring Physics',
    },
    id: 'spring-bouncy',
  },
  {
    additionalClasses: { container: 'spring-smooth-animation' },
    content: {
      description:
        'Balanced damping provides natural movement with minimal overshoot. Ideal for professional interfaces and subtle interactions.',
      params: 'stiffness: 300, damping: 25',
      title: '🌊 Smooth Spring Physics',
    },
    id: 'spring-smooth',
    middlewareOptions: undefined,
    styleType: 'extra' as const,
  },
  {
    additionalClasses: { container: 'spring-quick-animation' },
    content: {
      description:
        'High stiffness with lower mass creates snappy, responsive animations. Perfect for buttons and quick feedback interactions.',
      params: 'stiffness: 500, mass: 0.8',
      title: '⚡ Quick Spring Physics',
    },
    id: 'spring-quick',
    middlewareOptions: undefined,
    styleType: 'extra' as const,
  },
  {
    additionalClasses: { container: 'spring-overdamped-animation' },
    content: {
      description:
        'High damping prevents oscillation, creating smooth, gradual movement. Great for elegant, calm interfaces and accessibility-friendly animations.',
      params: 'damping: 40, mass: 1.2',
      title: '🐌 Overdamped Spring Physics',
    },
    id: 'spring-overdamped',
    middlewareOptions: undefined,
    styleType: 'extra' as const,
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
      <div style={{ color: '#666', fontSize: '0.9em', marginTop: '0.5rem' }}>
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
  <Button size="MEDIUM" variant="PRIMARY" onClick={(e) => onClick(e, id)}>
    {label}
  </Button>
);

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

  // Generate spring animations on component mount
  useEffect(() => {
    // Create different spring animation styles
    const springAnimations = [
      {
        className: 'spring-bouncy-animation',
        config: {
          damping: 8,
          duration: '1200ms',
          initialDisplacement: 35,
          keyframeCount: 24,
          mass: 1,
          stiffness: 150,
        },
      },
      {
        className: 'spring-smooth-animation',
        config: {
          damping: 25,
          duration: '800ms',
          initialDisplacement: 30,
          keyframeCount: 20,
          mass: 1,
          stiffness: 300,
        },
      },
      {
        className: 'spring-quick-animation',
        config: {
          damping: 20,
          duration: '600ms',
          initialDisplacement: 25,
          keyframeCount: 16,
          mass: 0.8,
          stiffness: 500,
        },
      },
      {
        className: 'spring-overdamped-animation',
        config: {
          damping: 40,
          duration: '1000ms',
          initialDisplacement: 40,
          keyframeCount: 20,
          mass: 1.2,
          stiffness: 200,
        },
      },
    ];

    // Generate and inject CSS for each spring animation
    springAnimations.forEach(({ className, config }) => {
      // Pass placement to maintain positioning during animation
      const animation = createSpringAnimation('down', {
        ...config,
        placement: 'bottom', // All spring demos use bottom placement
      });

      // Remove existing style if it exists
      const existingStyle = document.getElementById(
        `spring-style-${className}`,
      );
      if (existingStyle) {
        existingStyle.remove();
      }

      // Create complete CSS with keyframes and animation class
      const keyframeName = `${className}-keyframes`;
      const cssContent = `
        @keyframes ${keyframeName} {
          ${animation.keyframesCSS}
        }

        .${className}[data-kbt-closing="false"] {
          animation: ${keyframeName} ${animation.duration} ease-out !important;
        }

        .${className}[data-kbt-closing="true"] {
          animation: ${keyframeName} ${animation.duration} ease-in reverse !important;
        }
      `;

      // Create and inject new style
      const styleElement = document.createElement('style');
      styleElement.id = `spring-style-${className}`;
      styleElement.textContent = cssContent;
      document.head.appendChild(styleElement);
    });

    // Cleanup on unmount
    return () => {
      springAnimations.forEach(({ className }) => {
        const styleElement = document.getElementById(
          `spring-style-${className}`,
        );
        if (styleElement) {
          styleElement.remove();
        }
      });
    };
  }, []);

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
              .replace('🎯 ', '')
              .replace(' Animation', '');
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
          parameters. Applied using additionalClasses to inject custom CSS
          animations.
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

// Apply using additionalClasses
<Popover
  placement="bottom"
  additionalClasses={{ container: "spring-bouncy-animation" }}
  // ... other props
/>`}
        </pre>
        <div className="demo-button-grid">
          {SPRING_POPOVERS.map((popover) => {
            const label = popover.content.title.replace(' Physics', '');
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
          overlay={<Overlay variant="POPOVER" />}
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
        <Popover
          key={popover.id}
          open={openPopover === popover.id}
          overlay={<Overlay variant="POPOVER" />}
          placement="bottom"
          onClose={handleClose}
        >
          <div style={POPOVER_CONTENT_STYLES.extra}>
            <PopoverContent content={popover.content} />
          </div>
        </Popover>
      ))}
    </div>
  );
};
