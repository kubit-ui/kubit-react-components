import { userEvent } from '@testing-library/user-event';
import { useState } from 'react';
import { axe } from 'vitest-axe';

import { render } from '@/lib/tests/render/render';

import type { CardProps } from '../types/card';

import { Card } from '../card';

const mockProps: CardProps<'DEFAULT' | 'PRIMARY' | 'SECONDARY'> = {
  content: 'Card content',
  footer: 'Card footer',
  header: 'Card header',
  variant: 'DEFAULT',
};

describe('Card Component', () => {
  const renderCard = (props: Partial<CardProps<string>> = {}) =>
    render(<Card {...mockProps} {...props} />);

  it('Should render Card with all sections', async () => {
    const { container, getByText } = renderCard();

    expect(getByText('Card header')).not.toBeNull();
    expect(getByText('Card content')).not.toBeNull();
    expect(getByText('Card footer')).not.toBeNull();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });

  it('Should render Card with only header', async () => {
    const { container, getByText, queryByText } = renderCard({
      content: undefined,
      footer: undefined,
      header: 'Only header',
    });

    expect(getByText('Only header')).not.toBeNull();
    expect(queryByText('Card content')).toBeNull();
    expect(queryByText('Card footer')).toBeNull();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });

  it('Should render Card with only content', async () => {
    const { container, getByText, queryByText } = renderCard({
      content: 'Only content',
      footer: undefined,
      header: undefined,
    });

    expect(queryByText('Card header')).toBeNull();
    expect(getByText('Only content')).not.toBeNull();
    expect(queryByText('Card footer')).toBeNull();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });

  it('Should render Card with only footer', async () => {
    const { container, getByText, queryByText } = renderCard({
      content: undefined,
      footer: 'Only footer',
      header: undefined,
    });

    expect(queryByText('Card header')).toBeNull();
    expect(queryByText('Card content')).toBeNull();
    expect(getByText('Only footer')).not.toBeNull();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });

  it('Should render Card with different variants', async () => {
    const { container: container1 } = renderCard({ variant: 'DEFAULT' });
    const { container: container2 } = renderCard({ variant: 'PRIMARY' });
    const { container: container3 } = renderCard({ variant: 'SECONDARY' });

    expect(container1).toHTMLValidate();
    expect(container2).toHTMLValidate();
    expect(container3).toHTMLValidate();

    const results1 = await axe(container1);
    const results2 = await axe(container2);
    const results3 = await axe(container3);

    expect(results1.violations).toHaveLength(0);
    expect(results2.violations).toHaveLength(0);
    expect(results3.violations).toHaveLength(0);
  });

  it('Should apply selected state', async () => {
    const { container, getByTestId } = renderCard({ state: 'selected' });

    const card = getByTestId('card');
    expect(card).toHaveAttribute('data-state', 'selected');

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });

  it('Should handle onClick event', async () => {
    const handleClick = vi.fn();
    const { getByRole, getByTestId } = renderCard({ onClick: handleClick });

    const card = getByTestId('card');
    expect(card).toHaveAttribute('role', 'button');
    expect(card).toHaveAttribute('tabIndex', '0');

    const button = getByRole('button');
    button.click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('Should handle keyboard navigation when clickable', async () => {
    const handleClick = vi.fn();
    const { getByRole } = renderCard({ onClick: handleClick });

    const button = getByRole('button');

    // Test Enter key
    button.dispatchEvent(
      new KeyboardEvent('keydown', { bubbles: true, key: 'Enter' }),
    );
    expect(handleClick).toHaveBeenCalledTimes(1);

    // Test Space key
    button.dispatchEvent(
      new KeyboardEvent('keydown', { bubbles: true, key: ' ' }),
    );
    expect(handleClick).toHaveBeenCalledTimes(2);
  });

  it('Should not have role or tabIndex when not clickable', async () => {
    const { container, getByTestId } = renderCard();

    const card = getByTestId('card');
    expect(card).not.toHaveAttribute('role');
    expect(card).not.toHaveAttribute('tabIndex');

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });

  it('Should handle mouse events', async () => {
    const handleMouseEnter = vi.fn();
    const handleMouseLeave = vi.fn();
    const user = userEvent.setup();
    const { getByTestId } = renderCard({
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
    });

    const card = getByTestId('card');

    await user.hover(card);
    expect(handleMouseEnter).toHaveBeenCalledTimes(1);

    await user.unhover(card);
    expect(handleMouseLeave).toHaveBeenCalledTimes(1);
  });

  it('Should render React nodes in sections', async () => {
    const customHeader = <div data-testid="custom-header">Custom Header</div>;
    const customContent = (
      <div data-testid="custom-content">Custom Content</div>
    );
    const customFooter = <div data-testid="custom-footer">Custom Footer</div>;

    const { container, getByTestId } = renderCard({
      content: customContent,
      footer: customFooter,
      header: customHeader,
    });

    expect(getByTestId('custom-header')).not.toBeNull();
    expect(getByTestId('custom-content')).not.toBeNull();
    expect(getByTestId('custom-footer')).not.toBeNull();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });

  it('Should work with controlled state', async () => {
    const ControlledCard = () => {
      const [state, setState] = useState<'default' | 'selected'>('default');

      return (
        <Card
          {...mockProps}
          state={state}
          onClick={() =>
            setState(state === 'selected' ? 'default' : 'selected')
          }
        />
      );
    };

    const user = userEvent.setup();
    const { getByRole, getByTestId } = render(<ControlledCard />);

    const card = getByTestId('card');
    expect(card).toHaveAttribute('data-state', 'default');

    // Test click to select
    const button = getByRole('button');
    await user.click(button);
    expect(card).toHaveAttribute('data-state', 'selected');

    // Test click to deselect
    await user.click(button);
    expect(card).toHaveAttribute('data-state', 'default');
  });
});
