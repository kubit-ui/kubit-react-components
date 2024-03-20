import { fireEvent, screen } from '@testing-library/react';
import * as React from 'react';

import { axe } from 'jest-axe';

import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';
import { ROLES } from '@/types';

import { Message } from '../index';

const MOCK = {
  title: { content: 'title' },
  content: { content: 'content' },
  infoIcon: { icon: 'UNICORN' },
  actionButton: {
    content: 'action text',
    icon: {
      icon: 'UNICORN',
    },
    onClick: jest.fn(),
    variant: 'PRIMARY',
    size: 'MEDIUM',
  },
  variant: 'ERROR',
  open: true,
  closeIcon: { onClick: jest.fn() },
};

const mockPropsWithTagAndExtraAction = {
  ...MOCK,
  infoIcon: undefined,
  extraActionButton: {
    content: 'extra action',
    onClick: jest.fn(),
    icon: { icon: 'UNICORN' },
    variant: 'PRIMARY',
    size: 'MEDIUM',
  },
};

const mockIllustration = {
  title: { content: 'title' },
  content: { content: <span>content</span> },
  illustration: { illustration: 'UNICORN' },
  actionButton: {
    content: 'action text',
    icon: {
      icon: 'UNICORN',
    },
    onClick: jest.fn(),
    variant: 'PRIMARY',
    size: 'MEDIUM',
  },
  variant: 'ERROR',
  open: true,
  closeIcon: { onClick: jest.fn() },
};

describe('Message component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Should render Message', async () => {
    const { container } = renderProvider(<Message {...MOCK} />);

    expect(screen.getByText('title')).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Should render tag and extra action', async () => {
    const { container } = renderProvider(
      <Message
        {...mockPropsWithTagAndExtraAction}
        tag={{
          variant: 'SQUARE',
          option: 'INFORMATIVE',
          status: 'NORMAL',
          content: 'Tag',
        }}
      />
    );

    expect(
      screen.queryByRole('button', { name: mockPropsWithTagAndExtraAction.actionButton.content })
    ).not.toBeNull();

    expect(
      screen.queryByRole('button', {
        name: mockPropsWithTagAndExtraAction.extraActionButton.content,
      })
    ).not.toBeNull();

    const tag = screen.getByText('Tag');
    expect(tag).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Should be execute the action function correctly', async () => {
    const { container } = renderProvider(<Message {...MOCK} />);

    const actionButton = screen.getByRole(ROLES.BUTTON);
    fireEvent.click(actionButton);
    expect(MOCK.actionButton.onClick).toHaveBeenCalled();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Should allow close the message', async () => {
    const { container } = renderProvider(
      <Message
        {...MOCK}
        actionButton={{ ...MOCK.actionButton, content: undefined }}
        closeIcon={{ icon: 'UNICORN', onClick: jest.fn() }}
      />
    );

    expect(screen.getByText('title')).toBeInTheDocument();

    const closeButton = screen.getByRole(ROLES.BUTTON);
    fireEvent.click(closeButton);

    expect(screen.queryByText('title')).not.toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });
  it('Should have a right html structure, when have a illustration', async () => {
    const { container } = renderProvider(<Message {...mockIllustration} />);

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });
});
