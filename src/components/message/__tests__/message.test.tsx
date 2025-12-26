import { fireEvent, screen } from '@testing-library/react';
import { axe } from 'vitest-axe';

import { render } from '@/lib/tests/render/render';

import { MessageUnControlled as Message } from '../messageUnControlled';

const MOCK = {
  actionButton: {
    content: 'action text',
    icon: {
      icon: 'UNICORN',
    },
    onClick: vi.fn(),
    size: 'MEDIUM',
    variant: 'PRIMARY',
  },
  content: { content: 'content' },
  infoIcon: { icon: 'UNICORN' },
  open: true,
  title: { content: 'title' },
  variant: 'ERROR',
};

const mockPropsWithTagAndExtraAction = {
  ...MOCK,
  extraActionButton: {
    content: 'extra action',
    icon: { icon: 'UNICORN' },
    onClick: vi.fn(),
    size: 'MEDIUM',
    variant: 'PRIMARY',
  },
  infoIcon: undefined,
};

const mockIllustration = {
  actionButton: {
    content: 'action text',
    icon: {
      icon: 'UNICORN',
    },
    onClick: vi.fn(),
    size: 'MEDIUM',
    variant: 'PRIMARY',
  },
  closeIcon: { onClick: vi.fn() },
  content: { content: <span>content</span> },
  illustration: { illustration: 'UNICORN' },
  open: true,
  title: { content: 'title' },
  variant: 'ERROR',
};

describe('Message component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('Should render Message', async () => {
    const { container } = render(<Message {...MOCK} />);

    expect(screen.getByText('title')).not.toBeNull();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });

  it('Should render tag and extra action', async () => {
    const title = { content: <div>Title React Node</div> };
    const { container } = render(
      <Message
        {...mockPropsWithTagAndExtraAction}
        tag={{
          content: 'Tag',
          variant: 'INFORMATIVE',
        }}
        title={title}
      />,
    );

    expect(
      screen.queryByRole('button', {
        name: mockPropsWithTagAndExtraAction.actionButton.content,
      }),
    ).not.toBeNull();

    expect(
      screen.queryByRole('button', {
        name: mockPropsWithTagAndExtraAction.extraActionButton.content,
      }),
    ).not.toBeNull();

    const tag = screen.getByText('Tag');
    expect(tag).not.toBeNull();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });

  it('Should be execute the action function correctly', async () => {
    const { container } = render(<Message {...MOCK} />);

    const actionButton = screen.getByRole('button');
    fireEvent.click(actionButton);
    expect(MOCK.actionButton.onClick).toHaveBeenCalled();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });

  it('Should allow close the message', async () => {
    const { container } = render(
      <Message
        {...MOCK}
        actionButton={{ ...MOCK.actionButton, content: undefined }}
        closeIcon={{ icon: 'UNICORN', onClick: vi.fn() }}
      />,
    );

    expect(screen.getByText('title')).not.toBeNull();

    const closeButton = screen.getByRole('button');
    fireEvent.click(closeButton);

    expect(screen.queryByText('title')).toBeNull();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });
  it('Should have a right html structure, when have a illustration', async () => {
    const { container } = render(<Message {...mockIllustration} />);

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });

  it('Click on Message container when it is a link', async () => {
    const messageContainerProps = {
      onClick: vi.fn(),
      target: '_blank',
      url: 'https://www.google.com',
    };

    const { container } = render(
      <Message
        {...MOCK}
        actionButton={undefined}
        messageContainerProps={messageContainerProps}
      />,
    );

    const parentContainer = screen.getAllByRole('link')[0];
    fireEvent.click(parentContainer);
    expect(messageContainerProps.onClick).toHaveBeenCalled();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });
  it('Click on titleAndContentContainer container when it is a link', async () => {
    const titleAndContentContainerProps = {
      onClick: vi.fn(),
      target: '_blank',
      url: 'https://www.google.com',
    };

    const { container } = render(
      <Message
        {...MOCK}
        actionButton={undefined}
        titleAndContentContainerProps={titleAndContentContainerProps}
      />,
    );

    const parentContainer = screen.getAllByRole('link')[0];
    fireEvent.click(parentContainer);
    expect(titleAndContentContainerProps.onClick).toHaveBeenCalled();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });
  it('Show links and inlineLink', async () => {
    const links = [
      { content: 'Link 1 Array', url: '#', variant: 'SECONDARY' },
      { content: 'Link 2 Array', url: '#', variant: 'SECONDARY' },
    ];
    const inlineLink = {
      content: 'Inline Link',
      url: '#',
      variant: 'SECONDARY',
    };

    const { container } = render(
      <Message
        {...MOCK}
        actionButton={undefined}
        inlineLink={inlineLink}
        links={links}
      />,
    );

    const linkElement1 = screen.getByRole('link', { name: /Link 1 Array/i });
    const linkElement2 = screen.getByRole('link', { name: /Link 2 Array/i });
    const inlineLinkElement = screen.getByRole('link', {
      name: /Inline Link/i,
    });

    expect(linkElement1).not.toBeNull();
    expect(linkElement2).not.toBeNull();
    expect(inlineLinkElement).not.toBeNull();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });
});
