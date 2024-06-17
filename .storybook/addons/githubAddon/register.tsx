import { IconButton } from '@storybook/components';
import { addons, types, useParameter } from '@storybook/manager-api';
import { styled } from '@storybook/theming';

import React from 'react';

const ADDON_ID = 'myaddon/github';
const PARAM_KEY = 'githubUrl';

const GithubIcon = styled.img({
  width: '20px',
  height: '20px',
  marginRight: '10px',
});

addons.register(ADDON_ID, () => {
  addons.add(ADDON_ID, {
    title: 'Github',
    type: types.TOOL,
    match: ({ viewMode }) => viewMode === 'story',
    render: () => {
      const githubLink = useParameter(PARAM_KEY, '#');

      if (githubLink === '#') {
        return null;
      }

      return (
        <IconButton
          key="github"
          title="Open in Github"
          onClick={() => window.open(githubLink, '_blank')}
          placeholder={''}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <GithubIcon
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9Imljb25fZ2l0aHViIj4KPHBhdGggaWQ9IlZlY3RvciIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMiAxQzUuOTIyNSAxIDEgNS45MjI1IDEgMTJDMSAxNi44Njc1IDQuMTQ4NzUgMjAuOTc4OCA4LjUyMTI1IDIyLjQzNjNDOS4wNzEyNSAyMi41MzI1IDkuMjc3NSAyMi4yMDI1IDkuMjc3NSAyMS45MTM3QzkuMjc3NSAyMS42NTI1IDkuMjYzNzUgMjAuNzg2MyA5LjI2Mzc1IDE5Ljg2NUM2LjUgMjAuMzczOCA1Ljc4NSAxOS4xOTEyIDUuNTY1IDE4LjU3MjVDNS40NDEyNSAxOC4yNTYzIDQuOTA1IDE3LjI4IDQuNDM3NSAxNy4wMTg3QzQuMDUyNSAxNi44MTI1IDMuNTAyNSAxNi4zMDM4IDQuNDIzNzUgMTYuMjlDNS4yOSAxNi4yNzYyIDUuOTA4NzUgMTcuMDg3NSA2LjExNSAxNy40MTc1QzcuMTA1IDE5LjA4MTIgOC42ODYyNSAxOC42MTM4IDkuMzE4NzUgMTguMzI1QzkuNDE1IDE3LjYxIDkuNzAzNzUgMTcuMTI4NyAxMC4wMiAxNi44NTM3QzcuNTcyNSAxNi41Nzg3IDUuMDE1IDE1LjYzIDUuMDE1IDExLjQyMjVDNS4wMTUgMTAuMjI2MiA1LjQ0MTI1IDkuMjM2MjUgNi4xNDI1IDguNDY2MjVDNi4wMzI1IDguMTkxMjUgNS42NDc1IDcuMDYzNzUgNi4yNTI1IDUuNTUxMjVDNi4yNTI1IDUuNTUxMjUgNy4xNzM3NSA1LjI2MjUgOS4yNzc1IDYuNjc4NzVDMTAuMTU3NSA2LjQzMTI1IDExLjA5MjUgNi4zMDc1IDEyLjAyNzUgNi4zMDc1QzEyLjk2MjUgNi4zMDc1IDEzLjg5NzUgNi40MzEyNSAxNC43Nzc1IDYuNjc4NzVDMTYuODgxMyA1LjI0ODc1IDE3LjgwMjUgNS41NTEyNSAxNy44MDI1IDUuNTUxMjVDMTguNDA3NSA3LjA2Mzc1IDE4LjAyMjUgOC4xOTEyNSAxNy45MTI1IDguNDY2MjVDMTguNjEzOCA5LjIzNjI1IDE5LjA0IDEwLjIxMjUgMTkuMDQgMTEuNDIyNUMxOS4wNCAxNS42NDM4IDE2LjQ2ODggMTYuNTc4NyAxNC4wMjEzIDE2Ljg1MzdDMTQuNDIgMTcuMTk3NSAxNC43NjM4IDE3Ljg1NzUgMTQuNzYzOCAxOC44ODg4QzE0Ljc2MzggMjAuMzYgMTQuNzUgMjEuNTQyNSAxNC43NSAyMS45MTM3QzE0Ljc1IDIyLjIwMjUgMTQuOTU2MyAyMi41NDYyIDE1LjUwNjMgMjIuNDM2M0MxOS44NTEyIDIwLjk3ODggMjMgMTYuODUzOCAyMyAxMkMyMyA1LjkyMjUgMTguMDc3NSAxIDEyIDFaIiBmaWxsPSIjMUIxRjIzIi8+CjwvZz4KPC9zdmc+Cg=="
            alt="github"
          />
          Github
        </IconButton>
      );
    },
  });
});
