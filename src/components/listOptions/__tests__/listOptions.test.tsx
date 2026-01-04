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

  it('Should render with default data-testid when not provided', () => {
    const mockWithoutTestId = { ...MOCK };
    render(<ListOptions {...mockWithoutTestId} />);

    const listOptions = screen.getByTestId('list-options');
    expect(listOptions).toBeDefined();
  });

  it('Should render with multiple options', () => {
    const mockWithMoreOptions = {
      ...MOCK,
      options: [
        ...MOCK.options,
        {
          disabled: false,
          icon: { icon: 'ERROR' },
          label: 'labelTest3',
          value: 3,
          variant: 'SIDE_MENU_LEVEL_1',
        },
      ],
    };

    render(<ListOptions {...mockWithMoreOptions} />);

    expect(screen.getByText('labelTest3')).not.toBeNull();
  });

  it('Should render with disabled options', () => {
    const mockWithDisabledOption = {
      ...MOCK,
      options: [
        {
          disabled: true,
          icon: { icon: 'ERROR' },
          label: 'disabledOption',
          value: 4,
          variant: 'SIDE_MENU_LEVEL_1',
        },
      ],
    };

    render(<ListOptions {...mockWithDisabledOption} />);

    expect(screen.getByText('disabledOption')).not.toBeNull();
  });
});
