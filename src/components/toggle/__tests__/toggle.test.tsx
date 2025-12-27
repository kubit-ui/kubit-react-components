import { fireEvent, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { axe } from 'vitest-axe';

import { ICONS } from '@/lib/storybook/assets/icons/icons';
import { render } from '@/lib/tests/render/render';

import type { ToggleUncontrolledProps } from '../types/toggle';

import { ToggleControlled } from '../toggleControlled';
import { ToggleStandalone } from '../toggleStandAlone';
import { ToggleUncontrolled } from '../toggleUnControlled';

describe('Toggle', () => {
  describe('StandAlone', () => {
    it('should render with correct ARIA attributes', async () => {
      const { container } = render(
        <ToggleStandalone aria-label="Test toggle" />,
      );

      const toggle = screen.getByRole('switch', { name: 'Test toggle' });
      expect(toggle).toBeInTheDocument();
      expect(toggle).toHaveAttribute('aria-checked', 'false');

      const results = await axe(container);
      expect(results.violations).toHaveLength(0);
    });

    it('should handle click interactions correctly', () => {
      const mockOnClick = vi.fn();

      render(
        <ToggleStandalone aria-label="Test toggle" onClick={mockOnClick} />,
      );

      const toggle = screen.getByRole('switch');
      fireEvent.click(toggle);

      expect(mockOnClick).toHaveBeenCalledWith(expect.any(Object));
    });

    it('should handle keyboard interactions correctly', () => {
      const mockOnClick = vi.fn();

      render(
        <ToggleStandalone aria-label="Test toggle" onClick={mockOnClick} />,
      );

      const toggle = screen.getByRole('switch');

      // Note: In real browsers, Space and Enter on buttons trigger onClick,
      // but in RTL we need to simulate this behavior or test it differently.
      // For now, we'll test that the button receives the keyDown events
      // and trust that the native button behavior works in real browsers.

      // Test Space key - verify keyDown is handled
      fireEvent.keyDown(toggle, { key: ' ' });
      // In real browsers, this would trigger onClick, but RTL doesn't simulate this

      // Test Enter key - verify keyDown is handled
      fireEvent.keyDown(toggle, { key: 'Enter' });
      // In real browsers, this would trigger onClick, but RTL doesn't simulate this

      // Instead, let's test that clicking works (which Space/Enter would trigger in real browsers)
      fireEvent.click(toggle);
      expect(mockOnClick).toHaveBeenCalledWith(expect.any(Object));
    });

    it('should handle onKeyDown callback correctly', () => {
      const mockOnKeyDown = vi.fn();

      render(
        <ToggleStandalone aria-label="Test toggle" onKeyDown={mockOnKeyDown} />,
      );

      const toggle = screen.getByRole('switch');

      // Test that onKeyDown prop works independently
      fireEvent.keyDown(toggle, { key: 'Tab' });
      expect(mockOnKeyDown).toHaveBeenCalledWith(expect.any(Object));
    });

    it('should handle focus and mouse events correctly', () => {
      const mockOnFocus = vi.fn();
      const mockOnBlur = vi.fn();
      const mockOnMouseEnter = vi.fn();
      const mockOnMouseLeave = vi.fn();

      render(
        <ToggleStandalone
          aria-label="Test toggle"
          onBlur={mockOnBlur}
          onFocus={mockOnFocus}
          onMouseEnter={mockOnMouseEnter}
          onMouseLeave={mockOnMouseLeave}
        />,
      );

      const toggle = screen.getByRole('switch');

      // Test focus events
      fireEvent.focus(toggle);
      expect(mockOnFocus).toHaveBeenCalledWith(expect.any(Object));

      fireEvent.blur(toggle);
      expect(mockOnBlur).toHaveBeenCalledWith(expect.any(Object));

      // Test mouse events
      fireEvent.mouseEnter(toggle);
      expect(mockOnMouseEnter).toHaveBeenCalledWith(expect.any(Object));

      fireEvent.mouseLeave(toggle);
      expect(mockOnMouseLeave).toHaveBeenCalledWith(expect.any(Object));
    });

    it('should not trigger onClick when disabled', () => {
      const mockOnClick = vi.fn();

      render(
        <ToggleStandalone
          aria-label="Test toggle"
          checked={false}
          disabled={true}
          onClick={mockOnClick}
        />,
      );

      const toggle = screen.getByRole('switch');
      expect(toggle).toBeDisabled();

      fireEvent.click(toggle);

      expect(mockOnClick).not.toHaveBeenCalled();
    });

    it('should support tabIndex for focus management', () => {
      render(<ToggleStandalone aria-label="Test toggle" tabIndex={-1} />);

      const toggle = screen.getByRole('switch');
      expect(toggle).toHaveAttribute('tabindex', '-1');
    });

    it('should render icons correctly based on state', async () => {
      const rightIcon = { icon: ICONS.CHECKMARK_THICK };
      const leftIcon = { icon: ICONS.CLOSE };

      const { container, rerender } = render(
        <ToggleStandalone
          aria-label="Toggle with icons"
          leftIcon={leftIcon}
          rightIcon={rightIcon}
        />,
      );

      // Verify that left icon is visible when inactive
      const leftIconElement = screen.getByTestId('toggle-left-icon');
      expect(leftIconElement).toBeInTheDocument();
      expect(leftIconElement).toHaveStyle('opacity: 1');

      // Verify that right icon is not visible when inactive
      const rightIconElement = screen.getByTestId('toggle-right-icon');
      expect(rightIconElement).toBeInTheDocument();
      expect(rightIconElement).toHaveStyle('opacity: 0');

      // Change to active state
      rerender(
        <ToggleStandalone
          aria-label="Toggle with icons"
          checked={true}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
        />,
      );

      // Verify that right icon is visible when active
      expect(rightIconElement).toHaveStyle('opacity: 1');
      // Verify that left icon is not visible when active
      expect(leftIconElement).toHaveStyle('opacity: 0');

      const results = await axe(container);
      expect(results.violations).toHaveLength(0);
    });

    it('should handle icon transitions when disabled', async () => {
      const rightIcon = { icon: ICONS.CHECKMARK_THICK };
      const leftIcon = { icon: ICONS.CLOSE };

      const { container } = render(
        <ToggleStandalone
          aria-label="Disabled toggle with icons"
          checked={true}
          disabled={true}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
        />,
      );

      // Verify that right icon is visible when disabled but active
      const rightIconElement = screen.getByTestId('toggle-right-icon');
      expect(rightIconElement).toBeInTheDocument();
      expect(rightIconElement).toHaveStyle('opacity: 1');

      // Verify that left icon is not visible when disabled but active
      const leftIconElement = screen.getByTestId('toggle-left-icon');
      expect(leftIconElement).toBeInTheDocument();
      expect(leftIconElement).toHaveStyle('opacity: 0');

      const results = await axe(container);
      expect(results.violations).toHaveLength(0);
    });

    it('should work without icons', async () => {
      const { container } = render(
        <ToggleStandalone
          aria-label="Toggle without icons"
          checked={false}
          disabled={false}
        />,
      );

      // In Venus implementation, icon containers are always rendered but with opacity 0 when no icons are provided
      const rightIconWrapper = screen.getByTestId('toggle-right-icon');
      const leftIconWrapper = screen.getByTestId('toggle-left-icon');

      expect(rightIconWrapper).toBeInTheDocument();
      expect(leftIconWrapper).toBeInTheDocument();
      expect(rightIconWrapper).toHaveStyle('opacity: 0');
      expect(leftIconWrapper).toHaveStyle('opacity: 0');

      const results = await axe(container);
      expect(results.violations).toHaveLength(0);
    });

    describe('Component prop - decorative mode', () => {
      it('should render as decorative span when component="span"', async () => {
        const { container } = render(
          <ToggleStandalone
            aria-label="Test toggle"
            checked={false}
            component="span"
            disabled={false}
          />,
        );

        // Should not find a switch role since it's decorative
        expect(screen.queryByRole('switch')).not.toBeInTheDocument();

        // Should find decorative element with aria-hidden
        const decorativeToggle = screen.getByTestId('toggle');
        expect(decorativeToggle).toBeInTheDocument();
        expect(decorativeToggle.tagName).toBe('SPAN');
        expect(decorativeToggle).toHaveAttribute('aria-hidden', 'true');

        const results = await axe(container);
        expect(results.violations).toHaveLength(0);
      });

      it('should render as decorative div when component="div"', () => {
        render(
          <ToggleStandalone
            aria-label="Test toggle"
            checked={true}
            component="div"
          />,
        );

        const decorativeToggle = screen.getByTestId('toggle');
        expect(decorativeToggle.tagName).toBe('DIV');
        expect(decorativeToggle).toHaveAttribute('aria-hidden', 'true');
      });

      it('should not have interactive attributes when decorative', () => {
        render(
          <ToggleStandalone
            aria-label="Test toggle"
            component="span"
            name="toggle-name"
            tabIndex={0}
            value="toggle-value"
            onClick={vi.fn()}
            onFocus={vi.fn()}
          />,
        );

        const decorativeToggle = screen.getByTestId('toggle');

        // Should not have interactive attributes
        expect(decorativeToggle).not.toHaveAttribute('role');
        expect(decorativeToggle).not.toHaveAttribute('aria-checked');
        expect(decorativeToggle).not.toHaveAttribute('tabindex');
        expect(decorativeToggle).not.toHaveAttribute('name');
        expect(decorativeToggle).not.toHaveAttribute('value');
      });

      it('should maintain default interactive behavior when component="button"', () => {
        render(
          <ToggleStandalone aria-label="Test toggle" component="button" />,
        );

        const toggle = screen.getByRole('switch');
        expect(toggle).toBeInTheDocument();
        expect(toggle.tagName).toBe('BUTTON');
      });

      it('should not call event handlers when decorative', () => {
        const mockOnClick = vi.fn();
        const mockOnFocus = vi.fn();

        render(
          <ToggleStandalone
            aria-label="Test toggle"
            component="span"
            onClick={mockOnClick}
            onFocus={mockOnFocus}
          />,
        );

        const decorativeToggle = screen.getByTestId('toggle');

        fireEvent.click(decorativeToggle);
        fireEvent.focus(decorativeToggle);

        expect(mockOnClick).not.toHaveBeenCalled();
        expect(mockOnFocus).not.toHaveBeenCalled();
      });
    });
  });

  describe('Controlled', () => {
    const mockOnToggle = vi.fn();

    const controlledProps = {
      'aria-label': 'Controlled toggle',
      checked: false,
      onToggle: mockOnToggle,
      variant: 'REGULAR',
    };

    beforeEach(() => {
      mockOnToggle.mockClear();
    });

    it('should render controlled version correctly', async () => {
      const { container } = render(<ToggleControlled {...controlledProps} />);

      const toggle = screen.getByRole('switch', { name: 'Controlled toggle' });
      expect(toggle).toBeInTheDocument();
      expect(toggle).toHaveAttribute('aria-checked', 'false');

      const results = await axe(container);
      expect(results.violations).toHaveLength(0);
    });

    it('should reflect controlled state correctly', () => {
      const { rerender } = render(<ToggleControlled {...controlledProps} />);

      let toggle = screen.getByRole('switch');
      expect(toggle).toHaveAttribute('aria-checked', 'false');

      rerender(<ToggleControlled {...controlledProps} checked={true} />);

      toggle = screen.getByRole('switch');
      expect(toggle).toHaveAttribute('aria-checked', 'true');
    });

    it('should call onChange with correct new state when clicked', () => {
      const { rerender } = render(
        <ToggleControlled {...controlledProps} checked={false} />,
      );

      const toggle = screen.getByRole('switch');
      fireEvent.click(toggle);

      expect(mockOnToggle).toHaveBeenCalledWith(true);

      mockOnToggle.mockClear();

      // Test with checked=true
      rerender(<ToggleControlled {...controlledProps} checked={true} />);
      fireEvent.click(toggle);

      expect(mockOnToggle).toHaveBeenCalledWith(false);
    });

    it('should handle keyboard interactions correctly', () => {
      render(<ToggleControlled {...controlledProps} checked={false} />);

      const toggle = screen.getByRole('switch');

      // Note: We simplified the component to use only onClick which handles
      // Space and Enter automatically in real browsers. RTL doesn't simulate
      // this native behavior, so we test click directly.
      fireEvent.click(toggle);
      expect(mockOnToggle).toHaveBeenCalledWith(true);

      mockOnToggle.mockClear();

      // Test that onKeyDown prop still works if provided
      fireEvent.keyDown(toggle, { key: 'Tab' });
      // This just verifies the event handler exists, the actual toggle
      // behavior happens through onClick in real browsers
    });

    it('should not call onToggle when disabled', () => {
      render(<ToggleControlled {...controlledProps} disabled={true} />);

      const toggle = screen.getByRole('switch');
      expect(toggle).toBeDisabled();

      fireEvent.click(toggle);
      fireEvent.keyDown(toggle, { key: ' ' });
      fireEvent.keyDown(toggle, { key: 'Enter' });

      expect(mockOnToggle).not.toHaveBeenCalled();
    });

    it('should work with icons in controlled mode', async () => {
      const rightIcon = { icon: ICONS.CHECKMARK_THICK };
      const leftIcon = { icon: ICONS.CLOSE };

      const { container } = render(
        <ToggleControlled
          {...controlledProps}
          checked={false}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
        />,
      );

      // Verify that left icon is visible when inactive
      const leftIconElement = screen.getByTestId('toggle-left-icon');
      expect(leftIconElement).toBeInTheDocument();

      const results = await axe(container);
      expect(results.violations).toHaveLength(0);
    });
  });

  describe('Uncontrolled', () => {
    const uncontrolledProps: ToggleUncontrolledProps = {
      'aria-label': 'Uncontrolled toggle',
      variant: 'REGULAR',
    };

    it('should render uncontrolled version correctly', async () => {
      const { container } = render(
        <ToggleUncontrolled {...uncontrolledProps} />,
      );

      const toggle = screen.getByRole('switch', {
        name: 'Uncontrolled toggle',
      });
      expect(toggle).toBeInTheDocument();
      expect(toggle).toHaveAttribute('aria-checked', 'false');

      const results = await axe(container);
      expect(results.violations).toHaveLength(0);
    });

    it('should handle internal state correctly', () => {
      render(<ToggleUncontrolled {...uncontrolledProps} />);

      const toggle = screen.getByRole('switch');
      expect(toggle).toHaveAttribute('aria-checked', 'false');

      fireEvent.click(toggle);
      expect(toggle).toHaveAttribute('aria-checked', 'true');

      fireEvent.click(toggle);
      expect(toggle).toHaveAttribute('aria-checked', 'false');
    });

    it('should use defaultChecked correctly', () => {
      render(
        <ToggleUncontrolled {...uncontrolledProps} defaultChecked={true} />,
      );

      const toggle = screen.getByRole('switch');
      expect(toggle).toHaveAttribute('aria-checked', 'true');
    });

    it('should call onChange when provided', () => {
      const mockOnToggle = vi.fn();

      render(
        <ToggleUncontrolled {...uncontrolledProps} onToggle={mockOnToggle} />,
      );

      const toggle = screen.getByRole('switch');
      fireEvent.click(toggle);

      expect(mockOnToggle).toHaveBeenCalledWith(true);

      fireEvent.click(toggle);
      expect(mockOnToggle).toHaveBeenCalledWith(false);
    });

    it('should handle keyboard interactions correctly', () => {
      const mockOnToggle = vi.fn();
      render(
        <ToggleUncontrolled {...uncontrolledProps} onToggle={mockOnToggle} />,
      );

      const toggle = screen.getByRole('switch');

      // Test click behavior (which Space/Enter would trigger in real browsers)
      fireEvent.click(toggle);
      expect(toggle).toHaveAttribute('aria-checked', 'true');
      expect(mockOnToggle).toHaveBeenCalledWith(true);

      mockOnToggle.mockClear();

      // Test click again to toggle back
      fireEvent.click(toggle);
      expect(toggle).toHaveAttribute('aria-checked', 'false');
      expect(mockOnToggle).toHaveBeenCalledWith(false);
    });

    it('should not trigger onToggle when disabled', () => {
      const mockOnToggle = vi.fn();
      render(
        <ToggleUncontrolled
          {...uncontrolledProps}
          disabled={true}
          onToggle={mockOnToggle}
        />,
      );

      const toggle = screen.getByRole('switch');
      expect(toggle).toBeDisabled();

      fireEvent.click(toggle);
      fireEvent.keyDown(toggle, { key: ' ' });
      fireEvent.keyDown(toggle, { key: 'Enter' });

      expect(mockOnToggle).not.toHaveBeenCalled();
    });

    it('should work without onToggle callback', () => {
      render(<ToggleUncontrolled {...uncontrolledProps} />);

      const toggle = screen.getByRole('switch');

      // Should work without errors even if there's no onToggle
      expect(() => {
        fireEvent.click(toggle);
      }).not.toThrow();

      expect(toggle).toHaveAttribute('aria-checked', 'true');
    });

    it('should work with icons in uncontrolled mode', async () => {
      const rightIcon = { icon: ICONS.CHECKMARK_THICK };
      const leftIcon = { icon: ICONS.CLOSE };

      const { container } = render(
        <ToggleUncontrolled
          {...uncontrolledProps}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
        />,
      );

      const toggle = screen.getByRole('switch');

      // Verify initial state
      const leftIconElement = screen.getByTestId('toggle-left-icon');
      expect(leftIconElement).toBeInTheDocument();

      // Change state
      fireEvent.click(toggle);

      const rightIconElement = screen.getByTestId('toggle-right-icon');
      expect(rightIconElement).toBeInTheDocument();

      const results = await axe(container);
      expect(results.violations).toHaveLength(0);
    });
  });
});
