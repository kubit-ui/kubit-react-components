import './storybook.css';

import React, { useEffect } from 'react';

import type { Preview } from '@storybook/react';
import ReactDOM from 'react-dom';

import { KubitProvider } from '../src/lib/provider/kubitProvider/kubitProvider';
import { useStylesContext } from '../src/lib/provider/stylesProvider/stylesProvider';
import '../src/lib/storybook/components/replaceContent/replaceContent';
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
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'kubit',
      toolbar: {
        title: 'Theme',
        dynamicTitle: true,
        icon: 'paintbrush',
        items: [{ value: 'kubit', title: 'kubit' }],
      },
    },
  },
  parameters: {
    // Accessibility
    a11y: {
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: true,
          },
          {
            id: 'landmark-one-main',
            enabled: false, // Disable for component-level testing
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
    // Deep Controls
    deepControls: { enabled: true },
    // Controls
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
      sort: 'requiredFirst',
    },
    // Docs
    docs: {
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
        // Custom viewports for your design system
        mobile: {
          name: 'Mobile',
          styles: { width: '375px', height: '667px' },
          type: 'mobile',
        },
        tablet: {
          name: 'Tablet',
          styles: { width: '768px', height: '1024px' },
          type: 'tablet',
        },
        desktop: {
          name: 'Desktop',
          styles: { width: '1440px', height: '900px' },
          type: 'desktop',
        },
        wide: {
          name: 'Wide Screen',
          styles: { width: '1920px', height: '1080px' },
          type: 'desktop',
        },
      },
    },
  },

  decorators: [
    (Story, context) => {
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
                  padding: '1rem',
                  margin: '0 auto',
                }}
              >
                <Note
                  variant={noteParams.variant || 'information'}
                  heading={noteParams.title}
                  text={noteParams.text || []}
                />
              </div>,
              notePortal,
            )}
          <KubitProvider>
            <ThemeDecorator theme={context.globals.theme}>
              <Story />
            </ThemeDecorator>
          </KubitProvider>
        </>
      );
    },
  ],
};

export default preview;
