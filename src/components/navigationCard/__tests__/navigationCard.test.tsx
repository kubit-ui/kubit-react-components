import { screen } from '@testing-library/react';
import * as React from 'react';

import { axe } from 'jest-axe';

import { ICONS, ILLUSTRATIONS } from '@/assets';
import { DecorativePropsType, DecorativeType } from '@/components/decorativeElement';
import { IIconHighlighted, IconHighlightedSizeType } from '@/components/iconHighlighted';
import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';

import { NavigationCard } from '../index';

const illustration = ILLUSTRATIONS.ILLUSTRATION;
const icon = ICONS.ICON_CHEVRON_DOWN;

const decorativeItems: DecorativePropsType = {
  [DecorativeType.ICON]: {
    icon: icon || ICONS.ICON_PLACEHOLDER,
    altText: 'icon alt text',
    color: '#2ba685',
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
    size: 'LARGE',
    dot: {
      variant: 'BIG',
      size: 'DEFAULT',
    },
  },
};

const mockProps = {
  onClick: jest.fn(),
  title: { content: 'text' },
  arrowIcon: { icon: 'CLOSE' },
  arrowIconText: { content: 'arrowIconAltText' },
  dataTestId: 'NavigationCard',
  url: 'www.google.com',
};

describe('NavigationCard component', () => {
  it('Renders and has a valid HTML structure', async () => {
    const { container } = renderProvider(
      <NavigationCard {...mockProps} variant="PRIMARY_ICON_HIGHLIGHTED" />
    );

    const navigationCard = screen.getByTestId(mockProps.dataTestId as string);
    expect(navigationCard).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Should render an arrow icon if its a simple variant', () => {
    renderProvider(<NavigationCard {...mockProps} variant="PRIMARY_ICON" />);
    const arrowIcon = screen.getByTestId(`${mockProps.dataTestId}ArrowIcon`);

    expect(arrowIcon).toBeInTheDocument();
  });

  it('Should render a description when provided', () => {
    renderProvider(
      <NavigationCard
        {...mockProps}
        decorative={{ [DecorativeType.AVATAR]: decorativeItems[DecorativeType.AVATAR] }}
        description={{ content: 'The description, to expand the info' }}
        variant="PRIMARY_ICON_HIGHLIGHTED"
      />
    );
    const description = screen.getByTestId(`${mockProps.dataTestId}Description`);

    expect(description).toBeInTheDocument();
  });

  it('Should render a tag when provided', () => {
    renderProvider(
      <NavigationCard
        {...mockProps}
        tag={{ content: 'Informative tag', status: 'NORMAL' }}
        variant="PRIMARY_ICON_HIGHLIGHTED"
      />
    );
    const tag = screen.getByTestId(`${mockProps.dataTestId}Tag`);

    expect(tag).toBeInTheDocument();
  });

  it('Should render an ICON when provided', () => {
    renderProvider(
      <NavigationCard
        {...mockProps}
        decorative={{
          [DecorativeType.ICON]: { ...decorativeItems[DecorativeType.ICON], icon: 'CLOSE' },
        }}
        variant="PRIMARY_ICON_HIGHLIGHTED"
      />
    );
    const decorativeIcon = screen.getByLabelText('icon alt text');

    expect(decorativeIcon).toBeInTheDocument();
  });

  it('Should render an ILLUSTRATION when provided', () => {
    renderProvider(
      <NavigationCard
        {...mockProps}
        decorative={{
          [DecorativeType.ILLUSTRATION]: {
            ...decorativeItems[DecorativeType.ILLUSTRATION],
            illustration: 'ILLUSTRATION',
            altText: 'illustrationAltText',
          },
        }}
        variant="PRIMARY_ICON_HIGHLIGHTED"
      />
    );
    const illustration = screen.getByAltText('illustrationAltText');

    expect(illustration).toBeInTheDocument();
  });

  it('Should render an ICON_HIGLIGHTED when provided', () => {
    renderProvider(
      <NavigationCard
        {...mockProps}
        decorative={{
          [DecorativeType.ICON_HIGHLIGHTED]: {
            ...decorativeItems[DecorativeType.ICON_HIGHLIGHTED],
            icon: 'CLOSE',
          } as IIconHighlighted,
        }}
        tag={{ content: 'Informative tag', status: 'NORMAL' }}
        variant="PRIMARY_ICON_HIGHLIGHTED"
      />
    );

    const iconHighlighted = screen.getByTestId(`${mockProps.dataTestId}IconHighlighted`);

    expect(iconHighlighted).toBeInTheDocument();
  });

  it('Should render an ICON_HIGLIGHTED when provided, if it has not size, the provided by the theme should be used', () => {
    const decorativeElement = { ...decorativeItems[DecorativeType.ICON_HIGHLIGHTED] };
    if (decorativeElement) {
      decorativeElement.size = undefined;
      decorativeElement.icon = 'CLOSE';
    }
    renderProvider(
      <NavigationCard
        {...mockProps}
        decorative={{
          // Types should be improved (allowing size as optional)
          [DecorativeType.ICON_HIGHLIGHTED]: decorativeElement as IIconHighlighted,
        }}
        tag={{ content: 'Informative tag', status: 'NORMAL' }}
        variant="PRIMARY_ICON_HIGHLIGHTED"
      />
    );

    const iconHighlighted = screen.getByTestId(`${mockProps.dataTestId}IconHighlighted`);

    expect(iconHighlighted).toBeInTheDocument();
  });
});
