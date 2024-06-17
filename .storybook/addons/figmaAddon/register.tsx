import { IconButton } from '@storybook/components';
import { addons, types, useParameter } from '@storybook/manager-api';
import { styled } from '@storybook/theming';

import React from 'react';

const ADDON_ID = 'myaddon/figma';
const PARAM_KEY = 'figmaUrl';

const FigmaIcon = styled.img({
  width: '20px',
  height: '20px',
  marginRight: '10px',
});

addons.register(ADDON_ID, () => {
  addons.add(ADDON_ID, {
    title: 'Figma',
    type: types.TOOL,
    match: ({ viewMode }) => viewMode === 'story',
    render: () => {
      const figmaLink = useParameter(PARAM_KEY, '#');

      if (figmaLink === '#') {
        return null;
      }

      return (
        <IconButton
          key="figma"
          title="Open in Figma"
          onClick={() => window.open(figmaLink, '_blank')}
          placeholder={''}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <FigmaIcon
            src="data:image/svg+xml;base64,PHN2ZyBpZD0iRmxhdCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjU2IDI1NiI+CiAgPHBhdGggZD0iTTE4My4wMzk1NSw5NC4wMDA0OUEzOS45ODcwNiwzOS45ODcwNiwwLDAsMCwxNjIsMjAuMDAxSDk0QTM5Ljk4NzA2LDM5Ljk4NzA2LDAsMCwwLDcyLjk2MDQ1LDk0LjAwMDQ5LDM5Ljk2Mzc1LDM5Ljk2Mzc1LDAsMCwwLDcyLjk2MTQzLDE2MiwzOS45OTI0LDM5Ljk5MjQsMCwxLDAsMTM0LDE5NS45OTk1MXYtMzkuNDdhMzkuOTgwODQsMzkuOTgwODQsMCwxLDAsNDkuMDM5NTUtNjIuNTI5Wk0xOTAsNjAuMDAxYTI4LjAzMTE0LDI4LjAzMTE0LDAsMCwxLTI3Ljk4MDQ3LDI3Ljk5OTUxTDE2Miw4OGwtLjAzODU3LjAwMUwxMzQsODhWMzIuMDAxaDI4QTI4LjAzMTQ1LDI4LjAzMTQ1LDAsMCwxLDE5MCw2MC4wMDFabS0xMjQsMGEyOC4wMzE0NSwyOC4wMzE0NSwwLDAsMSwyOC0yOGgyOFY4OEg5NGwtLjAxOS4wMDA0OUEyOC4wMzEzMiwyOC4wMzEzMiwwLDAsMSw2Niw2MC4wMDFaTTY2LDEyOGEyOC4wMzEyMywyOC4wMzEyMywwLDAsMSwyNy45ODEtMjcuOTk5NTFMOTQsMTAwLjAwMWwyOC0uMDAwNzRWMTU1Ljk5OUw5NCwxNTZBMjguMDMxNDYsMjguMDMxNDYsMCwwLDEsNjYsMTI4Wm0yOCw5NS45OTlBMjcuOTk5NTEsMjcuOTk5NTEsMCwxLDEsOTQsMTY4bDI4LS4wMDA3M3YyOC4wMDAyNEEyOC4wMzEzNSwyOC4wMzEzNSwwLDAsMSw5NCwyMjMuOTk5Wk0xNjIsMTU2YTI3Ljk5OTUyLDI3Ljk5OTUyLDAsMCwxLS4wMzg1Ny01NS45OTlIMTYybC4wMTktLjAwMDQ5QTI3Ljk5OTc2LDI3Ljk5OTc2LDAsMCwxLDE2MiwxNTZaIi8+Cjwvc3ZnPgo="
            alt="Figma"
          />
          Figma
        </IconButton>
      );
    },
  });
});
