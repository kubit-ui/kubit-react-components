/* eslint-disable import/no-extraneous-dependencies, consistent-return, no-restricted-imports, @typescript-eslint/no-explicit-any, react/no-danger */
import React, { type FC, useEffect, useState } from 'react';

import Prism from 'prismjs';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-typescript';
import 'prismjs/themes/prism-tomorrow.css';
import { addons, types, useStorybookApi } from 'storybook/manager-api';

const ADDON_ID = 'kubit/source-code';
const PANEL_ID = `${ADDON_ID}/panel`;

interface SourceCodePanelProps {
  active: boolean;
}

const SourceCodePanel: FC<SourceCodePanelProps> = ({ active }) => {
  const [sourceCode, setSourceCode] = useState<string>('');
  const [highlightedCode, setHighlightedCode] = useState<string>('');
  const api = useStorybookApi();

  useEffect(() => {
    if (!active || !api) {
      return;
    }

    const channel = addons.getChannel();

    const updateSourceCode = (): void => {
      try {
        const storyId = api.getUrlState().storyId;
        if (!storyId) {
          setSourceCode('// No story selected');
          return;
        }

        const storyData = api.getData(storyId);
        if (!storyData) {
          setSourceCode('// Story data not available');
          return;
        }

        // Try to get from parameters directly
        const params = storyData.parameters as any;

        // Priority order for source code extraction
        let code: string | undefined;

        // 1. Check docs.source.code (most explicit)
        if (
          params?.docs?.source?.code &&
          typeof params.docs.source.code === 'string'
        ) {
          code = params.docs.source.code;
        }
        // 2. Check docs.source.originalSource
        else if (
          params?.docs?.source?.originalSource &&
          typeof params.docs.source.originalSource === 'string'
        ) {
          code = params.docs.source.originalSource;
        }
        // 3. Check storySource.source
        else if (
          params?.storySource?.source &&
          typeof params.storySource.source === 'string'
        ) {
          code = params.storySource.source;
        }
        // 4. Try to get from transformSource if it's a function
        else if (
          params?.docs?.source?.transform &&
          typeof params.docs.source.transform === 'function'
        ) {
          try {
            code = params.docs.source.transform('', storyData);
          } catch (e) {
            code = undefined;
          }
        }

        if (code) {
          setSourceCode(code);
        } else {
          // Try via channel as last resort
          channel.emit('requestSourceCode', { storyId });
          setSourceCode('// Loading source code...');
        }
      } catch (error) {
        setSourceCode(`// Error loading source: ${error}`);
      }
    };

    // Listen for source code response from preview
    const handleSourceResponse = (response: any) => {
      if (response?.source) {
        setSourceCode(response.source);
      }
    };

    channel.on('sourceCodeResponse', handleSourceResponse);
    channel.on('storyChanged', updateSourceCode);

    updateSourceCode();

    return (): void => {
      channel.off('sourceCodeResponse', handleSourceResponse);
      channel.off('storyChanged', updateSourceCode);
    };
  }, [active, api]);

  // Highlight code with Prism when sourceCode changes
  useEffect(() => {
    if (sourceCode) {
      const highlighted = Prism.highlight(
        sourceCode,
        Prism.languages.tsx || Prism.languages.jsx,
        'tsx',
      );
      setHighlightedCode(highlighted);
    }
  }, [sourceCode]);

  if (!active) {
    return null;
  }

  return (
    <div
      style={{
        backgroundColor: '#2d2d2d',
        height: '100%',
        overflow: 'auto',
        padding: '16px',
      }}
    >
      <div
        style={{
          alignItems: 'center',
          borderBottom: '1px solid #444',
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '16px',
          paddingBottom: '8px',
        }}
      >
        <h3 style={{ color: '#fff', fontSize: '14px', margin: 0 }}>
          📄 Source Code
        </h3>
        <button
          style={{
            background: '#444',
            border: '1px solid #666',
            borderRadius: '4px',
            color: '#fff',
            cursor: 'pointer',
            fontSize: '12px',
            padding: '4px 12px',
          }}
          onClick={() => {
            navigator.clipboard.writeText(sourceCode);
          }}
        >
          Copy
        </button>
      </div>
      <pre
        className="language-tsx"
        style={{
          backgroundColor: '#2d2d2d',
          borderRadius: '4px',
          fontSize: '13px',
          lineHeight: '1.6',
          margin: 0,
          overflow: 'auto',
          padding: '12px',
        }}
      >
        <code
          dangerouslySetInnerHTML={{ __html: highlightedCode }}
          className="language-tsx"
        />
      </pre>
    </div>
  );
};

// Register the addon
addons.register(ADDON_ID, () => {
  addons.add(PANEL_ID, {
    match: ({ viewMode }: { viewMode?: string }) =>
      viewMode === 'story' || viewMode === 'docs',
    render: ({ active }: { active?: boolean }) => (
      <SourceCodePanel active={!!active} />
    ),
    title: 'Source Code',
    type: types.PANEL,
  });
});
