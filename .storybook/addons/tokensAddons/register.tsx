import { addons, types } from '@storybook/addons';
import { Meta, Source, Title } from '@storybook/blocks';
import { AddonPanel, Placeholder, Separator, Spaced } from '@storybook/components';
import { useAddonState, useArgs } from '@storybook/manager-api';

import React from 'react';

const ADDON_ID = 'myaddon';
const PANEL_ID = `${ADDON_ID}/panel`;

const formatObject = (obj, level = 0) => {
  return Object.entries(obj).map(([key, value]) => {
    if (typeof value === 'object' && value !== null) {
      return (
        <details
          key={key}
          open={true}
          style={{
            paddingLeft: `${level * 10}px`,
            marginTop: '20px',
            marginBottom: '20px',
          }}
        >
          <summary style={{ fontWeight: 800, fontSize: '1.2em', cursor: 'pointer' }}>{key}</summary>
          {formatObject(value, level + 1)}
        </details>
      );
    } else {
      return (
        <div
          key={key}
          style={{ paddingLeft: `${level * 10}px`, marginTop: '10px', marginBottom: '10px' }}
        >
          <span style={{ fontWeight: 800, fontSize: '1em' }}>{key}:</span>{' '}
          <span style={{ color: 'gray', fontSize: '1em' }}>{value}</span>
        </div>
      );
    }
  });
};

addons.register(ADDON_ID, api => {
  addons.add(PANEL_ID, {
    title: 'Tokens',
    type: types.PANEL,
    render: ({ active }) => {
      const [args] = useArgs();
      const jsonValue = args?.themeArgs?.[args?.variant] ? args?.themeArgs?.[args?.variant] : {};

      return (
        <AddonPanel active={active as boolean}>
          <div style={{ padding: '2rem' }}>
            <Spaced row={3} outer={1}>
              <h2 style={{ fontSize: '1.4em' }}>Theme Tokens</h2>
              {args && (
                <>
                  <div style={{ fontSize: '1.3em' }}>
                    <strong style={{ fontWeight: 700 }}>Variant:</strong> {args.variant}
                  </div>
                </>
              )}
              <div>{formatObject(jsonValue)}</div>
            </Spaced>
          </div>
        </AddonPanel>
      );
    },
  });
});
