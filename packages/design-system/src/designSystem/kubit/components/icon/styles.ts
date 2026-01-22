import type { IconStyleProps } from '@/components/icon/types/iconThemes';

export const ICON: IconStyleProps = {
  $dynamicValues: [
    '$color',
    '$moveAround',
    '$transitionDuration',
    '$height',
    '$width',
  ],
  _button: {
    $pseudoClasses: {
      disabled: {
        cursor: 'default',
      },
      focus: {
        border_radius: '0.25rem',
      },
    },
    align_items: 'center',
    cursor: 'pointer',
    display: 'inline-flex',
    justify_content: 'center',
    min_height: '1.5rem',
    min_width: '1.5rem',
  },
  _complex: {
    $advancedSelectors: [
      {
        child: {
          $target: 'svg',
          color: '$color',
          transform: 'rotate(var(--movearound))',
          transition_duration: '$transitionDuration',
          transition_property: 'transform',
        },
      },
    ],
    display: 'inline-block',
  },
  _svg: {
    $attributes: {
      'data-twist-animation-transform-value': {
        backface_visibility: 'hidden',
        left: '0',
        position: 'absolute',
        top: '0',
      },
    },
    background_color: 'currentcolor',
    background_position: 'center',
    background_repeat: 'no-repeat',
    background_size: 'contain',
    display: 'inline-block',
    justify_content: 'center',
    mask_position: 'center',
    mask_repeat: 'no-repeat',
    mask_size: 'contain',
    transition_property: 'transform',
  },
};
