import { act, fireEvent, screen } from '@testing-library/react';
import * as React from 'react';

import { axe } from 'jest-axe';

import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';
import { windowMatchMedia } from '@/tests/windowMatchMedia';

import { ActionBottomSheetUnControlled as ActionBottomSheet } from '../actionBottomSheetUnControlled';

window.matchMedia = windowMatchMedia();

describe('ActionBottomSheet component', () => {
  it('Should render ActionBottomSheet component', async () => {
    const { container } = renderProvider(
      <ActionBottomSheet
        closeIcon={{ icon: 'UNICORN', ['aria-label']: 'ariaLabelButton' }}
        open={true}
        title={{ content: 'title' }}
        variant={'DEFAULT'}
      >
        Hello
      </ActionBottomSheet>
    );

    const popover = screen.getByText('Hello');
    expect(popover).toBeInTheDocument();

    const title = screen.getByText('title');
    expect(title).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate({
      rules: {
        'no-inline-style': 'off',
      },
    });
    expect(results).toHaveNoViolations();
  });

  it('Should simulate icon onClick', async () => {
    const { container } = renderProvider(
      <ActionBottomSheet
        closeIcon={{ icon: 'UNICORN', ['aria-label']: 'ariaLabelButton' }}
        open={true}
        title={{ content: 'title' }}
        variant={'DEFAULT'}
      >
        Hello
      </ActionBottomSheet>
    );

    const triggerIcon = screen.getByLabelText('ariaLabelButton');
    fireEvent.click(triggerIcon);

    expect(triggerIcon).not.toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Should execute onCloseInternally when Esc key is pressed', async () => {
    renderProvider(
      <ActionBottomSheet
        closeIcon={{ icon: 'UNICORN', ['aria-label']: 'ariaLabelButton' }}
        open={true}
        title={{ content: 'title' }}
        variant={'DEFAULT'}
      >
        Hello
      </ActionBottomSheet>
    );
    const triggerIcon = screen.getByLabelText('ariaLabelButton');
    await act(async () => {
      fireEvent.keyDown(window, {
        key: 'Escape',
        code: 'Escape',
      });
    });
    expect(triggerIcon).not.toBeInTheDocument();
  });
});
