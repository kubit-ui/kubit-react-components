import { ICONS } from '@/lib/storybook/assets/icons/icons';
import { render } from '@/lib/tests/render/render';

import { ErrorMessage } from '../errorMessage';

const mockProps = {
  icon: { altText: 'altIcon', icon: ICONS.CHECKMARK_THICK },
  id: 'id',
  message: { content: 'Error message' },
  show: true,
  variant: 'DEFAULT',
};

describe('ErrorMessage Component', () => {
  it('Should not render when there is no message content', () => {
    const { container } = render(<ErrorMessage {...mockProps} message="" />);
    expect(container.firstChild).toBeNull();
  });

  it('Should render with an icon and message when show is true', () => {
    const { getByRole, getByText } = render(<ErrorMessage {...mockProps} />);
    const message = getByText(mockProps.message?.content as string);
    const icon = getByRole('img', { name: /altIcon/i });
    expect(message).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  });

  it('Should not render the icon and message when show is false', () => {
    const { queryByAltText, queryByText } = render(
      <ErrorMessage {...mockProps} show={false} />,
    );
    const message = queryByText(mockProps.message?.content as string);
    expect(message).not.toBeInTheDocument();

    const icon = queryByAltText('altIcon');
    expect(icon).not.toBeInTheDocument();
  });
});
