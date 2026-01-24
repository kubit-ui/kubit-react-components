import { describe, expect, it } from 'vitest';

import { render } from '@/lib/tests/render/render';

import { PictureSourceStandAlone } from '../pictureSourceStandAlone';

describe('PictureSourceStandAlone', () => {
  it('no renderiza nada si mediaSource es undefined', () => {
    const { container } = render(
      <PictureSourceStandAlone mediaSource={undefined} />,
    );
    expect(container.firstChild).toBeNull();
  });

  it('renderiza un <source> con los props correctos', () => {
    const mediaSource = {
      height: '100',
      media: '(min-width: 600px)',
      src: 'image.jpg',
      width: '200',
    };
    const { container } = render(
      <PictureSourceStandAlone
        data-testid="mysource"
        mediaSource={mediaSource}
      />,
    );
    const source = container.querySelector('source');
    expect(source).toBeTruthy();
    expect(source).toHaveAttribute('height', '100');
    expect(source).toHaveAttribute('width', '200');
    expect(source).toHaveAttribute('media', '(min-width: 600px)');
    expect(source).toHaveAttribute('srcset', 'image.jpg');
  });
});
