export const LINK_AS_BUTTON = {
  $advancedSelectors: [
    {
      child: {
        $target: '*:first-child ',
        display: 'inline-block',
      },
    },
  ],
  $attributes: {
    'data-kbt-full-width': {
      $advancedSelectors: [
        {
          child: {
            $target: '*:first-child ',
            display: 'block',
          },
        },
      ],
      width: '100%',
    },
  },
  width: 'fit-content',
};
