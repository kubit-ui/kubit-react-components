import './kubit.css';
import './storybook.css';

import type { Preview } from '@storybook/react';

import { Provider } from '@kubit-ui-web/design-system/provider';
import { StylesProvider } from '@kubit-ui-web/react-components';
import { useStylesContext } from '@kubit-ui-web/react-components';
// eslint-disable-next-line no-restricted-imports
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

import { Note } from './components/note/note';

const NOTE_PORTAL_ID = 'storybook-note-portal';

/**
 * WARNING: If using notes in stories with a centered layout,
 * you must remove this layout parameter from the story
 * to ensure proper note rendering.
 */
function ensureNotePortal() {
  let portal = document.getElementById(NOTE_PORTAL_ID);
  if (!portal) {
    portal = document.createElement('div');
    portal.id = NOTE_PORTAL_ID;
    document.body.prepend(portal);
  }
  return portal;
}

const ThemeDecorator = ({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: string;
}) => {
  const { changeTheme } = useStylesContext();

  useEffect(() => {
    changeTheme(theme);
  }, [theme]);

  return <>{children}</>;
};

const preview: Preview = {
  decorators: [
    (Story, context) => {
      // Setup source code channel listener
      useEffect(() => {
        if (typeof window === 'undefined') {
          return;
        }

        // Access Storybook's global channel
        const channel = (window as any).__STORYBOOK_ADDONS_CHANNEL__;

        if (!channel) {
          return;
        }

        const handleSourceRequest = () => {
          const sourceCode =
            context.parameters?.docs?.source?.code ||
            context.parameters?.docs?.source?.originalSource ||
            context.parameters?.storySource?.source ||
            '';

          channel.emit('sourceCodeResponse', {
            source: sourceCode,
            storyId: context.id,
          });
        };

        channel.on('requestSourceCode', handleSourceRequest);

        // Send initial source code
        handleSourceRequest();

        return () => {
          channel.off?.('requestSourceCode', handleSourceRequest);
        };
      }, [context.id, context.parameters]);

      const noteParams = context.parameters.note;
      const notePortal =
        typeof window !== 'undefined' ? ensureNotePortal() : null;

      return (
        <>
          {notePortal &&
            noteParams &&
            ReactDOM.createPortal(
              <div
                style={{
                  margin: '0 auto',
                  padding: '1rem',
                }}
              >
                <Note
                  heading={noteParams.title}
                  text={noteParams.text || []}
                  variant={noteParams.variant || 'information'}
                />
              </div>,
              notePortal,
            )}

          <StylesProvider bernovaProvider={Provider as never}>
            <ThemeDecorator theme={context.globals.theme}>
              <Story />
            </ThemeDecorator>
          </StylesProvider>
        </>
      );
    },
  ],
  globalTypes: {
    theme: {
      defaultValue: 'kubit',
      description: 'Global theme for components',
      name: 'Theme',
      toolbar: {
        dynamicTitle: true,
        icon: 'paintbrush',
        items: [{ title: 'kubit', value: 'kubit' }],
        title: 'Theme',
      },
    },
  },

  parameters: {
    // Accessibility
    a11y: {
      config: {
        rules: [
          {
            enabled: true,
            id: 'color-contrast',
          },
          {
            enabled: false, // Disable for component-level testing
            id: 'landmark-one-main',
          },
        ],
      },
    },
    // Backgrounds
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#1a1a1a' },
        { name: 'gray', value: '#f5f5f5' },
      ],
    },
    // Controls
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
      sort: 'requiredFirst',
    },
    // Deep Controls
    deepControls: { enabled: true },
    // Docs
    docs: {
      source: {
        excludeDecorators: true,
        format: false,
        type: 'code',
      },
      toc: {
        headingSelector: 'h2, h3',
        ignoreSelector: '.docs-story',
        title: 'Table of Contents',
      },
    },
    // Layout
    layout: 'centered',
    // Options
    options: {
      storySort: {
        method: 'alphabetical',
        order: [
          'Getting Started',
          ['Introduction', 'Installation', 'Usage'],
          'Components',
          ['Resources', 'Actions', 'Form', 'Navigation', 'Feedback'],
          'Hooks',
          'Utilities',
        ],
      },
    },
    // Viewport
    viewport: {
      viewports: {
        desktop: {
          name: 'Desktop',
          styles: { height: '900px', width: '1440px' },
          type: 'desktop',
        },
        // Custom viewports for your design system
        mobile: {
          name: 'Mobile',
          styles: { height: '667px', width: '375px' },
          type: 'mobile',
        },
        tablet: {
          name: 'Tablet',
          styles: { height: '1024px', width: '768px' },
          type: 'tablet',
        },
        wide: {
          name: 'Wide Screen',
          styles: { height: '1080px', width: '1920px' },
          type: 'desktop',
        },
      },
    },
  },
};

export default preview;
