import type { Meta, StoryObj } from '@storybook/react';

import { useEffect, useState } from 'react';

import { Button } from '@/components/button/button';
import { createSpringAnimation } from '@/components/popover/animations/spring.animations';
import { ElementOrIcon } from '@/lib/components/elementOrIcon/elementOrIcon';
import {
  ButtonSizeType,
  ButtonVariantType,
} from '@/lib/designSystem/kubit/components/button/variants';
import { ICONS } from '@/lib/storybook/assets/icons/icons';

import { Snackbar as Story } from '../snackbar';
import { argtypes } from './argtypes';

const meta = {
  argTypes: argtypes(),
  component: Story,
  parameters: {
    githubUrl:
      'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/snackbarV2',
    note: {
      text: [
        <span key="note-1">
          Snackbar does not have internal state management. Use the{' '}
          <strong>open</strong> prop to control visibility and the{' '}
          <strong>onClose</strong> callback to handle closing events. The
          snackbar will automatically close after the timeout expires, unless it
          is hovered or any element inside receives focus. When hovering or
          focusing stops, the timeout restarts.
        </span>,
        <span key="note-2">
          The <strong>children</strong> prop accepts any React node as content -
          the layout shown below is just an example implementation. Any manual
          close functionality must be implemented in your custom content.
        </span>,
        <span key="note-3">
          The snackbar position is controlled by the <strong>popover</strong>{' '}
          configuration. The animation shown here is configured using{' '}
          <strong>additionalClasses</strong> with realistic spring physics from{' '}
          <strong>createSpringAnimation()</strong>. See Popover stories for more
          details about placement options, positioning controls, and animation
          examples.
        </span>,
        <span key="note-4">
          This is a behavioral demonstration and should not be used for
          accessibility testing as it may not meet all accessibility
          requirements.
        </span>,
      ],
      theme: 'information',
    },
  },
  tags: ['resources'],
  title: 'Components/Feedback/Snackbar',
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const StoryWithHooks = (args) => {
  const [isOpen, setIsOpen] = useState(args.open);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    setIsOpen(args.open);
  }, [args.open]);

  // Generate spring animation CSS on component mount
  useEffect(() => {
    const className = 'snackbar-spring-animation';
    const keyframeName = `${className}-keyframes`;

    const springAnimation = createSpringAnimation('down', {
      damping: 10,
      duration: '1200ms',
      initialDisplacement: 40,
      keyframeCount: 30,
      mass: 1,
      placement: 'bottom',
      stiffness: 200,
    });

    const existingStyle = document.getElementById(`style-${className}`);
    if (existingStyle) {
      existingStyle.remove();
    }
    const cssContent = `
      @keyframes ${keyframeName} {
        ${springAnimation.keyframesCSS}
      }

      @keyframes slide-down-exit {
        0% { opacity: 1; transform: translateX(-50%) translateY(0); }
        25% { opacity: 0.9; transform: translateX(-50%) translateY(10px); }
        50% { opacity: 0.7; transform: translateX(-50%) translateY(30px); }
        75% { opacity: 0.4; transform: translateX(-50%) translateY(60px); }
        100% { opacity: 0; transform: translateX(-50%) translateY(80px); }
      }

      /* Spring entrance animation */
      [data-kbt-id="popover"][data-kbt-placement="bottom"].${className}[data-snackbar-closing="false"] {
        animation: ${keyframeName} ${springAnimation.duration} ease-out ;
        transform-origin: center top ;
      }

      /* Slide-down exit animation with high specificity */
      html body [data-kbt-id="popover"][data-kbt-placement="bottom"].${className}[data-snackbar-closing="true"],
      html body [data-kbt-id="popover"].${className}[data-snackbar-closing="true"],
      html body .${className}[data-snackbar-closing="true"] {
        animation: slide-down-exit 800ms cubic-bezier(0.4, 0.0, 1.0, 1.0) ;
        animation-fill-mode: forwards ;
        transform-origin: center top ;
        pointer-events: none ;
        will-change: transform, opacity ;
      }
    `;

    const styleElement = document.createElement('style');
    styleElement.id = `style-${className}`;
    styleElement.textContent = cssContent;
    document.head.appendChild(styleElement);

    return () => {
      const cleanupStyleElement = document.getElementById(`style-${className}`);
      if (cleanupStyleElement) {
        cleanupStyleElement.remove();
      }
    };
  }, []);

  const handleOpenSnackbar = () => {
    setIsClosing(false);
    setIsOpen(true);
  };

  const handleCloseSnackbar = () => {
    setIsClosing(true);

    // Force animation on DOM element to ensure it executes
    setTimeout(() => {
      let popoverElement = document.querySelector(
        '[data-kbt-id="popover"][data-snackbar-closing="true"]',
      ) as HTMLElement;

      if (!popoverElement) {
        popoverElement = document.querySelector(
          '.snackbar-spring-animation[data-snackbar-closing="true"]',
        ) as HTMLElement;
      }

      if (!popoverElement) {
        popoverElement = document.querySelector(
          '[data-kbt-id="popover"].snackbar-spring-animation',
        ) as HTMLElement;
      }

      if (popoverElement) {
        popoverElement.style.setProperty(
          'animation',
          'slide-down-exit 800ms cubic-bezier(0.4, 0.0, 1.0, 1.0)',
          'important',
        );
        popoverElement.style.setProperty(
          'animation-fill-mode',
          'forwards',
          'important',
        );
        popoverElement.style.setProperty(
          'transform-origin',
          'center top',
          'important',
        );
        popoverElement.style.setProperty('pointer-events', 'none', 'important');
      }
    }, 10);

    // Wait for animation to complete before closing
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 850);
  };

  const popoverProps = {
    ...args.popover,
    'data-snackbar-closing': isClosing.toString(),
  };

  return (
    <>
      <Button
        size={ButtonSizeType.LARGE}
        variant={ButtonVariantType.PRIMARY}
        onClick={handleOpenSnackbar}
      >
        Open snackbar
      </Button>
      <Story
        {...args}
        open={isOpen}
        popover={popoverProps}
        onClose={() => {
          // Prevent immediate closing - handled manually by handleCloseSnackbar
        }}
      >
        <div
          style={{
            alignItems: 'center',
            background: '#E6F6F6',
            border: '1px solid #23779A',
            borderRadius: '4px',
            boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.25)',
            color: '#1A1A1A',
            display: 'flex',
            fontSize: '14px',
            fontWeight: 500,
            justifyContent: 'space-between',
            minHeight: '48px',
            padding: '12px 16px',
            width: '100%',
          }}
        >
          <ElementOrIcon
            color="#1A1A1A"
            height="20px"
            icon={ICONS.PLACEHOLDER}
            width="20px"
          />
          <span
            style={{
              flex: 1,
              lineHeight: '1.4',
              margin: '0 12px',
              textAlign: 'left',
            }}
          >
            This is a snackbar message
          </span>
          <ElementOrIcon
            color="#1A1A1A"
            height="20px"
            icon={ICONS.CLOSE}
            width="20px"
            onClick={handleCloseSnackbar}
          />
        </div>
      </Story>
    </>
  );
};

const commonArgs = {
  open: false,
  popover: {
    additionalClasses: {
      arrow: '',
      popover: 'snackbar-spring-animation',
    },
    disableAnimations: true,
    disableAutoFocusFirstDescendant: true,
    middlewareOptions: {
      edgePadding: 20,
    },
    placement: 'bottom' as const,
    zIndex: 500,
  },
};

export const PopoverBodyLikeAnchorElement: Story = {
  args: {
    ...commonArgs,
  },
  parameters: {
    docs: {
      source: {
        code: `import { useEffect, useState } from 'react';
import { createSpringAnimation } from '@/components/popover/animations/spring.animations';

const SnackbarWithAnimation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  // Generate spring animation CSS
  useEffect(() => {
    const className = 'snackbar-spring-animation';
    const keyframeName = \`\${className}-keyframes\`;

    const springAnimation = createSpringAnimation('down', {
      damping: 10,
      duration: '1200ms',
      initialDisplacement: 40,
      keyframeCount: 30,
      mass: 1,
      placement: 'bottom',
      stiffness: 200,
    });

    const existingStyle = document.getElementById(\`style-\${className}\`);
    if (existingStyle) {
      existingStyle.remove();
    }

    const cssContent = \`
      @keyframes \${keyframeName} {
        \${springAnimation.keyframesCSS}
      }

      @keyframes slide-down-exit {
        0% { opacity: 1; transform: translateX(-50%) translateY(0); }
        100% { opacity: 0; transform: translateX(-50%) translateY(80px); }
      }

      [data-kbt-id="popover"].\${className}[data-snackbar-closing="false"] {
        animation: \${keyframeName} \${springAnimation.duration} ease-out;
        transform-origin: center top;
      }

      [data-kbt-id="popover"].\${className}[data-snackbar-closing="true"] {
        animation: slide-down-exit 800ms cubic-bezier(0.4, 0.0, 1.0, 1.0);
        animation-fill-mode: forwards;
        pointer-events: none;
      }
    \`;

    const styleElement = document.createElement('style');
    styleElement.id = \`style-\${className}\`;
    styleElement.textContent = cssContent;
    document.head.appendChild(styleElement);

    return () => {
      const cleanupStyleElement = document.getElementById(\`style-\${className}\`);
      if (cleanupStyleElement) {
        cleanupStyleElement.remove();
      }
    };
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 850);
  };

  const popoverProps = {
    additionalClasses: { container: 'snackbar-spring-animation' },
    disableAnimations: true,
    placement: 'bottom',
    'data-snackbar-closing': isClosing.toString(),
  };

  return (
    <Snackbar
      open={isOpen}
      popover={popoverProps}
      onClose={() => {}} // Prevent immediate closing
    >
      {/* Your snackbar content */}
    </Snackbar>
  );
};`,
      },
    },
  },
  render: ({ ...args }) => <StoryWithHooks {...args} />,
};
