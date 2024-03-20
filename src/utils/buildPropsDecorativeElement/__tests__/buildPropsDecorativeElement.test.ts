import { ICONS, ILLUSTRATIONS } from '@/assets';
import { DecorativeType, IElementOrIcon, IconHighlightedSizeType } from '@/components';

import { buildPropsDecorativeElement } from '../buildPropsDecorativeElement';

const decorativeIcon: IElementOrIcon = {
  icon: ICONS.ICON_PLACEHOLDER,
  altText: 'icon alt text',
};

const decorativeIllustration = {
  illustration: ILLUSTRATIONS.ILLUSTRATION,
  altText: 'illustration alt text',
};

const decorativeAvatar = {
  initials: { content: 'HA' },
  size: 'SMALL',
};

const decorativeIconH = {
  icon: ICONS.ICON_PLACEHOLDER,
  variant: 'SQUARE',
  size: IconHighlightedSizeType.MEDIUM,
  backgroundColor: '#e68c8c',
};

const decorative = {
  [DecorativeType.ICON]: decorativeIcon,
  [DecorativeType.ILLUSTRATION]: decorativeIllustration,
  [DecorativeType.AVATAR]: decorativeAvatar,
  [DecorativeType.ICON_HIGHLIGHTED]: decorativeIconH,
};

const decorativeStyles = {
  icon: {
    width: '24px',
    height: '24px',
    color: 'red',
  },
  illustration: {
    width: '24px',
    height: '24px',
  },
  avatar: {
    size: 'LARGE',
  },
  iconHighlighted: { size: IconHighlightedSizeType.SMALL, backgroundColor: 'red' },
};

describe('buildPropsDecorativeElement', () => {
  it('should return correct result when element and styles are provided', () => {
    const element = { [DecorativeType.ICON_HIGHLIGHTED]: decorativeIconH };
    const styles = decorativeStyles;
    const expected = {
      ['ICON_HIGHLIGHTED']: {
        ...decorative?.[DecorativeType.ICON_HIGHLIGHTED],
        ...decorativeStyles.iconHighlighted,
      },
    };

    const result = buildPropsDecorativeElement(element, styles);

    expect(result).toEqual(expected);
  });

  it('should handle null or undefined inputs', () => {
    const element = undefined;
    const styles = undefined;
    const expected = {}; // replace with expected result when inputs are null or undefined

    const result = buildPropsDecorativeElement(element, styles);

    expect(result).toEqual(expected);
  });
});
