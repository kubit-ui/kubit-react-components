import React from 'react';

import { axe } from 'jest-axe';

import { ICONS } from '@/assets/storybook/icons/icons';
import { ILLUSTRATIONS } from '@/assets/storybook/illustrations/illustrations';
import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';

// fixture
import { IconHighlightedSizeType } from '../../iconHighlighted/types/size';
import { DecorativeElement } from '../decorativeElementStandAlone';
import { DecorativePropsType, DecorativeType } from '../types/decorativeElement';

const illustration = ILLUSTRATIONS.ILLUSTRATION;
const icon = ICONS.ICON_CHEVRON_DOWN;

const decorativeItems: DecorativePropsType = {
  [DecorativeType.ICON]: {
    icon: icon || ICONS.ICON_PLACEHOLDER,
    altText: 'icon alt text',
    color: '#ff0000',
  },
  [DecorativeType.ICON_HIGHLIGHTED]: {
    icon: icon || 'ADD',
    altText: 'icon highlighted alt text',
    variant: 'SQUARE',
    size: IconHighlightedSizeType.MEDIUM,
    color: '#000',
    backgroundColor: '#ccc',
  },
  [DecorativeType.ILLUSTRATION]: {
    illustration: illustration || ILLUSTRATIONS.ILLUSTRATION,
    height: '6rem',
    width: '6rem',
  },
  [DecorativeType.AVATAR]: {
    initials: { content: 'BS' },
    dot: {
      variant: 'BIG',
      size: 'DEFAULT',
    },
    size: 'LARGE',
  },
};

const dataTestId = 'decorativeElement';

jest.mock('../../../assets/storybook/icons/icon_chevron_down.svg', () => 'mocked-asset');

it('should be have a right HTML structure', async () => {
  const { container } = renderProvider(
    <DecorativeElement
      dataTestId={dataTestId}
      element={{ [DecorativeType.ICON]: decorativeItems[DecorativeType.ICON] }}
    />
  );

  const results = await axe(container);
  expect(container).toHTMLValidate();
  expect(results).toHaveNoViolations();
});
it('should be show the iconhighlighted when its set', () => {
  const { getByTestId } = renderProvider(
    <DecorativeElement
      dataTestId={dataTestId}
      element={{
        [DecorativeType.ICON_HIGHLIGHTED]: decorativeItems[DecorativeType.ICON_HIGHLIGHTED],
      }}
    />
  );
  const iconhighlighted = getByTestId(dataTestId);

  expect(iconhighlighted).toBeInTheDocument();
});
it('should be show the avatar when its set', () => {
  const { getByTestId } = renderProvider(
    <DecorativeElement
      dataTestId={dataTestId}
      element={{
        [DecorativeType.AVATAR]: decorativeItems[DecorativeType.AVATAR],
      }}
    />
  );
  const avatar = getByTestId(dataTestId);

  expect(avatar).toBeInTheDocument();
});
