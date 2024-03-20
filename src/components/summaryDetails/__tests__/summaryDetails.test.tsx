import { fireEvent, screen } from '@testing-library/react';
import * as React from 'react';

import { axe } from 'jest-axe';

// render utils
import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';
import { ROLES } from '@/types';

import { SummaryDetailsUnControlled } from '../summaryDetailsUnControlled';

const mockProps = {
  variant: 'ACCORDION',
  title: { content: 'Title SummaryDetails' },
  description: {
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum molestie mauris necdec bibendum. Donec eget mauris feugiat, mollis velit quis, euismod ante. Donec consectetur mi id luctus pulvinar. Fusce sed urna sit amet ligula sagittis varius. Sed laoreet ex in ipsum auctor, in condimentum dolor bibendum.',
  },
  icon: { icon: 'CHEVRON_DOWN' },
  children: 'Hola mundo',
};

describe('SummaryDetails', () => {
  it('Default is closed. Show title and description (if present)', async () => {
    const { container } = renderProvider(<SummaryDetailsUnControlled {...mockProps} />);

    const title = screen.getByText(mockProps.title.content);
    const description = screen.getByText(mockProps.description.content);
    const children = screen.queryByText(mockProps.children);

    expect(title).toBeVisible();
    expect(description).toBeVisible();
    expect(children).not.toBeVisible();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });
  it('Can be rendered opened.', async () => {
    const { container } = renderProvider(<SummaryDetailsUnControlled {...mockProps} open />);

    const title = screen.getByText(mockProps.title.content);
    const description = screen.getByText(mockProps.description.content);
    const children = screen.getByText(mockProps.children);

    expect(title).toBeVisible();
    expect(description).toBeVisible();
    expect(children).toBeVisible();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('When clicking in the summary it can open or close the details', () => {
    renderProvider(<SummaryDetailsUnControlled {...mockProps} />);

    expect(screen.queryByText(mockProps.children)).not.toBeVisible();

    const trigger = screen.getByRole(ROLES.GROUP);
    fireEvent.click(trigger);

    expect(screen.queryByText(mockProps.children)).toBeVisible();
  });
  it('When clicking in the details body when opened, details is not closed (preventing defaullt behaviour)', () => {
    renderProvider(<SummaryDetailsUnControlled {...mockProps} open={true} />);

    const children = screen.getByText(mockProps.children);
    expect(children).toBeVisible();

    fireEvent.click(children);

    expect(children).toBeVisible();
  });

  it('Can have differents icons when close and opening', () => {
    renderProvider(
      <SummaryDetailsUnControlled
        {...mockProps}
        icon={{ icon: 'icon1' }}
        leftIcon={{ icon: 'CHEVRON_DOWN' }}
        openIcon={{ icon: 'icon2' }}
      />
    );

    expect(screen.queryByText(mockProps.children)).not.toBeVisible();

    const trigger = screen.getByRole(ROLES.GROUP);
    fireEvent.click(trigger);

    expect(screen.queryByText(mockProps.children)).toBeVisible();
  });
});
