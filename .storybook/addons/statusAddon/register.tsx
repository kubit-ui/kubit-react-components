import { Div } from '@storybook/components';
import { addons, types } from '@storybook/manager-api';
import { useParameter } from '@storybook/manager-api';

import React from 'react';

const ADDON_ID = 'myaddon/status';
const PARAM_KEY = 'status';

addons.register(ADDON_ID, () => {
  addons.add(ADDON_ID, {
    title: 'Status',
    type: types.TOOL,
    match: ({ viewMode }) => viewMode === 'story',
    render: () => {
      const status = useParameter(PARAM_KEY, '#');

      if (status === '#') {
        return null;
      }

      if (status === 'DEPRECATED') {
        return (
          <Div
            style={{
              backgroundColor: 'rgb(223, 43, 81)',
              color: '#FFF',
              padding: '5px 15px',
              fontWeight: 'bold',
            }}
          >
            Deprecated
          </Div>
        );
      }

      return <Div></Div>;
    },
  });
});
