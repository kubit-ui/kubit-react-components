// TO DO: RESOLVE THE TESTS
import { screen } from '@testing-library/react';

// import { axe } from 'vitest-axe';

import { render } from '@/lib/tests/render/render';

import { ListOptions } from '../listOptions';

// import { axe } from 'vitest-axe';

// import { render } from '@/lib/tests/render/render';

// import { ListOptions } from '../listOptions';

const MOCK = {
  content: <div>Content</div>,
  onOptionClick: vi.fn(),
  options: [
    {
      disabled: false,
      icon: { icon: 'ERROR' },
      label: 'labelTest',
      value: 1,
      variant: 'SIDE_MENU_LEVEL_1',
    },
    {
      disabled: false,
      icon: { icon: 'ERROR' },
      label: 'labelTest2',
      value: 2,
      variant: 'SIDE_MENU_LEVEL_1',
    },
  ],
  optionVariant: 'DEFAULT',
  title: { content: 'title' },
  variant: 'DEFAULT',
};

describe('ListOptions component', () => {
  it('Should render  ListOptions component', async () => {
    const ref = vi.fn();
    render(<ListOptions ref={ref} {...MOCK} />);

    expect(screen.getByText('labelTest')).not.toBeNull();
  });

  it('Arias can be specified for the options container', async () => {
    const ref = vi.fn();
    render(
      <ListOptions
        ref={ref}
        {...MOCK}
        optionsContainerArias={{ 'aria-label': 'label' }}
      />,
    );

    expect(screen.getByTestId('list-options')).not.toBeNull();
  });

  // it('Should render ListOptions component with onClick option', async () => {
  //   // const { container } = render(<ListOptions {...MOCK} />);

  //   const triggerButton = screen.getByTestId('list-option');
  //   fireEvent.click(triggerButton);

  //   expect(MOCK.onOptionClick).toHaveBeenCalled();
  // });

  // it('Execute onFucus must provide the focus', async () => {
  //   const { container } = render(<ListOptions {...MOCK} />);

  //   const option = screen.getByRole('option', { name: 'labelTest' });
  //   fireEvent.focus(option);

  //   expect(option).toHaveFocus();
  // });

  it('Should render ListOptions component with selectedValue equal to first option', async () => {
    const newMockProps = {
      ...MOCK,
      selectedValue: 1,
    };

    render(<ListOptions {...newMockProps} />);

    expect(screen.getByText('labelTest')).not.toBeNull();
  });
});
