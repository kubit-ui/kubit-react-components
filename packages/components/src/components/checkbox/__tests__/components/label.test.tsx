import { screen } from '@testing-library/react';

import { render } from '@/lib/tests/render/render';

import { Label } from '../../components/label';

describe('Checkbox Label Component', () => {
  const inputId = 'test-checkbox-id';
  const styles = {
    label: {
      color: 'red',
      cursor: 'pointer',
      font_variant: 'body',
      font_weight: 400,
    },
  };

  const commonProps = {
    inputId,
    styles,
  };

  it('should render null when content is not provided', () => {
    const { container } = render(<Label {...commonProps} />);
    expect(container.firstChild).toBeNull();
  });

  it('should render a label with string content', () => {
    const testContent = 'Test Label Content';
    render(<Label content={testContent} inputId={inputId} />);

    const labelElement = screen.getByText(testContent);
    expect(labelElement).toBeInTheDocument();
    expect(labelElement.tagName).toBe('LABEL');
  });

  it('should render a custom JSX element when provided', () => {
    const testId = 'custom-element';
    const customElement = <div data-testid={testId}>Custom Content</div>;

    render(<Label content={customElement} inputId={inputId} />);

    expect(screen.getByTestId(testId)).toBeInTheDocument();
    expect(screen.queryByRole('label')).not.toBeInTheDocument();
  });
});
