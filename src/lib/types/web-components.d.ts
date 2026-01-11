declare namespace JSX {
  interface IntrinsicElements {
    'screen-reader-only': unknown;
    'kbt-image': {
      alt?: string;
      'data-testid'?: string;
      loading?: 'lazy' | 'eager';
      src?: string;
      width?: string;
      height?: string;
      caption?: string;
      'border-radius'?: string;
      'object-fit'?: string;
      ratio?: string;
    };
    'kbt-picture-source': {
      media?: string;
      src?: string;
      width?: string;
      height?: string;
    };
    'custom-element': {
      as?: string;
      replace?: boolean | string;
      type?: string;
      'data-testid'?: string;
      [key: string]: unknown;
    };
  }
}
